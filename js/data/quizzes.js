// Quiz Questions Data
// Questions are organized by chapter for easy management and extension

const QUIZ_DATA = {
    1: {
        title: "Exploring Categorical Data - Battle Assessment",
        description: "Test your knowledge of categorical data analysis, bar graphs, and two-way tables.",
        passingScore: 70,
        timeLimit: null, // minutes, null for no limit
        questions: [
            {
                id: 1,
                question: "A Space Marine Chapter Master wants to display the number of Battle-Brothers in each Company (1st through 10th). Which type of graph would be most appropriate?",
                options: [
                    "Scatter plot",
                    "Bar graph",
                    "Line graph", 
                    "Histogram"
                ],
                correct: 1,
                explanation: "A bar graph is best for categorical data. Each company is a separate category, and the height of each bar represents the count of Battle-Brothers.",
                difficulty: "easy",
                concept: "Graph Selection"
            },
            {
                id: 2,
                question: "In a two-way table analyzing 500 Space Marine recruits by Chapter (Ultramarines, Blood Angels, Imperial Fists) and Training Status (Active, Graduated, Failed), what does the number in a single cell represent?",
                options: [
                    "A marginal frequency",
                    "A conditional probability",
                    "A joint frequency",
                    "The grand total"
                ],
                correct: 2,
                explanation: "Each cell contains a joint frequency - the count of individuals who belong to both categories (e.g., Ultramarine recruits who are Active).",
                difficulty: "medium",
                concept: "Two-way Tables"
            },
            {
                id: 3,
                question: "Given this data about Imperial Guard regiments:\n\nHive World Infantry: 120\nHive World Armor: 80\nTotal Hive World: 200\nTotal Infantry: 300\nGrand Total: 600\n\nWhat is the marginal distribution percentage for Infantry regiments?",
                options: [
                    "40%",
                    "50%",
                    "60%",
                    "20%"
                ],
                correct: 1,
                explanation: "Marginal distribution for Infantry = 300/600 = 50%. This represents the overall percentage of Infantry regiments regardless of planet type.",
                difficulty: "medium",
                concept: "Marginal Distribution"
            },
            {
                id: 4,
                question: "Using the same data from question 3, what percentage of Hive World regiments are Infantry? (This is a conditional distribution)",
                options: [
                    "40%",
                    "50%",
                    "60%",
                    "20%"
                ],
                correct: 2,
                explanation: "Conditional distribution: Given Hive World regiments, 120/200 = 60% are Infantry. This conditions on planet type.",
                difficulty: "hard",
                concept: "Conditional Distribution"
            },
            {
                id: 5,
                question: "If planet type and regiment specialty were independent, what would we expect to see in their conditional distributions?",
                options: [
                    "All conditional distributions would be identical",
                    "Conditional distributions would vary significantly",
                    "Only marginal distributions would matter",
                    "The grand total would change"
                ],
                correct: 0,
                explanation: "Independence means that knowing one variable doesn't help predict the other, so all conditional distributions would be identical to the marginal distribution.",
                difficulty: "medium",
                concept: "Independence vs Association"
            },
            {
                id: 6,
                question: "A Sector Marshal analyzes Space Marine deployment and finds that 70% of siege specialists come from defensive-oriented Chapters, while only 30% of assault specialists come from defensive-oriented Chapters. This suggests:",
                options: [
                    "Chapter origin and combat specialty are independent",
                    "Chapter origin and combat specialty are associated",
                    "There is no relationship between the variables",
                    "The data contains errors"
                ],
                correct: 1,
                explanation: "The different conditional distributions (70% vs 30%) indicate association between Chapter origin and combat specialty. If independent, these percentages would be equal.",
                difficulty: "hard",
                concept: "Association Analysis"
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
