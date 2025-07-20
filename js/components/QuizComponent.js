// QuizComponent.js - Modular Quiz Management System
class QuizComponent {
    constructor(dataManager, progressManager, eventManager) {
        this.dataManager = dataManager;
        this.progressManager = progressManager;
        this.eventManager = eventManager;
        
        this.currentQuizId = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.quizQuestions = [];
        this.timeStarted = null;
        this.isReviewing = false;
        
        this.initializeEventListeners();
        this.injectStyles();
    }

    initializeEventListeners() {
        this.eventManager.on('startQuiz', (data) => {
            this.startQuiz(data.chapterId);
        });

        this.eventManager.on('retakeQuiz', (data) => {
            this.retakeQuiz();
        });
    }

    startQuiz(chapterId) {
        console.log('🎯 Starting quiz for chapter:', chapterId);
        
        // Get quiz data from DataManager
        const quizData = this.dataManager.getQuizData(chapterId);
        
        if (!quizData || !quizData.questions || quizData.questions.length === 0) {
            this.showPlaceholderQuiz(chapterId);
            return;
        }

        // Initialize quiz state
        this.currentQuizId = chapterId;
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(quizData.questions.length).fill(null);
        this.quizQuestions = this.shuffleQuestions(quizData.questions);
        this.timeStarted = Date.now();
        this.isReviewing = false;

        // Set quiz title
        const quizTitleElement = document.getElementById('quiz-title');
        if (quizTitleElement) {
            quizTitleElement.textContent = quizData.title;
        } else {
            console.warn('Quiz title element not found');
        }
        
        // Check if quiz-content element exists before proceeding
        const quizContentElement = document.getElementById('quiz-content');
        if (!quizContentElement) {
            console.error('Quiz content element not found! Cannot start quiz.');
            return;
        }
        
        this.showCurrentQuestion();
        
        // Emit event for progress tracking
        this.eventManager.emit('quizStarted', { chapterId, questionsCount: this.quizQuestions.length });
    }

    showPlaceholderQuiz(chapterId) {
        const chapterData = this.dataManager.getChapterData(chapterId);
        const chapterTitle = chapterData ? chapterData.title : `Chapter ${chapterId}`;
        
        document.getElementById('quiz-content').innerHTML = `
            <div class="quiz-placeholder">
                <div class="quiz-header">
                    <h2>🛠️ Battle Assessment Under Construction</h2>
                    <p>The quiz for "${chapterTitle}" is currently being forged in the Emperor's workshops.</p>
                </div>
                <div class="placeholder-content">
                    <div class="icon">⚙️</div>
                    <h3>Coming Soon, Loyal Servant</h3>
                    <p>Our Tech-Priests are working tirelessly to prepare your assessment. Check back soon for your battle readiness evaluation.</p>
                    <button onclick="window.app.showChapterSelect()" class="nav-button">
                        Return to Chapter Selection
                    </button>
                </div>
            </div>
        `;
    }

    shuffleQuestions(questions) {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.map(question => this.shuffleQuestionOptions(question));
    }

    shuffleQuestionOptions(question) {
        const shuffledQuestion = { ...question };
        const options = [...question.options];
        const correctAnswer = options[question.correct];
        
        // Shuffle options
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        
        // Update correct index
        shuffledQuestion.options = options;
        shuffledQuestion.correct = options.indexOf(correctAnswer);
        
        return shuffledQuestion;
    }

