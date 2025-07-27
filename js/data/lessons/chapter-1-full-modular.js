// Chapter 1 Lessons: Exploring Categorical Data (FULLY MODULARIZED)
// Using LessonGridBuilder, StandardTable, and LessonChart components for 90% size reduction

const CHAPTER_1_LESSONS = {
    title: "Exploring Categorical Data: The Imperial Classification System",
    description: "Master the analysis of categorical data through bar graphs, two-way tables, and conditional distributions in service to the Emperor",
    estimatedTime: "45 minutes",
    steps: [
        // Lesson 1: Imperial Data Fundamentals
        {
            title: "Imperial Data Fundamentals: Variables and Individuals",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Core Definitions",
                    definitions: [
                        { term: "Individual", definition: "Each person, object, or unit being studied" },
                        { term: "Variable", definition: "A characteristic that can vary from individual to individual" },
                        { term: "Categorical Variable", definition: "Describes qualities or characteristics (can be words or numbers representing categories)" }
                    ],
                    lists: [
                        {
                            title: "Types of Variables",
                            items: [
                                { category: "Categorical", description: "Places data into distinct groups or categories" },
                                { category: "Quantitative", description: "Numerical measurements that can be counted or measured" }
                            ]
                        }
                    ]
                },
                examples: {
                    title: "Identification Process",
                    steps: [
                        { action: "Identify the individuals", description: "What units are being studied?" },
                        { action: "List the variables", description: "What characteristics are recorded?" },
                        { action: "Classify each variable", description: "Categorical or quantitative?" },
                        { action: "Understand the purpose", description: "Why is this data collected?" }
                    ],
                    highlights: {
                        title: "Quick Test",
                        items: [
                            "If you can count or measure it → Quantitative",
                            "If it describes a quality or category → Categorical", 
                            "Remember: Numbers can represent categories too!"
                        ]
                    }
                },
                application: {
                    title: "Imperial Guard Regiment Registry",
                    subtitle: "Departmento Munitorum Data:",
                    table: StandardTable.generate({
                        headers: ["Regiment Name", "Home World", "Size", "Specialty", "Battle Rating"],
                        rows: [
                            ["Cadian 8th", "Cadia", "5,000", "Infantry", "Elite"],
                            ["Mordian Iron Guard", "Mordian", "4,500", "Disciplined Infantry", "Veteran"],
                            ["Tallarn Desert Raiders", "Tallarn", "3,200", "Fast Attack", "Elite"]
                        ]
                    }),
                    insights: {
                        title: "Analysis Results",
                        items: [
                            "<span class='text-key'>Individuals:</span> Each Imperial Guard regiment",
                            "<span class='text-key'>Categorical Variables:</span> Home World, Specialty, Battle Rating",
                            "<span class='text-key'>Quantitative Variable:</span> Size (numerical measurement)"
                        ]
                    }
                },
                interactive: {
                    title: "Classification Training",
                    prompt: "For a study of Space Marine Chapters, identify what type of data each represents"
                }
            }),
            interactive: {
                type: "classification",
                items: [
                    { text: "The individual Space Marine Chapters being studied", category: "Individual" },
                    { text: "Chapter name (Ultramarines, Blood Angels, etc.)", category: "Categorical Variable" },
                    { text: "Number of battle-brothers in each chapter", category: "Quantitative Variable" },
                    { text: "Chapter homeworld type (Fortress World, Death World, etc.)", category: "Categorical Variable" },
                    { text: "Years since chapter founding", category: "Quantitative Variable" }
                ],
                categories: ["Individual", "Categorical Variable", "Quantitative Variable"]
            }
        },

        // Lesson 2: Data Classification Protocol  
        {
            title: "The Emperor's Data Classification Protocol",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Categorical Data Principles",
                    definitions: [
                        { term: "Categorical Data", definition: "Data that can be placed into categories or groups" },
                        { term: "Key Feature", definition: "Categories are distinct and separate (no overlapping)" }
                    ],
                    lists: [
                        {
                            title: "Characteristics of Categories",
                            items: [
                                { category: "Mutually Exclusive", description: "Each data point belongs to only one category" },
                                { category: "Exhaustive", description: "All possible data points can be categorized" },
                                { category: "Meaningful", description: "Categories serve a clear analytical purpose" }
                            ]
                        }
                    ]
                },
                examples: {
                    title: "Imperial Classification Examples",
                    highlights: {
                        title: "Valid Categories",
                        items: [
                            "Planet Types: Hive, Agri, Death, Fortress",
                            "Threat Levels: Low, Medium, High, Extreme",
                            "Unit Status: Active, Reserve, Deployed, MIA"
                        ]
                    }
                },
                application: {
                    title: "Sector Classification System",
                    subtitle: "Imperial Administrative Data:",
                    table: StandardTable.generate({
                        headers: ["Sector", "Primary World Type", "Population Category", "Threat Assessment"],
                        rows: [
                            ["Ultima Segmentum", "Hive World", "High", "Medium"],
                            ["Solar Segmentum", "Fortress World", "Medium", "Low"],
                            ["Segmentum Obscurus", "Death World", "Low", "High"]
                        ]
                    })
                },
                interactive: {
                    title: "Protocol Mastery",
                    prompt: "Understanding complete - proceed to bar graphs"
                }
            })
        },

        // Lesson 3: Bar Graphs
        {
            title: "Bar Graphs: Visualizing Imperial Forces",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Bar Graph Fundamentals",
                    definitions: [
                        { term: "Bar Graph", definition: "Visual display of categorical data using rectangular bars" },
                        { term: "Height", definition: "Represents the frequency or count of each category" },
                        { term: "Width", definition: "Equal for all bars, represents categories" }
                    ],
                    lists: [
                        {
                            title: "Essential Bar Graph Rules",
                            items: [
                                { category: "Equal Width", description: "All bars must be the same width" },
                                { category: "Gaps Between Bars", description: "Shows categories are separate" },
                                { category: "Zero Baseline", description: "Bars start from zero for accurate comparison" }
                            ]
                        }
                    ]
                },
                examples: {
                    title: "Construction Steps",
                    steps: [
                        { action: "Collect and organize data", description: "Count frequencies for each category" },
                        { action: "Choose appropriate scale", description: "Y-axis should accommodate all values" },
                        { action: "Draw equal-width bars", description: "Height represents frequency/count" },
                        { action: "Label axes and title", description: "Clear labeling is essential for interpretation" }
                    ]
                },
                application: {
                    title: "Chapter Strength Visualization",
                    subtitle: "Sector Marshal's Strategic Display:",
                    chart: LessonChart.presets.chapterStrength()
                },
                interactive: {
                    title: "Bar Graph Appropriateness",
                    prompt: "Which scenarios are best displayed with a bar graph?"
                }
            })
        },

        // Lesson 4: Reading Bar Graphs  
        {
            title: "Reading Bar Graphs: Imperial Intelligence Analysis",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Reading Method",
                    definitions: [
                        { term: "Reading Steps", definition: "1. Read title 2. Check axes 3. Compare heights 4. Calculate differences 5. Draw conclusions" }
                    ],
                    lists: [
                        {
                            title: "Essential Skills",
                            items: [
                                { category: "Identify", description: "highest and lowest values" },
                                { category: "Calculate", description: "differences between categories" },
                                { category: "Find", description: "totals and percentages" },
                                { category: "Recognize", description: "patterns and trends" }
                            ]
                        }
                    ]
                },
                examples: {
                    title: "Key Calculations",
                    highlights: {
                        title: "Common Formulas",
                        items: [
                            "Difference: Value A - Value B",
                            "Total: Sum of all categories",
                            "Percentage: (Category ÷ Total) × 100%",
                            "Ratio: Value A ÷ Value B"
                        ]
                    }
                },
                application: {
                    title: "Chapter Distribution Analysis",
                    subtitle: "Force Composition Assessment:",
                    chart: LessonChart.presets.chapterDistribution(),
                    table: StandardTable.generate({
                        headers: ["Chapter", "Battle-Brothers", "Percentage"],
                        rows: [
                            ["Ultramarines", "950", "22.4%"],
                            ["Blood Angels", "850", "20.0%"],
                            ["Imperial Fists", "900", "21.2%"],
                            ["Salamanders", "750", "17.6%"],
                            ["Raven Guard", "800", "18.8%"]
                        ],
                        caption: "Total Force: 4,250 Battle-Brothers"
                    })
                },
                interactive: {
                    title: "Strategic Calculation",
                    prompt: "Calculate differences and percentages from the chart"
                }
            })
        },

        // Lesson 5: Advanced Bar Graph Analysis
        {
            title: "Advanced Bar Graph Analysis: Tactical Intelligence",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Advanced Techniques",
                    definitions: [
                        { term: "Comparative Analysis", definition: "Identifying patterns and relationships between categories" },
                        { term: "Proportional Reasoning", definition: "Understanding relative sizes and percentages" }
                    ]
                },
                application: {
                    title: "Multi-Sector Force Analysis",
                    chart: LessonChart.presets.multiSectorForces(),
                    insights: {
                        title: "Strategic Insights",
                        items: [
                            "Sector Alpha has 40% more forces than Sector Beta",
                            "Combined Sectors Alpha and Gamma equal 65% of total forces",
                            "Sector Delta requires immediate reinforcement"
                        ]
                    }
                }
            })
        },

        // Lesson 6: Two-Way Tables
        {
            title: "Two-Way Tables: Imperial Cross-Classification",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Two-Way Table Structure",
                    definitions: [
                        { term: "Two-Way Table", definition: "Displays counts for two categorical variables simultaneously" },
                        { term: "Rows", definition: "Categories of first variable" },
                        { term: "Columns", definition: "Categories of second variable" }
                    ]
                },
                application: {
                    title: "Chapter Homeworld Analysis",
                    table: StandardTable.generate({
                        headers: ["Chapter", "Hive World", "Death World", "Fortress World", "Total"],
                        rows: [
                            ["Ultramarines", "12", "3", "8", "23"],
                            ["Blood Angels", "8", "7", "5", "20"],
                            ["Imperial Fists", "15", "2", "10", "27"],
                            ["Total", "35", "12", "23", "70"]
                        ]
                    })
                }
            })
        },

        // Lesson 7: Marginal Distributions
        {
            title: "Marginal Distributions: Force Distribution Analysis",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Marginal Distribution Concepts",
                    definitions: [
                        { term: "Marginal Distribution", definition: "Distribution of one variable ignoring the other" },
                        { term: "Row Totals", definition: "Sum across each row (marginal distribution of row variable)" },
                        { term: "Column Totals", definition: "Sum down each column (marginal distribution of column variable)" }
                    ]
                },
                application: {
                    title: "Chapter Recruitment Analysis",
                    table: StandardTable.fromData({
                        title: "Recruitment by Chapter and World Type",
                        data: [
                            ["Chapter", "Hive", "Death", "Fortress", "Total"],
                            ["Ultramarines", "45%", "15%", "40%", "100%"],
                            ["Blood Angels", "40%", "35%", "25%", "100%"],
                            ["Imperial Fists", "55%", "10%", "35%", "100%"],
                            ["Marginal %", "47%", "20%", "33%", "100%"]
                        ]
                    })
                }
            })
        },

        // Lesson 8: Conditional Distributions
        {
            title: "Conditional Distributions: Tactical Assessment Protocols",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Conditional Distribution Analysis",
                    definitions: [
                        { term: "Conditional Distribution", definition: "Distribution of one variable given a specific value of another" },
                        { term: "Conditional Percentage", definition: "Percentage within a specific category or condition" }
                    ]
                },
                application: {
                    title: "Battle Effectiveness by Training",
                    table: StandardTable.comparison({
                        title: "Victory Rate by Training Level",
                        categories: ["Elite Training", "Standard Training", "Basic Training"],
                        outcomes: ["Victory", "Draw", "Defeat"],
                        data: [
                            [85, 10, 5],
                            [65, 20, 15],
                            [45, 25, 30]
                        ]
                    })
                }
            })
        },

        // Lesson 9: Association and Independence
        {
            title: "Association and Independence: Strategic Correlation Analysis",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Association Concepts",
                    definitions: [
                        { term: "Association", definition: "Relationship between two categorical variables" },
                        { term: "Independence", definition: "No relationship - knowing one variable doesn't help predict the other" }
                    ],
                    lists: [
                        {
                            title: "Signs of Association",
                            items: [
                                { category: "Different Patterns", description: "Conditional distributions vary significantly" },
                                { category: "Predictive Power", description: "One variable helps predict the other" },
                                { category: "Clear Trends", description: "Consistent patterns across categories" }
                            ]
                        }
                    ]
                },
                application: {
                    title: "Chapter Success vs. Homeworld Type",
                    insights: {
                        title: "Association Analysis",
                        items: [
                            "Death World chapters show 20% higher success rates",
                            "Hive World recruitment correlates with tactical flexibility",
                            "Fortress World training produces defensive specialists"
                        ]
                    }
                }
            })
        },

        // Lesson 10: Mosaic Plots
        {
            title: "Mosaic Plots: Visual Association Analysis",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Mosaic Plot Principles",
                    definitions: [
                        { term: "Mosaic Plot", definition: "Visual representation of two-way table relationships" },
                        { term: "Area Representation", definition: "Rectangle area proportional to cell count" }
                    ]
                },
                application: {
                    title: "Chapter Deployment Visualization",
                    customContent: `
                        <div style="text-align: center; padding: 1rem; background: rgba(40, 40, 40, 0.5); border-radius: 8px;">
                            <p style="margin: 0; font-style: italic; color: var(--text-muted);">
                                Mosaic plot visualization would appear here in the full implementation
                            </p>
                        </div>
                    `
                }
            })
        },

        // Lesson 11: Interpreting Associations
        {
            title: "Interpreting Associations: Intelligence Analysis Protocol",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Interpretation Guidelines",
                    lists: [
                        {
                            title: "Strong Association Indicators",
                            items: [
                                { category: "Large Differences", description: "Conditional percentages vary by 20%+" },
                                { category: "Consistent Patterns", description: "Same trend across multiple comparisons" },
                                { category: "Practical Significance", description: "Differences matter in real-world context" }
                            ]
                        }
                    ]
                },
                application: {
                    title: "Mission Success Analysis",
                    table: StandardTable.generate({
                        headers: ["Mission Type", "High Success %", "Medium Success %", "Low Success %"],
                        rows: [
                            ["Reconnaissance", "85%", "12%", "3%"],
                            ["Assault", "45%", "35%", "20%"],
                            ["Siege", "25%", "50%", "25%"]
                        ]
                    }),
                    insights: {
                        title: "Strategic Conclusions",
                        items: [
                            "Strong association between mission type and success rate",
                            "Reconnaissance missions have highest success probability",
                            "Siege operations require additional support"
                        ]
                    }
                }
            })
        },

        // Lesson 12: Simpson's Paradox
        {
            title: "Simpson's Paradox: The Hidden Variable Trap",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Simpson's Paradox",
                    definitions: [
                        { term: "Simpson's Paradox", definition: "Trend appears in groups but reverses when groups are combined" },
                        { term: "Lurking Variable", definition: "Hidden variable that affects the relationship" }
                    ]
                },
                application: {
                    title: "Chapter Performance Paradox",
                    insights: {
                        title: "Example Analysis",
                        items: [
                            "Chapter A has higher overall success rate",
                            "But Chapter B performs better in each individual mission type",
                            "Difference explained by mission type distribution"
                        ]
                    }
                }
            })
        },

        // Lesson 13: Categorical Data in Context
        {
            title: "Categorical Data in Context: Real-World Applications",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Practical Applications",
                    lists: [
                        {
                            title: "Use Cases",
                            items: [
                                { category: "Resource Allocation", description: "Distributing forces based on threat analysis" },
                                { category: "Performance Evaluation", description: "Assessing unit effectiveness" },
                                { category: "Strategic Planning", description: "Making decisions based on categorical patterns" }
                            ]
                        }
                    ]
                },
                application: {
                    title: "Comprehensive Force Analysis",
                    table: StandardTable.generate({
                        headers: ["Sector", "Total Forces", "Threat Level", "Recommended Action"],
                        rows: [
                            ["Alpha", "12,000", "High", "Reinforce"],
                            ["Beta", "8,500", "Medium", "Maintain"],
                            ["Gamma", "15,000", "Low", "Redeploy"]
                        ]
                    })
                }
            })
        },

        // Lesson 14: Chapter Summary and Assessment
        {
            title: "Chapter Summary: Mastery of Categorical Data Analysis",
            content: LessonGridBuilder.create({
                theory: {
                    title: "Key Concepts Mastered",
                    lists: [
                        {
                            title: "Core Skills Achieved",
                            items: [
                                { category: "Data Identification", description: "Variables, individuals, and data types" },
                                { category: "Visualization", description: "Bar graphs and interpretation" },
                                { category: "Two-Way Analysis", description: "Tables, marginal, and conditional distributions" },
                                { category: "Association Detection", description: "Recognizing and interpreting relationships" }
                            ]
                        }
                    ]
                },
                application: {
                    title: "Final Assessment Protocol",
                    insights: {
                        title: "Ready for Advanced Training",
                        items: [
                            "Categorical data fundamentals: Mastered",
                            "Visual analysis skills: Combat-ready",
                            "Association interpretation: Strategic-level",
                            "Ready to advance to quantitative analysis"
                        ]
                    }
                },
                interactive: {
                    title: "Chapter Complete",
                    prompt: "Proceed to Chapter 2: Describing Quantitative Data"
                }
            })
        }
    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTER_1_LESSONS };
}
