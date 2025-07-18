// Lesson Management System for Warhammer 40K Statistics Academy
class LessonManager {
    constructor() {
        this.currentLessonId = null;
        this.currentStepIndex = 0;
        this.lessonSteps = [];
        this.lessons = this.initializeLessons();
        this.activityCompleted = false; // Track if current step's activity is completed
    }

    initializeLessons() {
        return {
            1: {
                title: "Data Collection & the Imperial Census",
                steps: [
                    {
                        title: "The Great Census of Terra",
                        content: `
                            <h3>Welcome to Data Collection, Acolyte</h3>
                            <p>In the grim darkness of the 41st millennium, the Imperium of Man spans a million worlds. To govern such a vast empire, the Adeptus Administratum must collect and analyze data from every corner of the galaxy.</p>
                            
                            <div class="example-box">
                                <h4>🏛️ Imperial Example</h4>
                                <p>Imagine you're a Planetary Governor who needs to know how many Space Marines are stationed across different sectors. This requires systematic <strong>data collection</strong>.</p>
                            </div>
                            
                            <p>Statistics begins with gathering information. Just as the Emperor's servants catalog everything from troop movements to resource production, we must learn the sacred art of data collection.</p>
                        `,
                        interactive: null
                    },
                    {
                        title: "Types of Data in the Imperium",
                        content: `
                            <h3>Quantitative vs Qualitative Data</h3>
                            <p>Not all data serves the Emperor equally. We must understand the two main types:</p>
                            
                            <div class="example-box">
                                <h4>📊 Quantitative Data (Numbers)</h4>
                                <ul>
                                    <li><strong>Discrete:</strong> Number of Guardsmen in a regiment (you can't have 2.5 soldiers)</li>
                                    <li><strong>Continuous:</strong> The weight of a Space Marine's armor (can be any value within a range)</li>
                                </ul>
                            </div>
                            
                            <div class="example-box">
                                <h4>📝 Qualitative Data (Categories)</h4>
                                <ul>
                                    <li><strong>Nominal:</strong> Space Marine Chapter names (Ultramarines, Blood Angels, etc.)</li>
                                    <li><strong>Ordinal:</strong> Military ranks (Sergeant < Lieutenant < Captain)</li>
                                </ul>
                            </div>
                        `,
                        interactive: {
                            type: "classification",
                            question: "Classify these Imperial measurements:",
                            items: [
                                { text: "Number of Titans in a Legion", type: "Discrete Quantitative" },
                                { text: "Planet classification (Hive World, Death World, etc.)", type: "Nominal Qualitative" },
                                { text: "Threat level (Low, Medium, High, Critical)", type: "Ordinal Qualitative" },
                                { text: "Distance between star systems (light years)", type: "Continuous Quantitative" }
                            ]
                        }
                    },
                    {
                        title: "Sampling: Choosing Your Data Points",
                        content: `
                            <h3>The Art of Imperial Sampling</h3>
                            <p>The Imperium cannot survey every citizen on every world. Instead, we use <strong>sampling</strong> - selecting a representative portion of the population.</p>
                            
                            <div class="formula-box">
                                <strong>Population:</strong> All possible subjects of interest<br>
                                <strong>Sample:</strong> A subset of the population we actually study
                            </div>
                            
                            <div class="example-box">
                                <h4>⚔️ Battle Example</h4>
                                <p><strong>Population:</strong> All Imperial Guard regiments in the Segmentum Solar (millions of soldiers)</p>
                                <p><strong>Sample:</strong> 50 randomly selected regiments for a morale study</p>
                            </div>
                            
                            <h4>Sampling Methods:</h4>
                            <ul>
                                <li><strong>Simple Random:</strong> Every Guard regiment has equal chance of selection</li>
                                <li><strong>Stratified:</strong> Ensure representation from each planet type</li>
                                <li><strong>Cluster:</strong> Select entire sectors, then study all regiments within</li>
                                <li><strong>Systematic:</strong> Select every 10th regiment from the roster</li>
                            </ul>
                        `,
                        interactive: null
                    },
                    {
                        title: "Bias: The Chaos Corruption of Data",
                        content: `
                            <h3>Avoiding the Taint of Bias</h3>
                            <p>Just as Chaos corrupts the pure, bias corrupts our data. The Tech-Priests teach us to recognize and eliminate these statistical heresies:</p>
                            
                            <div class="example-box">
                                <h4>🚫 Common Biases in Imperial Data</h4>
                                <ul>
                                    <li><strong>Selection Bias:</strong> Only surveying Space Marines (elite troops) about overall military morale</li>
                                    <li><strong>Response Bias:</strong> Guardsmen giving answers they think Commissars want to hear</li>
                                    <li><strong>Voluntary Response Bias:</strong> Only disgruntled soldiers filling out feedback forms</li>
                                    <li><strong>Survivorship Bias:</strong> Studying only veterans who survived battles (ignoring casualties)</li>
                                </ul>
                            </div>
                            
                            <div class="formula-box">
                                <strong>Key Principle:</strong> A biased sample leads to biased conclusions, no matter how large the dataset!
                            </div>
                        `,
                        interactive: {
                            type: "bias-identification",
                            scenarios: [
                                {
                                    text: "A survey about Hive World living conditions is conducted only in the upper spires",
                                    bias: "Selection Bias",
                                    explanation: "This excludes the majority of the population living in lower levels"
                                },
                                {
                                    text: "Asking 'Don't you agree the Emperor protects?' in a loyalty survey",
                                    bias: "Response Bias",
                                    explanation: "The question leads respondents toward a specific answer"
                                }
                            ]
                        }
                    },
                    {
                        title: "Experiments vs Observational Studies",
                        content: `
                            <h3>The Scientific Method of the Omnissiah</h3>
                            <p>The Adeptus Mechanicus teaches us two ways to gather data:</p>
                            
                            <div class="example-box">
                                <h4>🔬 Experiments (We Control Variables)</h4>
                                <p><strong>Example:</strong> Testing if a new combat stimulant improves Guardsman performance by randomly assigning soldiers to receive either the stimulant or a placebo.</p>
                                <p><strong>Key:</strong> Random assignment allows us to determine causation</p>
                            </div>
                            
                            <div class="example-box">
                                <h4>👁️ Observational Studies (We Just Watch)</h4>
                                <p><strong>Example:</strong> Comparing battle performance between regiments that naturally have different training backgrounds.</p>
                                <p><strong>Key:</strong> We can find correlation but not prove causation</p>
                            </div>
                            
                            <div class="formula-box">
                                <strong>Remember:</strong> Correlation ≠ Causation<br>
                                Only well-designed experiments can prove cause and effect!
                            </div>
                            
                            <p>Understanding this difference is crucial for interpreting data correctly and avoiding false conclusions that could doom Imperial campaigns.</p>
                        `,
                        interactive: null
                    }
                ]
            },
            2: {
                title: "Descriptive Statistics: Cataloging the Emperor's Armies",
                steps: [
                    {
                        title: "Organizing Imperial Data",
                        content: `
                            <h3>The Sacred Art of Data Organization</h3>
                            <p>Raw data is like an untrained Imperial Guard recruit - useful, but needs discipline and structure. Descriptive statistics help us organize and summarize vast amounts of information.</p>
                            
                            <div class="example-box">
                                <h4>⚔️ Battle Scenario</h4>
                                <p>You're analyzing the combat effectiveness of 1,000 Space Marines across different chapters. Rather than examining each warrior individually, you need summary statistics to understand the big picture.</p>
                            </div>
                            
                            <p>Descriptive statistics answer key questions:</p>
                            <ul>
                                <li>What's the typical performance? (Central Tendency)</li>
                                <li>How much variation exists? (Spread/Variability)</li>
                                <li>What's the overall distribution pattern? (Shape)</li>
                            </ul>
                        `,
                        interactive: null
                    },
                    {
                        title: "Measures of Central Tendency",
                        content: `
                            <h3>Finding the Center of Imperial Data</h3>
                            <p>When the Adeptus Administratum needs to understand "typical" values, they use measures of central tendency:</p>
                            
                            <div class="formula-box">
                                <strong>Mean (μ or x̄):</strong> The average value<br>
                                Formula: Sum of all values ÷ Number of values
                            </div>
                            
                            <div class="example-box">
                                <h4>📊 Space Marine Kill Counts Example</h4>
                                <p>Five Ultramarines' enemy kills in last battle: 12, 15, 18, 14, 16</p>
                                <p><strong>Mean:</strong> (12 + 15 + 18 + 14 + 16) ÷ 5 = 15 kills</p>
                                <p><strong>Median:</strong> Middle value when arranged in order = 15 kills</p>
                                <p><strong>Mode:</strong> Most frequent value = None (all different)</p>
                            </div>
                            
                            <h4>When to Use Each:</h4>
                            <ul>
                                <li><strong>Mean:</strong> Best for symmetric data without extreme outliers</li>
                                <li><strong>Median:</strong> Better when data is skewed or has outliers</li>
                                <li><strong>Mode:</strong> Useful for categorical data or finding most common value</li>
                            </ul>
                        `,
                        interactive: {
                            type: "calculation",
                            question: "Calculate the mean and median for these Guardsman accuracy scores:",
                            data: [85, 92, 78, 88, 95, 82, 90],
                            answers: {
                                mean: 87.14,
                                median: 88
                            }
                        }
                    },
                    {
                        title: "Measures of Variability",
                        content: `
                            <h3>Understanding the Spread of Imperial Forces</h3>
                            <p>Central tendency tells us the center, but variability tells us how spread out our data is - crucial for understanding reliability and consistency.</p>
                            
                            <div class="formula-box">
                                <strong>Range:</strong> Maximum - Minimum<br>
                                <strong>Standard Deviation (σ or s):</strong> Average distance from the mean<br>
                                <strong>Variance (σ² or s²):</strong> Standard deviation squared
                            </div>
                            
                            <div class="example-box">
                                <h4>🎯 Precision vs Accuracy Example</h4>
                                <p><strong>Regiment A:</strong> Shooting scores: 85, 87, 83, 86, 84 (Low variability, consistent)</p>
                                <p><strong>Regiment B:</strong> Shooting scores: 70, 95, 75, 90, 80 (High variability, inconsistent)</p>
                                <p>Both have the same mean (85), but Regiment A is more reliable!</p>
                            </div>
                            
                            <h4>Interpreting Standard Deviation:</h4>
                            <ul>
                                <li><strong>Small σ:</strong> Data points cluster close to mean (consistent performance)</li>
                                <li><strong>Large σ:</strong> Data points spread far from mean (variable performance)</li>
                                <li><strong>σ = 0:</strong> All values identical (perfect consistency)</li>
                            </ul>
                        `,
                        interactive: null
                    },
                    {
                        title: "The Five Number Summary",
                        content: `
                            <h3>Imperial Data Intelligence Report</h3>
                            <p>The five-number summary provides a complete tactical overview of your data distribution:</p>
                            
                            <div class="formula-box">
                                <strong>Five Number Summary:</strong><br>
                                1. Minimum<br>
                                2. First Quartile (Q1) - 25th percentile<br>
                                3. Median (Q2) - 50th percentile<br>
                                4. Third Quartile (Q3) - 75th percentile<br>
                                5. Maximum
                            </div>
                            
                            <div class="example-box">
                                <h4>⚡ Titan Combat Effectiveness Scores</h4>
                                <p>Data: 45, 52, 58, 61, 65, 68, 72, 75, 78, 82, 89, 95</p>
                                <ul>
                                    <li><strong>Min:</strong> 45 (Weakest performance)</li>
                                    <li><strong>Q1:</strong> 58 (25% score below this)</li>
                                    <li><strong>Median:</strong> 68 (Middle performance)</li>
                                    <li><strong>Q3:</strong> 78 (75% score below this)</li>
                                    <li><strong>Max:</strong> 95 (Best performance)</li>
                                </ul>
                            </div>
                            
                            <p><strong>Interquartile Range (IQR) = Q3 - Q1</strong> measures the spread of the middle 50% of data, making it resistant to outliers.</p>
                        `,
                        interactive: {
                            type: "quartile-calculation",
                            question: "Find Q1, Q2, and Q3 for these Space Marine reaction times (milliseconds):",
                            data: [120, 135, 142, 148, 155, 162, 168, 175, 182]
                        }
                    },
                    {
                        title: "Detecting Outliers: Purging Corrupted Data",
                        content: `
                            <h3>Identifying Heretical Data Points</h3>
                            <p>Just as the Inquisition hunts heretics, statisticians must identify outliers - data points that don't belong with the rest.</p>
                            
                            <div class="formula-box">
                                <strong>1.5 × IQR Rule for Outliers:</strong><br>
                                Lower Bound = Q1 - 1.5 × IQR<br>
                                Upper Bound = Q3 + 1.5 × IQR<br>
                                Any data outside these bounds is an outlier
                            </div>
                            
                            <div class="example-box">
                                <h4>🔍 Inquisition Investigation</h4>
                                <p>Examining psyker power levels: Q1 = 25, Q3 = 75, IQR = 50</p>
                                <p><strong>Lower Bound:</strong> 25 - 1.5(50) = -50</p>
                                <p><strong>Upper Bound:</strong> 75 + 1.5(50) = 150</p>
                                <p>A psyker with power level 200 would be an outlier (possible Chaos corruption!)</p>
                            </div>
                            
                            <h4>Dealing with Outliers:</h4>
                            <ul>
                                <li><strong>Investigate:</strong> Is it a measurement error or genuine extreme value?</li>
                                <li><strong>Context matters:</strong> A Space Marine's exceptional performance isn't necessarily an error</li>
                                <li><strong>Consider robust statistics:</strong> Median and IQR are less affected by outliers than mean and standard deviation</li>
                            </ul>
                        `,
                        interactive: null
                    }
                ]
            },
            3: {
                title: "Probability: The Emperor's Will in Numbers",
                steps: [
                    {
                        title: "The Mathematics of Fate",
                        content: `
                            <h3>Understanding Probability in the 41st Millennium</h3>
                            <p>In the grim darkness of the future, uncertainty reigns supreme. Probability helps us quantify the likelihood of events, from successful orbital bombardments to the chance of Warp travel arriving on schedule.</p>
                            
                            <div class="formula-box">
                                <strong>Probability Formula:</strong><br>
                                P(Event) = Number of favorable outcomes / Total number of possible outcomes<br>
                                Range: 0 ≤ P(Event) ≤ 1
                            </div>
                            
                            <div class="example-box">
                                <h4>🎲 Imperial Guard Dice Example</h4>
                                <p>Rolling a standard die for a Guard unit's fate:</p>
                                <ul>
                                    <li>P(Rolling a 6) = 1/6 ≈ 0.167 (16.7%)</li>
                                    <li>P(Rolling even) = 3/6 = 0.5 (50%)</li>
                                    <li>P(Rolling 7) = 0/6 = 0 (Impossible)</li>
                                    <li>P(Rolling 1-6) = 6/6 = 1 (Certain)</li>
                                </ul>
                            </div>
                        `,
                        interactive: null
                    },
                    {
                        title: "The Law of Large Numbers",
                        content: `
                            <h3>Why the Imperium Relies on Vast Armies</h3>
                            <p>The Law of Large Numbers explains why the Imperial Guard's strategy of overwhelming numbers is mathematically sound.</p>
                            
                            <div class="example-box">
                                <h4>⚔️ Battle Application</h4>
                                <p>Each Guardsman has a 60% chance of hitting their target:</p>
                                <ul>
                                    <li><strong>10 Guardsmen:</strong> Might get 4-8 hits (high variation)</li>
                                    <li><strong>1,000 Guardsmen:</strong> Will get very close to 600 hits</li>
                                    <li><strong>1,000,000 Guardsmen:</strong> Will get extremely close to 600,000 hits</li>
                                </ul>
                                <p>As sample size increases, actual results approach theoretical probability!</p>
                            </div>
                            
                            <div class="formula-box">
                                <strong>Key Insight:</strong> Individual results are unpredictable, but large-scale patterns are highly predictable.
                            </div>
                        `,
                        interactive: {
                            type: "simulation",
                            description: "Watch how probability stabilizes with more trials"
                        }
                    },
                    {
                        title: "Conditional Probability",
                        content: `
                            <h3>Intelligence Reports and Updated Probabilities</h3>
                            <p>In warfare, new information changes everything. Conditional probability helps us update our estimates when we gain intelligence.</p>
                            
                            <div class="formula-box">
                                <strong>Conditional Probability:</strong><br>
                                P(A|B) = P(A and B) / P(B)<br>
                                Read as: "Probability of A given that B has occurred"
                            </div>
                            
                            <div class="example-box">
                                <h4>🔍 Space Marine Recruitment</h4>
                                <p>Scenario: Evaluating potential recruits</p>
                                <ul>
                                    <li>P(Survives training) = 0.1 (10% survival rate)</li>
                                    <li>P(From Death World) = 0.05 (5% are from Death Worlds)</li>
                                    <li>P(Survives AND from Death World) = 0.03 (3%)</li>
                                </ul>
                                <p><strong>Question:</strong> What's P(Survives | From Death World)?</p>
                                <p><strong>Answer:</strong> 0.03 ÷ 0.05 = 0.6 (60%)</p>
                                <p>Death World recruits have much higher survival rates!</p>
                            </div>
                        `,
                        interactive: null
                    },
                    {
                        title: "Independence and Multiplication Rule",
                        content: `
                            <h3>When Events Don't Influence Each Other</h3>
                            <p>Some events in the Imperium are independent - the outcome of one doesn't affect the other.</p>
                            
                            <div class="formula-box">
                                <strong>Independent Events:</strong><br>
                                P(A and B) = P(A) × P(B)<br>
                                <strong>Dependent Events:</strong><br>
                                P(A and B) = P(A) × P(B|A)
                            </div>
                            
                            <div class="example-box">
                                <h4>🚀 Multiple Drop Pod Landings</h4>
                                <p><strong>Independent scenario:</strong> Two drop pods landing on different planets</p>
                                <ul>
                                    <li>P(Pod 1 succeeds) = 0.9</li>
                                    <li>P(Pod 2 succeeds) = 0.9</li>
                                    <li>P(Both succeed) = 0.9 × 0.9 = 0.81</li>
                                </ul>
                                
                                <p><strong>Dependent scenario:</strong> Two pods landing on same planet under enemy fire</p>
                                <ul>
                                    <li>If first pod alerts enemies, second pod's success rate drops</li>
                                    <li>Must use conditional probability</li>
                                </ul>
                            </div>
                        `,
                        interactive: {
                            type: "independence-test",
                            scenarios: [
                                "Rolling two dice",
                                "Drawing cards without replacement",
                                "Weather on consecutive days"
                            ]
                        }
                    },
                    {
                        title: "Complement and Addition Rules",
                        content: `
                            <h3>The Complete Picture of Probability</h3>
                            <p>Understanding what doesn't happen is often as important as what does happen in Imperial warfare.</p>
                            
                            <div class="formula-box">
                                <strong>Complement Rule:</strong><br>
                                P(not A) = 1 - P(A)<br><br>
                                <strong>Addition Rule:</strong><br>
                                P(A or B) = P(A) + P(B) - P(A and B)
                            </div>
                            
                            <div class="example-box">
                                <h4>🛡️ Void Shield Analysis</h4>
                                <p>A Titan's void shields have these failure probabilities:</p>
                                <ul>
                                    <li>P(Primary shield fails) = 0.2</li>
                                    <li>P(Secondary shield fails) = 0.15</li>
                                    <li>P(Both shields fail) = 0.05</li>
                                </ul>
                                
                                <p><strong>P(At least one shield fails) = 0.2 + 0.15 - 0.05 = 0.3</strong></p>
                                <p><strong>P(No shields fail) = 1 - 0.3 = 0.7</strong></p>
                                <p>The Titan has a 70% chance of maintaining full protection!</p>
                            </div>
                        `,
                        interactive: null
                    }
                ]
            }
            // Additional lessons would continue here...
        };
    }

