// Progress Manager Module
// Handles user progress, achievements, and persistence

class ProgressManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.selectedFaction = null;
        this.currentChapter = 1;
        this.currentRank = 'Recruit';
        this.completedChapters = new Set();
        this.chapterScores = {};
        this.achievements = [];
        this.statistics = {
            totalTimeSpent: 0,
            questionsAnswered: 0,
            perfectScores: 0,
            startDate: null
        };
        this.settings = {
            autoSave: true,
            showHints: true,
            soundEnabled: true
        };
    }

    /**
     * Initialize progress manager
     */
    init() {
        this.loadProgress();
        this.setupAutoSave();
        console.log('✅ Progress Manager initialized');
    }

    /**
     * Load progress from localStorage
     */
    loadProgress() {
        const config = this.dataManager.getConfig();
        const storageKey = config.storage?.progressKey || 'warhammer-stats-progress';
        
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const progress = JSON.parse(saved);
                this.restoreProgress(progress);
                console.log('📁 Progress loaded from storage');
            }
        } catch (error) {
            console.error('❌ Failed to load progress:', error);
        }
    }

    /**
     * Restore progress from saved data
     */
    restoreProgress(progress) {
        this.selectedFaction = progress.selectedFaction || null;
        this.currentChapter = progress.currentChapter || 1;
        this.chapterScores = progress.chapterScores || {};
        this.completedChapters = new Set(progress.completedChapters || []);
        this.achievements = progress.achievements || [];
        this.statistics = { ...this.statistics, ...progress.statistics };
        this.settings = { ...this.settings, ...progress.settings };

        // Always recalculate rank based on current progress
        this.currentRank = this.calculateRank();
    }

    /**
     * Save progress to localStorage
     */
    saveProgress() {
        const config = this.dataManager.getConfig();
        const storageKey = config.storage?.progressKey || 'warhammer-stats-progress';

        const progress = {
            selectedFaction: this.selectedFaction,
            currentChapter: this.currentChapter,
            currentRank: this.currentRank,
            completedChapters: Array.from(this.completedChapters),
            chapterScores: this.chapterScores,
            achievements: this.achievements,
            statistics: this.statistics,
            settings: this.settings,
            lastSaved: new Date().toISOString(),
            version: this.dataManager.getConfig().version
        };

        try {
            localStorage.setItem(storageKey, JSON.stringify(progress));
            console.log('💾 Progress saved to storage');
            return true;
        } catch (error) {
            console.error('❌ Failed to save progress:', error);
            return false;
        }
    }

    /**
     * Setup automatic saving
     */
    setupAutoSave() {
        const config = this.dataManager.getConfig();
        if (config.features?.enableProgressSaving && this.settings.autoSave) {
            const interval = config.ui?.autoSaveInterval || 30000;
            setInterval(() => {
                this.saveProgress();
            }, interval);
        }
    }

    /**
     * Reset all progress
     */
    resetProgress() {
        this.selectedFaction = null;
        this.currentChapter = 1;
        this.currentRank = 'Recruit';
        this.chapterScores = {};
        this.completedChapters.clear();
        this.achievements = [];
        this.statistics = {
            totalTimeSpent: 0,
            questionsAnswered: 0,
            perfectScores: 0,
            startDate: null
        };

        // Clear storage
        const config = this.dataManager.getConfig();
        const storageKey = config.storage?.progressKey || 'warhammer-stats-progress';
        localStorage.removeItem(storageKey);
        
        console.log('🔄 Progress reset');
    }

    /**
     * Complete a chapter
     */
    completeChapter(chapterId, score) {
        this.completedChapters.add(chapterId);
        this.chapterScores[chapterId] = score;
        this.currentChapter = Math.max(this.currentChapter, chapterId + 1);
        
        // Update statistics
        this.statistics.questionsAnswered += this.dataManager.getQuiz(chapterId)?.questions?.length || 0;
        if (score === 100) {
            this.statistics.perfectScores++;
            this.checkAchievement('perfect-score');
        }

        // Check for rank promotion
        const oldRank = this.currentRank;
        this.currentRank = this.calculateRank();
        
        // Check achievements
        this.checkAchievements(chapterId, score);
        
        this.saveProgress();
        
        return {
            promoted: oldRank !== this.currentRank,
            oldRank,
            newRank: this.currentRank
        };
    }

    /**
     * Calculate current rank based on progress
     */
    calculateRank() {
        const completedCount = this.completedChapters.size;
        const averageScore = this.getAverageScore();
        const ranks = this.dataManager.getRankConfig();

        // Find the highest rank the user qualifies for
        let currentRank = 'Recruit';
        for (const [rankName, requirements] of Object.entries(ranks)) {
            if (completedCount >= requirements.minChapters && 
                averageScore >= requirements.minAverageScore) {
                currentRank = rankName;
            }
        }

        return currentRank;
    }

    /**
     * Get average quiz score
     */
    getAverageScore() {
        const scores = Object.values(this.chapterScores);
        if (scores.length === 0) return 0;
        return scores.reduce((a, b) => a + b, 0) / scores.length;
    }

    /**
     * Check for achievements
     */
    checkAchievements(chapterId, score) {
        // Perfect score achievement
        if (score === 100) {
            this.checkAchievement('perfect-score');
        }

        // First chapter completion
        if (this.completedChapters.size === 1) {
            this.checkAchievement('first-chapter');
        }

        // Multiple chapter completion milestones
        const milestones = [3, 5, 8, 10];
        for (const milestone of milestones) {
            if (this.completedChapters.size === milestone) {
                this.checkAchievement(`chapters-${milestone}`);
            }
        }

        // High average score
        const avgScore = this.getAverageScore();
        if (avgScore >= 90 && this.completedChapters.size >= 5) {
            this.checkAchievement('high-achiever');
        }
    }

    /**
     * Check and award specific achievement
     */
    checkAchievement(achievementId) {
        if (!this.achievements.includes(achievementId)) {
            this.achievements.push(achievementId);
            this.onAchievementUnlocked(achievementId);
        }
    }

    /**
     * Handle achievement unlock
     */
    onAchievementUnlocked(achievementId) {
        console.log(`🏆 Achievement unlocked: ${achievementId}`);
        // This can be extended to show notifications, effects, etc.
    }

    /**
     * Get unlocked chapters based on current progress
     */
    getUnlockedChapters() {
        return this.dataManager.getUnlockedChapters(this.completedChapters, this.chapterScores);
    }

    /**
     * Check if chapter is unlocked
     */
    isChapterUnlocked(chapterId) {
        return this.dataManager.isChapterUnlocked(chapterId, this.completedChapters, this.chapterScores);
    }

    /**
     * Get progress statistics
     */
    getProgressStats() {
        const totalChapters = this.dataManager.getAllChapters().length;
        const completedCount = this.completedChapters.size;
        const progressPercentage = (completedCount / totalChapters) * 100;

        return {
            completedChapters: completedCount,
            totalChapters,
            progressPercentage: Math.round(progressPercentage),
            currentRank: this.currentRank,
            averageScore: Math.round(this.getAverageScore()),
            achievements: this.achievements.length,
            totalQuestions: this.statistics.questionsAnswered,
            perfectScores: this.statistics.perfectScores
        };
    }

    /**
     * Update time spent
     */
    updateTimeSpent(minutes) {
        this.statistics.totalTimeSpent += minutes;
        if (!this.statistics.startDate) {
            this.statistics.startDate = new Date().toISOString();
        }
    }

    /**
     * Get current faction data
     */
    getCurrentFaction() {
        if (!this.selectedFaction) return null;
        return this.dataManager.getFactionConfig()[this.selectedFaction] || null;
    }

    /**
     * Set selected faction
     */
    setFaction(factionId) {
        const factions = this.dataManager.getFactionConfig();
        if (factions[factionId]) {
            this.selectedFaction = factionId;
            this.saveProgress();
            return true;
        }
        return false;
    }

    /**
     * Export progress data
     */
    exportProgress() {
        return {
            progress: {
                selectedFaction: this.selectedFaction,
                currentChapter: this.currentChapter,
                currentRank: this.currentRank,
                completedChapters: Array.from(this.completedChapters),
                chapterScores: this.chapterScores,
                achievements: this.achievements,
                statistics: this.statistics
            },
            exported: new Date().toISOString(),
            version: this.dataManager.getConfig().version
        };
    }

    /**
     * Import progress data
     */
    importProgress(data) {
        try {
            if (data.progress) {
                this.restoreProgress(data.progress);
                this.saveProgress();
                return true;
            }
            return false;
        } catch (error) {
            console.error('❌ Failed to import progress:', error);
            return false;
        }
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProgressManager };
}
