// Lesson Component
// Handles lesson display and interaction

class LessonComponent {
    constructor(dataManager, progressManager, eventManager) {
        this.dataManager = dataManager;
        this.progressManager = progressManager;
        this.eventManager = eventManager;
        this.currentLessonId = null;
        this.currentStepIndex = 0;
        this.lessonSteps = [];
        this.activityCompleted = false;
        this.container = null;
    }

    /**
     * Initialize the component
     */
    init() {
        this.container = document.getElementById('lesson-content');
        if (!this.container) {
            console.error('Lesson content container not found');
            return false;
        }

        this.setupEventListeners();
        this.setupNavigationButtons();
        return true;
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        this.eventManager.on(EVENTS.CHAPTER_STARTED, (chapter) => {
            this.loadLesson(chapter.id);
        });

        this.eventManager.on(EVENTS.LESSON_ACTIVITY_COMPLETED, () => {
            this.activityCompleted = true;
            this.updateNavigationButtons();
        });
    }

    /**
     * Setup navigation buttons
     */
    setupNavigationButtons() {
        const prevButton = document.getElementById('prev-step');
        const nextButton = document.getElementById('next-step');

        if (prevButton) {
            prevButton.addEventListener('click', () => this.previousStep());
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => this.nextStep());
        }
    }

    /**
     * Load lesson by ID
     */
    loadLesson(lessonId) {
        this.currentLessonId = lessonId;
        this.currentStepIndex = 0;
        
        const lesson = this.dataManager.getLesson(lessonId);
        if (!lesson) {
            this.showPlaceholderLesson(lessonId);
            return;
        }

        this.lessonSteps = lesson.steps || [];
        this.updateLessonTitle(lesson.title);
        this.showCurrentStep();
        this.updateNavigationButtons();
        this.updateProgress();

        this.eventManager.emit(EVENTS.LESSON_STARTED, { lessonId, lesson });
    }

    /**
     * Show current step
     */
    showCurrentStep() {
        if (this.currentStepIndex >= this.lessonSteps.length) {
            this.showLessonComplete();
            return;
        }

        const step = this.lessonSteps[this.currentStepIndex];
        this.renderStep(step);
        this.updateProgress();
        
        this.eventManager.emit(EVENTS.LESSON_STEP_CHANGED, {
            lessonId: this.currentLessonId,
            stepIndex: this.currentStepIndex,
            step
        });
    }

    /**
     * Render a lesson step
     */
    renderStep(step) {
        let stepHTML = `
            <div class="lesson-step active">
                <h2 class="step-title">${step.title}</h2>
                ${step.content}
            </div>
        `;

        // Add interactive element if present
        if (step.interactive) {
            stepHTML += this.generateInteractiveElement(step.interactive);
            this.activityCompleted = false;
        } else {
            this.activityCompleted = true;
        }

        this.container.innerHTML = stepHTML;
    }

    /**
     * Generate interactive element HTML
     */
    generateInteractiveElement(interactive) {
        switch (interactive.type) {
            case 'classification':
                return this.generateClassificationActivity(interactive);
            case 'calculation':
                return this.generateCalculationActivity(interactive);
            case 'bias-identification':
                return this.generateBiasActivity(interactive);
            case 'simulation':
                return this.generateSimulationActivity(interactive);
            default:
                return '<div class="interactive-element">Interactive activity not implemented</div>';
        }
    }

    /**
     * Generate classification activity
     */
    generateClassificationActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>${interactive.question}</h4>
                <div class="classification-activity">
                    ${interactive.items.map((item, index) => `
                        <div class="classification-item" data-index="${index}">
                            <span class="item-text">${item.text}</span>
                            <select class="classification-select">
                                <option value="">Choose classification...</option>
                                <option value="Discrete Quantitative">Discrete Quantitative</option>
                                <option value="Continuous Quantitative">Continuous Quantitative</option>
                                <option value="Nominal Qualitative">Nominal Qualitative</option>
                                <option value="Ordinal Qualitative">Ordinal Qualitative</option>
                            </select>
                        </div>
                    `).join('')}
                </div>
                <button class="check-answers-btn" onclick="window.lessonComponent.checkClassification()">
                    Check Answers
                </button>
                <div class="feedback-area"></div>
            </div>
        `;
    }

    /**
     * Generate calculation activity
     */
    generateCalculationActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>${interactive.question}</h4>
                <p><strong>Data:</strong> ${interactive.data.join(', ')}</p>
                <div class="calculation-inputs">
                    <label>Mean: <input type="number" id="mean-input" step="0.01" placeholder="Enter calculated mean"></label>
                    <label>Median: <input type="number" id="median-input" step="0.01" placeholder="Enter calculated median"></label>
                </div>
                <button class="check-answers-btn" onclick="window.lessonComponent.checkCalculation()">
                    Check Answers
                </button>
                <div class="feedback-area"></div>
            </div>
        `;
    }

    /**
     * Generate bias identification activity
     */
    generateBiasActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>Identify the type of bias in each scenario:</h4>
                <div class="bias-scenarios">
                    ${interactive.scenarios.map((scenario, index) => `
                        <div class="bias-scenario" data-index="${index}">
                            <p class="scenario-text">${scenario.text}</p>
                            <select class="bias-select">
                                <option value="">Choose bias type...</option>
                                <option value="Selection Bias">Selection Bias</option>
                                <option value="Response Bias">Response Bias</option>
                                <option value="Voluntary Response Bias">Voluntary Response Bias</option>
                                <option value="Survivorship Bias">Survivorship Bias</option>
                            </select>
                            <div class="scenario-feedback"></div>
                        </div>
                    `).join('')}
                </div>
                <button class="check-answers-btn" onclick="window.lessonComponent.checkBias()">
                    Check Answers
                </button>
                <div class="feedback-area"></div>
            </div>
        `;
    }

    /**
     * Generate simulation activity
     */
    generateSimulationActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>${interactive.question}</h4>
                <p>${interactive.description}</p>
                <div class="simulation-controls">
                    <label>Number of trials: 
                        <input type="number" id="trials-input" value="100" min="10" max="10000" step="10">
                    </label>
                    <button class="run-simulation-btn" onclick="window.lessonComponent.runSimulation()">
                        Run Simulation
                    </button>
                </div>
                <div class="simulation-results"></div>
            </div>
        `;
    }

    /**
     * Next step
     */
    nextStep() {
        // Check if activity needs to be completed first
        if (!this.activityCompleted && this.lessonSteps[this.currentStepIndex]?.interactive) {
            this.showActivityWarning();
            return false;
        }

        if (this.currentStepIndex < this.lessonSteps.length - 1) {
            this.currentStepIndex++;
            this.showCurrentStep();
            this.updateNavigationButtons();
            return true;
        }
        
        return false;
    }

    /**
     * Previous step
     */
    previousStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.showCurrentStep();
            this.updateNavigationButtons();
            return true;
        }
        
        return false;
    }

    /**
     * Show activity warning
     */
    showActivityWarning() {
        this.eventManager.emit(EVENTS.NOTIFICATION_SHOW, {
            message: "Complete the activity before proceeding to the next step.",
            type: "warning"
        });
    }

    /**
     * Update navigation buttons
     */
    updateNavigationButtons() {
        const prevButton = document.getElementById('prev-step');
        const nextButton = document.getElementById('next-step');

        if (prevButton) {
            prevButton.disabled = this.currentStepIndex === 0;
        }

        if (nextButton) {
            const isLastStep = this.currentStepIndex >= this.lessonSteps.length - 1;
            const hasInteractive = this.lessonSteps[this.currentStepIndex]?.interactive;
            
            nextButton.disabled = isLastStep || (hasInteractive && !this.activityCompleted);
            
            if (isLastStep) {
                nextButton.textContent = 'Complete Lesson';
                nextButton.onclick = () => this.showLessonComplete();
            } else {
                nextButton.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
                nextButton.onclick = () => this.nextStep();
            }
        }
    }

    /**
     * Update lesson progress
     */
    updateProgress() {
        const totalSteps = this.lessonSteps.length;
        const currentStep = this.currentStepIndex + 1;
        const progressPercent = (currentStep / totalSteps) * 100;

        const progressFill = document.getElementById('lesson-progress-fill');
        const progressText = document.getElementById('lesson-progress-text');

        if (progressFill) {
            progressFill.style.width = `${progressPercent}%`;
        }

        if (progressText) {
            progressText.textContent = `${currentStep}/${totalSteps}`;
        }
    }

    /**
     * Update lesson title
     */
    updateLessonTitle(title) {
        const titleElement = document.getElementById('lesson-title');
        if (titleElement) {
            titleElement.textContent = title;
        }
    }

    /**
     * Show lesson completion
     */
    showLessonComplete() {
        const concepts = this.getLessonConcepts();
        
        this.container.innerHTML = `
            <div class="lesson-step active">
                <h3>🏆 Chapter Complete!</h3>
                <div class="example-box">
                    <h4>Victory Achieved!</h4>
                    <p>You have successfully completed this chapter of your statistical training. The Emperor is pleased with your progress!</p>
                </div>
                
                <div class="completion-stats">
                    <h4>Mission Summary:</h4>
                    <ul>
                        <li>Steps completed: ${this.lessonSteps.length}</li>
                        <li>Concepts mastered: ${concepts.length}</li>
                        <li>Ready for Battle Assessment!</li>
                    </ul>
                </div>
                
                <div class="next-actions">
                    <button class="cta-button" onclick="window.lessonComponent.startQuiz()">
                        <i class="fas fa-sword"></i> Take Battle Assessment
                    </button>
                </div>
                
                <div class="secondary-actions">
                    <button class="nav-button secondary" onclick="window.StatisticsApp.showScreen('chapter-selection')">
                        <i class="fas fa-map"></i> Return to Campaign Map
                    </button>
                </div>
            </div>
        `;

        this.eventManager.emit(EVENTS.LESSON_COMPLETED, {
            lessonId: this.currentLessonId,
            stepsCompleted: this.lessonSteps.length
        });
    }

    /**
     * Show placeholder lesson
     */
    showPlaceholderLesson(lessonId) {
        const chapter = this.dataManager.getChapter(lessonId);
        const title = chapter ? chapter.title : `Chapter ${lessonId}`;
        
        this.updateLessonTitle(`${title} - In Development`);
        
        this.container.innerHTML = `
            <div class="lesson-step active">
                <h3>Chapter ${lessonId} - Coming Soon!</h3>
                <div class="example-box">
                    <h4>🚧 Under Construction by the Adeptus Mechanicus</h4>
                    <p>The Tech-Priests are still crafting this lesson. In the meantime, master the previous chapters to prepare for advanced statistical warfare!</p>
                </div>
                <p>This chapter will cover advanced topics essential for AP Statistics mastery. Check back soon for:</p>
                <ul>
                    <li>Detailed explanations with Warhammer 40K themes</li>
                    <li>Interactive examples and calculations</li>
                    <li>Practice problems to test your understanding</li>
                    <li>Battle scenarios that make statistics engaging</li>
                </ul>
            </div>
        `;

        // Disable navigation for placeholder
        const prevButton = document.getElementById('prev-step');
        const nextButton = document.getElementById('next-step');
        
        if (prevButton) prevButton.disabled = true;
        if (nextButton) nextButton.disabled = true;
    }

    /**
     * Get lesson concepts
     */
    getLessonConcepts() {
        const chapter = this.dataManager.getChapter(this.currentLessonId);
        return chapter?.concepts || [];
    }

    /**
     * Start quiz
     */
    startQuiz() {
        this.eventManager.emit(EVENTS.QUIZ_STARTED, this.currentLessonId);
    }

    /**
     * Get total steps
     */
    getTotalSteps() {
        return this.lessonSteps.length;
    }

    // Activity checking methods (called from HTML)
    checkClassification() {
        console.log('🔍 checkClassification called');
        
        try {
            if (!this.lessonSteps[this.currentStepIndex]?.interactive) {
                console.warn('No interactive content for current step');
                return;
            }
            
            const interactive = this.lessonSteps[this.currentStepIndex].interactive;
            const items = interactive.items;
            const feedbackArea = document.querySelector('.feedback-area');
            let allCorrect = true;
        let feedback = '<h5>🔍 Classification Assessment Results:</h5><ul>';

        document.querySelectorAll('.classification-item').forEach((item, index) => {
            const select = item.querySelector('.classification-select');
            const correct = items[index].type;
            const selected = select.value;
            
            if (selected === correct) {
                item.style.backgroundColor = 'rgba(22, 163, 74, 0.2)';
                item.style.borderColor = 'var(--success-green)';
                feedback += `<li>✅ <strong>${items[index].text}</strong> - Correct! (${correct})</li>`;
            } else {
                item.style.backgroundColor = 'rgba(234, 88, 12, 0.2)';
                item.style.borderColor = 'var(--warning-orange)';
                feedback += `<li>❌ <strong>${items[index].text}</strong><br>
                    &nbsp;&nbsp;&nbsp;Your answer: ${selected || 'Not selected'}<br>
                    &nbsp;&nbsp;&nbsp;Correct answer: ${correct}</li>`;
                allCorrect = false;
            }
        });

        feedback += '</ul>';
        
        if (allCorrect) {
            feedback += '<div style="background: rgba(22, 163, 74, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--success-green);">';
            feedback += '<p style="color: var(--success-green); font-weight: bold;">🏆 Perfect! You understand data classification!</p>';
            feedback += '</div>';
            this.activityCompleted = true;
            this.eventManager.emit(EVENTS.LESSON_ACTIVITY_COMPLETED);
        }

        feedbackArea.innerHTML = feedback;
        this.updateNavigationButtons();
        
        } catch (error) {
            console.error('Error in checkClassification:', error);
            const feedbackArea = document.querySelector('.feedback-area');
            if (feedbackArea) {
                feedbackArea.innerHTML = '<div style="color: red; padding: 1rem;">An error occurred while checking answers. Please try again.</div>';
            }
        }
    }

    checkCalculation() {
        if (!this.lessonSteps[this.currentStepIndex]?.interactive) return;
        
        const interactive = this.lessonSteps[this.currentStepIndex].interactive;
        const feedbackArea = document.querySelector('.feedback-area');
        
        const meanInput = document.getElementById('mean-input');
        const medianInput = document.getElementById('median-input');
        
        const meanValue = parseFloat(meanInput.value);
        const medianValue = parseFloat(medianInput.value);
        
        const meanCorrect = Math.abs(meanValue - interactive.answers.mean) < 0.1;
        const medianCorrect = medianValue === interactive.answers.median;
        
        let feedback = '<h5>📊 Calculation Results:</h5><ul>';
        
        if (meanCorrect && medianCorrect) {
            feedback += '<li>✅ <strong>Mean:</strong> Correct!</li>';
            feedback += '<li>✅ <strong>Median:</strong> Correct!</li>';
            feedback += '</ul><div style="background: rgba(22, 163, 74, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--success-green);">';
            feedback += '<p style="color: var(--success-green); font-weight: bold;">🏆 Excellent! Your calculations are correct!</p>';
            feedback += '</div>';
            this.activityCompleted = true;
            this.eventManager.emit(EVENTS.LESSON_ACTIVITY_COMPLETED);
        } else {
            if (!meanCorrect) {
                feedback += `<li>❌ <strong>Mean:</strong> ${meanValue || 'Not provided'}<br>
                    &nbsp;&nbsp;&nbsp;Correct answer: ${interactive.answers.mean}</li>`;
            } else {
                feedback += '<li>✅ <strong>Mean:</strong> Correct!</li>';
            }
            
            if (!medianCorrect) {
                feedback += `<li>❌ <strong>Median:</strong> ${medianValue || 'Not provided'}<br>
                    &nbsp;&nbsp;&nbsp;Correct answer: ${interactive.answers.median}</li>`;
            } else {
                feedback += '<li>✅ <strong>Median:</strong> Correct!</li>';
            }
            
            feedback += '</ul>';
        }
        
        feedbackArea.innerHTML = feedback;
        this.updateNavigationButtons();
    }

    checkBias() {
        if (!this.lessonSteps[this.currentStepIndex]?.interactive) return;
        
        const interactive = this.lessonSteps[this.currentStepIndex].interactive;
        const scenarios = interactive.scenarios;
        const feedbackArea = document.querySelector('.feedback-area');
        let allCorrect = true;

        document.querySelectorAll('.bias-scenario').forEach((scenario, index) => {
            const select = scenario.querySelector('.bias-select');
            const feedback = scenario.querySelector('.scenario-feedback');
            const correct = scenarios[index].bias;
            const selected = select.value;
            
            if (selected === correct) {
                scenario.style.backgroundColor = 'rgba(22, 163, 74, 0.1)';
                scenario.style.borderColor = 'var(--success-green)';
                feedback.innerHTML = `
                    <div style="background: rgba(22, 163, 74, 0.2); padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem; border: 1px solid var(--success-green);">
                        <p style="color: var(--success-green); font-weight: bold; margin: 0;">✅ Correct! This is ${correct}</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0 0; font-size: 0.9rem;">${scenarios[index].explanation}</p>
                    </div>`;
            } else {
                scenario.style.backgroundColor = 'rgba(234, 88, 12, 0.1)';
                scenario.style.borderColor = 'var(--warning-orange)';
                feedback.innerHTML = `
                    <div style="background: rgba(234, 88, 12, 0.2); padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem; border: 1px solid var(--warning-orange);">
                        <p style="color: var(--warning-orange); font-weight: bold; margin: 0;">❌ This is ${correct}</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0 0; font-size: 0.9rem;">${scenarios[index].explanation}</p>
                    </div>`;
                allCorrect = false;
            }
        });

        if (allCorrect) {
            feedbackArea.innerHTML = `
                <div style="background: rgba(22, 163, 74, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--success-green);">
                    <p style="color: var(--success-green); font-weight: bold;">🏆 Perfect! You can identify all types of bias!</p>
                </div>
            `;
            this.activityCompleted = true;
            this.eventManager.emit(EVENTS.LESSON_ACTIVITY_COMPLETED);
        }

        this.updateNavigationButtons();
    }

    runSimulation() {
        const trialsInput = document.getElementById('trials-input');
        const resultsDiv = document.querySelector('.simulation-results');
        const trials = parseInt(trialsInput.value) || 100;

        // Simple probability simulation example
        let successes = 0;
        for (let i = 0; i < trials; i++) {
            if (Math.random() < 0.5) successes++;
        }

        const probability = successes / trials;
        
        resultsDiv.innerHTML = `
            <div class="simulation-result">
                <h5>Simulation Results:</h5>
                <p><strong>Trials:</strong> ${trials}</p>
                <p><strong>Successes:</strong> ${successes}</p>
                <p><strong>Probability:</strong> ${probability.toFixed(3)}</p>
                <p><strong>Expected:</strong> 0.500</p>
                <p class="simulation-note">The more trials you run, the closer the result should get to 0.5!</p>
            </div>
        `;

        this.activityCompleted = true;
        this.eventManager.emit(EVENTS.LESSON_ACTIVITY_COMPLETED);
        this.updateNavigationButtons();
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LessonComponent };
}
