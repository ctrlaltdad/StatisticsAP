// Data Manager Module
// Handles loading and managing all application data

class DataManager {
    constructor() {
        this.chapters = {};
        this.lessons = {};
        this.quizzes = {};
        this.config = {};
        this.isLoaded = false;
    }

    /**
     * Initialize and load all data
     */
    async init() {
        try {
            await this.loadData();
            this.validateData();
            this.isLoaded = true;
            console.log('✅ Data Manager initialized successfully');
            return true;
        } catch (error) {
            console.error('❌ Failed to initialize Data Manager:', error);
            return false;
        }
    }

    /**
     * Load data from all sources
     */
    async loadData() {
        // Load configuration
        if (typeof APP_CONFIG !== 'undefined') {
            this.config = APP_CONFIG;
        }

        // Load chapters data
        if (typeof CHAPTERS_DATA !== 'undefined') {
            this.chapters = CHAPTERS_DATA;
        }

        // Load lessons data
        if (typeof LESSONS_DATA !== 'undefined') {
            this.lessons = LESSONS_DATA;
        }

        // Load quiz data
        if (typeof QUIZ_DATA !== 'undefined') {
            this.quizzes = QUIZ_DATA;
        }
    }

    /**
     * Validate loaded data
     */
    validateData() {
        // Validate chapters
        for (const [id, chapter] of Object.entries(this.chapters)) {
            if (!chapter.title || !chapter.description) {
                throw new Error(`Invalid chapter data for chapter ${id}`);
            }
        }

        // Validate lessons
        for (const [id, lesson] of Object.entries(this.lessons)) {
            if (!lesson.title || !lesson.steps || !Array.isArray(lesson.steps)) {
                throw new Error(`Invalid lesson data for lesson ${id}`);
            }
        }

        // Validate quizzes
        for (const [id, quiz] of Object.entries(this.quizzes)) {
            if (!quiz.questions || !Array.isArray(quiz.questions) || quiz.questions.length === 0) {
                throw new Error(`Invalid quiz data for quiz ${id}`);
            }
        }

        console.log('✅ Data validation completed');
    }

    /**
     * Get chapter data by ID
     */
    getChapter(id) {
        return this.chapters[id] || null;
    }

    /**
     * Get chapter data by ID (alias for getChapter)
     */
    getChapterData(chapterId) {
        return this.getChapter(chapterId);
    }

    /**
     * Get all chapters
     */
    getAllChapters() {
        return Object.values(this.chapters);
    }

    /**
     * Get lesson data by ID
     */
    getLesson(id) {
        return this.lessons[id] || null;
    }

    /**
     * Get quiz data by ID
     */
    getQuiz(id) {
        return this.quizzes[id] || null;
    }

    /**
     * Get quiz data by chapter ID (alias for getQuiz)
     */
    getQuizData(chapterId) {
        return this.getQuiz(chapterId);
    }

    /**
     * Get all quiz data
     */
    getAllQuizzes() {
        return this.quizzes;
    }

    /**
     * Get application configuration
     */
    getConfig() {
        return this.config;
    }

    /**
     * Get rank configuration
     */
    getRankConfig() {
        return this.config.ranks || {};
    }

    /**
     * Get faction configuration
     */
    getFactionConfig() {
        return this.config.factions || {};
    }

    /**
     * Check if a chapter exists
     */
    hasChapter(id) {
        return this.chapters.hasOwnProperty(id);
    }

    /**
     * Check if a lesson exists
     */
    hasLesson(id) {
        return this.lessons.hasOwnProperty(id);
    }

    /**
     * Check if a quiz exists
     */
    hasQuiz(id) {
        return this.quizzes.hasOwnProperty(id);
    }

    /**
     * Get chapters that are unlocked based on progress
     */
    getUnlockedChapters(completedChapters, chapterScores) {
        const unlockedChapters = [];
        
        for (const chapter of this.getAllChapters()) {
            if (this.isChapterUnlocked(chapter.id, completedChapters, chapterScores)) {
                unlockedChapters.push(chapter);
            }
        }
        
        return unlockedChapters;
    }

    /**
     * Check if a specific chapter is unlocked
     */
    isChapterUnlocked(chapterId, completedChapters, chapterScores) {
        const chapter = this.getChapter(chapterId);
        if (!chapter) return false;

        // Chapter 1 is always unlocked
        if (chapterId === 1) return true;

        // Check if all prerequisite chapters are completed with minimum score
        const requirements = chapter.unlockRequirements;
        if (!requirements) return true;

        for (const prereqId of requirements.previousChapters) {
            if (!completedChapters.has(prereqId)) {
                return false;
            }
            
            const score = chapterScores[prereqId] || 0;
            if (score < requirements.minimumScore) {
                return false;
            }
        }

        return true;
    }

    /**
     * Add new chapter (for dynamic content addition)
     */
    addChapter(id, chapterData) {
        if (this.chapters[id]) {
            console.warn(`Chapter ${id} already exists, overwriting...`);
        }
        this.chapters[id] = chapterData;
    }

    /**
     * Add new lesson (for dynamic content addition)
     */
    addLesson(id, lessonData) {
        if (this.lessons[id]) {
            console.warn(`Lesson ${id} already exists, overwriting...`);
        }
        this.lessons[id] = lessonData;
    }

    /**
     * Add new quiz (for dynamic content addition)
     */
    addQuiz(id, quizData) {
        if (this.quizzes[id]) {
            console.warn(`Quiz ${id} already exists, overwriting...`);
        }
        this.quizzes[id] = quizData;
    }

    /**
     * Get statistics about the data
     */
    getDataStats() {
        return {
            totalChapters: Object.keys(this.chapters).length,
            totalLessons: Object.keys(this.lessons).length,
            totalQuizzes: Object.keys(this.quizzes).length,
            totalQuestions: Object.values(this.quizzes).reduce((total, quiz) => {
                return total + (quiz.questions ? quiz.questions.length : 0);
            }, 0),
            isLoaded: this.isLoaded
        };
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DataManager };
}
