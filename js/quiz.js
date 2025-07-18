// Quiz Management System for Warhammer 40K Statistics Academy
class QuizManager {
    constructor() {
        this.currentQuizId = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.quizQuestions = [];
        this.quizData = this.initializeQuizzes();
        this.timeStarted = null;
    }

    initializeQuizzes() {
        return {
            1: {
                title: "Data Collection & Imperial Census - Battle Assessment",
                description: "Test your knowledge of data collection methods and sampling techniques.",
                questions: [
                    {
                        id: 1,
                        question: "A Planetary Governor wants to assess the morale of all Imperial Guard regiments in the sector. Due to time constraints, they decide to survey only the regiments stationed at the capital hive city. What type of bias does this introduce?",
                        options: [
                            "Voluntary response bias",
                            "Response bias",
                            "Selection bias", 
                            "Survivorship bias"
                        ],
                        correct: 2,
                        explanation: "This is selection bias because the sample (capital regiments) is not representative of the population (all regiments in the sector). Capital regiments might have different characteristics than those stationed elsewhere."
                    },
                    {
                        id: 2,
                        question: "Which of the following represents discrete quantitative data in an Imperial context?",
                        options: [
                            "The weight of a Space Marine's power armor",
                            "The distance between forge worlds",
                            "The time taken to complete a Warp jump",
                            "The number of Titans in a Legion"
                        ],
                        correct: 3,
                        explanation: "The number of Titans is discrete quantitative data because you can count individual Titans (1, 2, 3, etc.) but cannot have fractional Titans."
                    },
                    {
                        id: 3,
                        question: "An Inquisitor surveys Space Marine chapters about their battle effectiveness by asking: 'Don't you agree that your chapter serves the Emperor with utmost efficiency?' This is an example of:",
                        options: [
                            "Response bias due to leading questions",
                            "Good survey design",
                            "Selection bias",
                            "Voluntary response bias"
                        ],
                        correct: 0,
                        explanation: "This is response bias caused by a leading question. The question pushes respondents toward a positive answer rather than allowing them to express their true opinion."
                    },
                    {
                        id: 4,
                        question: "A study compares the combat effectiveness of Space Marines who volunteered for dangerous missions versus those who were assigned. What potential issue exists with this study design?",
                        options: [
                            "This is a well-designed experiment",
                            "The sample size is too small",
                            "Response bias in the survey questions",
                            "Selection bias - volunteers may be inherently different"
                        ],
                        correct: 3,
                        explanation: "This is an observational study with potential selection bias. Marines who volunteer for dangerous missions may be inherently braver, more skilled, or have different motivations than those who are assigned."
                    },
                    {
                        id: 5,
                        question: "To estimate the average ammunition consumption across all Imperial Guard regiments, which sampling method would be most appropriate?",
                        options: [
                            "Survey only the elite Cadian regiments",
                            "Use simple random sampling from all regiments",
                            "Only survey regiments currently in combat",
                            "Let regiments volunteer to participate"
                        ],
                        correct: 1,
                        explanation: "Simple random sampling gives every regiment an equal chance of selection, providing the most representative sample for estimating the population average."
                    }
                ]
            },
            2: {
                title: "Descriptive Statistics - Battle Assessment",
                description: "Test your mastery of organizing and summarizing Imperial data.",
                questions: [
                    {
                        id: 1,
                        question: "Five Space Marine squads report the following enemy kills: 8, 12, 15, 18, 22. An enemy artillery strike eliminates one squad with 8 kills from the data. How does this affect the mean and median of the remaining squads?",
                        options: [
                            "Median increases more than mean",
                            "Mean increases more than median",
                            "Both mean and median increase", 
                            "Both remain the same"
                        ],
                        correct: 1,
                        explanation: "Removing the lowest value (8) increases both the mean and median. The mean increases from 15 to 16.75, while the median increases from 15 to 16.5. The mean is more sensitive to extreme values."
                    },
                    {
                        id: 2,
                        question: "Battle effectiveness scores for two Imperial Guard regiments:\nRegiment A: 75, 78, 80, 82, 85 (Mean = 80)\nRegiment B: 60, 70, 80, 90, 100 (Mean = 80)\nWhich statement is correct?",
                        options: [
                            "Regiment A is more consistent in performance",
                            "Both regiments perform equally well",
                            "Regiment B is more reliable",
                            "The data is insufficient to compare"
                        ],
                        correct: 0,
                        explanation: "While both have the same mean (80), Regiment A has lower variability (range = 10) compared to Regiment B (range = 40), making Regiment A more consistent and reliable."
                    },
                    {
                        id: 3,
                        question: "For a dataset of Titan combat effectiveness scores with Q1 = 65, Q3 = 85, and IQR = 20, which values would be considered outliers using the 1.5 × IQR rule?",
                        options: [
                            "Any score below 35 or above 115",
                            "Any score below 45 or above 105",
                            "Any score below 55 or above 95",
                            "Any score below 65 or above 85"
                        ],
                        correct: 0,
                        explanation: "Lower bound = Q1 - 1.5(IQR) = 65 - 1.5(20) = 35. Upper bound = Q3 + 1.5(IQR) = 85 + 1.5(20) = 115. Values outside this range are outliers."
                    },
                    {
                        id: 4,
                        question: "A Commissar reviews accuracy scores that are heavily right-skewed (most soldiers score low, few score very high). Which measure of central tendency would best represent typical performance?",
                        options: [
                            "Mean, because it uses all data points",
                            "All three are equally appropriate",
                            "Mode, because it shows the most common score",
                            "Median, because it's resistant to skewness"
                        ],
                        correct: 3,
                        explanation: "In skewed distributions, the median is preferred because it's not affected by extreme values. The mean would be pulled toward the tail, giving a misleading impression of typical performance."
                    },
                    {
                        id: 5,
                        question: "Two Adeptus Mechanicus forge worlds report production data:\nForge Alpha: Standard deviation = 50 units\nForge Beta: Standard deviation = 200 units\nWhat can you conclude about their production consistency?",
                        options: [
                            "Forge Beta produces more on average",
                            "Cannot determine without knowing the means",
                            "Forge Alpha has more consistent production", 
                            "Forge Alpha produces more on average"
                        ],
                        correct: 2,
                        explanation: "Standard deviation measures variability. A lower standard deviation (Forge Alpha = 50) indicates more consistent production compared to higher standard deviation (Forge Beta = 200)."
                    }
                ]
            },
            3: {
                title: "Probability - Battle Assessment", 
                description: "Test your understanding of probability in Imperial warfare.",
                questions: [
                    {
                        id: 1,
                        question: "A Space Marine has a 0.8 probability of hitting a target. If he fires at 3 independent targets, what's the probability he hits all three?",
                        options: [
                            "0.512",
                            "0.8",
                            "0.64",
                            "2.4"
                        ],
                        correct: 0,
                        explanation: "For independent events, P(A and B and C) = P(A) × P(B) × P(C) = 0.8 × 0.8 × 0.8 = 0.512"
                    },
                    {
                        id: 2,
                        question: "In a Space Marine recruitment test, 30% of candidates are from Death Worlds, and 60% of Death World candidates pass the trials. If 18% of all candidates both come from Death Worlds AND pass, are being from a Death World and passing the trials independent events?",
                        options: [
                            "Cannot determine from given information",
                            "Yes, they are independent",
                            "No, they are dependent",
                            "The question is invalid"
                        ],
                        correct: 1,
                        explanation: "If independent: P(Death World AND Pass) = P(Death World) × P(Pass|Death World) = 0.30 × 0.60 = 0.18. Since this matches the given 18%, the events are independent."
                    },
                    {
                        id: 3,
                        question: "A Drop Pod has a 90% success rate for landing. What's the probability that at least one of three Drop Pods fails to land successfully?",
                        options: [
                            "0.1",
                            "0.3",
                            "0.729",
                            "0.271"
                        ],
                        correct: 3,
                        explanation: "P(at least one fails) = 1 - P(all succeed) = 1 - P(success)³ = 1 - (0.9)³ = 1 - 0.729 = 0.271"
                    },
                    {
                        id: 4,
                        question: "Intelligence reports indicate that 20% of enemy positions are heavily fortified. Your orbital scan correctly identifies fortified positions 85% of the time and correctly identifies non-fortified positions 90% of the time. If a scan indicates 'heavily fortified,' what's the probability it actually is fortified?",
                        options: [
                            "0.175",
                            "0.68",
                            "0.85",
                            "0.68"
                        ],
                        correct: 1,
                        explanation: "Using Bayes' theorem: P(Fortified|Positive scan) = P(Positive|Fortified) × P(Fortified) / P(Positive scan) = (0.85 × 0.20) / (0.85 × 0.20 + 0.10 × 0.80) = 0.17 / 0.25 = 0.68"
                    },
                    {
                        id: 5,
                        question: "A Commissar executes soldiers for cowardice. If the probability of execution is 0.05 for each act of cowardice, and a soldier commits 3 independent acts, what's the probability the soldier survives all three incidents?",
                        options: [
                            "0.857",
                            "0.95",
                            "0.85",
                            "0.15"
                        ],
                        correct: 0,
                        explanation: "P(survives all three) = P(survives one incident)³ = (1 - 0.05)³ = (0.95)³ = 0.857"
                    }
                ]
            }
        };
    }

