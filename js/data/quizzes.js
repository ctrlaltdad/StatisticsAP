// Quiz Questions Data
// Questions are organized by chapter for easy management and extension

const QUIZ_DATA = {
    1: {
        title: "Exploring Categorical Data - Battle Assessment",
        description: "Comprehensive test covering all Chapter 1 concepts: variables, individuals, bar graphs, two-way tables, distributions, and association analysis.",
        passingScore: 70,
        timeLimit: null, // minutes, null for no limit
        questions: [
            {
                id: 1,
                question: "In a study of Space Marine Chapters, which of the following represents an 'individual' in statistical terms?",
                options: [
                    "The name of each Chapter",
                    "Each Space Marine Chapter being studied",
                    "The battle-brothers' ages",
                    "The number of victories"
                ],
                correct: 1,
                explanation: "An individual is each unit being studied. In this case, each Space Marine Chapter represents one individual in the dataset.",
                difficulty: "easy",
                concept: "Data Fundamentals"
            },
            {
                id: 2,
                question: "Which of the following is a categorical variable?",
                options: [
                    "Number of battle-brothers in a Chapter",
                    "Chapter homeworld type (Hive, Death, Fortress)",
                    "Years since Chapter founding",
                    "Battle effectiveness score (0-100)"
                ],
                correct: 1,
                explanation: "Homeworld type places Chapters into distinct categories. The other options are quantitative (numerical measurements).",
                difficulty: "easy",
                concept: "Variable Classification"
            },
            {
                id: 3,
                question: "Which classification system is NOT valid for categorical data?",
                options: [
                    "Battle outcomes: Victory, Defeat, Draw",
                    "Threat levels: Low, Medium, High, Extreme",
                    "Marine ages: Young, Somewhat Young, Middle-aged, Older",
                    "Planet types: Hive, Agri, Death, Fortress"
                ],
                correct: 2,
                explanation: "Marine ages with subjective, overlapping categories is invalid. Valid categorical systems need mutually exclusive, clearly defined categories.",
                difficulty: "medium",
                concept: "Categorical Systems"
            },
            {
                id: 4,
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
                id: 5,
                question: "Which scenario is NOT appropriate for a bar graph?",
                options: [
                    "Types of weapons used by Imperial Guard regiments",
                    "Temperature readings over 24 hours",
                    "Threat levels by sector (Low, Medium, High)",
                    "Number of Space Marines in each Chapter"
                ],
                correct: 1,
                explanation: "Temperature over time is continuous data best shown with a line graph. Bar graphs are for categorical data or counts by category.",
                difficulty: "medium",
                concept: "Graph Appropriateness"
            },
            {
                id: 6,
                question: "From a bar graph showing Chapter strengths: Ultramarines 950, Blood Angels 850, Imperial Fists 900, what percentage of the total force do the Blood Angels represent?",
                options: [
                    "30.9%",
                    "31.5%",
                    "32.1%",
                    "33.3%"
                ],
                correct: 1,
                explanation: "Total = 950 + 850 + 900 = 2,700. Blood Angels percentage = 850/2,700 = 0.3148 = 31.5%.",
                difficulty: "medium",
                concept: "Bar Graph Calculations"
            },
            {
                id: 7,
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
                id: 8,
                question: "In a two-way table, what do the row totals represent?",
                options: [
                    "The distribution of the column variable",
                    "The marginal distribution of the row variable",
                    "The conditional distribution given the column",
                    "The grand total divided by rows"
                ],
                correct: 1,
                explanation: "Row totals show the marginal distribution of the row variable - the overall distribution ignoring the column variable.",
                difficulty: "medium",
                concept: "Two-way Table Structure"
            },
            {
                id: 9,
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
                id: 10,
                question: "Using the same data from question 9, what percentage of Hive World regiments are Infantry? (This is a conditional distribution)",
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
                id: 11,
                question: "What is the key difference between marginal and conditional distributions?",
                options: [
                    "Marginal uses percentages, conditional uses counts",
                    "Marginal ignores other variables, conditional considers a specific condition",
                    "Marginal is for rows, conditional is for columns",
                    "There is no difference"
                ],
                correct: 1,
                explanation: "Marginal distribution shows overall patterns ignoring other variables. Conditional distribution shows patterns within specific subgroups or conditions.",
                difficulty: "medium",
                concept: "Distribution Concepts"
            },
            {
                id: 12,
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
                id: 13,
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
            },
            {
                id: 14,
                question: "In association analysis, what indicates STRONG association between two variables?",
                options: [
                    "Conditional distribution differences ≤ 5%",
                    "Conditional distribution differences 5-20%",
                    "Conditional distribution differences > 20%",
                    "Equal marginal distributions"
                ],
                correct: 2,
                explanation: "Strong association is indicated when conditional distributions differ by more than 20 percentage points across categories.",
                difficulty: "medium",
                concept: "Association Strength"
            },
            {
                id: 15,
                question: "Training effectiveness data shows: Elite Training 85% success, Standard Training 75% success, Basic Training 72% success. The largest difference is 13%. This indicates:",
                options: [
                    "Independence (≤5% difference)",
                    "Weak Association (5-20% difference)",
                    "Strong Association (>20% difference)",
                    "Insufficient data"
                ],
                correct: 1,
                explanation: "13% difference falls in the 5-20% range, indicating weak association between training level and success rate.",
                difficulty: "hard",
                concept: "Association Classification"
            },
            {
                id: 16,
                question: "In a mosaic plot, what do the column widths represent?",
                options: [
                    "Conditional distributions",
                    "Joint frequencies",
                    "Marginal distribution of the first variable",
                    "The grand total"
                ],
                correct: 2,
                explanation: "Column widths in a mosaic plot show the marginal distribution of the first variable - how common each category is overall.",
                difficulty: "medium",
                concept: "Mosaic Plot Interpretation"
            },
            {
                id: 17,
                question: "In a mosaic plot, what indicates association between two variables?",
                options: [
                    "All columns have the same width",
                    "All rectangles have the same height across columns",
                    "Rectangle heights vary across columns",
                    "The total area equals 100%"
                ],
                correct: 2,
                explanation: "Association is shown by different rectangle heights across columns. If heights were the same, variables would be independent.",
                difficulty: "medium",
                concept: "Mosaic Plot Association"
            },
            {
                id: 18,
                question: "A mosaic plot shows Training vs Success with two equal-width columns (Elite 50%, Basic 50%). Elite column: 80% success, 20% failure. Basic column: 40% success, 60% failure. What can you conclude?",
                options: [
                    "Training and success are independent",
                    "Training and success show weak association",
                    "Training and success show strong association",
                    "The data is invalid"
                ],
                correct: 2,
                explanation: "The different heights (80% vs 40% success = 40% difference) indicate strong association between training level and success rate.",
                difficulty: "hard",
                concept: "Mosaic Plot Analysis"
            },
            {
                id: 19,
                question: "Which formula correctly calculates a conditional percentage in a two-way table?",
                options: [
                    "(Cell value ÷ Grand total) × 100%",
                    "(Cell value ÷ Column total) × 100%",
                    "(Cell value ÷ Row total) × 100%",
                    "(Row total ÷ Grand total) × 100%"
                ],
                correct: 2,
                explanation: "Conditional percentage = (Cell value ÷ Row total) × 100%. This gives the percentage within each row category (condition).",
                difficulty: "medium",
                concept: "Conditional Calculations"
            },
            {
                id: 20,
                question: "Which statement best summarizes the key skill of categorical data analysis?",
                options: [
                    "Creating beautiful visualizations",
                    "Memorizing formulas for calculations",
                    "Identifying patterns and relationships between categorical variables",
                    "Collecting large amounts of data"
                ],
                correct: 2,
                explanation: "The core skill is identifying and interpreting patterns and relationships between categorical variables using tables, graphs, and distribution analysis.",
                difficulty: "easy",
                concept: "Chapter Mastery"
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
