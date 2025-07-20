// Main Application - Refactored and Modular
// This is the new main application entry point

class StatisticsApp {
    constructor() {
        this.initialized = false;
        this.currentScreen = 'welcome-screen';
        
        // Core managers
        this.dataManager = null;
        this.progressManager = null;
        this.eventManager = null;
        
        // UI components
        this.chapterComponent = null;
        this.lessonComponent = null;
        this.quizComponent = null;
        
        // Initialize the application
        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            console.log('🚀 Initializing Warhammer 40K Statistics Academy...');
            
            // Initialize core managers
            await this.initializeManagers();
            
            // Initialize UI components
            this.initializeComponents();
            
            // Setup global event listeners
            this.setupEventListeners();
            
            // Load and restore user progress
            this.restoreUserState();
            
            // Mark as initialized
            this.initialized = true;
            
            console.log('✅ Application initialized successfully');
            this.eventManager.emit(EVENTS.APP_READY);
            
        } catch (error) {
            console.error('❌ Failed to initialize application:', error);
            this.eventManager?.emit(EVENTS.APP_ERROR, error);
            this.showErrorScreen(error);
        }
    }

    /**
     * Initialize core managers
     */
    async initializeManagers() {
        // Initialize event manager first
        this.eventManager = new EventManager();
        
        // Initialize data manager
        this.dataManager = new DataManager();
        const dataLoaded = await this.dataManager.init();
        
        if (!dataLoaded) {
            throw new Error('Failed to load application data');
        }
        
        // Initialize progress manager
        this.progressManager = new ProgressManager(this.dataManager);
        this.progressManager.init();
        
        // Initialize content manager
        this.contentManager = new ContentManager(this.dataManager);
        
        console.log('✅ Core managers initialized');
    }

    /**
     * Initialize UI components
     */
    initializeComponents() {
        // Initialize chapter component
        this.chapterComponent = new ChapterComponent(
            this.dataManager, 
            this.progressManager, 
            this.eventManager
        );
        this.chapterComponent.init();
        
        // Initialize lesson component
        this.lessonComponent = new LessonComponent(
            this.dataManager, 
            this.progressManager, 
            this.eventManager
        );
        this.lessonComponent.init();
        
        // Initialize quiz component
        this.quizComponent = new QuizComponent(
            this.dataManager,
            this.progressManager,
            this.eventManager
        );
        
        // Make components globally accessible for HTML onclick handlers
        window.chapterComponent = this.chapterComponent;
        window.lessonComponent = this.lessonComponent;
        window.quizComponent = this.quizComponent;
        
        // Debug: Verify components are accessible
        console.log('✅ Components made globally accessible:', {
            chapterComponent: !!window.chapterComponent,
            lessonComponent: !!window.lessonComponent,
            quizComponent: !!window.quizComponent
        });

        console.log('✅ UI components initialized');
    }

    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Faction selection
        document.querySelectorAll('.faction-card').forEach(card => {
            card.addEventListener('click', (e) => this.selectFaction(e));
        });

        // Start journey button
        const startButton = document.getElementById('start-journey');
        if (startButton) {
            startButton.addEventListener('click', () => {
                this.showScreen('chapter-selection');
            });
        }

        // Back to chapters button
        const backButton = document.getElementById('back-to-chapters');
        if (backButton) {
            backButton.addEventListener('click', () => {
                this.showScreen('chapter-selection');
            });
        }

        // Progress management buttons
        const saveButton = document.getElementById('save-progress');
        if (saveButton) {
            saveButton.addEventListener('click', () => {
                this.saveProgress();
            });
        }

        const resetButton = document.getElementById('reset-progress');
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                this.confirmResetProgress();
            });
        }

        // Application event listeners
        this.eventManager.on(EVENTS.CHAPTER_STARTED, (chapter) => {
            this.startChapter(chapter);
        });

        this.eventManager.on(EVENTS.LESSON_COMPLETED, (data) => {
            this.onLessonCompleted(data);
        });

        this.eventManager.on(EVENTS.QUIZ_STARTED, (chapterId) => {
            this.startQuiz(chapterId);
        });

        this.eventManager.on('quizCompleted', (data) => {
            console.log('Quiz completed:', data);
            // Quiz completion handling is done by the QuizComponent itself
        });

        this.eventManager.on('navigateToChapter', (data) => {
            // For now, take users back to chapter selection to see their progress
            // In the future, this could directly load the next chapter if available
            this.showScreen('chapter-selection');
        });

        this.eventManager.on('navigateToChapterSelect', () => {
            this.showScreen('chapter-selection');
        });

        this.eventManager.on(EVENTS.CHAPTER_COMPLETED, (data) => {
            this.onChapterCompleted(data);
        });

        this.eventManager.on(EVENTS.RANK_PROMOTED, (data) => {
            this.showRankPromotion(data.oldRank, data.newRank);
        });

        this.eventManager.on(EVENTS.NOTIFICATION_SHOW, (notification) => {
            this.showNotification(notification.message, notification.type);
        });

        console.log('✅ Event listeners configured');
    }

    /**
     * Restore user state from saved progress
     */
    restoreUserState() {
        // Update UI to reflect current progress
        this.updateUI();
        
        // If user has selected a faction, skip welcome screen
        if (this.progressManager.selectedFaction) {
            this.markSelectedFaction();
            this.enableStartButton();
            
            // Auto-navigate to chapter selection if appropriate
            if (this.currentScreen === 'welcome-screen') {
                this.showScreen('chapter-selection');
            }
        }
    }

    /**
     * Handle faction selection
     */
    selectFaction(event) {
        // Remove previous selection
        document.querySelectorAll('.faction-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to clicked card
        event.currentTarget.classList.add('selected');
        const factionId = event.currentTarget.dataset.faction;
        
        // Update progress manager
        this.progressManager.setFaction(factionId);
        
        // Enable start button
        this.enableStartButton();
        
        this.eventManager.emit(EVENTS.FACTION_SELECTED, factionId);
    }

    /**
     * Mark the selected faction in UI
     */
    markSelectedFaction() {
        const factionId = this.progressManager.selectedFaction;
        if (factionId) {
            const factionCard = document.querySelector(`[data-faction="${factionId}"]`);
            if (factionCard) {
                factionCard.classList.add('selected');
            }
        }
    }

    /**
     * Enable start journey button
     */
    enableStartButton() {
        const startButton = document.getElementById('start-journey');
        if (startButton) {
            startButton.disabled = false;
        }
    }

    /**
     * Show specific screen
     */
    showScreen(screenId) {
        // Emit before change event
        this.eventManager.emit(EVENTS.SCREEN_BEFORE_CHANGE, {
            from: this.currentScreen,
            to: screenId
        });

        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
            
            // Trigger screen-specific updates
            this.onScreenChange(screenId);
            
            this.eventManager.emit(EVENTS.SCREEN_CHANGE, {
                screen: screenId,
                previous: this.currentScreen
            });
        }
    }

    /**
     * Handle screen change
     */
    onScreenChange(screenId) {
        switch (screenId) {
            case 'chapter-selection':
                // Render chapters when entering chapter selection
                this.chapterComponent?.render();
                break;
            case 'lesson-screen':
                // Update lesson progress display
                this.updateLessonProgress();
                break;
            case 'quiz-screen':
                // Initialize quiz if needed
                break;
        }
    }

    /**
     * Start a chapter
     */
    startChapter(chapter) {
        this.showScreen('lesson-screen');
        // The lesson component will handle the actual lesson loading via events
    }

    /**
     * Start a quiz
     */
    startQuiz(chapterId) {
        this.showScreen('quiz-screen');
        
        // Use the new QuizComponent with a small delay to ensure DOM is ready
        if (this.quizComponent) {
            // Use setTimeout to ensure the screen transition completes
            setTimeout(() => {
                this.eventManager.emit('startQuiz', { chapterId });
            }, 50);
        } else {
            console.error('Quiz component not initialized');
        }
    }

    /**
     * Handle lesson completion
     */
    onLessonCompleted(data) {
        console.log(`Lesson ${data.lessonId} completed with ${data.stepsCompleted} steps`);
        this.showNotification("Lesson completed! Ready for battle assessment.", 'success');
    }

    /**
     * Handle chapter completion
     */
    onChapterCompleted(data) {
        const result = this.progressManager.completeChapter(data.chapterId, data.score);
        
        if (result.promoted) {
            this.eventManager.emit(EVENTS.RANK_PROMOTED, result);
        }
        
        // Update UI
        this.updateUI();
        this.chapterComponent?.render();
        
        // Navigate back to chapter selection
        this.showScreen('chapter-selection');
        
        console.log(`Chapter ${data.chapterId} completed with score ${data.score}%`);
    }

    /**
     * Update UI elements
     */
    updateUI() {
        // Update rank display
        this.updateRankDisplay();
        
        // Update chapter progress
        this.updateChapterProgress();
        
        // Apply faction-specific styling
        this.applyFactionStyling();
    }

    /**
     * Update rank display
     */
    updateRankDisplay() {
        const rankElement = document.getElementById('current-rank');
        if (rankElement) {
            rankElement.textContent = this.progressManager.currentRank;
        }
    }

    /**
     * Update chapter progress display
     */
    updateChapterProgress() {
        const currentChapterElement = document.getElementById('current-chapter');
        if (currentChapterElement) {
            currentChapterElement.textContent = this.progressManager.currentChapter;
        }
    }

    /**
     * Update lesson progress
     */
    updateLessonProgress() {
        if (this.lessonComponent) {
            this.lessonComponent.updateProgress();
        }
    }

    /**
     * Apply faction-specific styling
     */
    applyFactionStyling() {
        const faction = this.progressManager.selectedFaction;
        if (faction) {
            // Remove existing faction classes
            document.body.classList.remove('faction-space-marines', 'faction-imperial-guard', 'faction-adeptus-mechanicus');
            // Add current faction class
            document.body.classList.add(`faction-${faction}`);
        }
    }

    /**
     * Show rank promotion
     */
    showRankPromotion(oldRank, newRank) {
        this.showNotification(`🏆 PROMOTION! ${oldRank} → ${newRank}`, 'success');
        
        // Show detailed promotion modal
        const container = document.getElementById('notification-container');
        if (container) {
            const promotionModal = this.createPromotionModal(oldRank, newRank);
            container.appendChild(promotionModal);
            
            // Auto-remove after duration
            const config = this.dataManager.getConfig();
            const duration = config.ui?.promotionModalDuration || 8000;
            
            setTimeout(() => {
                if (promotionModal.parentNode) {
                    promotionModal.parentNode.removeChild(promotionModal);
                }
            }, duration);
        }
    }

    /**
     * Create promotion modal
     */
    createPromotionModal(oldRank, newRank) {
        const modal = document.createElement('div');
        modal.className = 'promotion-modal';
        modal.innerHTML = `
            <div class="promotion-content">
                <h3>🎖️ IMPERIAL PROMOTION 🎖️</h3>
                <div class="rank-transition">
                    <span class="old-rank">${oldRank}</span>
                    <i class="fas fa-arrow-right"></i>
                    <span class="new-rank">${newRank}</span>
                </div>
                <p>Your dedication to statistical mastery has been recognized by the Emperor himself!</p>
                <button onclick="this.parentElement.parentElement.remove()" class="close-promotion">
                    For the Emperor!
                </button>
            </div>
        `;
        
        return modal;
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        container.appendChild(notification);
        
        // Auto-remove after duration
        const config = this.dataManager.getConfig();
        const duration = config.ui?.notificationDuration || 3000;
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, duration);
    }

    /**
     * Save progress
     */
    saveProgress() {
        const success = this.progressManager.saveProgress();
        if (success) {
            this.showNotification('Progress saved to the Machine God\'s archives!', 'success');
        } else {
            this.showNotification('Failed to save progress. Contact the Tech-Priests!', 'error');
        }
    }

    /**
     * Confirm and reset progress
     */
    confirmResetProgress() {
        if (confirm('Are you sure you want to reset all progress? This action cannot be undone!')) {
            this.resetProgress();
        }
    }

    /**
     * Reset progress
     */
    resetProgress() {
        this.progressManager.resetProgress();
        
        // Reset UI
        document.querySelectorAll('.faction-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        const startButton = document.getElementById('start-journey');
        if (startButton) {
            startButton.disabled = true;
        }
        
        this.updateUI();
        this.chapterComponent?.render();
        this.showScreen('welcome-screen');
        
        this.showNotification('Progress reset. The Emperor protects!', 'warning');
        
        this.eventManager.emit(EVENTS.PROGRESS_RESET);
    }

    /**
     * Show error screen
     */
    showErrorScreen(error) {
        const container = document.querySelector('.app-container');
        if (container) {
            container.innerHTML = `
                <div class="error-screen">
                    <h2>🚨 Critical System Failure</h2>
                    <p>The Machine God has encountered an error. Contact the Tech-Priests for assistance.</p>
                    <div class="error-details">
                        <strong>Error:</strong> ${error.message}
                    </div>
                    <button onclick="location.reload()" class="nav-button primary">
                        Restart Application
                    </button>
                </div>
            `;
        }
    }

    /**
     * Get application statistics
     */
    getStats() {
        return {
            dataStats: this.dataManager?.getDataStats(),
            progressStats: this.progressManager?.getProgressStats(),
            initialized: this.initialized,
            currentScreen: this.currentScreen
        };
    }

    /**
     * Show chapter selection screen
     */
    showChapterSelect() {
        this.showScreen('chapter-selection');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new StatisticsApp();
    window.StatisticsApp = StatisticsApp;
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StatisticsApp };
}
