// Example: Adding Chapter 4 Content
// This file demonstrates how to easily add new content to the system

// First, let's add Chapter 4 to the chapters data
// This would typically be done in js/data/chapters.js

const newChapter4 = {
    id: 4,
    title: "Distributions: Patterns in the Warp",
    description: "Discover the hidden patterns that govern reality. Master normal, binomial, and other key distributions.",
    difficulty: "Adept",
    estimatedTime: "60 min",
    topics: ["Normal Distribution", "Binomial Distribution", "Z-scores"],
    concepts: ["Normal Distribution", "Binomial Distribution", "Standard Normal", "Z-scores"],
    prerequisites: [1, 2, 3],
    unlockRequirements: {
        previousChapters: [1, 2, 3],
        minimumScore: 75
    }
};

// Next, let's create the lesson content for Chapter 4
// This would typically be added to js/data/lessons.js

const newLesson4 = {
    title: "Distributions: Patterns in the Warp",
    steps: [
        {
            title: "Introduction to Distributions",
            content: `
                <h3>The Mathematical Patterns of the Universe</h3>
                <p>In the grim darkness of the 41st millennium, even chaos follows patterns. Statistical distributions help us understand and predict these patterns in Imperial data.</p>
                
                <div class="example-box">
                    <h4>🎯 What is a Distribution?</h4>
                    <p>A distribution shows us how values are spread out across a dataset. Just as the Emperor's light spreads across the galaxy in predictable patterns, data follows mathematical distributions.</p>
                </div>
                
                <p>Today we'll explore the most important distributions in statistics, focusing on the Normal and Binomial distributions that govern much of Imperial analysis.</p>
            `,
            interactive: null
        },
        {
            title: "The Normal Distribution: Bell of the Emperor",
            content: `
                <h3>The Sacred Bell Curve</h3>
                <p>The Normal Distribution, also called the Gaussian distribution, is the most important distribution in statistics. It appears everywhere in Imperial data.</p>
                
                <div class="formula-box">
                    <strong>Normal Distribution Properties:</strong><br>
                    • Symmetric bell shape<br>
                    • Mean = Median = Mode<br>
                    • 68% of data within 1 standard deviation<br>
                    • 95% of data within 2 standard deviations<br>
                    • 99.7% of data within 3 standard deviations
                </div>
                
                <div class="example-box">
                    <h4>⚔️ Imperial Example: Space Marine Heights</h4>
                    <p>Space Marine heights follow a normal distribution with:</p>
                    <ul>
                        <li><strong>Mean (μ):</strong> 210 cm</li>
                        <li><strong>Standard Deviation (σ):</strong> 5 cm</li>
                    </ul>
                    <p>This means 68% of Space Marines are between 205-215 cm tall, and 95% are between 200-220 cm tall.</p>
                </div>
                
                <div class="formula-box">
                    <strong>The Empirical Rule (68-95-99.7):</strong><br>
                    This sacred rule helps us understand spread in normal distributions without complex calculations.
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "A forge world produces ammunition with weights normally distributed. Mean = 50g, Standard Deviation = 2g. Calculate the ranges:",
                data: [50, 2], // mean, std dev
                answers: {
                    "68% range": "48g to 52g",
                    "95% range": "46g to 54g"
                }
            }
        },
        {
            title: "Z-Scores: Standardizing the Galaxy",
            content: `
                <h3>The Standard Normal Distribution</h3>
                <p>To compare values from different normal distributions, we use Z-scores to standardize them to the Emperor's standard.</p>
                
                <div class="formula-box">
                    <strong>Z-Score Formula:</strong><br>
                    Z = (X - μ) / σ<br><br>
                    Where:<br>
                    • X = individual value<br>
                    • μ = population mean<br>
                    • σ = population standard deviation
                </div>
                
                <div class="example-box">
                    <h4>🏛️ Comparing Imperial Regiments</h4>
                    <p><strong>Regiment Alpha:</strong> Battle effectiveness score of 85 (μ=80, σ=5)</p>
                    <p><strong>Z-score:</strong> (85-80)/5 = 1.0</p>
                    
                    <p><strong>Regiment Beta:</strong> Battle effectiveness score of 92 (μ=88, σ=3)</p>
                    <p><strong>Z-score:</strong> (92-88)/3 = 1.33</p>
                    
                    <p><strong>Conclusion:</strong> Regiment Beta performs relatively better (higher Z-score)</p>
                </div>
                
                <h4>Interpreting Z-Scores:</h4>
                <ul>
                    <li><strong>Z = 0:</strong> Exactly at the mean</li>
                    <li><strong>Z > 0:</strong> Above the mean</li>
                    <li><strong>Z < 0:</strong> Below the mean</li>
                    <li><strong>|Z| > 2:</strong> Unusual value (more than 2 standard deviations from mean)</li>
                </ul>
            `,
            interactive: null
        },
        {
            title: "Binomial Distribution: Success in Battle",
            content: `
                <h3>Counting Successes in Fixed Trials</h3>
                <p>When the Imperium conducts repeated trials with only two possible outcomes (success/failure), we use the Binomial Distribution.</p>
                
                <div class="formula-box">
                    <strong>Binomial Distribution Requirements:</strong><br>
                    • Fixed number of trials (n)<br>
                    • Only two outcomes per trial<br>
                    • Constant probability of success (p)<br>
                    • Independent trials
                </div>
                
                <div class="example-box">
                    <h4>🎯 Orbital Bombardment Example</h4>
                    <p>An Imperial Navy ship fires 10 shots at an enemy position. Each shot has a 70% chance of hitting the target.</p>
                    <p><strong>Question:</strong> What's the probability of exactly 7 hits?</p>
                    
                    <p><strong>Binomial Parameters:</strong></p>
                    <ul>
                        <li>n = 10 (number of shots)</li>
                        <li>p = 0.7 (probability of hit)</li>
                        <li>X = 7 (desired number of successes)</li>
                    </ul>
                </div>
                
                <div class="formula-box">
                    <strong>Binomial Probability Formula:</strong><br>
                    P(X = k) = C(n,k) × p^k × (1-p)^(n-k)<br><br>
                    Where C(n,k) is "n choose k" = n! / (k!(n-k)!)
                </div>
                
                <h4>When to Use Binomial vs Normal:</h4>
                <ul>
                    <li><strong>Binomial:</strong> Counting successes in fixed trials</li>
                    <li><strong>Normal:</strong> Continuous measurements like height, weight, time</li>
                    <li><strong>Normal Approximation:</strong> When n≥30 and np≥10 and n(1-p)≥10, binomial ≈ normal</li>
                </ul>
            `,
            interactive: {
                type: "classification",
                question: "Identify which distribution best fits each Imperial scenario:",
                items: [
                    { text: "Heights of Imperial Guardsmen", type: "Normal Distribution" },
                    { text: "Number of successful Warp jumps out of 20 attempts", type: "Binomial Distribution" },
                    { text: "Time taken to complete combat drills", type: "Normal Distribution" },
                    { text: "Number of defective weapons in a batch of 100", type: "Binomial Distribution" }
                ]
            }
        },
        {
            title: "Applications and Real-World Usage",
            content: `
                <h3>Applying Distributions in Imperial Analysis</h3>
                <p>Understanding distributions allows Imperial analysts to make informed decisions and predictions about military operations.</p>
                
                <div class="example-box">
                    <h4>🔬 Quality Control in Forge Worlds</h4>
                    <p><strong>Scenario:</strong> A forge world produces 10,000 laser rifles daily. Quality control tests show that 95% meet Imperial standards.</p>
                    
                    <p><strong>Using Binomial Distribution:</strong></p>
                    <ul>
                        <li>Expected defective rifles: 10,000 × 0.05 = 500</li>
                        <li>Standard deviation: √(np(1-p)) = √(10,000 × 0.05 × 0.95) ≈ 22</li>
                        <li>Normal range: 500 ± 44 (456 to 544 defective rifles)</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>⚡ Battle Readiness Assessment</h4>
                    <p><strong>Scenario:</strong> Space Marine reaction times are normally distributed with μ=0.25 seconds, σ=0.02 seconds.</p>
                    
                    <p><strong>Analysis Questions:</strong></p>
                    <ul>
                        <li>What percentage react within 0.27 seconds? (Use Z-score)</li>
                        <li>What reaction time represents the 90th percentile?</li>
                        <li>Are Marines with 0.30+ second reactions unusual?</li>
                    </ul>
                </div>
                
                <h4>Key Takeaways for Imperial Analysts:</h4>
                <ul>
                    <li><strong>Prediction:</strong> Distributions help predict future outcomes</li>
                    <li><strong>Quality Control:</strong> Identify unusual values that need investigation</li>
                    <li><strong>Resource Planning:</strong> Estimate ranges for proper preparation</li>
                    <li><strong>Risk Assessment:</strong> Calculate probabilities of various scenarios</li>
                </ul>
                
                <div class="formula-box">
                    <strong>Remember:</strong> The Emperor's domain follows mathematical laws. Master these distributions, and you master the patterns of reality itself!
                </div>
            `,
            interactive: null
        }
    ]
};

// Finally, let's create quiz questions for Chapter 4
// This would typically be added to js/data/quizzes.js

const newQuiz4 = {
    title: "Distributions - Battle Assessment",
    description: "Test your mastery of statistical distributions and their applications.",
    passingScore: 75,
    timeLimit: null,
    questions: [
        {
            id: 1,
            question: "A Space Marine's bolt pistol accuracy follows a normal distribution with mean 85% and standard deviation 5%. What percentage of shots fall between 80% and 90% accuracy?",
            options: [
                "Approximately 68%",
                "Approximately 95%", 
                "Approximately 99.7%",
                "Cannot be determined"
            ],
            correct: 0,
            explanation: "Using the empirical rule, 68% of data falls within 1 standard deviation of the mean. Since 80% to 90% represents μ±1σ (85±5), approximately 68% of shots fall in this range.",
            difficulty: "medium",
            concept: "Normal Distribution"
        },
        {
            id: 2,
            question: "An Imperial Guard regiment's training scores are normally distributed with μ=75 and σ=8. A guardsman scores 91. What is their Z-score?",
            options: [
                "1.5",
                "2.0",
                "2.5", 
                "3.0"
            ],
            correct: 1,
            explanation: "Z = (X - μ) / σ = (91 - 75) / 8 = 16 / 8 = 2.0. This guardsman scored 2 standard deviations above the mean.",
            difficulty: "easy",
            concept: "Z-scores"
        },
        {
            id: 3,
            question: "A Space Marine chapter conducts 20 independent missions, each with a 80% success rate. What type of distribution should be used to model the number of successful missions?",
            options: [
                "Normal distribution",
                "Binomial distribution",
                "Uniform distribution",
                "Exponential distribution"
            ],
            correct: 1,
            explanation: "This is a binomial distribution because we have a fixed number of trials (20), two outcomes per trial (success/failure), constant probability (80%), and independent trials.",
            difficulty: "easy",
            concept: "Binomial Distribution"
        },
        {
            id: 4,
            question: "In a binomial distribution with n=15 and p=0.6, what is the expected number of successes?",
            options: [
                "6",
                "9",
                "12",
                "15"
            ],
            correct: 1,
            explanation: "For a binomial distribution, the expected value (mean) is μ = np = 15 × 0.6 = 9 successes.",
            difficulty: "easy",
            concept: "Binomial Distribution"
        },
        {
            id: 5,
            question: "A forge world's production quality follows a normal distribution. If 95% of products fall between 48kg and 52kg, what are the approximate mean and standard deviation?",
            options: [
                "μ=50kg, σ=1kg",
                "μ=50kg, σ=2kg", 
                "μ=50kg, σ=4kg",
                "Cannot be determined from given information"
            ],
            correct: 0,
            explanation: "The range 48-52kg spans 4kg total. Since 95% of data falls within 2 standard deviations (μ±2σ), we have 4σ = 4kg, so σ = 1kg. The mean is the center: μ = 50kg.",
            difficulty: "hard",
            concept: "Normal Distribution"
        }
    ]
};

// Example of how to use ContentManager to add this content programmatically
/*
function addChapter4Content() {
    // Assuming you have access to the ContentManager
    const contentManager = window.StatisticsApp?.contentManager;
    
    if (contentManager) {
        try {
            // Add the chapter
            contentManager.addChapter(newChapter4);
            console.log('✅ Chapter 4 added successfully');
            
            // Add the lesson
            contentManager.addLesson(4, newLesson4);
            console.log('✅ Lesson 4 added successfully');
            
            // Add the quiz
            contentManager.addQuiz(4, newQuiz4);
            console.log('✅ Quiz 4 added successfully');
            
            // Validate the new content
            const validation = contentManager.validateAllContent();
            if (validation.valid) {
                console.log('✅ All content is valid');
            } else {
                console.error('❌ Content validation errors:', validation.errors);
            }
            
        } catch (error) {
            console.error('❌ Error adding Chapter 4 content:', error);
        }
    }
}

// Call this function to add the content
// addChapter4Content();
*/

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newChapter4, newLesson4, newQuiz4 };
}
