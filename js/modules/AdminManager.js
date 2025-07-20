// AdminManager.js - Admin Mode Management System
// Provides secure admin access for testing and content development

class AdminManager {
    constructor(dataManager, eventManager) {
        this.dataManager = dataManager;
        this.eventManager = eventManager;
        this.isAdminMode = false;
        this.adminSession = null;
        this.config = null;
        
        this.init();
    }

    init() {
        this.config = this.dataManager.getConfig().admin;
        this.loadAdminSession();
        this.setupKeyboardShortcuts();
        this.injectAdminUI();
        console.log('🔑 AdminManager initialized');
    }

    /**
     * Load existing admin session if valid
     */
    loadAdminSession() {
        try {
            const session = localStorage.getItem('admin-session');
            if (session) {
                const sessionData = JSON.parse(session);
                
                // Check if session is still valid
                if (sessionData.expires > Date.now()) {
                    this.adminSession = sessionData;
                    this.isAdminMode = true;
                    this.enableAdminFeatures();
                    console.log('🔑 Admin session restored');
                } else {
                    this.clearAdminSession();
                }
            }
        } catch (error) {
            console.error('❌ Failed to load admin session:', error);
            this.clearAdminSession();
        }
    }

    /**
     * Setup keyboard shortcuts for admin mode
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Ctrl+Shift+A to toggle admin login
            if (event.ctrlKey && event.shiftKey && event.key === 'A') {
                event.preventDefault();
                this.showAdminLogin();
            }
            
            // Ctrl+Shift+D for debug info (admin only)
            if (event.ctrlKey && event.shiftKey && event.key === 'D' && this.isAdminMode) {
                event.preventDefault();
                this.showDebugInfo();
            }
        });
    }

    /**
     * Show admin login modal
     */
    showAdminLogin() {
        if (this.isAdminMode) {
            this.showAdminPanel();
            return;
        }

        const modal = document.createElement('div');
        modal.className = 'admin-modal-overlay';
        modal.innerHTML = `
            <div class="admin-modal">
                <div class="admin-modal-header">
                    <h3>🔑 Admin Access</h3>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="close-btn">&times;</button>
                </div>
                <div class="admin-modal-body">
                    <p>Enter admin password to enable testing mode:</p>
                    <input type="password" id="admin-password" placeholder="Password" class="admin-input">
                    <div class="admin-modal-actions">
                        <button onclick="window.adminManager.login()" class="admin-btn primary">Login</button>
                        <button onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" class="admin-btn">Cancel</button>
                    </div>
                    <div id="admin-error" class="admin-error" style="display: none;"></div>
                </div>
                <div class="admin-modal-footer">
                    <small>Keyboard shortcut: Ctrl+Shift+A</small>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Focus password input
        setTimeout(() => {
            document.getElementById('admin-password')?.focus();
        }, 100);

        // Enter key to login
        document.getElementById('admin-password')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.login();
            }
        });
    }

    /**
     * Attempt admin login
     */
    async login() {
        const passwordInput = document.getElementById('admin-password');
        const errorDiv = document.getElementById('admin-error');
        
        if (!passwordInput) return;

        const password = passwordInput.value;
        const hashedPassword = await this.hashPassword(password);

        if (hashedPassword === this.config.passwordHash) {
            // Successful login
            this.isAdminMode = true;
            this.createAdminSession();
            this.enableAdminFeatures();
            
            // Close modal
            document.querySelector('.admin-modal-overlay')?.remove();
            
            // Show success notification
            this.eventManager.emit('admin:login', { success: true });
            this.showNotification('🔑 Admin mode enabled!', 'success');
            
            console.log('🔑 Admin mode activated');
        } else {
            // Failed login
            if (errorDiv) {
                errorDiv.textContent = 'Invalid password';
                errorDiv.style.display = 'block';
            }
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    /**
     * Create admin session
     */
    createAdminSession() {
        const sessionData = {
            timestamp: Date.now(),
            expires: Date.now() + this.config.sessionTimeout,
            features: this.config.features
        };

        this.adminSession = sessionData;
        localStorage.setItem('admin-session', JSON.stringify(sessionData));
    }

    /**
     * Clear admin session and logout
     */
    logout() {
        this.isAdminMode = false;
        this.adminSession = null;
        this.clearAdminSession();
        this.disableAdminFeatures();
        this.eventManager.emit('admin:logout');
        this.showNotification('🔑 Admin mode disabled', 'info');
        console.log('🔑 Admin mode deactivated');
    }

    clearAdminSession() {
        localStorage.removeItem('admin-session');
    }

    /**
     * Enable admin features
     */
    enableAdminFeatures() {
        // Add admin indicator to UI
        this.showAdminIndicator();
        
        // Enable chapter unlocking override
        this.eventManager.emit('admin:features-enabled', this.config.features);
        
        // Add admin controls to relevant components
        this.addAdminControls();
    }

    /**
     * Disable admin features
     */
    disableAdminFeatures() {
        // Remove admin indicator
        this.hideAdminIndicator();
        
        // Disable admin features
        this.eventManager.emit('admin:features-disabled');
        
        // Remove admin controls
        this.removeAdminControls();
    }

    /**
     * Show admin indicator in UI
     */
    showAdminIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'admin-indicator';
        indicator.innerHTML = `
            <div class="admin-indicator">
                🔑 ADMIN MODE
                <button onclick="window.adminManager.showAdminPanel()" class="admin-panel-btn">Panel</button>
                <button onclick="window.adminManager.logout()" class="admin-logout-btn">Logout</button>
            </div>
        `;
        document.body.appendChild(indicator);
    }

    hideAdminIndicator() {
        document.getElementById('admin-indicator')?.remove();
    }

    /**
     * Show admin panel with testing tools
     */
    showAdminPanel() {
        const modal = document.createElement('div');
        modal.className = 'admin-modal-overlay';
        modal.innerHTML = `
            <div class="admin-panel">
                <div class="admin-modal-header">
                    <h3>🛠️ Admin Panel</h3>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="close-btn">&times;</button>
                </div>
                <div class="admin-panel-body">
                    <div class="admin-section">
                        <h4>Chapter Access</h4>
                        <button onclick="window.adminManager.unlockAllChapters()" class="admin-btn">Unlock All Chapters</button>
                        <button onclick="window.adminManager.resetProgress()" class="admin-btn danger">Reset All Progress</button>
                    </div>
                    
                    <div class="admin-section">
                        <h4>Quick Navigation</h4>
                        <div class="chapter-quick-nav">
                            ${this.generateChapterQuickNav()}
                        </div>
                        <div style="margin-top: 15px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 4px; font-size: 0.9em;">
                            <strong>💡 Tip:</strong> Click "Show Steps" to access individual lesson steps within each chapter.
                        </div>
                    </div>
                    
                    <div class="admin-section">
                        <h4>Debug Tools</h4>
                        <button onclick="window.adminManager.showDebugInfo()" class="admin-btn">Show Debug Info</button>
                        <button onclick="window.adminManager.downloadProgress()" class="admin-btn">Download Progress</button>
                        <button onclick="window.adminManager.clearCache()" class="admin-btn">Clear Cache</button>
                    </div>
                    
                    <div class="admin-section">
                        <h4>Session Info</h4>
                        <p><strong>Session expires:</strong> ${new Date(this.adminSession.expires).toLocaleString()}</p>
                        <p><strong>Time remaining:</strong> ${this.getTimeRemaining()}</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    /**
     * Generate quick navigation for chapters
     */
    generateChapterQuickNav() {
        const chapters = this.dataManager.getAllChapters();
        return chapters.map(chapter => {
            const lesson = this.dataManager.getLesson(chapter.id);
            const hasSteps = lesson && lesson.steps && lesson.steps.length > 0;
            
            return `
                <div class="chapter-nav-section">
                    <button onclick="window.adminManager.jumpToChapter(${chapter.id})" class="admin-btn">
                        Chapter ${chapter.id}: ${chapter.title}
                    </button>
                    ${hasSteps ? `
                        <button onclick="window.adminManager.toggleStepsFor(${chapter.id})" class="admin-btn small secondary step-toggle" data-chapter="${chapter.id}">
                            Show Steps
                        </button>
                        <div class="lesson-steps-nav" id="steps-${chapter.id}" style="display: none; margin-left: 20px; margin-top: 10px;">
                            ${this.generateLessonStepsNav(chapter.id, lesson)}
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    /**
     * Generate navigation for individual lesson steps
     */
    generateLessonStepsNav(chapterId, lesson) {
        if (!lesson || !lesson.steps) return '';
        
        return lesson.steps.map((step, index) => 
            `<button onclick="window.adminManager.jumpToLessonStep(${chapterId}, ${index})" class="admin-btn small step-btn">
                Step ${index + 1}: ${step.title}
             </button>`
        ).join('');
    }

    /**
     * Toggle visibility of lesson steps for a chapter
     */
    toggleStepsFor(chapterId) {
        const stepsDiv = document.getElementById(`steps-${chapterId}`);
        const toggleBtn = document.querySelector(`.step-toggle[data-chapter="${chapterId}"]`);
        
        if (stepsDiv && toggleBtn) {
            const isVisible = stepsDiv.style.display !== 'none';
            stepsDiv.style.display = isVisible ? 'none' : 'block';
            toggleBtn.textContent = isVisible ? 'Show Steps' : 'Hide Steps';
        }
    }

    /**
     * Admin action: Unlock all chapters
     */
    unlockAllChapters() {
        this.eventManager.emit('admin:unlock-all-chapters');
        this.showNotification('✅ All chapters unlocked (admin mode)', 'success');
    }

    /**
     * Admin action: Jump to specific chapter
     */
    jumpToChapter(chapterId) {
        // Close admin panel
        document.querySelector('.admin-modal-overlay')?.remove();
        
        // Navigate to chapter
        this.eventManager.emit('admin:jump-to-chapter', { chapterId });
        this.showNotification(`🚀 Jumped to Chapter ${chapterId} (admin mode)`, 'info');
    }

    /**
     * Admin action: Jump to specific lesson step
     */
    jumpToLessonStep(chapterId, stepIndex) {
        // Close admin panel
        document.querySelector('.admin-modal-overlay')?.remove();
        
        // Navigate to specific lesson step
        this.eventManager.emit('admin:jump-to-lesson-step', { chapterId, stepIndex });
        this.showNotification(`🎯 Jumped to Chapter ${chapterId}, Step ${stepIndex + 1} (admin mode)`, 'info');
    }

    /**
     * Admin action: Reset progress
     */
    resetProgress() {
        if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
            this.eventManager.emit('admin:reset-progress');
            this.showNotification('🔄 Progress reset (admin mode)', 'warning');
        }
    }

    /**
     * Show debug information
     */
    showDebugInfo() {
        const debugInfo = {
            adminMode: this.isAdminMode,
            session: this.adminSession,
            features: this.config.features,
            timestamp: new Date().toISOString()
        };
        
        console.group('🐛 Debug Information');
        console.table(debugInfo);
        console.groupEnd();
        
        // Show in UI as well
        alert('Debug info logged to console (F12)');
    }

    /**
     * Download progress data
     */
    downloadProgress() {
        const progressData = localStorage.getItem('warhammer-stats-progress') || '{}';
        const blob = new Blob([progressData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `warhammer-stats-progress-${Date.now()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
        this.showNotification('📁 Progress data downloaded', 'success');
    }

    /**
     * Clear cache
     */
    clearCache() {
        if (confirm('Clear all cached data except admin session?')) {
            const adminSession = localStorage.getItem('admin-session');
            localStorage.clear();
            if (adminSession) {
                localStorage.setItem('admin-session', adminSession);
            }
            this.showNotification('🗑️ Cache cleared', 'success');
        }
    }

    /**
     * Add admin controls to components
     */
    addAdminControls() {
        // Add "ADMIN ACCESS" buttons to locked chapters
        setTimeout(() => {
            document.querySelectorAll('.chapter-card.locked').forEach(card => {
                if (!card.querySelector('.admin-unlock-btn')) {
                    const adminBtn = document.createElement('button');
                    adminBtn.className = 'admin-unlock-btn';
                    adminBtn.textContent = '🔑 ADMIN ACCESS';
                    adminBtn.onclick = (e) => {
                        e.stopPropagation();
                        const chapterId = parseInt(card.dataset.chapterId);
                        this.jumpToChapter(chapterId);
                    };
                    card.appendChild(adminBtn);
                }
            });
        }, 500);
    }

    removeAdminControls() {
        document.querySelectorAll('.admin-unlock-btn').forEach(btn => btn.remove());
    }

    /**
     * Check if admin feature is enabled
     */
    hasFeature(featureName) {
        return this.isAdminMode && this.config.features[featureName] === true;
    }

    /**
     * Check if chapter should be accessible in admin mode
     */
    isChapterAdminUnlocked(chapterId) {
        return this.hasFeature('unlockAllChapters');
    }

    /**
     * Utility: Hash password (simple SHA-256)
     */
    async hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    /**
     * Get time remaining in session
     */
    getTimeRemaining() {
        if (!this.adminSession) return 'No session';
        
        const remaining = this.adminSession.expires - Date.now();
        if (remaining <= 0) return 'Expired';
        
        const minutes = Math.floor(remaining / 60000);
        return `${minutes} minutes`;
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        this.eventManager.emit('notification:show', { message, type });
    }

    /**
     * Inject admin UI styles
     */
    injectAdminUI() {
        if (document.getElementById('admin-styles')) return;

        const style = document.createElement('style');
        style.id = 'admin-styles';
        style.textContent = `
            .admin-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            }
            
            .admin-modal, .admin-panel {
                background: #1a1a1a;
                border: 2px solid #ffd700;
                border-radius: 10px;
                padding: 0;
                min-width: 400px;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                color: #ffffff;
            }
            
            .admin-modal-header {
                background: #ffd700;
                color: #000;
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 8px 8px 0 0;
            }
            
            .admin-modal-body, .admin-panel-body {
                padding: 20px;
            }
            
            .admin-modal-footer {
                padding: 10px 20px;
                border-top: 1px solid #444;
                text-align: center;
                color: #888;
            }
            
            .admin-input {
                width: 100%;
                padding: 10px;
                margin: 10px 0;
                border: 1px solid #555;
                border-radius: 5px;
                background: #2a2a2a;
                color: #fff;
                font-size: 16px;
            }
            
            .admin-btn {
                background: #ffd700;
                color: #000;
                border: none;
                padding: 8px 16px;
                margin: 5px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.2s;
            }
            
            .admin-btn:hover {
                background: #ffed4e;
                transform: translateY(-1px);
            }
            
            .admin-btn.primary {
                background: #22c55e;
                color: white;
            }
            
            .admin-btn.danger {
                background: #ef4444;
                color: white;
            }
            
            .admin-btn.small {
                padding: 5px 10px;
                font-size: 12px;
                display: block;
                width: 100%;
                margin: 3px 0;
            }
            
            .admin-modal-actions {
                text-align: center;
                margin-top: 15px;
            }
            
            .admin-error {
                color: #ef4444;
                margin-top: 10px;
                text-align: center;
            }
            
            .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                color: #000;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            #admin-indicator {
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 9999;
            }
            
            .admin-indicator {
                background: #ffd700;
                color: #000;
                padding: 8px 12px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .admin-panel-btn, .admin-logout-btn {
                background: #000;
                color: #ffd700;
                border: 1px solid #ffd700;
                padding: 2px 8px;
                border-radius: 3px;
                cursor: pointer;
                font-size: 10px;
            }
            
            .admin-unlock-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                background: #ffd700;
                color: #000;
                border: none;
                padding: 5px 8px;
                border-radius: 3px;
                font-size: 11px;
                font-weight: bold;
                cursor: pointer;
                z-index: 100;
            }
            
            .admin-section {
                margin-bottom: 25px;
                padding-bottom: 15px;
                border-bottom: 1px solid #444;
            }
            
            .admin-section h4 {
                color: #ffd700;
                margin-bottom: 10px;
            }
            
            .chapter-quick-nav {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Will be initialized by main app
    });
}
