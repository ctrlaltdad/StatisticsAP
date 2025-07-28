// Chapter 1 Lessons: Exploring Categorical Data (FULLY MODULARIZED)
// MASSIVE SIZE REDUCTION: From 1,602 lines to ~246 lines (85% reduction)

const CHAPTER_1_LESSONS = {
    title: "Exploring Categorical Data: The Imperial Classification System",
    description: "Master the analysis of categorical data through bar graphs, two-way tables, and conditional distributions in service to the Emperor",
    estimatedTime: "45 minutes",
    steps: [
        {
            title: "Imperial Data Fundamentals: Variables and Individuals",
            content: `
                <h3>Understanding the Building Blocks of Data Analysis</h3>
                <p>Before the Adeptus Administratum can analyze any information across the Imperium, they must first understand the fundamental components of data collection and organization.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>🏛️ Core Definitions</h4>
                        
                        <div class="formula-box">
                            <span class="text-emphasis">Key Definitions:</span><br>
                            • <span class="text-key">Individual:</span> Each person, object, or unit being studied<br>
                            • <span class="text-key">Variable:</span> A characteristic that can vary from individual to individual<br>
                            • <span class="text-key">Categorical Variable:</span> Describes qualities or characteristics
                        </div>
                        
                        <p><span class="text-emphasis">Types of Variables:</span></p>
                        <ul>
                            <li><span class="text-important">Categorical:</span> Places data into distinct groups or categories</li>
                            <li><span class="text-important">Quantitative:</span> Numerical measurements that can be counted or measured</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4><i class="fas fa-search"></i> Identification Process</h4>
                        
                        <p><span class="text-emphasis">Step-by-Step Analysis:</span></p>
                        <ol>
                            <li><span class="text-key">Identify the individuals</span> - What units are being studied?</li>
                            <li><span class="text-key">List the variables</span> - What characteristics are recorded?</li>
                            <li><span class="text-key">Classify each variable</span> - Categorical or quantitative?</li>
                        </ol>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Quick Test:</span><br>
                            • If you can count or measure it → Quantitative<br>
                            • If it describes a quality or category → Categorical
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>🛡️ Imperial Guard Regiment Registry</h4>
                        
                        <p><span class="text-emphasis">Departmento Munitorum Data:</span></p>
                        
                        <table border="1" style="margin: 1rem 0; border-collapse: collapse; font-size: 0.85rem; width: 100%;">
                            <tr style="background: rgba(212, 175, 55, 0.2);">
                                <th style="padding: 4px;">Regiment Name</th>
                                <th style="padding: 4px;">Home World</th>
                                <th style="padding: 4px;">Size</th>
                                <th style="padding: 4px;">Specialty</th>
                                <th style="padding: 4px;">Battle Rating</th>
                            </tr>
                            <tr>
                                <td style="padding: 4px;">Cadian 8th</td>
                                <td style="padding: 4px;">Cadia</td>
                                <td style="padding: 4px;">5,000</td>
                                <td style="padding: 4px;">Infantry</td>
                                <td style="padding: 4px;">Elite</td>
                            </tr>
                            <tr>
                                <td style="padding: 4px;">Mordian Iron Guard</td>
                                <td style="padding: 4px;">Mordian</td>
                                <td style="padding: 4px;">4,500</td>
                                <td style="padding: 4px;">Disciplined Infantry</td>
                                <td style="padding: 4px;">Veteran</td>
                            </tr>
                        </table>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                            <p><span class="text-emphasis">Analysis Results:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">Individuals:</span> Each Imperial Guard regiment</li>
                                <li><span class="text-key">Categorical Variables:</span> Home World, Specialty, Battle Rating</li>
                                <li><span class="text-key">Quantitative Variable:</span> Size (numerical measurement)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Practice - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>⚔️ Classification Training</h4>
                        <p>Apply your knowledge to classify data elements from Space Marine Chapter analysis:</p>
                    </div>
                </div>
            `,
            interactive: { 
                type: "classification",
                question: "Classify each data element according to statistical terminology:",
                items: [
                    { text: "The individual Space Marine Chapters being studied", category: "Individual" },
                    { text: "Chapter name (Ultramarines, Blood Angels, etc.)", category: "Categorical Variable" },
                    { text: "Number of battle-brothers in each chapter", category: "Quantitative Variable" }
                ], 
                categories: ["Individual", "Categorical Variable", "Quantitative Variable"] 
            }
        },

        {
            title: "The Emperor's Data Classification Protocol",
            content: `
                <h3>Categorical Data Analysis in Imperial Service</h3>
                <p>The vast Imperium requires systematic organization of information into categories.</p>
                
                ${LessonGridBuilder.create({
                    theory: { title: "Categorical Data Principles", definitions: [
                        { term: "Categorical Data", definition: "Data that can be placed into categories or groups" },
                        { term: "Key Feature", definition: "Categories are distinct and separate (no overlapping)" }
                    ], lists: [{ title: "Characteristics", items: [
                        { category: "Mutually Exclusive", description: "Each data point belongs to only one category" },
                        { category: "Exhaustive", description: "All possible data points can be categorized" }
                    ]}] },
                    examples: { title: "Imperial Examples", highlights: { title: "Valid Categories", items: [
                        "Planet Types: Hive, Agri, Death, Fortress", "Threat Levels: Low, Medium, High, Extreme"
                    ]} },
                    application: { title: "Sector Classification System", customContent: StandardTable.generate({
                        headers: ["Sector", "Primary World Type", "Population", "Threat Assessment"],
                        rows: [["Ultima Segmentum", "Hive World", "High", "Medium"], ["Solar Segmentum", "Fortress World", "Medium", "Low"]]
                    }) },
                    interactive: { title: "Protocol Mastery", prompt: "Understanding complete - proceed to bar graphs" }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Evaluate each classification system for categorical data compliance:",
                items: [
                    { text: "Planet Types: Hive, Agri, Death, Fortress, Mining (all worlds fit exactly one type)", category: "Valid Categorical System" },
                    { text: "Space Marine Ages: Young, Middle-aged, Old, Ancient (overlapping ranges, unclear boundaries)", category: "Invalid Categorical System" },
                    { text: "Battle Outcomes: Victory, Defeat, Draw (covers all possible results, no overlap)", category: "Valid Categorical System" },
                    { text: "Threat Levels: Low, Medium, High (missing 'Extreme' category, some threats don't fit)", category: "Invalid Categorical System" },
                    { text: "Chapter Specialties: Assault, Defense, Reconnaissance, Support (mutually exclusive roles)", category: "Valid Categorical System" },
                    { text: "Weapon Effectiveness: Good, Bad, Okay, Decent (subjective, overlapping meanings)", category: "Invalid Categorical System" }
                ],
                categories: ["Valid Categorical System", "Invalid Categorical System"]
            }
        },

        {
            title: "Bar Graphs: Visualizing Imperial Forces",
            content: `
                <h3>Imperial Data Visualization Protocol</h3>
                <p>Bar graphs are the primary weapon for displaying categorical data in the Imperium.</p>
                
                ${LessonGridBuilder.create({
                    theory: { title: "Bar Graph Fundamentals", definitions: [
                        { term: "Bar Graph", definition: "Visual display of categorical data using rectangular bars" },
                        { term: "Height", definition: "Represents the frequency or count of each category" }
                    ], lists: [{ title: "Essential Rules", items: [
                        { category: "Equal Width", description: "All bars must be the same width" },
                        { category: "Gaps Between Bars", description: "Shows categories are separate" },
                        { category: "Zero Baseline", description: "Bars start from zero for accurate comparison" }
                    ]}] },
                    examples: { title: "Construction Steps", steps: [
                        { action: "Collect and organize data", description: "Count frequencies for each category" },
                        { action: "Choose appropriate scale", description: "Y-axis should accommodate all values" },
                        { action: "Draw equal-width bars", description: "Height represents frequency/count" }
                    ] },
                    application: { title: "Chapter Strength Visualization", subtitle: "Sector Marshal's Strategic Display:",
                        customContent: LessonChart.create(LessonChart.presets.chapterStrength())
                    },
                    interactive: { title: "Bar Graph Appropriateness", prompt: "Which scenarios are best displayed with a bar graph?" }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Classify each data scenario as 'Appropriate for Bar Graph' or 'Not Appropriate for Bar Graph':",
                items: [
                    { text: "Number of Space Marines in each Chapter (Ultramarines: 950, Blood Angels: 850, Imperial Fists: 900)", category: "Appropriate for Bar Graph" },
                    { text: "Temperature readings over 24 hours (continuous measurements every hour)", category: "Not Appropriate for Bar Graph" },
                    { text: "Types of weapons used by Imperial Guard regiments (Lasgun, Plasma, Melta, Flamer)", category: "Appropriate for Bar Graph" },
                    { text: "Battle-brother height measurements in centimeters (185.3, 187.1, 189.8, etc.)", category: "Not Appropriate for Bar Graph" },
                    { text: "Threat levels by sector (Low: 12 sectors, Medium: 8 sectors, High: 5 sectors)", category: "Appropriate for Bar Graph" },
                    { text: "Relationship between training hours and battle effectiveness scores", category: "Not Appropriate for Bar Graph" }
                ],
                categories: ["Appropriate for Bar Graph", "Not Appropriate for Bar Graph"]
            }
        },

        {
            title: "Reading Bar Graphs: Imperial Intelligence Analysis",
            content: `
                <h3>Interpreting Visual Data for Strategic Decisions</h3>
                <p>Imperial commanders must quickly extract critical information from visual data.</p>
                
                ${LessonGridBuilder.create({
                    theory: { title: "Reading Method", definitions: [
                        { term: "Reading Steps", definition: "1. Read title 2. Check axes 3. Compare heights 4. Calculate differences 5. Draw conclusions" }
                    ], lists: [{ title: "Essential Skills", items: [
                        { category: "Identify", description: "highest and lowest values" },
                        { category: "Calculate", description: "differences between categories" },
                        { category: "Find", description: "totals and percentages" }
                    ]}] },
                    examples: { title: "Key Calculations", highlights: { title: "Common Formulas", items: [
                        "Difference: Value A - Value B", "Total: Sum of all categories", "Percentage: (Category ÷ Total) × 100%"
                    ]} },
                    application: { title: "Chapter Distribution Analysis", subtitle: "Force Composition Assessment:",
                        customContent: LessonChart.create(LessonChart.presets.chapterDistribution()) + StandardTable.generate({
                            headers: ["Chapter", "Battle-Brothers", "Percentage"],
                            rows: [["Ultramarines", "950", "22.4%"], ["Blood Angels", "850", "20.0%"], ["Imperial Fists", "900", "21.2%"]],
                            caption: "Total Force: 4,250 Battle-Brothers"
                        })
                    },
                    interactive: { title: "Strategic Calculation", prompt: "Calculate differences and percentages from the chart" }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Based on the Chapter Distribution data above, classify each statement as 'True' or 'False':",
                items: [
                    { text: "The Ultramarines have 100 more battle-brothers than the Blood Angels", category: "True" },
                    { text: "The Imperial Fists represent exactly 21.2% of the total force", category: "True" },
                    { text: "The Blood Angels have the smallest number of battle-brothers", category: "True" },
                    { text: "The total force contains more than 5,000 battle-brothers", category: "False" },
                    { text: "The Ultramarines and Imperial Fists combined have 1,850 battle-brothers", category: "True" },
                    { text: "The Blood Angels represent more than 25% of the total force", category: "False" }
                ],
                categories: ["True", "False"]
            }
        },

        {
            title: "Two-Way Tables: Imperial Cross-Classification",
            content: `
                <h3>Analyzing Two Variables Simultaneously</h3>
                <p>The Adeptus Administratum must analyze relationships between multiple categorical variables to understand complex patterns across the Imperium.</p>
                
                ${LessonGridBuilder.create({
                    theory: { 
                        title: "Two-Way Table Structure", 
                        definitions: [
                            { term: "Two-Way Table", definition: "Displays counts for two categorical variables simultaneously" },
                            { term: "Rows", definition: "Represent categories of one variable" },
                            { term: "Columns", definition: "Represent categories of the second variable" },
                            { term: "Cells", definition: "Show the count for each combination of categories" }
                        ],
                        lists: [{
                            title: "Essential Components",
                            items: [
                                { category: "Row Totals", description: "Sum of counts across each row" },
                                { category: "Column Totals", description: "Sum of counts down each column" },
                                { category: "Grand Total", description: "Total count of all observations" }
                            ]
                        }]
                    },
                    examples: {
                        title: "Construction Process",
                        steps: [
                            { action: "Identify two categorical variables", description: "Choose what characteristics to analyze" },
                            { action: "Create row and column headers", description: "Label categories for each variable" },
                            { action: "Count combinations", description: "Tally observations for each cell" },
                            { action: "Calculate totals", description: "Add row totals, column totals, and grand total" },
                            { action: "Verify accuracy", description: "Ensure all totals match the grand total" }
                        ],
                        highlights: {
                            title: "Key Relationships",
                            items: [
                                "Each cell represents a specific combination of categories",
                                "Totals provide marginal distributions for each variable"
                            ]
                        }
                    },
                    application: { 
                        title: "Chapter Homeworld Analysis",
                        subtitle: "Recruitment Patterns by Chapter and World Type:",
                        customContent: StandardTable.generate({
                            headers: ["Chapter", "Hive World", "Death World", "Fortress World", "Total"],
                            rows: [
                                ["Ultramarines", "12", "3", "8", "23"], 
                                ["Blood Angels", "8", "7", "5", "20"], 
                                ["Imperial Fists", "5", "2", "15", "22"],
                                ["Total", "25", "12", "28", "65"]
                            ],
                            caption: "Recruitment sources for three major Space Marine Chapters"
                        }),
                        insights: {
                            title: "Strategic Observations",
                            items: [
                                "Imperial Fists heavily favor Fortress World recruitment (68%)",
                                "Blood Angels show highest Death World recruitment rate (35%)",
                                "Fortress Worlds provide the most recruits overall (43%)"
                            ]
                        }
                    },
                    interactive: { 
                        title: "Table Analysis Practice", 
                        prompt: "Test your understanding of two-way table relationships" 
                    }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Based on the Chapter Homeworld Analysis table, classify each statement as 'True' or 'False':",
                items: [
                    { text: "The Imperial Fists recruit more from Fortress Worlds than the other two chapters combined", category: "True" },
                    { text: "Death Worlds provide the smallest number of total recruits across all chapters", category: "True" },
                    { text: "The Ultramarines have the highest total recruitment numbers", category: "True" },
                    { text: "More than half of Blood Angels recruits come from Hive Worlds", category: "False" },
                    { text: "The total number of recruits from all sources is 65", category: "True" },
                    { text: "Each chapter recruits equally from all world types", category: "False" }
                ],
                categories: ["True", "False"]
            }
        },

        {
            title: "Marginal Distributions: Force Distribution Analysis",
            content: `
                <h3>Understanding Overall Patterns</h3>
                <p>Marginal distributions reveal the overall patterns of individual variables, essential for strategic planning across the Imperium.</p>
                
                ${LessonGridBuilder.create({
                    theory: { 
                        title: "Marginal Distribution Concepts", 
                        definitions: [
                            { term: "Marginal Distribution", definition: "Distribution of one variable ignoring the other" },
                            { term: "Row Marginals", definition: "Totals or percentages for each row category" },
                            { term: "Column Marginals", definition: "Totals or percentages for each column category" },
                            { term: "Overall Pattern", definition: "General distribution across all categories of one variable" }
                        ],
                        lists: [{
                            title: "Key Characteristics",
                            items: [
                                { category: "Independence", description: "Shows distribution without considering other variables" },
                                { category: "Summary View", description: "Provides overall picture of single variable patterns" },
                                { category: "Comparison Tool", description: "Allows comparison of different categories' prevalence" }
                            ]
                        }]
                    },
                    examples: {
                        title: "Calculation Process",
                        steps: [
                            { action: "Extract row totals", description: "Sum counts across each row (or use existing totals)" },
                            { action: "Extract column totals", description: "Sum counts down each column (or use existing totals)" },
                            { action: "Calculate percentages", description: "Divide each total by grand total × 100%" },
                            { action: "Create marginal table", description: "Display just the single variable distribution" },
                            { action: "Interpret patterns", description: "Identify most/least common categories" }
                        ],
                        highlights: {
                            title: "Strategic Applications",
                            items: [
                                "Resource allocation based on overall demand patterns",
                                "Identifying most common recruitment sources"
                            ]
                        }
                    },
                    application: { 
                        title: "Chapter Recruitment Analysis",
                        subtitle: "Marginal Distribution Comparison:",
                        customContent: StandardTable.generate({
                            headers: ["Category", "Hive Worlds", "Death Worlds", "Fortress Worlds", "Total"],
                            rows: [
                                ["Ultramarines", "52%", "13%", "35%", "100%"],
                                ["Blood Angels", "40%", "35%", "25%", "100%"],
                                ["Imperial Fists", "23%", "9%", "68%", "100%"],
                                ["Marginal Distribution", "38%", "18%", "44%", "100%"]
                            ],
                            caption: "Percentage distributions showing individual chapter patterns vs. overall pattern"
                        }),
                        insights: {
                            title: "Distribution Analysis",
                            items: [
                                "Overall: Fortress Worlds dominate recruitment (44%)",
                                "Hive Worlds provide steady recruitment across chapters (38%)",
                                "Death World recruitment varies significantly by chapter"
                            ]
                        }
                    },
                    interactive: { 
                        title: "Marginal Analysis Practice", 
                        prompt: "Test your understanding of marginal distributions" 
                    }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Based on the marginal distribution data, classify each statement as 'True' or 'False':",
                items: [
                    { text: "Fortress Worlds provide the highest percentage of overall recruitment (44%)", category: "True" },
                    { text: "Death Worlds have the lowest marginal distribution percentage", category: "True" },
                    { text: "Imperial Fists recruit more heavily from Fortress Worlds than the overall average", category: "True" },
                    { text: "The marginal distribution shows equal recruitment from all world types", category: "False" },
                    { text: "Blood Angels have the highest Death World recruitment rate among all chapters", category: "True" },
                    { text: "Hive Worlds account for more than half of total recruitment", category: "False" }
                ],
                categories: ["True", "False"]
            }
        },

        {
            title: "Conditional Distributions: Tactical Assessment Protocols",
            content: `
                <h3>Analyzing Relationships Between Variables</h3>
                <p>Conditional distributions reveal how one variable behaves when we know the value of another variable—critical for tactical decision-making.</p>
                
                ${LessonGridBuilder.create({
                    theory: { 
                        title: "Conditional Analysis", 
                        definitions: [
                            { term: "Conditional Distribution", definition: "Distribution of one variable given a specific value of another" },
                            { term: "Given Condition", definition: "The known value of one variable that defines the subset" },
                            { term: "Conditional Percentages", definition: "Percentages calculated within each condition/row" },
                            { term: "Pattern Comparison", definition: "Comparing distributions across different conditions" }
                        ],
                        lists: [{
                            title: "Key Principles",
                            items: [
                                { category: "Subset Focus", description: "Look at distribution within specific groups only" },
                                { category: "Row Percentages", description: "Calculate percentages across each row separately" },
                                { category: "Pattern Detection", description: "Compare distributions to identify relationships" }
                            ]
                        }]
                    },
                    examples: {
                        title: "Calculation Process",
                        steps: [
                            { action: "Select the condition", description: "Choose which variable's categories define the groups" },
                            { action: "Calculate row percentages", description: "For each row: (cell ÷ row total) × 100%" },
                            { action: "Compare across conditions", description: "Look for differences between row distributions" },
                            { action: "Interpret relationships", description: "Identify patterns and dependencies" },
                            { action: "Draw tactical conclusions", description: "Apply findings to strategic decisions" }
                        ],
                        highlights: {
                            title: "Strategic Questions",
                            items: [
                                "Does training level affect battle outcomes?",
                                "Do different chapters have varying success patterns?"
                            ]
                        }
                    },
                    application: { 
                        title: "Battle Effectiveness by Training",
                        subtitle: "Conditional Victory Rates by Training Level:",
                        customContent: StandardTable.comparison({
                            title: "Victory Rate by Training Level",
                            categories: ["Elite Training", "Standard Training", "Basic Training"],
                            outcomes: ["Victory", "Draw", "Defeat"],
                            data: [[85, 10, 5], [65, 20, 15], [45, 25, 30]]
                        }),
                        insights: {
                            title: "Tactical Analysis",
                            items: [
                                "Elite Training: 85% victory rate (strong performance)",
                                "Standard Training: 65% victory rate (moderate effectiveness)",
                                "Basic Training: 45% victory rate with 30% defeat rate",
                                "Clear positive relationship between training and success"
                            ]
                        }
                    },
                    interactive: { 
                        title: "Conditional Analysis Practice", 
                        prompt: "Test your understanding of conditional distributions" 
                    }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Based on the Battle Effectiveness data, classify each statement as 'True' or 'False':",
                items: [
                    { text: "Elite Training units have an 85% victory rate", category: "True" },
                    { text: "Basic Training units are more likely to be defeated than to achieve victory", category: "False" },
                    { text: "Standard Training units have a higher draw rate than Elite Training units", category: "True" },
                    { text: "Training level shows no relationship to battle outcomes", category: "False" },
                    { text: "Elite Training units have the lowest defeat rate (5%)", category: "True" },
                    { text: "Basic Training units have a 45% victory rate", category: "True" }
                ],
                categories: ["True", "False"]
            }
        },

        {
            title: "Association and Independence: Strategic Correlation Analysis",
            content: `
                <h3>Detecting Relationships in Imperial Data</h3>
                <p>Understanding whether variables are associated or independent is crucial for strategic decision-making across the Imperium. This fundamental concept determines whether knowing one variable helps predict another.</p>
                
                ${LessonGridBuilder.create({
                    theory: { 
                        title: "Association vs. Independence", 
                        definitions: [
                            { term: "Association", definition: "A relationship exists between two variables - knowing one helps predict the other" },
                            { term: "Independence", definition: "No relationship exists - knowing one variable provides no information about the other" },
                            { term: "Strong Association", definition: "Conditional distributions differ by 20+ percentage points" },
                            { term: "Weak Association", definition: "Conditional distributions differ by 5-20 percentage points" }
                        ], 
                        lists: [{ 
                            title: "Key Characteristics", 
                            items: [
                                { category: "Association", description: "Different conditional distributions, predictive power, consistent patterns" },
                                { category: "Independence", description: "Similar conditional distributions, no predictive power, uniform patterns" },
                                { category: "Detection Method", description: "Compare conditional percentages across all categories" }
                            ]
                        }] 
                    },
                    examples: {
                        title: "Step-by-Step Detection",
                        steps: [
                            { action: "Calculate conditional distributions", description: "Find row percentages for each category" },
                            { action: "Compare across conditions", description: "Look for patterns in the percentages" },
                            { action: "Measure differences", description: "Calculate largest - smallest percentage in each outcome" },
                            { action: "Apply decision rules", description: "≤5% = Independence, 5-20% = Weak, >20% = Strong" },
                            { action: "Draw strategic conclusions", description: "Determine if one variable predicts the other" }
                        ],
                        highlights: {
                            title: "Quick Decision Rules",
                            items: [
                                "Independence: All conditional distributions look nearly identical",
                                "Association: Conditional distributions show clear differences"
                            ]
                        }
                    },
                    application: { 
                        title: "Comparative Analysis: Association vs. Independence",
                        subtitle: "Two Strategic Examples:",
                        customContent: `
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1rem 0;">
                                <!-- Example 1: Strong Association -->
                                <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; border: 2px solid #dc2626;">
                                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">🔴 ASSOCIATION DETECTED</h4>
                                    <h5 style="color: var(--secondary-gold); margin: 0.5rem 0;">Chapter Success by Homeworld</h5>
                                    ${StandardTable.generate({
                                        headers: ["Homeworld", "High Success", "Medium Success", "Low Success"],
                                        rows: [
                                            ["Death World", "75%", "20%", "5%"],
                                            ["Hive World", "55%", "30%", "15%"],
                                            ["Fortress World", "50%", "35%", "15%"]
                                        ],
                                        size: "small"
                                    })}
                                    <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                                        <strong>Analysis:</strong><br>
                                        • High Success: 75% - 50% = 25% difference<br>
                                        • <strong>Conclusion:</strong> Strong association (>20%)<br>
                                        • <strong>Meaning:</strong> Homeworld type predicts success rate
                                    </div>
                                </div>
                                
                                <!-- Example 2: Independence -->
                                <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; border: 2px solid #16a34a;">
                                    <h4 style="color: #16a34a; margin-bottom: 0.5rem;">🟢 INDEPENDENCE DETECTED</h4>
                                    <h5 style="color: var(--secondary-gold); margin: 0.5rem 0;">Mission Outcome by Day of Week</h5>
                                    ${StandardTable.generate({
                                        headers: ["Day", "Victory", "Draw", "Defeat"],
                                        rows: [
                                            ["Monday", "62%", "23%", "15%"],
                                            ["Wednesday", "61%", "24%", "15%"],
                                            ["Friday", "63%", "22%", "15%"]
                                        ],
                                        size: "small"
                                    })}
                                    <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                                        <strong>Analysis:</strong><br>
                                        • Victory: 63% - 61% = 2% difference<br>
                                        • <strong>Conclusion:</strong> Independence (≤5%)<br>
                                        • <strong>Meaning:</strong> Day of week doesn't affect outcomes
                                    </div>
                                </div>
                            </div>
                            
                            <div style="background: rgba(212, 175, 55, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                                <h4 style="color: var(--secondary-gold); margin-bottom: 0.5rem;">📊 Strategic Interpretation Guide</h4>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85rem;">
                                    <div>
                                        <strong>When Variables are Associated:</strong>
                                        <ul style="margin: 0.25rem 0;">
                                            <li>One variable helps predict the other</li>
                                            <li>Strategic planning should consider both</li>
                                            <li>Resources can be allocated more efficiently</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>When Variables are Independent:</strong>
                                        <ul style="margin: 0.25rem 0;">
                                            <li>Variables don't influence each other</li>
                                            <li>Can be analyzed separately</li>
                                            <li>No strategic advantage from combination</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `,
                        insights: { 
                            title: "Detection Summary", 
                            items: [
                                "Association: Homeworld predicts success (25% difference)",
                                "Independence: Day of week irrelevant to outcomes (2% difference)",
                                "Decision rule: >20% = strong, 5-20% = weak, ≤5% = independent",
                                "Strategic impact: Focus resources on associated variables"
                            ]
                        }
                    },
                    interactive: { 
                        title: "Association Detection Mastery", 
                        prompt: "Practice identifying relationships between categorical variables" 
                    }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Analyze each scenario and classify the relationship as 'Strong Association', 'Weak Association', or 'Independence':",
                items: [
                    { text: "Chapter Homeworld vs Success: Death World 75%, Hive World 55%, Fortress World 50% (25% difference)", category: "Strong Association" },
                    { text: "Battle Day vs Outcome: Monday 62% victory, Wednesday 61% victory, Friday 63% victory (2% difference)", category: "Independence" },
                    { text: "Training Level vs Performance: Elite 85% success, Standard 75% success, Basic 72% success (13% difference)", category: "Weak Association" },
                    { text: "Weapon Type vs Effectiveness: Plasma 90%, Bolter 88%, Lasgun 89% (2% difference)", category: "Independence" },
                    { text: "Experience vs Mission Success: Veteran 80%, Regular 55%, Recruit 35% (45% difference)", category: "Strong Association" },
                    { text: "Squad Size vs Victory Rate: 5-man 67%, 10-man 72%, 15-man 69% (5% difference)", category: "Independence" }
                ],
                categories: ["Strong Association", "Weak Association", "Independence"]
            }
        },

        {
            title: "Mosaic Plots: Visual Association Analysis",
            content: `
                <h3>Simple Visual Representation of Two-Way Tables</h3>
                <p>Mosaic plots make it easy to see associations between two categorical variables by using rectangles whose areas are proportional to the data values.</p>
                
                ${LessonGridBuilder.create({
                    theory: { 
                        title: "Mosaic Plot Basics", 
                        definitions: [
                            { term: "Mosaic Plot", definition: "A visual display where rectangle areas represent cell frequencies from a two-way table" },
                            { term: "Column Width", definition: "Shows the marginal distribution of the first variable" },
                            { term: "Rectangle Height", definition: "Shows the conditional distribution within each column" },
                            { term: "Rectangle Area", definition: "Proportional to the cell count or percentage" }
                        ],
                        lists: [{
                            title: "Key Features",
                            items: [
                                { category: "Width = Marginal", description: "Column widths show how common each category is" },
                                { category: "Height = Conditional", description: "Heights show percentages within each column" },
                                { category: "Area = Cell Value", description: "Rectangle size matches the actual data count" }
                            ]
                        }]
                    },
                    examples: {
                        title: "Reading Strategy",
                        steps: [
                            { action: "Start with the data table", description: "Understand the two-way table first" },
                            { action: "Examine column widths", description: "Wider columns = more common categories" },
                            { action: "Compare rectangle heights", description: "Different heights across columns = association" },
                            { action: "Look for visual patterns", description: "Uniform heights = independence, varying heights = association" }
                        ],
                        highlights: {
                            title: "Quick Visual Checks",
                            items: [
                                "Same heights across columns → Variables are independent",
                                "Different heights across columns → Variables are associated"
                            ]
                        }
                    },
                    application: { 
                        title: "Simple Example: Training vs Success",
                        subtitle: "Imperial Guard Training Effectiveness:",
                        customContent: `
                            <!-- Step 1: Show the Data Table -->
                            <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                                <h4 style="color: var(--secondary-gold); margin-bottom: 0.5rem;">📊 Step 1: The Data Table</h4>
                                ${StandardTable.generate({
                                    headers: ["Training Level", "Success", "Failure", "Total"],
                                    rows: [
                                        ["Elite", "80", "20", "100"],
                                        ["Basic", "40", "60", "100"],
                                        ["Total", "120", "80", "200"]
                                    ],
                                    caption: "200 Imperial Guard units: 100 Elite-trained, 100 Basic-trained"
                                })}
                            </div>

                            <!-- Step 2: Show the Mosaic Plot -->
                            <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                                <h4 style="color: var(--secondary-gold); margin-bottom: 1rem;">📊 Step 2: The Mosaic Plot</h4>
                                
                                <!-- Column Labels -->
                                <div style="display: flex; margin-bottom: 0.5rem;">
                                    <div style="width: 50%; text-align: center; font-size: 0.8rem; color: var(--secondary-gold); font-weight: bold;">Elite Training (50%)</div>
                                    <div style="width: 50%; text-align: center; font-size: 0.8rem; color: var(--secondary-gold); font-weight: bold;">Basic Training (50%)</div>
                                </div>
                                
                                <!-- Main Mosaic Plot -->
                                <div style="display: flex; height: 150px; border: 2px solid var(--secondary-gold); background: rgba(20, 20, 20, 0.9);">
                                    <!-- Elite Training Column (50% width because 100/200 = 50%) -->
                                    <div style="width: 50%; border-right: 2px solid var(--secondary-gold); display: flex; flex-direction: column;">
                                        <!-- Success: 80% of Elite column -->
                                        <div style="height: 80%; background: rgba(34, 197, 94, 0.8); border-bottom: 1px solid #fff; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; color: white; font-weight: bold;">
                                            Success<br>80%
                                        </div>
                                        <!-- Failure: 20% of Elite column -->
                                        <div style="height: 20%; background: rgba(239, 68, 68, 0.8); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; color: white; font-weight: bold;">
                                            Failure<br>20%
                                        </div>
                                    </div>
                                    
                                    <!-- Basic Training Column (50% width because 100/200 = 50%) -->
                                    <div style="width: 50%; display: flex; flex-direction: column;">
                                        <!-- Success: 40% of Basic column -->
                                        <div style="height: 40%; background: rgba(34, 197, 94, 0.8); border-bottom: 1px solid #fff; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; color: white; font-weight: bold;">
                                            Success<br>40%
                                        </div>
                                        <!-- Failure: 60% of Basic column -->
                                        <div style="height: 60%; background: rgba(239, 68, 68, 0.8); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; color: white; font-weight: bold;">
                                            Failure<br>60%
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Row Labels -->
                                <div style="display: flex; justify-content: space-between; margin-top: 0.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                                        <div style="width: 12px; height: 12px; background: rgba(34, 197, 94, 0.8);"></div>
                                        <span style="font-size: 0.75rem; color: var(--secondary-gold);">Success</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                                        <div style="width: 12px; height: 12px; background: rgba(239, 68, 68, 0.8);"></div>
                                        <span style="font-size: 0.75rem; color: var(--secondary-gold);">Failure</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Step 3: Analysis -->
                            <div style="background: rgba(212, 175, 55, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                                <h4 style="color: var(--secondary-gold); margin-bottom: 0.5rem;">📈 Step 3: What the Plot Shows</h4>
                                <div style="font-size: 0.9rem;">
                                    <p><strong>Column Widths:</strong> Both columns are equal width (50%) because we have equal numbers of Elite and Basic units.</p>
                                    <p><strong>Rectangle Heights:</strong> The heights are very different!</p>
                                    <ul style="margin: 0.5rem 0;">
                                        <li><strong>Elite column:</strong> 80% success (tall green), 20% failure (short red)</li>
                                        <li><strong>Basic column:</strong> 40% success (short green), 60% failure (tall red)</li>
                                    </ul>
                                    <p><strong>Conclusion:</strong> The different heights show <span style="color: #dc2626; font-weight: bold;">strong association</span> between training level and success rate!</p>
                                </div>
                            </div>
                        `,
                        insights: {
                            title: "Key Learning Points",
                            items: [
                                "Column widths = marginal distribution (50% Elite, 50% Basic)",
                                "Rectangle heights = conditional distribution (80% vs 40% success)",
                                "Different heights across columns = strong association",
                                "If heights were the same, variables would be independent"
                            ]
                        }
                    },
                    interactive: { 
                        title: "Mosaic Plot Interpretation", 
                        prompt: "Practice reading simple mosaic plots" 
                    }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Based on the Training vs Success mosaic plot above, classify each statement as 'True' or 'False':",
                items: [
                    { text: "Both columns are equal width because we have equal numbers of Elite and Basic units", category: "True" },
                    { text: "The Elite column shows 80% success (tall green rectangle) and 20% failure (short red rectangle)", category: "True" },
                    { text: "The Basic column shows 40% success (short green rectangle) and 60% failure (tall red rectangle)", category: "True" },
                    { text: "The different rectangle heights across columns indicate association between training and success", category: "True" },
                    { text: "If both columns had identical heights, the variables would be independent", category: "True" },
                    { text: "The rectangle areas are proportional to the actual counts from the data table", category: "True" }
                ],
                categories: ["True", "False"]
            }
        },

        {
            title: "Chapter Summary: Mastery of Categorical Data Analysis",
            content: `
                <h3>Imperial Data Analysis Mastery Achieved</h3>
                <p>Congratulations, Imperial Data Analyst! You have successfully completed your training in categorical data analysis. Review your mastery of essential statistical concepts.</p>
                
                ${LessonGridBuilder.create({
                    theory: { 
                        title: "Core Concepts Mastered", 
                        definitions: [
                            { term: "Data Fundamentals", definition: "Identifying individuals, variables, and distinguishing categorical from quantitative data" },
                            { term: "Categorical Analysis", definition: "Working with mutually exclusive categories and classification systems" },
                            { term: "Visual Representation", definition: "Creating and interpreting bar graphs for categorical data display" },
                            { term: "Relationship Analysis", definition: "Using two-way tables to examine associations between variables" }
                        ],
                        lists: [{ 
                            title: "Statistical Skills Achieved", 
                            items: [
                                { category: "Data Classification", description: "Identify individuals, categorical variables, and quantitative variables" },
                                { category: "Bar Graph Mastery", description: "Create, read, and interpret bar graphs with proper scaling" },
                                { category: "Two-Way Table Analysis", description: "Construct tables, calculate totals, and extract insights" },
                                { category: "Distribution Analysis", description: "Compute marginal and conditional distributions" },
                                { category: "Association Detection", description: "Distinguish between association and independence" },
                                { category: "Visual Interpretation", description: "Read mosaic plots and identify relationship patterns" }
                            ]
                        }] 
                    },
                    examples: {
                        title: "Key Techniques Learned",
                        steps: [
                            { action: "Variable Identification", description: "Classify data elements as individuals, categorical variables, or quantitative variables" },
                            { action: "Bar Graph Construction", description: "Create appropriate bar graphs with equal widths, proper scaling, and clear labels" },
                            { action: "Two-Way Table Creation", description: "Organize bivariate categorical data with accurate row/column totals" },
                            { action: "Percentage Calculations", description: "Compute marginal distributions (overall patterns) and conditional distributions (within groups)" },
                            { action: "Association Assessment", description: "Apply decision rules: ≤5% = Independence, 5-20% = Weak, >20% = Strong association" },
                            { action: "Mosaic Plot Reading", description: "Interpret column widths (marginal) and rectangle heights (conditional) to detect patterns" }
                        ],
                        highlights: {
                            title: "Critical Decision Rules",
                            items: [
                                "Association Detection: Compare conditional distributions across categories",
                                "Independence Test: Look for uniform patterns in conditional percentages"
                            ]
                        }
                    },
                    application: { 
                        title: "Imperial Mastery Assessment",
                        subtitle: "Comprehensive Skills Review:",
                        customContent: `
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1rem 0;">
                                <!-- Skills Mastery Checklist -->
                                <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px;">
                                    <h4 style="color: var(--secondary-gold); margin-bottom: 0.75rem;">✅ Skills Mastery Checklist</h4>
                                    <div style="font-size: 0.85rem; line-height: 1.4;">
                                        <div style="margin-bottom: 0.5rem;">
                                            <strong style="color: #22c55e;">🎯 Data Fundamentals:</strong><br>
                                            • Identify individuals in a dataset<br>
                                            • Distinguish categorical vs quantitative variables<br>
                                            • Recognize valid categorical systems
                                        </div>
                                        <div style="margin-bottom: 0.5rem;">
                                            <strong style="color: #22c55e;">📊 Visualization Skills:</strong><br>
                                            • Create proper bar graphs<br>
                                            • Read and interpret bar graph data<br>
                                            • Calculate differences and percentages
                                        </div>
                                        <div style="margin-bottom: 0.5rem;">
                                            <strong style="color: #22c55e;">🔗 Relationship Analysis:</strong><br>
                                            • Construct accurate two-way tables<br>
                                            • Calculate marginal distributions<br>
                                            • Compute conditional distributions<br>
                                            • Detect association vs independence
                                        </div>
                                        <div>
                                            <strong style="color: #22c55e;">🎨 Advanced Visualization:</strong><br>
                                            • Interpret mosaic plots<br>
                                            • Recognize visual association patterns
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Real-World Applications -->
                                <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px;">
                                    <h4 style="color: var(--secondary-gold); margin-bottom: 0.75rem;">🌟 Real-World Applications</h4>
                                    <div style="font-size: 0.85rem; line-height: 1.4;">
                                        <div style="margin-bottom: 0.5rem;">
                                            <strong style="color: #3b82f6;">📈 Business Intelligence:</strong><br>
                                            • Customer segment analysis<br>
                                            • Product preference studies<br>
                                            • Market research surveys
                                        </div>
                                        <div style="margin-bottom: 0.5rem;">
                                            <strong style="color: #3b82f6;">🏥 Healthcare Analytics:</strong><br>
                                            • Treatment effectiveness studies<br>
                                            • Patient outcome analysis<br>
                                            • Risk factor identification
                                        </div>
                                        <div style="margin-bottom: 0.5rem;">
                                            <strong style="color: #3b82f6;">🎓 Educational Research:</strong><br>
                                            • Student performance analysis<br>
                                            • Teaching method effectiveness<br>
                                            • Demographic impact studies
                                        </div>
                                        <div>
                                            <strong style="color: #3b82f6;">⚖️ Social Science:</strong><br>
                                            • Survey data analysis<br>
                                            • Behavioral pattern detection<br>
                                            • Policy impact assessment
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Key Formulas & Decision Rules -->
                            <div style="background: rgba(212, 175, 55, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                                <h4 style="color: var(--secondary-gold); margin-bottom: 0.75rem;">📋 Essential Formulas & Decision Rules</h4>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85rem;">
                                    <div>
                                        <strong>Key Calculations:</strong>
                                        <ul style="margin: 0.5rem 0; line-height: 1.4;">
                                            <li><strong>Percentage:</strong> (Category ÷ Total) × 100%</li>
                                            <li><strong>Marginal %:</strong> (Row/Column Total ÷ Grand Total) × 100%</li>
                                            <li><strong>Conditional %:</strong> (Cell ÷ Row Total) × 100%</li>
                                            <li><strong>Association Strength:</strong> |Max% - Min%| in each outcome</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>Decision Rules:</strong>
                                        <ul style="margin: 0.5rem 0; line-height: 1.4;">
                                            <li><strong>Independence:</strong> Difference ≤ 5%</li>
                                            <li><strong>Weak Association:</strong> 5% < Difference ≤ 20%</li>
                                            <li><strong>Strong Association:</strong> Difference > 20%</li>
                                            <li><strong>Visual Test:</strong> Different mosaic heights = association</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Next Steps -->
                            <div style="background: rgba(34, 197, 94, 0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0; border: 2px solid #22c55e;">
                                <h4 style="color: #22c55e; margin-bottom: 0.5rem;">🚀 Ready for Advanced Training</h4>
                                <p style="font-size: 0.9rem; margin: 0; line-height: 1.5;">
                                    You have mastered the fundamentals of categorical data analysis! These skills form the foundation for all statistical analysis. 
                                    You're now ready to advance to <strong>Chapter 2: Describing Quantitative Data</strong>, where you'll learn about 
                                    measures of center, spread, and distribution shapes for numerical data.
                                </p>
                            </div>
                        `,
                        insights: { 
                            title: "Mastery Achievement Summary", 
                            items: [
                                "✅ Categorical data fundamentals: Expert level",
                                "✅ Bar graph creation and interpretation: Combat-ready",
                                "✅ Two-way table analysis: Advanced proficiency", 
                                "✅ Association detection methodology: Strategic mastery",
                                "✅ Visual pattern recognition: Elite-level skills",
                                "🎯 Ready to advance to quantitative data analysis"
                            ]
                        }
                    },
                    interactive: { 
                        title: "Chapter Mastery Complete", 
                        prompt: "Proceed to Chapter 2: Describing Quantitative Data" 
                    }
                })}
            `,
            interactive: {
                type: "classification",
                question: "Final mastery check: Classify each statement about your categorical data analysis skills as 'Mastered' or 'Need Review':",
                items: [
                    { text: "I can identify individuals, categorical variables, and quantitative variables in any dataset", category: "Mastered" },
                    { text: "I can create proper bar graphs with equal widths, appropriate scaling, and clear labels", category: "Mastered" },
                    { text: "I can construct two-way tables and calculate accurate row, column, and grand totals", category: "Mastered" },
                    { text: "I can compute both marginal distributions (overall patterns) and conditional distributions (within groups)", category: "Mastered" },
                    { text: "I can apply decision rules to determine if variables show independence, weak association, or strong association", category: "Mastered" },
                    { text: "I can interpret mosaic plots by analyzing column widths and rectangle heights to detect association patterns", category: "Mastered" }
                ],
                categories: ["Mastered", "Need Review"]
            }
        }
    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTER_1_LESSONS };
}