    loadLesson(lessonId) {
        this.currentLessonId = lessonId;
        this.currentStepIndex = 0;
        this.lessonSteps = this.lessons[lessonId]?.steps || [];
        
        if (this.lessonSteps.length === 0) {
            this.showPlaceholderLesson(lessonId);
            return;
        }

        // Update lesson title
        document.getElementById('lesson-title').textContent = this.lessons[lessonId].title;
        
        // Load first step
        this.showCurrentStep();
        this.updateNavigationButtons();
    }

    showPlaceholderLesson(lessonId) {
        const placeholderContent = `
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
        
        document.getElementById('lesson-content').innerHTML = placeholderContent;
        document.getElementById('lesson-title').textContent = `Chapter ${lessonId} - In Development`;
        
        // Disable navigation for placeholder
        document.getElementById('prev-step').disabled = true;
        document.getElementById('next-step').disabled = true;
    }

    showCurrentStep() {
        const lessonContent = document.getElementById('lesson-content');
        
        if (this.currentStepIndex >= this.lessonSteps.length) {
            this.showLessonComplete();
            return;
        }

        const step = this.lessonSteps[this.currentStepIndex];
        let stepHTML = `
            <div class="lesson-step active">
                ${step.content}
            </div>
        `;

        // Add interactive element if present
        if (step.interactive) {
            stepHTML += this.generateInteractiveElement(step.interactive);
            this.activityCompleted = false; // Require completion for interactive steps
        } else {
            this.activityCompleted = true; // No activity to complete for non-interactive steps
        }

        lessonContent.innerHTML = stepHTML;
        this.updateProgress();
    }

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
                return '<div class="interactive-element"><p>Interactive element coming soon!</p></div>';
        }
    }

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
                <button class="check-answers-btn" onclick="window.LessonManager.checkClassification()">
                    Check Answers
                </button>
                <div class="feedback-area"></div>
            </div>
        `;
    }

    generateCalculationActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>${interactive.question}</h4>
                <p><strong>Data:</strong> ${interactive.data.join(', ')}</p>
                <div class="calculation-inputs">
                    <label>Mean: <input type="number" id="mean-input" step="0.01" placeholder="Enter calculated mean"></label>
                    <label>Median: <input type="number" id="median-input" step="0.01" placeholder="Enter calculated median"></label>
                </div>
                <button class="check-answers-btn" onclick="window.LessonManager.checkCalculation()">
                    Check Answers
                </button>
                <div class="feedback-area"></div>
            </div>
        `;
    }

    generateBiasActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>Identify the Type of Bias</h4>
                ${interactive.scenarios.map((scenario, index) => `
                    <div class="bias-scenario" data-index="${index}">
                        <p><strong>Scenario:</strong> ${scenario.text}</p>
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
                <button class="check-answers-btn" onclick="window.LessonManager.checkBias()">
                    Check Answers
                </button>
            </div>
        `;
    }

    generateSimulationActivity(interactive) {
        return `
            <div class="interactive-element">
                <h4>Probability Simulation</h4>
                <p>Watch how the Law of Large Numbers works in practice!</p>
                <div class="simulation-controls">
                    <button onclick="window.LessonManager.runSimulation(10)">10 Trials</button>
                    <button onclick="window.LessonManager.runSimulation(100)">100 Trials</button>
                    <button onclick="window.LessonManager.runSimulation(1000)">1000 Trials</button>
                </div>
                <div class="simulation-results">
                    <canvas id="simulation-chart" width="400" height="200"></canvas>
                </div>
            </div>
        `;
    }

    nextStep() {
        // Check if current step has an interactive activity that needs completion
        const currentStep = this.lessonSteps[this.currentStepIndex];
        const hasInteractiveActivity = currentStep && currentStep.interactive;
        
        if (hasInteractiveActivity && !this.activityCompleted) {
            // Don't proceed if activity not completed
            return false;
        }
        
        if (this.currentStepIndex < this.lessonSteps.length - 1) {
            this.currentStepIndex++;
            this.activityCompleted = false; // Reset for new step
            this.showCurrentStep();
            this.updateNavigationButtons();
            return true;
        } else if (this.currentStepIndex === this.lessonSteps.length - 1) {
            // Move to lesson complete
            this.currentStepIndex++;
            this.activityCompleted = false; // Reset for new step
            this.showLessonComplete();
            this.updateNavigationButtons();
            return true;
        }
        return false;
    }

    previousStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.activityCompleted = false; // Reset for the step we're going back to
            this.showCurrentStep();
            this.updateNavigationButtons();
        }
    }

    showLessonComplete() {
        const lessonContent = document.getElementById('lesson-content');
        lessonContent.innerHTML = `
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
                        <li>Concepts mastered: ${this.getLessonConcepts().length}</li>
                        <li>Ready for Battle Assessment!</li>
                    </ul>
                </div>
                