    startQuiz(chapterId) {
        this.currentQuizId = chapterId;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.quizQuestions = this.quizData[chapterId]?.questions || [];
        this.timeStarted = new Date();

        // Reset shuffled options for new quiz attempt
        this.quizQuestions.forEach(question => {
            question.shuffledOptions = null;
            question.shuffledCorrectIndex = null;
        });

        if (this.quizQuestions.length === 0) {
            this.showPlaceholderQuiz(chapterId);
            return;
        }

        // Update quiz header
        document.getElementById('quiz-title').textContent = this.quizData[chapterId].title;
        
        // Show first question
        this.showCurrentQuestion();
    }

    showPlaceholderQuiz(chapterId) {
        const quizContent = document.getElementById('quiz-content');
        quizContent.innerHTML = `
            <div class="quiz-placeholder">
                <h3>🔨 Battle Assessment Under Construction</h3>
                <div class="example-box">
                    <h4>Tech-Priests are Forging Your Assessment</h4>
                    <p>The quiz for Chapter ${chapterId} is being crafted by the finest minds of the Adeptus Mechanicus. Your battle assessment will include:</p>
                    <ul>
                        <li>5 challenging multiple-choice questions</li>
                        <li>Real-world applications with Warhammer scenarios</li>
                        <li>Immediate feedback and explanations</li>
                        <li>XP rewards for correct answers</li>
                    </ul>
                </div>
                <button class="cta-button" onclick="StatisticsApp.showScreen('chapter-selection')">
                    <i class="fas fa-arrow-left"></i> Return to Campaign Map
                </button>
            </div>
        `;
    }