    showCurrentQuestion() {
        console.log('📝 Showing question', this.currentQuestionIndex + 1);
        
        const question = this.quizQuestions[this.currentQuestionIndex];
        const totalQuestions = this.quizQuestions.length;
        const currentQuestionNum = this.currentQuestionIndex + 1;
        
        // Calculate progress percentage for the template
        const progressPercentage = (this.currentQuestionIndex / totalQuestions) * 100;
        
        const quizContentElement = document.getElementById('quiz-content');
        if (!quizContentElement) {
            console.error('Cannot find quiz-content element!');
            return;
        }
        
        quizContentElement.innerHTML = `
            <div class="quiz-header">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar">
                        <div class="quiz-progress-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                    <span class="quiz-progress-text">Question ${currentQuestionNum} of ${totalQuestions}</span>
                </div>
            </div>
            
            <div class="quiz-question-container">
                <div class="question-content">
                    <h3 class="question-text">${question.question}</h3>
                    <div class="question-options">
                        ${question.options.map((option, index) => `
                            <div class="option-container ${this.userAnswers[this.currentQuestionIndex] === index ? 'selected' : ''}" 
                                 onclick="window.quizComponent.selectOption(${index})">
                                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                                <div class="option-text">${option}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="quiz-navigation">
                    <button onclick="window.quizComponent.previousQuestion()" 
                            ${this.currentQuestionIndex === 0 ? 'disabled' : ''} 
                            class="nav-button">
                        Previous
                    </button>
                    
                    <span class="question-indicator">
                        ${this.userAnswers[this.currentQuestionIndex] !== null ? '✓ Answered' : 'Select an answer'}
                    </span>
                    
                    ${this.currentQuestionIndex === totalQuestions - 1 ? `
                        <button onclick="window.quizComponent.showQuizResults()" 
                                ${!this.areAllQuestionsAnsweredCorrectly() ? 'disabled' : ''} 
                                class="nav-button primary">
                            Complete Quiz
                        </button>
                    ` : `
                        <button onclick="window.quizComponent.nextQuestion()" 
                                ${this.userAnswers[this.currentQuestionIndex] === null || this.userAnswers[this.currentQuestionIndex] !== question.correct ? 'disabled' : ''}
                                class="nav-button primary">
                            Next
                        </button>
                    `}
                </div>
            </div>
            
            ${this.isReviewing && this.userAnswers[this.currentQuestionIndex] !== null ? `
                <div class="answer-feedback-container">
                    ${this.generateAnswerFeedback(this.userAnswers[this.currentQuestionIndex])}
                </div>
            ` : ''}
        `;
    }

    selectOption(optionIndex, newSelection = true) {
        if (this.isReviewing) return; // Don't allow changes during review
        
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        
        // Update UI to show selection
        const options = document.querySelectorAll('.option-container');
        options.forEach((option, index) => {
            if (index === optionIndex) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
        
        // Update navigation indicator
        const indicator = document.querySelector('.question-indicator');
        if (indicator) {
            indicator.textContent = '✓ Answered';
        }
        
        // Update navigation buttons state
        const question = this.quizQuestions[this.currentQuestionIndex];
        const isCorrect = optionIndex === question.correct;
        
        // Enable/disable next button based on correctness
        const nextButton = document.querySelector('.nav-button.primary');
        if (nextButton && !nextButton.textContent.includes('Complete')) {
            nextButton.disabled = !isCorrect;
        }
        
        // Enable complete button if this was the last question and all answered correctly
        if (this.currentQuestionIndex === this.quizQuestions.length - 1) {
            const completeButton = document.querySelector('.nav-button.primary');
            if (completeButton && completeButton.textContent.includes('Complete')) {
                completeButton.disabled = !this.areAllQuestionsAnsweredCorrectly();
            }
        }
        
        if (newSelection) {
            // Show immediate feedback for the selected answer
            this.showAnswerFeedback(optionIndex);
        }
    }

    showAnswerFeedback(selectedIndex) {
        const question = this.quizQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        setTimeout(() => {
            const feedbackContainer = document.querySelector('.quiz-question-container');
            const existingFeedback = document.querySelector('.answer-feedback-container');
            
            if (existingFeedback) {
                existingFeedback.remove();
            }
            
            const feedbackHtml = this.generateAnswerFeedback(selectedIndex);
            feedbackContainer.insertAdjacentHTML('afterend', `
                <div class="answer-feedback-container">
                    ${feedbackHtml}
                </div>
            `);
        }, 300);
    }

    generateAnswerFeedback(selectedIndex) {
        const question = this.quizQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        return `
            <div class="answer-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="feedback-header">
                    <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                    <span class="feedback-status">${isCorrect ? 'Correct!' : 'Incorrect'}</span>
                </div>
                ${!isCorrect ? `
                    <div class="correct-answer">
                        Correct answer: <strong>${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}</strong>
                    </div>
                ` : ''}
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    }