                <div class="next-actions">
                    <button class="cta-button" onclick="window.LessonManager.startQuiz()">
                        <i class="fas fa-sword"></i> Take Battle Assessment
                    </button>
                    <button class="nav-button" onclick="window.StatisticsApp.showScreen('chapter-selection')">
                        <i class="fas fa-map"></i> Return to Campaign Map
                    </button>
                </div>
            </div>
        `;

        // Chapter completion notification
        if (window.StatisticsApp) {
            window.StatisticsApp.showNotification("Chapter completed! Well done, Battle-Brother!", 'success');
        }
    }

    startQuiz() {
        if (window.QuizManager) {
            window.QuizManager.startQuiz(this.currentLessonId);
            window.StatisticsApp.showScreen('quiz-screen');
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-step');
        const nextBtn = document.getElementById('next-step');
        
        prevBtn.disabled = this.currentStepIndex === 0;
        
        // Check if current step has an interactive activity that needs completion
        const currentStep = this.lessonSteps[this.currentStepIndex];
        const hasInteractiveActivity = currentStep && currentStep.interactive;
        
        if (this.currentStepIndex >= this.lessonSteps.length) {
            nextBtn.textContent = 'Lesson Complete';
            nextBtn.disabled = true;
        } else if (this.currentStepIndex === this.lessonSteps.length - 1) {
            nextBtn.innerHTML = 'Complete <i class="fas fa-trophy"></i>';
            // Disable if there's an interactive activity that hasn't been completed
            nextBtn.disabled = hasInteractiveActivity && !this.activityCompleted;
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
            // Disable if there's an interactive activity that hasn't been completed
            nextBtn.disabled = hasInteractiveActivity && !this.activityCompleted;
        }
    }

    updateProgress() {
        const progressPercent = ((this.currentStepIndex + 1) / (this.lessonSteps.length + 1)) * 100;
        document.getElementById('lesson-progress-fill').style.width = `${progressPercent}%`;
        document.getElementById('lesson-progress-text').textContent = 
            `${this.currentStepIndex + 1}/${this.lessonSteps.length + 1}`;
    }

    getTotalSteps() {
        return this.lessonSteps.length + 1; // +1 for completion step
    }

    getLessonConcepts() {
        // Extract key concepts from lesson (could be enhanced)
        return ['Data Types', 'Sampling', 'Bias Detection', 'Statistical Thinking'];
    }

    // Interactive Activity Methods
    checkClassification() {
        const items = this.lessonSteps[this.currentStepIndex].interactive.items;
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
                    &nbsp;&nbsp;&nbsp;Correct answer: ${correct}<br>
                    &nbsp;&nbsp;&nbsp;${this.getClassificationExplanation(items[index].text, correct)}</li>`;
                allCorrect = false;
            }
        });

        feedback += '</ul>';
        if (allCorrect) {
            feedback += '<div style="background: rgba(22, 163, 74, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--success-green);">';
            feedback += '<p style="color: var(--success-green); font-weight: bold;">🏆 Perfect! You understand data classification!</p>';
            feedback += '<p style="color: var(--text-light);">You correctly identified all data types - a crucial skill for any Imperial data analyst! You may now proceed.</p>';
            feedback += '</div>';
            this.activityCompleted = true;
        } else {
            feedback += '<div style="background: rgba(234, 88, 12, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--warning-orange);">';
            feedback += '<p style="color: var(--warning-orange); font-weight: bold;">📚 You must get all answers correct to proceed</p>';
            feedback += '<p style="color: var(--text-light);">Study the correct answers above and try again. Understanding data types is fundamental to choosing the right statistical methods!</p>';
            feedback += '</div>';
            this.activityCompleted = false;
        }

        feedbackArea.innerHTML = feedback;
        this.updateNavigationButtons();
    }

    getClassificationExplanation(itemText, correctType) {
        const explanations = {
            'Number of Titans in a Legion': 'You can count individual Titans (1, 2, 3...) but cannot have 2.5 Titans.',
            'Planet classification (Hive World, Death World, etc.)': 'These are categories with no numerical order or ranking.',
            'Threat level (Low, Medium, High, Critical)': 'These categories have a clear ranking from least to most dangerous.',
            'Distance between star systems (light years)': 'Distance can be any value within a range (continuous measurement).'
        };
        
        return explanations[itemText] || `This is ${correctType.toLowerCase()} data.`;
    }

    checkCalculation() {
        const interactive = this.lessonSteps[this.currentStepIndex].interactive;
        const meanInput = document.getElementById('mean-input').value;
        const medianInput = document.getElementById('median-input').value;
        const feedbackArea = document.querySelector('.feedback-area');
        
        const meanValue = parseFloat(meanInput);
        const medianValue = parseFloat(medianInput);
        const meanCorrect = Math.abs(meanValue - interactive.answers.mean) < 0.1;
        const medianCorrect = Math.abs(medianValue - interactive.answers.median) < 0.1;
        
        let feedback = '<h5>📊 Calculation Results:</h5><ul>';
        
        if (meanCorrect) {
            feedback += `<li>✅ <strong>Mean:</strong> ${meanValue} - Correct!</li>`;
        } else {
            feedback += `<li>❌ <strong>Mean:</strong> ${meanValue || 'Not provided'}<br>
                &nbsp;&nbsp;&nbsp;Correct answer: ${interactive.answers.mean}<br>
                &nbsp;&nbsp;&nbsp;Calculation: Sum all values (${interactive.data.join(' + ')}) = ${interactive.data.reduce((a, b) => a + b, 0)}, then divide by ${interactive.data.length}</li>`;
        }
        
        if (medianCorrect) {
            feedback += `<li>✅ <strong>Median:</strong> ${medianValue} - Correct!</li>`;
        } else {
            const sortedData = [...interactive.data].sort((a, b) => a - b);
            feedback += `<li>❌ <strong>Median:</strong> ${medianValue || 'Not provided'}<br>
                &nbsp;&nbsp;&nbsp;Correct answer: ${interactive.answers.median}<br>
                &nbsp;&nbsp;&nbsp;Method: Sort data (${sortedData.join(', ')}) and find middle value</li>`;
        }
        
        feedback += '</ul>';
        
        if (meanCorrect && medianCorrect) {
            feedback += '<div style="background: rgba(22, 163, 74, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--success-green);">';
            feedback += '<p style="color: var(--success-green); font-weight: bold;">🎯 Excellent calculations, Battle-Brother!</p>';
            feedback += '<p style="color: var(--text-light);">You have mastered the sacred mathematics of central tendency! You may now proceed.</p>';
            feedback += '</div>';
            this.activityCompleted = true;
        } else {
            feedback += '<div style="background: rgba(234, 88, 12, 0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem; border: 2px solid var(--warning-orange);">';
            feedback += '<p style="color: var(--warning-orange); font-weight: bold;">📝 You must get both calculations correct to proceed</p>';
            feedback += '<p style="color: var(--text-light);">Review the calculations above and try again. These calculations are essential for statistical analysis!</p>';
            feedback += '</div>';
            this.activityCompleted = false;
        }
        
        feedbackArea.innerHTML = feedback;
        this.updateNavigationButtons();
    }

    checkBias() {
        const scenarios = this.lessonSteps[this.currentStepIndex].interactive.scenarios;
        let allCorrect = true;
        let correctCount = 0;
        
        document.querySelectorAll('.bias-scenario').forEach((scenario, index) => {
            const select = scenario.querySelector('.bias-select');
            const feedback = scenario.querySelector('.scenario-feedback');
            const correct = scenarios[index].bias;
            const selected = select.value;
            
            if (selected === correct) {
                feedback.innerHTML = `
                    <div style="background: rgba(22, 163, 74, 0.2); padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem; border: 1px solid var(--success-green);">
                        <p style="color: var(--success-green); font-weight: bold; margin: 0;">✅ Correct!</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0 0; font-size: 0.9rem;">${scenarios[index].explanation}</p>
                    </div>`;
                scenario.style.backgroundColor = 'rgba(22, 163, 74, 0.1)';
                scenario.style.borderColor = 'var(--success-green)';
                correctCount++;
            } else {
                feedback.innerHTML = `
                    <div style="background: rgba(234, 88, 12, 0.2); padding: 0.75rem; border-radius: 6px; margin-top: 0.5rem; border: 1px solid var(--warning-orange);">
                        <p style="color: var(--warning-orange); font-weight: bold; margin: 0;">❌ This is ${correct}</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0 0; font-size: 0.9rem;">${scenarios[index].explanation}</p>
                        ${selected ? `<p style="color: var(--text-muted); margin: 0.5rem 0 0 0; font-size: 0.85rem;">Your answer: ${selected}</p>` : ''}
                    </div>`;
                scenario.style.backgroundColor = 'rgba(234, 88, 12, 0.1)';
                scenario.style.borderColor = 'var(--warning-orange)';
                allCorrect = false;
            }
        });
        
        // Add overall feedback
        const checkButton = document.querySelector('.check-answers-btn');
        if (checkButton) {
            const existingOverallFeedback = document.querySelector('.overall-bias-feedback');
            if (existingOverallFeedback) {
                existingOverallFeedback.remove();
            }
            
            const overallFeedback = document.createElement('div');
            overallFeedback.className = 'overall-bias-feedback';
            overallFeedback.style.marginTop = '1rem';
            
            if (allCorrect) {
                overallFeedback.innerHTML = `
                    <div style="background: rgba(22, 163, 74, 0.2); padding: 1rem; border-radius: 8px; border: 2px solid var(--success-green);">
                        <p style="color: var(--success-green); font-weight: bold; margin: 0;">🛡️ Bias Detection Mastery!</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0 0;">You have shown the vigilance of an Inquisitor in detecting statistical heresy! You may now proceed.</p>
                    </div>`;
                this.activityCompleted = true;
            } else {
                overallFeedback.innerHTML = `
                    <div style="background: rgba(234, 88, 12, 0.2); padding: 1rem; border-radius: 8px; border: 2px solid var(--warning-orange);">
                        <p style="color: var(--warning-orange); font-weight: bold; margin: 0;">📖 Score: ${correctCount}/${scenarios.length}</p>
                        <p style="color: var(--text-light); margin: 0.5rem 0 0 0;">You must get all scenarios correct to proceed. Detecting bias is crucial for valid statistical analysis.</p>
                    </div>`;
                this.activityCompleted = false;
            }
            
            checkButton.parentNode.insertBefore(overallFeedback, checkButton.nextSibling);
            this.updateNavigationButtons();
        }
    }

    runSimulation(trials) {
        // Simple simulation for demonstration
        const results = [];
        let successes = 0;
        
        for (let i = 0; i < trials; i++) {
            if (Math.random() < 0.6) { // 60% success rate
                successes++;
            }
            results.push(successes / (i + 1)); // Running proportion
        }
        
        // Update display (simplified)
        const resultsDiv = document.querySelector('.simulation-results');
        resultsDiv.innerHTML += `
            <p>After ${trials} trials: ${successes} successes (${(successes/trials*100).toFixed(1)}%)</p>
            <p>Theoretical: 60%</p>
        `;
    }
}

// Initialize lesson manager
document.addEventListener('DOMContentLoaded', () => {
    window.LessonManager = new LessonManager();
});