    showCurrentQuestion() {
        if (this.currentQuestionIndex >= this.quizQuestions.length) {
            this.showQuizResults();
            return;
        }

        const question = this.quizQuestions[this.currentQuestionIndex];
        const quizContent = document.getElementById('quiz-content');
        
        // Randomize answer options if not already done for this question
        if (!question.shuffledOptions) {
            this.shuffleQuestionOptions(question);
        }
        
        // Update progress
        document.getElementById('quiz-progress-text').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.quizQuestions.length}`;

        quizContent.innerHTML = `
            <div class="question">
                <h3>Question ${this.currentQuestionIndex + 1}</h3>
                <p class="question-text">${question.question}</p>
                
                <div class="options">
                    ${question.shuffledOptions.map((option, index) => `
                        <div class="option" data-index="${index}" onclick="window.QuizManager.selectOption(${index})">
                            <span class="option-letter">${String.fromCharCode(65 + index)})</span>
                            <span class="option-text">${option.text}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="question-controls">
                    <button id="quiz-prev" class="nav-button secondary-nav" ${this.currentQuestionIndex === 0 ? 'disabled' : ''} 
                        onclick="window.QuizManager.previousQuestion()">
                        <i class="fas fa-chevron-left"></i> Previous
                    </button>
                    
                    <div class="next-button-container">
                        <button id="quiz-next" class="nav-button primary-nav" disabled onclick="window.QuizManager.nextQuestion()">
                            ${this.currentQuestionIndex === this.quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'} 
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <p class="next-hint" id="next-hint">Answer correctly to proceed</p>
                    </div>
                </div>
                
                <div class="answer-feedback" id="answer-feedback" style="display: none;"></div>
            </div>
        `;

        // If user has already answered this question, show their selection
        if (this.userAnswers[this.currentQuestionIndex] !== undefined) {
            const previousAnswer = this.userAnswers[this.currentQuestionIndex];
            this.selectOption(previousAnswer, false);
            
            // Check if the previous answer was correct to enable/disable next button
            const isCorrect = previousAnswer === question.shuffledCorrectIndex;
            const nextButton = document.getElementById('quiz-next');
            const nextHint = document.getElementById('next-hint');
            
            if (nextButton) {
                nextButton.disabled = !isCorrect;
                if (isCorrect) {
                    nextButton.classList.add('enabled');
                    nextButton.classList.remove('disabled');
                    if (nextHint) nextHint.style.display = 'none';
                } else {
                    nextButton.classList.remove('enabled');
                    nextButton.classList.add('disabled');
                    if (nextHint) nextHint.style.display = 'block';
                }
            }
        } else {
            // Ensure next button is disabled for unanswered questions
            const nextButton = document.getElementById('quiz-next');
            const nextHint = document.getElementById('next-hint');
            if (nextButton) {
                nextButton.disabled = true;
                nextButton.classList.remove('enabled');
                nextButton.classList.add('disabled');
                if (nextHint) nextHint.style.display = 'block';
            }
        }
    }

    shuffleQuestionOptions(question) {
        // Create an array of options with their original indices
        const optionsWithIndices = question.options.map((text, index) => ({
            text: text,
            originalIndex: index
        }));
        
        // Shuffle the options array
        for (let i = optionsWithIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsWithIndices[i], optionsWithIndices[j]] = [optionsWithIndices[j], optionsWithIndices[i]];
        }
        
        // Store shuffled options and update correct answer index
        question.shuffledOptions = optionsWithIndices;
        question.shuffledCorrectIndex = optionsWithIndices.findIndex(option => option.originalIndex === question.correct);
    }

