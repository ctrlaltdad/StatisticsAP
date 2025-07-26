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
                    <span class="text-key">Mean (μ or x̄):</span> The average value<br>
                    Formula: Sum of all values ÷ Number of values
                </div>
                
                <div class="example-box">
                    <h4>⚡ Space Marine Kill Counts</h4>
                    <p>5 Ultramarines report: 12, 15, 18, 20, 25 enemy kills</p>
                    <p><span class="text-key">Mean:</span> (12+15+18+20+25) ÷ 5 = 18 kills per Marine</p>
                    <p><span class="text-key">Median:</span> Middle value when ordered = 18 kills</p>
                    <p><span class="text-key">Mode:</span> Most frequent value (none in this case)</p>
                </div>
                
                <div class="formula-box">
                    <span class="text-key">When to use each:</span><br>
                    <li><span class="text-key">Mean:</span> Best for symmetric data without outliers</li>
                    <li><span class="text-key">Median:</span> Best for skewed data or data with outliers</li>
                    <li><span class="text-key">Mode:</span> Useful for categorical data or finding most common value</li>
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
                    <span class="text-key">Range:</span> Maximum - Minimum<br>
                    <span class="text-key">Standard Deviation (σ or s):</span> Average distance from the mean<br>
                    <span class="text-key">Variance (σ² or s²):</span> Standard deviation squared
                </div>
                
                <div class="example-box">
                    <h4>⚔️ Two Guard Regiments</h4>
                    <p><span class="text-key">Regiment A scores:</span> 75, 78, 80, 82, 85 (mean = 80, std = 3.16)</p>
                    <p><span class="text-key">Regiment B scores:</span> 65, 75, 80, 85, 95 (mean = 80, std = 10.95)</p>
                    <p>Both have the same mean, but Regiment A is much more consistent!</p>
                </div>
                
                <div class="formula-box">
                    <span class="text-key">Interpretation:</span><br>
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