    nextQuestion() {
        // Only allow next if current question is answered correctly
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
            const currentAnswer = this.userAnswers[this.currentQuestionIndex];
            const correctAnswer = this.quizQuestions[this.currentQuestionIndex].correct;
            
            if (currentAnswer === null || currentAnswer !== correctAnswer) {
                // Show feedback if no answer or wrong answer
                if (currentAnswer !== null) {
                    this.showAnswerFeedback(currentAnswer);
                }
                return;
            }
            
            this.currentQuestionIndex++;
            this.showCurrentQuestion();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showCurrentQuestion();
        }
    }

    showQuizResults() {
        const timeSpent = Math.round((Date.now() - this.timeStarted) / 1000);
        const score = this.calculateScore();
        const percentage = Math.round((score.correct / score.total) * 100);
        const rank = this.calculatePotentialRank(percentage);
        
        document.getElementById('quiz-content').innerHTML = `
            <div class="quiz-results">
                <div class="results-header">
                    <h2>🎖️ Battle Assessment Complete</h2>
                    <div class="score-display">
                        <div class="score-circle">
                            <div class="score-percentage">${percentage}%</div>
                            <div class="score-fraction">${score.correct}/${score.total}</div>
                        </div>
                    </div>
                </div>
                
                <div class="rank-section">
                    <div class="rank-display">
                        <div class="rank-icon">${rank.icon}</div>
                        <div class="rank-info">
                            <h3>${rank.title}</h3>
                            <p>${rank.description}</p>
                        </div>
                    </div>
                </div>
                
                <div class="stats-section">
                    <div class="stat-item">
                        <div class="stat-label">Time Spent</div>
                        <div class="stat-value">${Math.floor(timeSpent / 60)}:${(timeSpent % 60).toString().padStart(2, '0')}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Accuracy</div>
                        <div class="stat-value">${percentage}%</div>
                    </div>
                </div>
                
                <div class="question-review">
                    <h3>📋 Question Review</h3>
                    ${this.generateQuestionReview()}
                </div>
                
                <div class="results-actions">
                    <button onclick="window.quizComponent.reviewQuiz()" class="nav-button">
                        Review Questions
                    </button>
                    <button onclick="window.quizComponent.retakeQuiz()" class="nav-button">
                        Retake Quiz
                    </button>
                    <button onclick="window.quizComponent.navigateToChapterSelection()" class="nav-button primary">
                        Continue to Next Chapter
                    </button>
                </div>
            </div>
        `;
        
        // Emit completion event - This will trigger onChapterCompleted in app-refactored.js
        // which will handle progress saving and UI updates
        this.eventManager.emit('chapter:completed', {
            chapterId: this.currentQuizId,
            score: percentage,
            timeSpent: timeSpent
        });
    }

    calculateScore() {
        let correct = 0;
        const total = this.quizQuestions.length;
        
        for (let i = 0; i < this.userAnswers.length; i++) {
            if (this.userAnswers[i] === this.quizQuestions[i].correct) {
                correct++;
            }
        }
        
        return { correct, total };
    }

    calculatePotentialRank(quizPercentage) {
        const configRanks = this.dataManager.getConfig().ranks;
        const ranks = Array.isArray(configRanks) ? configRanks : [
            { min: 95, title: "Chapter Master", icon: "👑", description: "Exceptional mastery of statistical warfare" },
            { min: 90, title: "Captain", icon: "⭐", description: "Outstanding tactical analysis" },
            { min: 85, title: "Sergeant", icon: "🎖️", description: "Strong battlefield statistics" },
            { min: 80, title: "Veteran", icon: "🏅", description: "Solid understanding of combat data" },
            { min: 70, title: "Battle-Brother", icon: "⚔️", description: "Competent in statistical combat" },
            { min: 60, title: "Scout", icon: "🔍", description: "Basic grasp of battlefield metrics" },
            { min: 0, title: "Aspirant", icon: "📚", description: "Continue training to serve the Emperor" }
        ];
        
        return ranks.find(rank => quizPercentage >= rank.min);
    }

    generateQuestionReview() {
        return this.quizQuestions.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            return `
                <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-header">
                        <span class="review-number">Q${index + 1}</span>
                        <span class="review-status">${isCorrect ? '✅' : '❌'}</span>
                    </div>
                    <div class="review-content">
                        <div class="review-question">${question.question}</div>
                        ${userAnswer !== null ? `
                            <div class="review-answer">
                                Your answer: <strong>${String.fromCharCode(65 + userAnswer)}) ${question.options[userAnswer]}</strong>
                            </div>
                        ` : `
                            <div class="review-answer unanswered">Not answered</div>
                        `}
                        ${!isCorrect ? `
                            <div class="review-correct">
                                Correct: <strong>${String.fromCharCode(65 + question.correct)}) ${question.options[question.correct]}</strong>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    reviewQuiz() {
        this.isReviewing = true;
        this.currentQuestionIndex = 0;
        this.showCurrentQuestion();
    }

    retakeQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.quizQuestions.length).fill(null);
        this.timeStarted = Date.now();
        this.isReviewing = false;
        this.showCurrentQuestion();
    }

    completeChapter() {
        // The quiz results should already be displayed at this point
        // Just trigger the navigation events, progress saving is handled by the main app
        
        // Navigate to next chapter or chapter selection
        const nextChapterId = this.currentQuizId + 1;
        const nextChapter = this.dataManager.getChapterData(nextChapterId);
        
        if (nextChapter) {
            this.eventManager.emit('navigateToChapter', { chapterId: nextChapterId });
        } else {
            this.eventManager.emit('navigateToChapterSelect');
        }
    }

    navigateToChapterSelection() {
        // Simple navigation back to chapter selection to see updated progress
        this.eventManager.emit('navigateToChapterSelect');
    }

    /**
     * Hide all sections (utility method)
     */
    hideAllSections() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
            screen.style.display = 'none';
        });
    }

    injectStyles() {
        const quizStyles = `
            .quiz-placeholder {
                text-align: center;
                padding: 40px 20px;
                max-width: 600px;
                margin: 0 auto;
            }

            .quiz-placeholder .icon {
                font-size: 4rem;
                margin: 20px 0;
                opacity: 0.6;
            }

            .quiz-header {
                margin-bottom: 30px;
            }

            .quiz-progress {
                margin-bottom: 20px;
            }

            .quiz-progress-bar {
                width: 100%;
                height: 8px;
                background-color: var(--bg-secondary);
                border-radius: 4px;
                overflow: hidden;
            }

            .quiz-progress-fill {
                height: 100%;
                background: linear-gradient(45deg, var(--accent-color), var(--accent-light));
                transition: width 0.3s ease;
            }

            .quiz-progress-text {
                display: block;
                text-align: center;
                margin-top: 8px;
                font-weight: 500;
                color: var(--text-secondary);
            }

            .quiz-question-container {
                background: var(--bg-primary);
                border-radius: 12px;
                padding: 30px;
                margin-bottom: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .question-text {
                font-size: 1.2rem;
                line-height: 1.6;
                margin-bottom: 25px;
                color: var(--text-primary);
            }

            .question-options {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .option-container {
                display: flex;
                align-items: center;
                padding: 15px 20px;
                background: var(--bg-secondary);
                border: 2px solid transparent;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .option-container:hover {
                background: var(--bg-tertiary);
                border-color: var(--accent-color);
            }

            .option-container.selected {
                background: var(--accent-light);
                border-color: var(--accent-color);
                color: var(--bg-primary);
            }

            .option-letter {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                background: var(--accent-color);
                color: white;
                border-radius: 50%;
                font-weight: bold;
                margin-right: 15px;
                flex-shrink: 0;
            }

            .option-container.selected .option-letter {
                background: var(--bg-primary);
                color: var(--accent-color);
            }

            .option-text {
                flex: 1;
                line-height: 1.4;
            }

            .quiz-navigation {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid var(--bg-secondary);
            }

            .question-indicator {
                font-weight: 500;
                color: var(--text-secondary);
            }

            .answer-feedback-container {
                margin-top: 20px;
            }

            .answer-feedback {
                padding: 20px;
                border-radius: 8px;
                margin-top: 15px;
            }

            .answer-feedback.correct {
                background: rgba(46, 160, 67, 0.1);
                border: 1px solid #2ea043;
            }

            .answer-feedback.incorrect {
                background: rgba(218, 54, 51, 0.1);
                border: 1px solid #da3633;
            }

            .feedback-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 12px;
                font-weight: 600;
            }

            .feedback-icon {
                font-size: 1.2rem;
            }

            .correct-answer {
                margin-bottom: 12px;
                font-weight: 500;
            }

            .explanation {
                line-height: 1.5;
                color: var(--text-secondary);
            }

            .quiz-results {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }

            .results-header {
                text-align: center;
                margin-bottom: 40px;
            }

            .score-display {
                margin: 30px 0;
            }

            .score-circle {
                display: inline-block;
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: linear-gradient(45deg, var(--accent-color), var(--accent-light));
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                margin: 0 auto;
            }

            .score-percentage {
                font-size: 2.5rem;
                font-weight: bold;
            }

            .score-fraction {
                font-size: 1rem;
                opacity: 0.9;
            }

            .rank-section {
                background: var(--bg-secondary);
                border-radius: 12px;
                padding: 30px;
                margin-bottom: 30px;
                text-align: center;
            }

            .rank-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
            }

            .rank-icon {
                font-size: 3rem;
            }

            .rank-info h3 {
                margin: 0 0 10px 0;
                font-size: 1.8rem;
                color: var(--accent-color);
            }

            .rank-info p {
                margin: 0;
                color: var(--text-secondary);
            }

            .stats-section {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin-bottom: 30px;
            }

            .stat-item {
                background: var(--bg-secondary);
                padding: 20px;
                border-radius: 8px;
                text-align: center;
            }

            .stat-label {
                color: var(--text-secondary);
                margin-bottom: 8px;
            }

            .stat-value {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--accent-color);
            }

            .question-review {
                background: var(--bg-secondary);
                border-radius: 12px;
                padding: 30px;
                margin-bottom: 30px;
            }

            .question-review h3 {
                margin-top: 0;
                margin-bottom: 20px;
                color: var(--text-primary);
            }

            .review-item {
                background: var(--bg-primary);
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 15px;
                border-left: 4px solid transparent;
            }

            .review-item.correct {
                border-left-color: #2ea043;
            }

            .review-item.incorrect {
                border-left-color: #da3633;
            }

            .review-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
            }

            .review-number {
                font-weight: bold;
                color: var(--accent-color);
            }

            .review-question {
                font-weight: 500;
                margin-bottom: 10px;
                line-height: 1.4;
            }

            .review-answer {
                margin-bottom: 8px;
                color: var(--text-secondary);
            }

            .review-answer.unanswered {
                color: #da3633;
                font-style: italic;
            }

            .review-correct {
                color: #2ea043;
                font-weight: 500;
            }

            .results-actions {
                display: flex;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
            }

            @media (max-width: 768px) {
                .quiz-question-container {
                    padding: 20px;
                }

                .quiz-navigation {
                    flex-direction: column;
                    gap: 15px;
                }

                .rank-display {
                    flex-direction: column;
                    gap: 15px;
                }

                .results-actions {
                    flex-direction: column;
                }

                .stats-section {
                    grid-template-columns: 1fr;
                }
            }
        `;

        // Inject styles if not already present
        if (!document.querySelector('#quiz-component-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'quiz-component-styles';
            styleSheet.textContent = quizStyles;
            document.head.appendChild(styleSheet);
        }
    }

    /**
     * Check if all questions are answered correctly
     */
    areAllQuestionsAnsweredCorrectly() {
        for (let i = 0; i < this.quizQuestions.length; i++) {
            if (this.userAnswers[i] !== this.quizQuestions[i].correct) {
                return false;
            }
        }
        return true;
    }
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizComponent;
}