    selectOption(optionIndex, newSelection = true) {
        // Clear previous selections and highlights
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });

        // Hide previous feedback
        const feedbackDiv = document.getElementById('answer-feedback');
        if (feedbackDiv) {
            feedbackDiv.style.display = 'none';
        }

        // Mark selected option
        const selectedOption = document.querySelector(`[data-index="${optionIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }

        // Store answer
        this.userAnswers[this.currentQuestionIndex] = optionIndex;

        // Show immediate feedback if this is a new selection
        if (newSelection) {
            this.showAnswerFeedback(optionIndex);
        }

        // Only enable next button if the answer is correct
        const question = this.quizQuestions[this.currentQuestionIndex];
        const isCorrect = optionIndex === question.shuffledCorrectIndex;
        const nextButton = document.getElementById('quiz-next');
        const nextHint = document.getElementById('next-hint');
        
        if (nextButton) {
            nextButton.disabled = !isCorrect;
            if (isCorrect) {
                nextButton.classList.add('enabled');
                nextButton.classList.remove('disabled');
                if (nextHint) nextHint.style.display = 'none';
            } else {
                nextButton.classList.remove('enabled');
                nextButton.classList.add('disabled');
                if (nextHint) nextHint.style.display = 'block';
            }
        }
    }

    showAnswerFeedback(selectedIndex) {
        const question = this.quizQuestions[this.currentQuestionIndex];
        const feedbackDiv = document.getElementById('answer-feedback');
        const isCorrect = selectedIndex === question.shuffledCorrectIndex;

        let feedbackHTML = '';
        if (isCorrect) {
            feedbackHTML = `
                <div class="feedback correct">
                    <i class="fas fa-check-circle"></i>
                    <strong>Correct!</strong> Well done, Battle-Brother! You may proceed.
                    <p>${question.explanation}</p>
                </div>
            `;
        } else {
            feedbackHTML = `
                <div class="feedback incorrect">
                    <i class="fas fa-times-circle"></i>
                    <strong>Incorrect.</strong> You must answer correctly to proceed. The correct answer is ${String.fromCharCode(65 + question.shuffledCorrectIndex)}).
                    <p>${question.explanation}</p>
                </div>
            `;
        }

        feedbackDiv.innerHTML = feedbackHTML;
        feedbackDiv.style.display = 'block';

        // Highlight correct answer
        document.querySelectorAll('.option').forEach((option, index) => {
            if (index === question.shuffledCorrectIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
    }

    nextQuestion() {
        // Check if next button should be disabled
        const nextButton = document.getElementById('quiz-next');
        if (nextButton && nextButton.disabled) {
            return; // Don't proceed if button is disabled
        }
        
        if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.showCurrentQuestion();
        } else {
            this.showQuizResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showCurrentQuestion();
        }
    }

    showQuizResults() {
        const totalQuestions = this.quizQuestions.length;
        const correctAnswers = this.calculateScore();
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const timeElapsed = Math.round((new Date() - this.timeStarted) / 1000 / 60); // minutes

        const quizContent = document.getElementById('quiz-content');
        
        let performanceMessage = '';
        let performanceClass = '';
        
        // Calculate what the rank would be after completing this chapter
        const potentialRank = this.calculatePotentialRank(percentage);

        // Since all answers are now required to be correct, users should always get 100%
        if (percentage === 100) {
            performanceMessage = "Perfect! You have mastered this chapter with the skill of a Primarch!";
            performanceClass = 'excellent';
        } else if (percentage >= 90) {
            performanceMessage = "Outstanding! You fight with the skill of a Primarch!";
            performanceClass = 'excellent';
        } else if (percentage >= 80) {
            performanceMessage = "Well done! You have proven yourself worthy of the Emperor's trust.";
            performanceClass = 'good';
        } else if (percentage >= 70) {
            performanceMessage = "Acceptable performance, but more training is required.";
            performanceClass = 'average';
        } else if (percentage >= 60) {
            performanceMessage = "You need additional study to serve the Emperor effectively.";
            performanceClass = 'below-average';
        } else {
            performanceMessage = "Report for immediate retraining, recruit!";
            performanceClass = 'poor';
        }

        quizContent.innerHTML = `
            <div class="quiz-results ${performanceClass}">
                <h3>🏆 Battle Assessment Complete - Chapter Mastered!</h3>
                
                <div class="score-display">
                    <div class="score-circle">
                        <div class="score-text">
                            <span class="score-number">${correctAnswers}</span>
                            <span class="score-total">/${totalQuestions}</span>
                        </div>
                        <div class="score-percentage">${percentage}%</div>
                    </div>
                </div>
                
                <div class="performance-summary">
                    <h4>Rank After Completion: ${potentialRank}</h4>
                    <p class="performance-message">${performanceMessage}</p>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <i class="fas fa-target"></i>
                            <span>Mastery</span>
                            <strong>${percentage}%</strong>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-clock"></i>
                            <span>Time</span>
                            <strong>${timeElapsed} min</strong>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-star"></i>
                            <span>Score</span>
                            <strong>${correctAnswers}/${totalQuestions}</strong>
                        </div>
                    </div>
                </div>
                
                <div class="question-review">
                    <h4>Knowledge Review:</h4>
                    ${this.generateQuestionReview()}
                </div>
                
                <div class="quiz-actions">
                    <button class="nav-button primary" onclick="window.QuizManager.completeChapter()">
                        <i class="fas fa-flag-checkered"></i> Complete Chapter
                    </button>
                </div>
                
                <div class="secondary-actions">
                    <button class="nav-button secondary" onclick="window.StatisticsApp.showScreen('chapter-selection')">
                        <i class="fas fa-map"></i> Campaign Map
                    </button>
                </div>
            </div>
        `;

        // Results summary for the user
        if (window.StatisticsApp) {
            window.StatisticsApp.showNotification(
                `Chapter mastered! Perfect understanding achieved with ${percentage}% accuracy!`, 
                'success'
            );
        }
    }

    calculateScore() {
        let correct = 0;
        for (let i = 0; i < this.quizQuestions.length; i++) {
            if (this.userAnswers[i] === this.quizQuestions[i].shuffledCorrectIndex) {
                correct++;
            }
        }
        return correct;
    }

    calculatePotentialRank(quizPercentage) {
        // Only calculate potential rank if passing grade (70% or higher)
        if (quizPercentage < 70) {
            return window.StatisticsApp ? window.StatisticsApp.currentRank : 'Recruit';
        }
        
        if (!window.StatisticsApp) {
            return 'Recruit';
        }
        
        // Simulate what the rank would be after completing this chapter
        const currentCompletedChapters = window.StatisticsApp.completedChapters.size;
        const currentScores = Object.values(window.StatisticsApp.chapterScores);
        
        // Calculate what the new average would be
        const newCompletedCount = currentCompletedChapters + 1;
        const newTotalScore = currentScores.reduce((a, b) => a + b, 0) + quizPercentage;
        const newAverageScore = newTotalScore / newCompletedCount;
        
        console.log('Potential rank calculation:', {
            currentCompletedChapters,
            currentScores,
            quizPercentage,
            newCompletedCount,
            newAverageScore
        });
        
        // Apply the same rank logic as the main app
        if (newCompletedCount >= 8 && newAverageScore >= 90) return 'Chapter Master';
        if (newCompletedCount >= 6 && newAverageScore >= 85) return 'Captain';
        if (newCompletedCount >= 4 && newAverageScore >= 80) return 'Lieutenant';
        if (newCompletedCount >= 2 && newAverageScore >= 75) return 'Sergeant';
        if (newCompletedCount >= 1 && newAverageScore >= 70) return 'Initiate';
        
        return 'Recruit';
    }

    generateQuestionReview() {
        return this.quizQuestions.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.shuffledCorrectIndex;
            const userAnswerText = userAnswer !== undefined ? question.shuffledOptions[userAnswer].text : 'Not answered';
            const correctAnswerText = question.shuffledOptions[question.shuffledCorrectIndex].text;

            return `
                <div class="question-review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <h5>Question ${index + 1}: ${isCorrect ? '✅' : '❌'}</h5>
                    <p class="review-question">${question.question}</p>
                    <p><strong>Your answer:</strong> ${userAnswerText}</p>
                    ${!isCorrect ? `<p><strong>Correct answer:</strong> ${correctAnswerText}</p>` : ''}
                </div>
            `;
        }).join('');
    }

    retakeQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeStarted = new Date();
        
        // Reset shuffled options for retake
        this.quizQuestions.forEach(question => {
            question.shuffledOptions = null;
            question.shuffledCorrectIndex = null;
        });
        
        this.showCurrentQuestion();
    }

    completeChapter() {
        const score = this.calculateScore();
        const percentage = (score / this.quizQuestions.length) * 100;
        
        // Since all answers are now required to be correct, users should always have 100%
        // But we'll keep the check for safety
        if (percentage >= 70) {
            if (window.StatisticsApp) {
                window.StatisticsApp.completeChapter(this.currentQuizId, percentage);
            }
        } else {
            if (window.StatisticsApp) {
                window.StatisticsApp.showNotification(
                    'Chapter mastery required! Please review the questions you missed.', 
                    'warning'
                );
            }
        }
    }
}

// Add styles for quiz feedback
const quizStyles = `
    .feedback {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .feedback.correct {
        background: rgba(22, 163, 74, 0.2);
        border: 2px solid var(--success-green);
        color: var(--success-green);
    }

    .feedback.incorrect {
        background: rgba(234, 88, 12, 0.2);
        border: 2px solid var(--warning-orange);
        color: var(--warning-orange);
    }

    .feedback i {
        font-size: 1.2rem;
        margin-top: 0.1rem;
    }

    .feedback strong {
        display: block;
        margin-bottom: 0.5rem;
    }

    .feedback p {
        margin: 0;
        color: var(--text-light);
    }

    .option.correct {
        border-color: var(--success-green) !important;
        background: rgba(22, 163, 74, 0.2) !important;
    }

    .option.incorrect {
        border-color: var(--warning-orange) !important;
        background: rgba(234, 88, 12, 0.2) !important;
    }

    .quiz-results {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .score-display {
        margin: 2rem 0;
    }

    .score-circle {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: var(--gradient-primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        box-shadow: var(--shadow-elevated);
    }

    .score-number {
        font-size: 2rem;
        font-weight: bold;
    }

    .score-total {
        font-size: 1.2rem;
        opacity: 0.8;
    }

    .score-percentage {
        font-size: 1rem;
        color: var(--secondary-gold);
        font-weight: bold;
    }

    .performance-summary h4 {
        color: var(--secondary-gold);
        margin: 1rem 0;
        font-size: 1.5rem;
    }

    .performance-message {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        font-style: italic;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin: 2rem 0;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        background: var(--darker-bg);
        border-radius: 8px;
    }

    .stat-item i {
        font-size: 1.5rem;
        color: var(--secondary-gold);
    }

    .question-review {
        text-align: left;
        margin: 2rem 0;
    }

    .question-review-item {
        background: var(--darker-bg);
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 8px;
        border-left: 4px solid var(--primary-red);
    }

    .question-review-item.correct {
        border-left-color: var(--success-green);
    }

    .question-review-item.incorrect {
        border-left-color: var(--warning-orange);
    }

    .review-question {
        font-weight: 500;
        margin: 0.5rem 0;
    }

    .quiz-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 2rem;
    }

    .secondary-actions {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(212, 175, 55, 0.3);
    }

    .nav-button.primary {
        background: var(--gradient-primary);
        color: white;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: var(--shadow-primary);
    }

    .nav-button.primary:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-elevated);
    }

    .nav-button.secondary {
        background: transparent;
        color: var(--text-muted);
        border: 1px solid var(--text-muted);
        font-size: 0.9rem;
        padding: 0.75rem 1.5rem;
        opacity: 0.8;
        transition: all 0.3s ease;
    }

    .nav-button.secondary:hover {
        color: var(--text-light);
        border-color: var(--text-light);
        opacity: 1;
        transform: none;
        box-shadow: none;
    }

    .option-letter {
        font-weight: bold;
        color: var(--secondary-gold);
        margin-right: 0.5rem;
    }

    .question-controls {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 2rem;
        gap: 1rem;
    }

    .next-button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .next-hint {
        font-size: 0.85rem;
        color: var(--text-muted);
        margin: 0;
        opacity: 0.8;
        font-style: italic;
        text-align: center;
    }

    .nav-button.secondary-nav {
        background: transparent;
        color: var(--text-muted);
        border: 1px solid var(--text-muted);
        font-size: 0.9rem;
        padding: 0.75rem 1.5rem;
        opacity: 0.7;
        transition: all 0.3s ease;
    }

    .nav-button.secondary-nav:hover:not(:disabled) {
        color: var(--text-light);
        border-color: var(--text-light);
        opacity: 1;
        transform: none;
        box-shadow: none;
    }

    .nav-button.secondary-nav:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    .nav-button.primary-nav {
        background: var(--gradient-primary);
        color: white;
        border: none;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        font-weight: 600;
        min-width: 140px;
        transition: all 0.3s ease;
    }

    .nav-button.primary-nav.enabled {
        transform: translateY(0);
        box-shadow: var(--shadow-primary);
        opacity: 1;
    }

    .nav-button.primary-nav.enabled:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-elevated);
    }

    .nav-button.primary-nav.disabled {
        background: var(--darker-bg);
        color: var(--text-muted);
        border: 2px solid var(--text-muted);
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }
        
        .quiz-actions {
            flex-direction: column;
        }
        
        .question-controls {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .next-button-container {
            order: -1;
        }

        .nav-button.secondary-nav {
            font-size: 0.8rem;
            padding: 0.6rem 1.2rem;
        }

        .nav-button.primary-nav {
            font-size: 1rem;
            padding: 0.9rem 1.8rem;
            min-width: 120px;
        }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = quizStyles;
document.head.appendChild(styleSheet);

// Initialize quiz manager
document.addEventListener('DOMContentLoaded', () => {
    window.QuizManager = new QuizManager();
});
