// Lesson Content Data
// Each lesson is structured as a separate object for easy management and extension

const LESSONS_DATA = {
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
                        <h4>⚡ Space Marine Kill Counts</h4>
                        <p>5 Ultramarines report: 12, 15, 18, 20, 25 enemy kills</p>
                        <p><strong>Mean:</strong> (12+15+18+20+25) ÷ 5 = 18 kills per Marine</p>
                        <p><strong>Median:</strong> Middle value when ordered = 18 kills</p>
                        <p><strong>Mode:</strong> Most frequent value (none in this case)</p>
                    </div>
                    
                    <div class="formula-box">
                        <strong>When to use each:</strong><br>
                        <li><strong>Mean:</strong> Best for symmetric data without outliers</li>
                        <li><strong>Median:</strong> Best for skewed data or data with outliers</li>
                        <li><strong>Mode:</strong> Useful for categorical data or finding most common value</li>
                    </div>
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
            }
            // Additional steps would be added here...
        ]
    }
    
    // Additional chapters would be defined here following the same pattern...
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LESSONS_DATA };
}
