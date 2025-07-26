// Chapter Component
// Handles chapter display and interaction

class ChapterComponent {
    constructor(dataManager, progressManager, eventManager) {
        this.dataManager = dataManager;
        this.progressManager = progressManager;
        this.eventManager = eventManager;
        this.container = null;
    }

    /**
     * Initialize the component
     */
    init() {
        this.container = document.getElementById('chapters-grid');
        if (!this.container) {
            console.error('Chapters grid container not found');
            return false;
        }

        this.setupEventListeners();
        return true;
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Listen for progress updates
        this.eventManager.on(EVENTS.PROGRESS_UPDATED, () => {
            this.render();
        });

        // Listen for chapter completion
        this.eventManager.on(EVENTS.CHAPTER_COMPLETED, (chapterId) => {
            this.updateChapterStatus(chapterId, 'completed');
        });
    }

    /**
     * Render all chapters
     */
    render() {
        if (!this.container) return;

        this.container.innerHTML = '';
        const chapters = this.dataManager.getAllChapters();
        
        chapters.forEach(chapter => {
            const chapterElement = this.createChapterCard(chapter);
            this.container.appendChild(chapterElement);
        });

        // Update total chapters display
        this.updateTotalChapters(chapters.length);
    }

    /**
     * Create a chapter card element
     */
    createChapterCard(chapter) {
        const isNormallyUnlocked = this.progressManager.isChapterUnlocked(chapter.id);
        const isAdminUnlocked = window.adminManager?.isChapterAdminUnlocked(chapter.id) || false;
        const isUnlocked = isNormallyUnlocked || isAdminUnlocked;
        const isCompleted = this.progressManager.completedChapters.has(chapter.id);
        const score = this.progressManager.chapterScores[chapter.id];

        const chapterCard = document.createElement('div');
        chapterCard.className = `chapter-card ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''} ${isAdminUnlocked && !isNormallyUnlocked ? 'admin-unlocked' : ''}`;
        chapterCard.dataset.chapterId = chapter.id;

        if (isUnlocked) {
            chapterCard.addEventListener('click', () => this.onChapterClick(chapter, isAdminUnlocked && !isNormallyUnlocked));
            chapterCard.setAttribute('role', 'button');
            chapterCard.setAttribute('tabindex', '0');
            chapterCard.setAttribute('aria-label', `Start ${chapter.title}${isAdminUnlocked && !isNormallyUnlocked ? ' (Admin Access)' : ''}`);
        }

        chapterCard.innerHTML = this.getChapterCardHTML(chapter, isUnlocked, isCompleted, score, isAdminUnlocked && !isNormallyUnlocked);
        
        return chapterCard;
    }

    /**
     * Get HTML for chapter card
     */
    getChapterCardHTML(chapter, isUnlocked, isCompleted, score, isAdminAccess = false) {
        const statusIcon = this.getStatusIcon(isUnlocked, isCompleted, isAdminAccess);
        const scoreDisplay = score ? `<div class="chapter-score">${score}%</div>` : '';
        const adminBadge = isAdminAccess ? '<div class="admin-badge">🔑 ADMIN</div>' : '';
        
        return `
            <div class="chapter-header">
                <div class="chapter-number">${chapter.id}</div>
                <div class="chapter-status ${isCompleted ? 'completed' : isUnlocked ? 'available' : 'locked'}">
                    ${statusIcon}
                </div>
                ${scoreDisplay}
                ${adminBadge}
            </div>
            <h3 class="chapter-title">${chapter.title}</h3>
            <p class="chapter-description">${chapter.description}</p>
            <div class="chapter-stats">
                <span><i class="fas fa-clock"></i> ${chapter.estimatedTime}</span>
                <span><i class="fas fa-star"></i> ${chapter.difficulty}</span>
            </div>
            <div class="chapter-topics">
                ${chapter.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
            ${this.getChapterActions(chapter, isUnlocked, isCompleted, isAdminAccess)}
        `;
    }

    /**
     * Get status icon for chapter
     */
    getStatusIcon(isUnlocked, isCompleted, isAdminAccess = false) {
        if (isCompleted) {
            return '<i class="fas fa-check-circle" title="Completed"></i>';
        } else if (isUnlocked) {
            const title = isAdminAccess ? "Available (Admin Access)" : "Available";
            const icon = isAdminAccess ? "fas fa-key" : "fas fa-play-circle";
            return `<i class="${icon}" title="${title}"></i>`;
        } else {
            return '<i class="fas fa-lock" title="Locked"></i>';
        }
    }

