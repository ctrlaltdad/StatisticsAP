// Chapter 2 Lessons: Descriptive Statistics
// Cataloging the Emperor's Armies through summary statistics

const CHAPTER_2_LESSONS = {
    title: "Descriptive Statistics: Cataloging the Emperor's Armies",
    description: "Learn to organize and summarize data using measures of central tendency and variability",
    estimatedTime: "35 minutes",
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
        },
        {
            title: "Measures of Variability",
            content: `
                <h3>Understanding Imperial Data Spread</h3>
                <p>Central tendency tells us where the center is, but variability tells us how much the data is scattered. This is crucial for understanding the reliability of our measurements.</p>
                
                <div class="formula-box">
                    <strong>Range:</strong> Maximum - Minimum<br>
                    <strong>Standard Deviation (σ or s):</strong> Average distance from the mean<br>
                    <strong>Variance (σ² or s²):</strong> Standard deviation squared
                </div>
                
                <div class="example-box">
                    <h4>⚔️ Two Guard Regiments</h4>
                    <p><strong>Regiment A scores:</strong> 75, 78, 80, 82, 85 (mean = 80, std = 3.16)</p>
                    <p><strong>Regiment B scores:</strong> 65, 75, 80, 85, 95 (mean = 80, std = 10.95)</p>
                    <p>Both have the same mean, but Regiment A is much more consistent!</p>
                </div>
                
                <div class="formula-box">
                    <strong>Interpretation:</strong><br>
                    • Low variability = Consistent performance<br>
                    • High variability = Unpredictable performance
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "Calculate the range for Legion A's kill ratios: 12, 14, 15, 16, 18",
                data: [12, 14, 15, 16, 18],
                answers: {
                    range: 6,
                    mean: 15
                }
            }
        }
    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTER_2_LESSONS };
}
