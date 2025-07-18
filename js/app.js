// Warhammer 40K Statistics Academy - Main Application Logic
class StatisticsApp {
    constructor() {
        this.currentScreen = 'welcome-screen';
        this.selectedFaction = null;
        this.currentChapter = 1;
        this.currentLesson = null;
        this.currentLessonStep = 0;
        this.currentRank = 'Recruit';
        this.completedChapters = new Set();
        this.chapterScores = {}; // Track quiz performance
        this.currentQuiz = null;
        
        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.updateUI();
        this.generateChapters();
    }

    setupEventListeners() {
        // Faction selection
        document.querySelectorAll('.faction-card').forEach(card => {
            card.addEventListener('click', (e) => this.selectFaction(e));
        });

        // Start journey button
        document.getElementById('start-journey').addEventListener('click', () => {
            this.showScreen('chapter-selection');
        });

        // Navigation buttons
        document.getElementById('back-to-chapters').addEventListener('click', () => {
            this.showScreen('chapter-selection');
        });

        document.getElementById('prev-step').addEventListener('click', () => {
            this.previousLessonStep();
        });

        document.getElementById('next-step').addEventListener('click', () => {
            this.nextLessonStep();
        });

        // Progress management
        document.getElementById('save-progress').addEventListener('click', () => {
            this.saveProgress();
            this.showNotification('Progress saved to the Machine God\'s archives!', 'success');
        });

        document.getElementById('reset-progress').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress? This action cannot be undone!')) {
                this.resetProgress();
                this.showNotification('Progress reset. The Emperor protects!', 'warning');
            }
        });
    }

    selectFaction(e) {
        // Remove previous selection
        document.querySelectorAll('.faction-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to clicked card
        e.currentTarget.classList.add('selected');
        this.selectedFaction = e.currentTarget.dataset.faction;
        
        // Enable start button
        document.getElementById('start-journey').disabled = false;
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }

    generateChapters() {
        const chaptersGrid = document.getElementById('chapters-grid');
        chaptersGrid.innerHTML = '';

        const chapters = [
            {
                id: 1,
                title: "Data Collection & the Imperial Census",
                description: "Learn how the Imperium gathers data across a million worlds. Master the basics of data types, sampling, and survey methods.",
                difficulty: "Novice Acolyte",
                estimatedTime: "30 min",
                topics: ["Data Types", "Sampling Methods", "Survey Design"]
            },
            {
                id: 2,
                title: "Descriptive Statistics: Cataloging the Emperor's Armies",
                description: "Organize and summarize vast Imperial datasets. Master measures of central tendency and variability.",
                difficulty: "Initiate",
                estimatedTime: "45 min",
                topics: ["Mean, Median, Mode", "Standard Deviation", "Quartiles"]
            },
            {
                id: 3,
                title: "Probability: The Emperor's Will in Numbers",
                description: "Understand the mathematics of fate and chance in the grim darkness of the 41st millennium.",
                difficulty: "Initiate",
                estimatedTime: "50 min",
                topics: ["Basic Probability", "Conditional Probability", "Independence"]
            },
            {
                id: 4,
                title: "Distributions: Patterns in the Warp",
                description: "Discover the hidden patterns that govern reality. Master normal, binomial, and other key distributions.",
                difficulty: "Adept",
                estimatedTime: "60 min",
                topics: ["Normal Distribution", "Binomial Distribution", "Z-scores"]
            },
            {
                id: 5,
                title: "Confidence Intervals: Trusting Your Battle Reports",
                description: "Learn to quantify uncertainty in your statistical estimates, like a true Imperial analyst.",
                difficulty: "Adept",
                estimatedTime: "55 min",
                topics: ["Confidence Intervals", "Margin of Error", "Sample Size"]
            },
            {
                id: 6,
                title: "Hypothesis Testing: Challenging Heretical Claims",
                description: "Use the scientific method to separate truth from heresy in your statistical investigations.",
                difficulty: "Veteran",
                estimatedTime: "70 min",
                topics: ["Null Hypothesis", "P-values", "Type I & II Errors"]
            },
            {
                id: 7,
                title: "Linear Regression: Predicting Imperial Success",
                description: "Model relationships between variables to predict outcomes in the Emperor's campaigns.",
                difficulty: "Veteran",
                estimatedTime: "65 min",
                topics: ["Correlation", "Regression Lines", "R-squared"]
            },
            {
                id: 8,
                title: "Chi-Square Tests: Testing Independence Across Sectors",
                description: "Determine if variables are truly independent or if darker forces are at work.",
                difficulty: "Expert",
                estimatedTime: "60 min",
                topics: ["Goodness of Fit", "Independence Tests", "Expected vs Observed"]
            },
            {
                id: 9,
                title: "ANOVA: Comparing Multiple Battle Groups",
                description: "Compare means across multiple groups, like different Space Marine chapters in battle.",
                difficulty: "Expert",
                estimatedTime: "75 min",
                topics: ["One-way ANOVA", "F-statistics", "Post-hoc Tests"]
            },
            {
                id: 10,
                title: "Advanced Topics: Mastering the Omnissiah's Calculations",
                description: "Become a true statistical savant with advanced techniques fit for the Adeptus Mechanicus.",
                difficulty: "Master",
                estimatedTime: "90 min",
                topics: ["Non-parametric Tests", "Multiple Regression", "Time Series"]
            }
        ];

        chapters.forEach(chapter => {
            const isUnlocked = chapter.id <= this.currentChapter;
            const isCompleted = this.completedChapters.has(chapter.id);
            
            const chapterCard = document.createElement('div');
            chapterCard.className = `chapter-card ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;
            
            if (isUnlocked) {
                chapterCard.addEventListener('click', () => this.startChapter(chapter));
            }

            chapterCard.innerHTML = `
                <div class="chapter-header">
                    <div class="chapter-number">${chapter.id}</div>
                    <div class="chapter-status ${isCompleted ? 'completed' : isUnlocked ? 'available' : 'locked'}">
                        ${isCompleted ? '<i class="fas fa-check-circle"></i>' : 
                          isUnlocked ? '<i class="fas fa-play-circle"></i>' : 
                          '<i class="fas fa-lock"></i>'}
                    </div>
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
            `;

            chaptersGrid.appendChild(chapterCard);
        });

        // Update total chapters in header
        document.getElementById('total-chapters').textContent = chapters.length;
    }

    startChapter(chapter) {
        this.currentLesson = chapter;
        this.currentLessonStep = 0;
        
        // Load lesson content
        if (window.LessonManager) {
            window.LessonManager.loadLesson(chapter.id);
            this.showScreen('lesson-screen');
        } else {
            this.showNotification('Lesson system not loaded. Contact the Tech-Priests!', 'warning');
        }
    }

    nextLessonStep() {
        if (window.LessonManager) {
            const success = window.LessonManager.nextStep();
            if (success) {
                this.currentLessonStep++;
                this.updateLessonProgress();
            }
        }
    }

    previousLessonStep() {
        if (window.LessonManager) {
            const success = window.LessonManager.previousStep();
            if (success) {
                this.currentLessonStep--;
                this.updateLessonProgress();
            }
        }
    }

    updateLessonProgress() {
        if (!this.currentLesson) return;

        const totalSteps = window.LessonManager ? window.LessonManager.getTotalSteps() : 5;
        const progressPercent = (this.currentLessonStep / totalSteps) * 100;
        
        document.getElementById('lesson-progress-fill').style.width = `${progressPercent}%`;
        document.getElementById('lesson-progress-text').textContent = `${this.currentLessonStep}/${totalSteps}`;
        
        // Update navigation buttons
        document.getElementById('prev-step').disabled = this.currentLessonStep === 0;
        document.getElementById('next-step').disabled = this.currentLessonStep >= totalSteps;
    }

    getRankFromProgress() {
        const completedCount = this.completedChapters.size;
        const averageScore = this.getAverageQuizScore();
        
        // No chapters completed
        if (completedCount === 0) return 'Recruit';
        
        // Check rank requirements (ordered from highest to lowest)
        if (completedCount >= 8 && averageScore >= 90) return 'Chapter Master';
        if (completedCount >= 6 && averageScore >= 85) return 'Captain';
        if (completedCount >= 4 && averageScore >= 80) return 'Lieutenant';
        if (completedCount >= 2 && averageScore >= 75) return 'Sergeant';
        if (completedCount >= 1 && averageScore >= 70) return 'Initiate';
        
        // If completed chapters but score is too low, remain Recruit
        return 'Recruit';
    }

    getAverageQuizScore() {
        const scores = Object.values(this.chapterScores);
        if (scores.length === 0) return 0;
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    }

    updateRank() {
        const newRank = this.getRankFromProgress();
        const oldRank = this.currentRank;
        
        if (newRank !== oldRank) {
            this.currentRank = newRank;
            this.updateRankDisplay();
            this.showRankPromotion(oldRank, newRank);
        }
    }

    updateRankDisplay() {
        document.getElementById('current-rank').textContent = this.currentRank;
    }

    showRankPromotion(oldRank, newRank) {
        this.showNotification(`🏆 PROMOTION! ${oldRank} → ${newRank}`, 'success');
        
        // Show detailed promotion modal
        const container = document.getElementById('notification-container');
        const promotionModal = document.createElement('div');
        promotionModal.className = 'promotion-modal';
        promotionModal.innerHTML = `
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
        
        container.appendChild(promotionModal);
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (promotionModal.parentNode) {
                promotionModal.parentNode.removeChild(promotionModal);
            }
        }, 8000);
    }

    updateUI() {
        this.updateRankDisplay();
        document.getElementById('current-chapter').textContent = this.currentChapter;
        
        // Update faction-specific styling if selected
        if (this.selectedFaction) {
            document.body.classList.add(`faction-${this.selectedFaction}`);
        }
    }

    completeChapter(chapterId, quizScore) {
        this.completedChapters.add(chapterId);
        this.chapterScores[chapterId] = quizScore;
        this.currentChapter = Math.max(this.currentChapter, chapterId + 1);
        this.updateRank();
        this.generateChapters();
        this.showScreen('chapter-selection');
    }

    showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        container.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 3000);
    }

    saveProgress() {
        const progress = {
            selectedFaction: this.selectedFaction,
            currentChapter: this.currentChapter,
            currentRank: this.currentRank,
            completedChapters: Array.from(this.completedChapters),
            chapterScores: this.chapterScores,
            lastSaved: new Date().toISOString()
        };
        
        localStorage.setItem('warhammer-stats-progress', JSON.stringify(progress));
    }

    loadProgress() {
        const saved = localStorage.getItem('warhammer-stats-progress');
        if (saved) {
            try {
                const progress = JSON.parse(saved);
                this.selectedFaction = progress.selectedFaction;
                this.currentChapter = progress.currentChapter || 1;
                this.chapterScores = progress.chapterScores || {};
                this.completedChapters = new Set(progress.completedChapters || []);
                
                // Always recalculate rank based on current progress
                this.currentRank = this.getRankFromProgress();
                
                // If returning user, skip to chapter selection
                if (this.selectedFaction) {
                    this.showScreen('chapter-selection');
                    
                    // Mark selected faction
                    const factionCard = document.querySelector(`[data-faction="${this.selectedFaction}"]`);
                    if (factionCard) {
                        factionCard.classList.add('selected');
                        document.getElementById('start-journey').disabled = false;
                    }
                }
            } catch (e) {
                console.error('Failed to load progress:', e);
            }
        }
    }

    resetProgress() {
        this.selectedFaction = null;
        this.currentChapter = 1;
        this.currentRank = 'Recruit';
        this.chapterScores = {};
        this.completedChapters.clear();
        this.currentLesson = null;
        this.currentLessonStep = 0;
        
        localStorage.removeItem('warhammer-stats-progress');
        
        // Reset UI
        document.querySelectorAll('.faction-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.getElementById('start-journey').disabled = true;
        
        this.updateUI();
        this.generateChapters();
        this.showScreen('welcome-screen');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.StatisticsApp = new StatisticsApp();
});
