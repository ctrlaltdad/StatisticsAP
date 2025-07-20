// Chapter 1 Lessons: Exploring Categorical Data
// Analysis of data that falls into categories using bar graphs, Venn diagrams, and two-way tables

const CHAPTER_1_LESSONS = {
    title: "Exploring Categorical Data: The Imperial Classification System",
    description: "Master the analysis of categorical data through bar graphs, two-way tables, and conditional distributions in service to the Emperor",
    estimatedTime: "45 minutes",
    steps: [
        {
            title: "Imperial Data Fundamentals: Variables and Individuals",
            content: `
                <h3>Understanding the Building Blocks of Data Analysis</h3>
                <p>Before the Adeptus Administratum can analyze any information across the Imperium, they must first understand the fundamental components of data collection. Every statistical analysis begins with identifying <strong>individuals</strong>, <strong>variables</strong>, and the <strong>types of variables</strong> in a dataset.</p>
                
                <div class="example-box">
                    <h4>📋 Imperial Guard Regiment Registry</h4>
                    <p>Consider this data from the Departmento Munitorum about Imperial Guard regiments:</p>
                    <table border="1" style="margin: 1rem 0; border-collapse: collapse; font-size: 0.9em;">
                        <tr style="background: rgba(212, 175, 55, 0.2);">
                            <th style="padding: 6px;">Regiment Name</th>
                            <th style="padding: 6px;">Home World</th>
                            <th style="padding: 6px;">Size</th>
                            <th style="padding: 6px;">Specialty</th>
                            <th style="padding: 6px;">Battle Rating</th>
                        </tr>
                        <tr>
                            <td style="padding: 6px;">Cadian 8th</td>
                            <td style="padding: 6px;">Cadia</td>
                            <td style="padding: 6px;">5,000</td>
                            <td style="padding: 6px;">Infantry</td>
                            <td style="padding: 6px;">Elite</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px;">Mordian Iron Guard</td>
                            <td style="padding: 6px;">Mordian</td>
                            <td style="padding: 6px;">4,500</td>
                            <td style="padding: 6px;">Disciplined Infantry</td>
                            <td style="padding: 6px;">Veteran</td>
                        </tr>
                        <tr>
                            <td style="padding: 6px;">Tallarn Desert Raiders</td>
                            <td style="padding: 6px;">Tallarn</td>
                            <td style="padding: 6px;">3,200</td>
                            <td style="padding: 6px;">Fast Attack</td>
                            <td style="padding: 6px;">Elite</td>
                        </tr>
                    </table>
                </div>
                
                <div class="formula-box">
                    <strong>Key Definitions:</strong><br>
                    • <strong>Individual:</strong> Each person, object, or unit being studied<br>
                    • <strong>Variable:</strong> A characteristic that can vary from individual to individual<br>
                    • <strong>Categorical Variable:</strong> Describes qualities or characteristics (can be words or numbers representing categories)
                </div>
                
                <div class="example-box">
                    <h4>🔍 Analyzing Our Regiment Data</h4>
                    <p><strong>Individuals:</strong> Each Imperial Guard regiment (Cadian 8th, Mordian Iron Guard, Tallarn Desert Raiders)</p>
                    <p><strong>Variables:</strong> Regiment Name, Home World, Size, Specialty, Battle Rating</p>
                    <p><strong>Categorical Variables:</strong></p>
                    <ul>
                        <li><strong>Home World:</strong> Cadia, Mordian, Tallarn (categories = planets)</li>
                        <li><strong>Specialty:</strong> Infantry, Disciplined Infantry, Fast Attack (categories = combat roles)</li>
                        <li><strong>Battle Rating:</strong> Elite, Veteran (categories = skill levels)</li>
                    </ul>
                    <p><strong>Quantitative Variable:</strong> Size (numerical measurements: 5,000, 4,500, 3,200)</p>
                </div>
            `,
            interactive: {
                type: "classification",
                question: "For a study of Space Marine Chapters, identify what type of data each represents:",
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
        {
            title: "The Emperor's Data Classification Protocol",
            content: `
                <h3>Categorical Data Analysis in Imperial Service</h3>
                <p>Now that we understand individuals and variables, let's focus on <strong>categorical data analysis</strong>. In the vast Imperium, information must be organized into categories for effective governance. Whether classifying Space Marine Chapters, planetary types, or threat levels, the Adeptus Administratum relies on categorical data analysis.</p>
                
                <div class="example-box">
                    <h4>🏛️ Imperial Categories in Action</h4>
                    <p>The Segmentum Command needs to analyze Space Marine deployment across different mission types:</p>
                    <ul>
                        <li><strong>Siege Warfare:</strong> Imperial Fists, Iron Warriors</li>
                        <li><strong>Close Combat:</strong> World Eaters, Blood Angels</li>
                        <li><strong>Tactical Operations:</strong> Ultramarines, Raven Guard</li>
                    </ul>
                    <p>This is <strong>categorical data</strong> - information that falls into distinct groups or categories.</p>
                </div>
                
                <div class="formula-box">
                    <strong>Categorical Data:</strong> Data that can be placed into categories or groups<br>
                    <strong>Key Feature:</strong> Categories are distinct and separate (no overlapping)<br>
                    <strong>Examples:</strong> Planet types, combat specialties, loyalty status, threat levels
                </div>
                
                <div class="example-box">
                    <h4>⚔️ Why Categorical Analysis Matters</h4>
                    <p>Understanding categorical data helps Imperial commanders:</p>
                    <ul>
                        <li>Allocate resources based on planetary classifications</li>
                        <li>Deploy appropriate forces for specific mission types</li>
                        <li>Identify patterns in enemy behavior by threat category</li>
                        <li>Make strategic decisions using clear, organized information</li>
                    </ul>
                </div>
            `,
            interactive: null
        },
        {
            title: "Bar Graphs: Visualizing Imperial Forces",
            content: `
                <h3>The Sacred Art of Data Visualization</h3>
                <p>Bar graphs are the primary weapon for displaying categorical data. Like the mighty fortress walls of Terra, they provide clear structure and easy comparison.</p>
                
                <div class="example-box">
                    <h4>⚔️ Chapter Strength Analysis</h4>
                    <p>A Sector Marshal needs to visualize Space Marine chapter strengths:</p>
                    <ul>
                        <li><strong>Ultramarines:</strong> 1,000 Battle-Brothers</li>
                        <li><strong>Blood Angels:</strong> 950 Battle-Brothers</li>
                        <li><strong>Imperial Fists:</strong> 980 Battle-Brothers</li>
                        <li><strong>Salamanders:</strong> 740 Battle-Brothers</li>
                    </ul>
                    <p>A bar graph would show each chapter as a separate bar, with height representing strength.</p>
                </div>
                
                <div class="formula-box">
                    <strong>Bar Graph Rules:</strong><br>
                    • Bars should be equal width<br>
                    • Gaps between bars (categories are separate)<br>
                    • Height represents frequency or count<br>
                    • Clear labels for categories and scale
                </div>
                
                <p>Bar graphs can be vertical (most common) or horizontal, depending on what displays the data most clearly.</p>
            `,
            interactive: {
                type: "classification",
                question: "Which scenarios would be best displayed with a bar graph? Classify each scenario.",
                items: [
                    { text: "Number of Space Marines by Chapter", category: "Appropriate for Bar Graph" },
                    { text: "Height of individual Space Marines over time", category: "Not Appropriate for Bar Graph" },
                    { text: "Count of planets by type (50 Hive, 30 Agri, 20 Death Worlds)", category: "Appropriate for Bar Graph" },
                    { text: "Temperature readings throughout a day", category: "Not Appropriate for Bar Graph" }
                ],
                categories: ["Appropriate for Bar Graph", "Not Appropriate for Bar Graph"]
            }
        },
        {
            title: "Reading Bar Graphs: Imperial Intelligence Analysis",
            content: `
                <h3>Interpreting Visual Data for Strategic Decisions</h3>
                <p>Now that you understand how to create bar graphs, let's master the art of <strong>reading and interpreting</strong> them. Imperial commanders must quickly extract critical information from visual data to make tactical decisions.</p>
                
                <div class="example-box">
                    <h4>📊 Space Marine Chapter Strength Analysis</h4>
                    <p>The High Lords of Terra have commissioned a strength assessment of key Space Marine Chapters. Study this bar graph showing current battle-ready forces:</p>
                    
                    <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <div style="text-align: center; font-weight: bold; margin-bottom: 1rem; color: var(--secondary-gold);">
                            Active Battle-Brothers by Chapter
                        </div>
                        <div style="display: flex; align-items: end; height: 200px; gap: 10px; padding: 0 10px;">
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                <div style="background: var(--primary-red); width: 100%; height: 180px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px;">950</div>
                                <div style="margin-top: 8px; text-align: center; font-size: 0.9rem;">Ultramarines</div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                <div style="background: var(--primary-red); width: 100%; height: 160px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px;">850</div>
                                <div style="margin-top: 8px; text-align: center; font-size: 0.9rem;">Blood Angels</div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                <div style="background: var(--primary-red); width: 100%; height: 170px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px;">900</div>
                                <div style="margin-top: 8px; text-align: center; font-size: 0.9rem;">Imperial Fists</div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                <div style="background: var(--primary-red); width: 100%; height: 140px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px;">750</div>
                                <div style="margin-top: 8px; text-align: center; font-size: 0.9rem;">Salamanders</div>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                <div style="background: var(--primary-red); width: 100%; height: 150px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px;">800</div>
                                <div style="margin-top: 8px; text-align: center; font-size: 0.9rem;">Raven Guard</div>
                            </div>
                        </div>
                        <div style="text-align: center; margin-top: 10px; font-size: 0.8rem; color: var(--text-muted);">
                            Number of Battle-Brothers
                        </div>
                    </div>
                </div>
                
                <div class="formula-box">
                    <strong>Reading Bar Graphs - Key Steps:</strong><br>
                    1. <strong>Read the title</strong> - What is being measured?<br>
                    2. <strong>Check the axes</strong> - What categories and scale are used?<br>
                    3. <strong>Compare heights</strong> - Which bars are tallest/shortest?<br>
                    4. <strong>Calculate differences</strong> - Find specific numerical comparisons<br>
                    5. <strong>Draw conclusions</strong> - What patterns do you see?
                </div>
                
                <div class="example-box">
                    <h4>🎯 Practice Questions</h4>
                    <p>Using the bar graph above, answer these tactical intelligence questions:</p>
                    <ul>
                        <li><strong>Which Chapter has the most battle-brothers?</strong> Ultramarines (950)</li>
                        <li><strong>Which Chapter has the fewest?</strong> Salamanders (750)</li>
                        <li><strong>What's the difference between Ultramarines and Blood Angels?</strong> 950 - 850 = 100</li>
                        <li><strong>How many total battle-brothers across all chapters?</strong> 950 + 850 + 900 + 750 + 800 = 4,250</li>
                    </ul>
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "Based on the Space Marine Chapter strength bar graph above, calculate the difference in battle-brothers between the Imperial Fists and the Salamanders.",
                data: {
                },
                answers: {
                    difference: 150
                }
            }
        },
        {
            title: "Two-Way Tables: The Imperial Cross-Reference",
            content: `
                <h3>Analyzing Relationships Between Categories</h3>
                <p>When the Administratum needs to analyze the relationship between two categorical variables, they use the sacred <strong>two-way tables</strong> (also called contingency tables).</p>
                
                <div class="example-box">
                    <h4>📊 Imperial Guard Regiment Analysis</h4>
                    <p>Analyzing 1,000 Imperial Guard regiments by planet type and combat specialty:</p>
                    <table border="1" style="margin: 1rem 0; border-collapse: collapse;">
                        <tr style="background: rgba(212, 175, 55, 0.2);">
                            <th style="padding: 8px;">Combat Role</th>
                            <th style="padding: 8px;">Hive World</th>
                            <th style="padding: 8px;">Agri World</th>
                            <th style="padding: 8px;">Death World</th>
                            <th style="padding: 8px;"><strong>Total</strong></th>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Infantry</strong></td>
                            <td style="padding: 8px;">180</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;"><strong>400</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Armored</strong></td>
                            <td style="padding: 8px;">150</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;">50</td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Artillery</strong></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">80</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                        </tr>
                        <tr style="background: rgba(212, 175, 55, 0.2);">
                            <td style="padding: 8px;"><strong>Total</strong></td>
                            <td style="padding: 8px;"><strong>450</strong></td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                            <td style="padding: 8px;"><strong>250</strong></td>
                            <td style="padding: 8px;"><strong>1,000</strong></td>
                        </tr>
                    </table>
                </div>
                
                <div class="formula-box">
                    <strong>Two-Way Table Components:</strong><br>
                    • <strong>Joint Frequencies:</strong> Counts in individual cells<br>
                    • <strong>Marginal Frequencies:</strong> Row and column totals<br>
                    • <strong>Grand Total:</strong> Total count in bottom-right corner
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "Based on the Imperial Guard table above, what percentage of all regiments are Infantry from Hive Worlds?",
                data: {
                    "Infantry from Hive Worlds": 180,
                    "Total Regiments": 1000
                },
                answers: {
                    percentage: 18
                }
            }
        },
        {
            title: "Marginal Distributions: The Emperor's Overview",
            content: `
                <h3>Understanding the Margins of Imperial Data</h3>
                <p>Marginal distributions show us the overall breakdown for each variable separately, ignoring the other variable.</p>
                
                <div class="example-box">
                    <h4>📈 From Our Regiment Table</h4>
                    <p><strong>Marginal Distribution of Combat Roles:</strong></p>
                    <ul>
                        <li>Infantry: 400/1,000 = 40%</li>
                        <li>Armored: 300/1,000 = 30%</li>
                        <li>Artillery: 300/1,000 = 30%</li>
                    </ul>
                    
                    <p><strong>Marginal Distribution of Planet Types:</strong></p>
                    <ul>
                        <li>Hive World: 450/1,000 = 45%</li>
                        <li>Agri World: 300/1,000 = 30%</li>
                        <li>Death World: 250/1,000 = 25%</li>
                    </ul>
                </div>
                
                <div class="formula-box">
                    <strong>Marginal Distribution Formula:</strong><br>
                    Marginal % = (Row Total or Column Total) ÷ Grand Total × 100%
                </div>
                
                <p>These marginal distributions tell us about the overall composition of our forces, regardless of the relationship between variables.</p>
            `,
            interactive: null
        },
        {
            title: "Conditional Distributions: Strategic Intelligence",
            content: `
                <h3>Conditional Analysis for Imperial Decision Making</h3>
                <p>Conditional distributions answer questions like "Given that we're looking at Hive World regiments, what's the breakdown by combat role?" This is crucial for strategic planning.</p>
                
                <div class="example-box">
                    <h4>🎯 Conditional Distribution Examples</h4>
                    <p><strong>Combat Role Distribution | Hive Worlds:</strong></p>
                    <ul>
                        <li>Infantry: 180/450 = 40%</li>
                        <li>Armored: 150/450 = 33.3%</li>
                        <li>Artillery: 120/450 = 26.7%</li>
                    </ul>
                    
                    <p><strong>Planet Type Distribution | Infantry Regiments:</strong></p>
                    <ul>
                        <li>Hive World: 180/400 = 45%</li>
                        <li>Agri World: 120/400 = 30%</li>
                        <li>Death World: 100/400 = 25%</li>
                    </ul>
                </div>
                
                <div class="formula-box">
                    <strong>Conditional Distribution Formula:</strong><br>
                    Conditional % = (Cell Count) ÷ (Row or Column Total) × 100%<br>
                    <em>Depends on what you're conditioning on!</em>
                </div>
                
                <p>Conditional distributions help us understand if there are patterns or relationships between our categorical variables.</p>
            `,
            interactive: {
                type: "calculation",
                question: "Given Death World regiments, what percentage specialize in Artillery?",
                data: {
                    "Death World Artillery Regiments": 100,
                    "Total Death World Regiments": 250
                },
                answers: {
                    percentage: 40
                }
            }
        },
        {
            title: "Association and Independence in Imperial Data",
            content: `
                <h3>Detecting Patterns in the Emperor's Domain</h3>
                <p>The final step in categorical data analysis is determining whether variables are <strong>associated</strong> (related) or <strong>independent</strong> (unrelated).</p>
                
                <div class="example-box">
                    <h4>🔍 Detecting Association</h4>
                    <p>If planet type and combat specialty were independent, we'd expect the same combat role distribution on all planet types. But look at our data:</p>
                    <ul>
                        <li><strong>Hive Worlds:</strong> Favor Infantry (40%) and Armored (33%)</li>
                        <li><strong>Death Worlds:</strong> Favor Artillery (40%) and Infantry (40%)</li>
                        <li><strong>Agri Worlds:</strong> More balanced distribution</li>
                    </ul>
                    <p>These different conditional distributions suggest the variables are <strong>associated</strong>!</p>
                </div>
                
                <div class="formula-box">
                    <strong>Independence vs Association:</strong><br>
                    • <strong>Independent:</strong> Conditional distributions are identical<br>
                    • <strong>Associated:</strong> Conditional distributions differ<br>
                    • Association suggests one variable influences the other
                </div>
                
                <div class="example-box">
                    <h4>⚡ Strategic Implications</h4>
                    <p>This association makes tactical sense:</p>
                    <ul>
                        <li>Hive Worlds: Urban environments favor infantry and armor</li>
                        <li>Death Worlds: Harsh conditions require artillery support</li>
                        <li>Agri Worlds: Open terrain allows all combat roles</li>
                    </ul>
                </div>
                
                <p>Understanding association helps Imperial commanders make informed deployment decisions based on planetary characteristics.</p>
            `,
            interactive: {
                type: "classification",
                question: "Based on the conditional distributions, classify these relationships:",
                items: [
                    { text: "Planet type and combat role in our example", category: "Associated" },
                    { text: "If all planet types had identical 40%-30%-30% combat distributions", category: "Independent" },
                    { text: "Space Marine eye color and combat effectiveness", category: "Independent" },
                    { text: "Chapter homeworld type and preferred combat tactics", category: "Associated" }
                ],
                categories: ["Associated", "Independent"]
            }
        }
    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTER_1_LESSONS };
}