    /**
     * Get action buttons for chapter
     */
    getChapterActions(chapter, isUnlocked, isCompleted, isAdminAccess = false) {
        if (!isUnlocked) {
            const adminHint = window.adminManager?.isAdminMode ? 
                '<div class="admin-hint">💡 Press Ctrl+Shift+A for admin access</div>' : '';
            return `<div class="chapter-actions">
                <span class="unlock-requirement">Complete previous chapters to unlock</span>
                ${adminHint}
            </div>`;
        }

        const startText = isCompleted ? 'Review Chapter' : 'Start Chapter';
        const adminBadge = isAdminAccess ? ' <span class="admin-action-badge">🔑</span>' : '';
        const retakeButton = isCompleted ? 
            `<button class="action-button secondary" onclick="event.stopPropagation(); window.chapterComponent.retakeQuiz(${chapter.id})">
                <i class="fas fa-redo"></i> Retake Quiz${adminBadge}
            </button>` : '';

        return `
            <div class="chapter-actions">
                <button class="action-button primary">
                    <i class="fas fa-play"></i> ${startText}${adminBadge}
                </button>
                ${retakeButton}
            </div>
        `;
    }

    /**
     * Handle chapter click
     */
    onChapterClick(chapter, isAdminAccess = false) {
        if (isAdminAccess) {
            // Emit admin chapter start event
            this.eventManager.emit('admin:jump-to-chapter', { chapterId: chapter.id });
        } else {
            // Normal chapter start
            this.eventManager.emit(EVENTS.CHAPTER_STARTED, chapter);
        }
    }

    /**
     * Update chapter status
     */
    updateChapterStatus(chapterId, status) {
        const chapterCard = this.container?.querySelector(`[data-chapter-id="${chapterId}"]`);
        if (chapterCard) {
            chapterCard.classList.add(status);
            
            // Update status icon
            const statusElement = chapterCard.querySelector('.chapter-status');
            if (statusElement && status === 'completed') {
                statusElement.innerHTML = '<i class="fas fa-check-circle"></i>';
                statusElement.className = 'chapter-status completed';
            }
        }
    }

    /**
     * Update total chapters display
     */
    updateTotalChapters(count) {
        const totalElement = document.getElementById('total-chapters');
        if (totalElement) {
            totalElement.textContent = count;
        }
    }

    /**
     * Show chapter details modal
     */
    showChapterDetails(chapterId) {
        const chapter = this.dataManager.getChapter(chapterId);
        if (!chapter) return;

        const modal = this.createChapterModal(chapter);
        document.body.appendChild(modal);
        
        this.eventManager.emit(EVENTS.MODAL_OPEN, 'chapter-details', chapter);
    }

    /**
     * Create chapter details modal
     */
    createChapterModal(chapter) {
        const modal = document.createElement('div');
        modal.className = 'modal chapter-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${chapter.title}</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${chapter.description}</p>
                    <div class="chapter-details">
                        <div class="detail-item">
                            <span class="text-key">Difficulty:</span> ${chapter.difficulty}
                        </div>
                        <div class="detail-item">
                            <span class="text-key">Estimated Time:</span> ${chapter.estimatedTime}
                        </div>
                        <div class="detail-item">
                            <span class="text-key">Prerequisites:</span> 
                            ${chapter.prerequisites?.length ? 
                                chapter.prerequisites.map(id => `Chapter ${id}`).join(', ') : 
                                'None'}
                        </div>
                    </div>
                    <div class="topics-list">
                        <h4>Topics Covered:</h4>
                        <ul>
                            ${chapter.topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="nav-button primary" onclick="window.chapterComponent.onChapterClick(${chapter.id}); this.closest('.modal').remove();">
                        Start Chapter
                    </button>
                </div>
            </div>
        `;

        return modal;
    }

    /**
     * Filter chapters by completion status
     */
    filterChapters(filter) {
        const cards = this.container?.querySelectorAll('.chapter-card');
        if (!cards) return;

        cards.forEach(card => {
            let show = true;
            
            switch (filter) {
                case 'available':
                    show = !card.classList.contains('locked') && !card.classList.contains('completed');
                    break;
                case 'completed':
                    show = card.classList.contains('completed');
                    break;
                case 'locked':
                    show = card.classList.contains('locked');
                    break;
                case 'all':
                default:
                    show = true;
            }
            
            card.style.display = show ? 'block' : 'none';
        });
    }

    /**
     * Get chapter progress summary
     */
    getProgressSummary() {
        const totalChapters = this.dataManager.getAllChapters().length;
        const completedChapters = this.progressManager.completedChapters.size;
        const availableChapters = this.progressManager.getUnlockedChapters().length;
        
        return {
            total: totalChapters,
            completed: completedChapters,
            available: availableChapters,
            locked: totalChapters - availableChapters,
            percentage: Math.round((completedChapters / totalChapters) * 100)
        };
    }

    /**
     * Public method to retake quiz (called from HTML)
     */
    retakeQuiz(chapterId) {
        this.eventManager.emit(EVENTS.QUIZ_RETAKEN, chapterId);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ChapterComponent };
}
