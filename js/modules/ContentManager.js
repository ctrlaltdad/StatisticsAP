// Content Management Utility
// Helper functions for easily adding and managing content

class ContentManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    /**
     * Add a new chapter with validation
     */
    addChapter(chapterData) {
        // Validate required fields
        const required = ['id', 'title', 'description', 'difficulty', 'estimatedTime', 'topics'];
        for (const field of required) {
            if (!chapterData[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        // Set defaults
        const chapter = {
            concepts: [],
            prerequisites: [],
            unlockRequirements: {
                previousChapters: [],
                minimumScore: 70
            },
            ...chapterData
        };

        this.dataManager.addChapter(chapter.id, chapter);
        console.log(`✅ Added chapter ${chapter.id}: ${chapter.title}`);
        
        return chapter;
    }

    /**
     * Add a new lesson with validation
     */
    addLesson(lessonId, lessonData) {
        // Validate required fields
        if (!lessonData.title || !lessonData.steps || !Array.isArray(lessonData.steps)) {
            throw new Error('Lesson must have title and steps array');
        }

        // Validate steps
        for (const [index, step] of lessonData.steps.entries()) {
            if (!step.title || !step.content) {
                throw new Error(`Step ${index + 1} must have title and content`);
            }
        }

        this.dataManager.addLesson(lessonId, lessonData);
        console.log(`✅ Added lesson ${lessonId}: ${lessonData.title}`);
        
        return lessonData;
    }

    /**
     * Add a new quiz with validation
     */
    addQuiz(quizId, quizData) {
        // Validate required fields
        const required = ['title', 'description', 'questions'];
        for (const field of required) {
            if (!quizData[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        // Validate questions
        if (!Array.isArray(quizData.questions) || quizData.questions.length === 0) {
            throw new Error('Quiz must have at least one question');
        }

        for (const [index, question] of quizData.questions.entries()) {
            this.validateQuestion(question, index + 1);
        }

        // Set defaults
        const quiz = {
            passingScore: 70,
            timeLimit: null,
            ...quizData
        };

        this.dataManager.addQuiz(quizId, quiz);
        console.log(`✅ Added quiz ${quizId}: ${quiz.title}`);
        
        return quiz;
    }

    /**
     * Validate quiz question
     */
    validateQuestion(question, questionNumber) {
        const required = ['id', 'question', 'options', 'correct', 'explanation'];
        for (const field of required) {
            if (question[field] === undefined || question[field] === null) {
                throw new Error(`Question ${questionNumber} missing required field: ${field}`);
            }
        }

        if (!Array.isArray(question.options) || question.options.length < 2) {
            throw new Error(`Question ${questionNumber} must have at least 2 options`);
        }

        if (question.correct < 0 || question.correct >= question.options.length) {
            throw new Error(`Question ${questionNumber} correct answer index is invalid`);
        }
    }

    /**
     * Create a lesson step template
     */
    createLessonStep(title, content, interactive = null) {
        return {
            title,
            content,
            interactive
        };
    }

    /**
     * Create an interactive activity template
     */
    createInteractiveActivity(type, config) {
        const templates = {
            classification: {
                type: 'classification',
                question: config.question || 'Classify these items:',
                items: config.items || []
            },
            calculation: {
                type: 'calculation',
                question: config.question || 'Calculate the following:',
                data: config.data || [],
                answers: config.answers || {}
            },
            'bias-identification': {
                type: 'bias-identification',
                scenarios: config.scenarios || []
            },
            simulation: {
                type: 'simulation',
                question: config.question || 'Run a simulation:',
                description: config.description || ''
            }
        };

        return templates[type] || null;
    }

    /**
     * Create a quiz question template
     */
    createQuizQuestion(id, question, options, correctIndex, explanation, difficulty = 'medium', concept = '') {
        return {
            id,
            question,
            options,
            correct: correctIndex,
            explanation,
            difficulty,
            concept
        };
    }

    /**
     * Bulk import content from JSON
     */
    importContent(contentData) {
        const results = {
            chapters: 0,
            lessons: 0,
            quizzes: 0,
            errors: []
        };

        // Import chapters
        if (contentData.chapters) {
            for (const [id, chapter] of Object.entries(contentData.chapters)) {
                try {
                    this.addChapter({ id: parseInt(id), ...chapter });
                    results.chapters++;
                } catch (error) {
                    results.errors.push(`Chapter ${id}: ${error.message}`);
                }
            }
        }

        // Import lessons
        if (contentData.lessons) {
            for (const [id, lesson] of Object.entries(contentData.lessons)) {
                try {
                    this.addLesson(parseInt(id), lesson);
                    results.lessons++;
                } catch (error) {
                    results.errors.push(`Lesson ${id}: ${error.message}`);
                }
            }
        }

        // Import quizzes
        if (contentData.quizzes) {
            for (const [id, quiz] of Object.entries(contentData.quizzes)) {
                try {
                    this.addQuiz(parseInt(id), quiz);
                    results.quizzes++;
                } catch (error) {
                    results.errors.push(`Quiz ${id}: ${error.message}`);
                }
            }
        }

        return results;
    }

    /**
     * Export current content to JSON
     */
    exportContent() {
        return {
            chapters: this.dataManager.chapters,
            lessons: this.dataManager.lessons,
            quizzes: this.dataManager.quizzes,
            exported: new Date().toISOString(),
            version: this.dataManager.getConfig().version
        };
    }

    /**
     * Generate content statistics
     */
    getContentStats() {
        const chapters = Object.values(this.dataManager.chapters);
        const lessons = Object.values(this.dataManager.lessons);
        const quizzes = Object.values(this.dataManager.quizzes);

        const totalQuestions = quizzes.reduce((total, quiz) => {
            return total + (quiz.questions ? quiz.questions.length : 0);
        }, 0);

        const totalLessonSteps = lessons.reduce((total, lesson) => {
            return total + (lesson.steps ? lesson.steps.length : 0);
        }, 0);

        const interactiveSteps = lessons.reduce((total, lesson) => {
            if (!lesson.steps) return total;
            return total + lesson.steps.filter(step => step.interactive).length;
        }, 0);

        return {
            chapters: chapters.length,
            lessons: lessons.length,
            quizzes: quizzes.length,
            totalQuestions,
            totalLessonSteps,
            interactiveSteps,
            difficulties: this.getDifficultyDistribution(chapters),
            concepts: this.getConceptDistribution(chapters)
        };
    }

    /**
     * Get difficulty distribution
     */
    getDifficultyDistribution(chapters) {
        const distribution = {};
        chapters.forEach(chapter => {
            const difficulty = chapter.difficulty || 'Unknown';
            distribution[difficulty] = (distribution[difficulty] || 0) + 1;
        });
        return distribution;
    }

    /**
     * Get concept distribution
     */
    getConceptDistribution(chapters) {
        const concepts = new Set();
        chapters.forEach(chapter => {
            if (chapter.concepts) {
                chapter.concepts.forEach(concept => concepts.add(concept));
            }
        });
        return Array.from(concepts);
    }

    /**
     * Validate all content
     */
    validateAllContent() {
        const errors = [];

        // Validate chapters
        for (const [id, chapter] of Object.entries(this.dataManager.chapters)) {
            try {
                this.validateChapter(chapter);
            } catch (error) {
                errors.push(`Chapter ${id}: ${error.message}`);
            }
        }

        // Validate lessons
        for (const [id, lesson] of Object.entries(this.dataManager.lessons)) {
            try {
                this.validateLesson(lesson);
            } catch (error) {
                errors.push(`Lesson ${id}: ${error.message}`);
            }
        }

        // Validate quizzes
        for (const [id, quiz] of Object.entries(this.dataManager.quizzes)) {
            try {
                this.validateQuiz(quiz);
            } catch (error) {
                errors.push(`Quiz ${id}: ${error.message}`);
            }
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }

    /**
     * Validate chapter structure
     */
    validateChapter(chapter) {
        const required = ['id', 'title', 'description'];
        for (const field of required) {
            if (!chapter[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }
    }

    /**
     * Validate lesson structure
     */
    validateLesson(lesson) {
        if (!lesson.title || !lesson.steps || !Array.isArray(lesson.steps)) {
            throw new Error('Invalid lesson structure');
        }
    }

    /**
     * Validate quiz structure
     */
    validateQuiz(quiz) {
        if (!quiz.title || !quiz.questions || !Array.isArray(quiz.questions)) {
            throw new Error('Invalid quiz structure');
        }
    }
}

// Example usage and helper functions
const ContentTemplates = {
    /**
     * Generate example chapter
     */
    generateExampleChapter(id) {
        return {
            id,
            title: `Chapter ${id} - Example Title`,
            description: "Example chapter description that explains what students will learn.",
            difficulty: "Novice Acolyte",
            estimatedTime: "30 min",
            topics: ["Topic 1", "Topic 2", "Topic 3"],
            concepts: ["Concept A", "Concept B"],
            prerequisites: id > 1 ? [id - 1] : [],
            unlockRequirements: {
                previousChapters: id > 1 ? [id - 1] : [],
                minimumScore: 70
            }
        };
    },

    /**
     * Generate example lesson
     */
    generateExampleLesson(id) {
        return {
            title: `Chapter ${id} - Example Lesson`,
            steps: [
                {
                    title: "Introduction",
                    content: `
                        <h3>Welcome to Chapter ${id}</h3>
                        <p>This is an example lesson step with basic content.</p>
                        <div class="example-box">
                            <h4>Example</h4>
                            <p>Here's an example that illustrates the concept.</p>
                        </div>
                    `,
                    interactive: null
                },
                {
                    title: "Practice Activity",
                    content: `
                        <h3>Practice Time</h3>
                        <p>Now let's practice what we've learned with an interactive activity.</p>
                    `,
                    interactive: {
                        type: "classification",
                        question: "Classify these example items:",
                        items: [
                            { text: "Example Item 1", type: "Type A" },
                            { text: "Example Item 2", type: "Type B" }
                        ]
                    }
                }
            ]
        };
    },

    /**
     * Generate example quiz
     */
    generateExampleQuiz(id) {
        return {
            title: `Chapter ${id} - Example Assessment`,
            description: "Test your understanding of the chapter concepts.",
            passingScore: 70,
            questions: [
                {
                    id: 1,
                    question: "What is the correct answer to this example question?",
                    options: [
                        "Option A",
                        "Option B (Correct)",
                        "Option C",
                        "Option D"
                    ],
                    correct: 1,
                    explanation: "Option B is correct because...",
                    difficulty: "easy",
                    concept: "Basic Concept"
                }
            ]
        };
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ContentManager, ContentTemplates };
}
