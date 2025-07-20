// Quiz Questions Data
// Questions are organized by chapter for easy management and extension

const QUIZ_DATA = {
    1: {
        title: "Data Collection & Imperial Census - Battle Assessment",
        description: "Test your knowledge of data collection methods and sampling techniques.",
        passingScore: 70,
        timeLimit: null, // minutes, null for no limit
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
                explanation: "This is selection bias because the sample (capital regiments) is not representative of the population (all regiments in the sector). Capital regiments might have different characteristics than those stationed elsewhere.",
                difficulty: "medium",
                concept: "Sampling Bias"
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
                explanation: "The number of Titans is discrete quantitative data because you can count individual Titans (1, 2, 3, etc.) but cannot have fractional Titans.",
                difficulty: "easy",
                concept: "Data Types"
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
                explanation: "This is response bias caused by a leading question. The question pushes respondents toward a positive answer rather than allowing them to express their true opinion.",
                difficulty: "medium",
                concept: "Response Bias"
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
                explanation: "This is an observational study with potential selection bias. Marines who volunteer for dangerous missions may be inherently braver, more skilled, or have different motivations than those who are assigned.",
                difficulty: "hard",
                concept: "Study Design"
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
                explanation: "Simple random sampling gives every regiment an equal chance of selection, providing the most representative sample for estimating the population average.",
                difficulty: "medium",
                concept: "Sampling Methods"
            }
        ]
    },
    
    2: {
        title: "Descriptive Statistics - Battle Assessment",
        description: "Test your mastery of organizing and summarizing Imperial data.",
        passingScore: 70,
        timeLimit: null,
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
                explanation: "Removing the lowest value (8) increases both the mean and median. The mean increases from 15 to 16.75, while the median increases from 15 to 16.5. The mean is more sensitive to extreme values.",
                difficulty: "hard",
                concept: "Central Tendency"
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
                explanation: "While both have the same mean (80), Regiment A has lower variability (range = 10) compared to Regiment B (range = 40), making Regiment A more consistent and reliable.",
                difficulty: "medium",
                concept: "Variability"
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
                explanation: "Lower bound = Q1 - 1.5(IQR) = 65 - 1.5(20) = 35. Upper bound = Q3 + 1.5(IQR) = 85 + 1.5(20) = 115. Values outside this range are outliers.",
                difficulty: "medium",
                concept: "Outliers"
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
                explanation: "In skewed distributions, the median is preferred because it's not affected by extreme values. The mean would be pulled toward the tail, giving a misleading impression of typical performance.",
                difficulty: "medium",
                concept: "Skewed Distributions"
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
                explanation: "Standard deviation measures variability. A lower standard deviation (Forge Alpha = 50) indicates more consistent production compared to higher standard deviation (Forge Beta = 200).",
                difficulty: "easy",
                concept: "Standard Deviation"
            }
        ]
    }
    
    // Additional chapters would be defined here...
};

// Quiz Difficulty Levels Configuration
const DIFFICULTY_CONFIG = {
    easy: {
        weight: 1,
        color: "#22c55e",
        icon: "fas fa-star"
    },
    medium: {
        weight: 2,
        color: "#f59e0b",
        icon: "fas fa-star-half-alt"
    },
    hard: {
        weight: 3,
        color: "#ef4444",
        icon: "fas fa-exclamation-triangle"
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUIZ_DATA, DIFFICULTY_CONFIG };
}
