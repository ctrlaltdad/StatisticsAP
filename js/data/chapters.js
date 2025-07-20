// Chapter Configuration Data
// This file contains all chapter metadata and can be easily extended

const CHAPTERS_DATA = {
    1: {
        id: 1,
        title: "Data Collection & the Imperial Census",
        description: "Learn how the Imperium gathers data across a million worlds. Master the basics of data types, sampling, and survey methods.",
        difficulty: "Novice Acolyte",
        estimatedTime: "30 min",
        topics: ["Data Types", "Sampling Methods", "Survey Design"],
        concepts: ["Data Collection", "Quantitative vs Qualitative", "Sampling", "Bias", "Experiments vs Observational Studies"],
        prerequisites: [],
        unlockRequirements: {
            previousChapters: [],
            minimumScore: 0
        }
    },
    2: {
        id: 2,
        title: "Descriptive Statistics: Cataloging the Emperor's Armies",
        description: "Organize and summarize vast Imperial datasets. Master measures of central tendency and variability.",
        difficulty: "Initiate",
        estimatedTime: "45 min",
        topics: ["Mean, Median, Mode", "Standard Deviation", "Quartiles"],
        concepts: ["Central Tendency", "Variability", "Five Number Summary", "Outliers"],
        prerequisites: [1],
        unlockRequirements: {
            previousChapters: [1],
            minimumScore: 70
        }
    },
    3: {
        id: 3,
        title: "Probability: The Emperor's Will in Numbers",
        description: "Understand the mathematics of fate and chance in the grim darkness of the 41st millennium.",
        difficulty: "Initiate",
        estimatedTime: "50 min",
        topics: ["Basic Probability", "Conditional Probability", "Independence"],
        concepts: ["Probability Rules", "Conditional Probability", "Independence", "Complement Rules"],
        prerequisites: [1, 2],
        unlockRequirements: {
            previousChapters: [1, 2],
            minimumScore: 70
        }
    },
    4: {
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
    },
    5: {
        id: 5,
        title: "Confidence Intervals: Trusting Your Battle Reports",
        description: "Learn to quantify uncertainty in your statistical estimates, like a true Imperial analyst.",
        difficulty: "Adept",
        estimatedTime: "55 min",
        topics: ["Confidence Intervals", "Margin of Error", "Sample Size"],
        concepts: ["Confidence Intervals", "Margin of Error", "Critical Values", "Interpretation"],
        prerequisites: [1, 2, 3, 4],
        unlockRequirements: {
            previousChapters: [1, 2, 3, 4],
            minimumScore: 75
        }
    },
    6: {
        id: 6,
        title: "Hypothesis Testing: Challenging Heretical Claims",
        description: "Use the scientific method to separate truth from heresy in your statistical investigations.",
        difficulty: "Veteran",
        estimatedTime: "70 min",
        topics: ["Null Hypothesis", "P-values", "Type I & II Errors"],
        concepts: ["Hypothesis Testing", "Null and Alternative Hypotheses", "P-values", "Type I and II Errors"],
        prerequisites: [1, 2, 3, 4, 5],
        unlockRequirements: {
            previousChapters: [1, 2, 3, 4, 5],
            minimumScore: 80
        }
    },
    7: {
        id: 7,
        title: "Linear Regression: Predicting Imperial Success",
        description: "Model relationships between variables to predict outcomes in the Emperor's campaigns.",
        difficulty: "Veteran",
        estimatedTime: "65 min",
        topics: ["Correlation", "Regression Lines", "R-squared"],
        concepts: ["Linear Regression", "Correlation", "Least Squares", "R-squared", "Residuals"],
        prerequisites: [1, 2, 3, 4, 5, 6],
        unlockRequirements: {
            previousChapters: [1, 2, 3, 4, 5, 6],
            minimumScore: 80
        }
    },
    8: {
        id: 8,
        title: "Chi-Square Tests: Testing Independence Across Sectors",
        description: "Determine if variables are truly independent or if darker forces are at work.",
        difficulty: "Expert",
        estimatedTime: "60 min",
        topics: ["Goodness of Fit", "Independence Tests", "Expected vs Observed"],
        concepts: ["Chi-Square Tests", "Goodness of Fit", "Independence", "Expected Frequencies"],
        prerequisites: [1, 2, 3, 4, 5, 6],
        unlockRequirements: {
            previousChapters: [1, 2, 3, 4, 5, 6],
            minimumScore: 85
        }
    },
    9: {
        id: 9,
        title: "ANOVA: Comparing Multiple Battle Groups",
        description: "Compare means across multiple groups, like different Space Marine chapters in battle.",
        difficulty: "Expert",
        estimatedTime: "75 min",
        topics: ["One-way ANOVA", "F-statistics", "Post-hoc Tests"],
        concepts: ["ANOVA", "F-statistics", "Between-group vs Within-group Variation", "Post-hoc Tests"],
        prerequisites: [1, 2, 3, 4, 5, 6],
        unlockRequirements: {
            previousChapters: [1, 2, 3, 4, 5, 6],
            minimumScore: 85
        }
    },
    10: {
        id: 10,
        title: "Advanced Topics: Mastering the Omnissiah's Calculations",
        description: "Become a true statistical savant with advanced techniques fit for the Adeptus Mechanicus.",
        difficulty: "Master",
        estimatedTime: "90 min",
        topics: ["Non-parametric Tests", "Multiple Regression", "Time Series"],
        concepts: ["Non-parametric Tests", "Multiple Regression", "Advanced Inference", "Time Series"],
        prerequisites: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        unlockRequirements: {
            previousChapters: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            minimumScore: 90
        }
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTERS_DATA };
}
