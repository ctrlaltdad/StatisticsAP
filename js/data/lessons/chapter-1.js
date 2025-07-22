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
                <p>Imperial commanders must quickly extract critical information from visual data to make tactical decisions. Master the art of reading and interpreting bar graphs through structured analysis.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Core Theory & Method</h4>
                        
                        <div class="formula-box">
                            <strong>Reading Bar Graphs - Key Steps:</strong><br>
                            1. <strong>Read the title</strong> - What is being measured?<br>
                            2. <strong>Check the axes</strong> - What categories and scale are used?<br>
                            3. <strong>Compare heights</strong> - Which bars are tallest/shortest?<br>
                            4. <strong>Calculate differences</strong> - Find specific numerical comparisons<br>
                            5. <strong>Draw conclusions</strong> - What patterns do you see?
                        </div>
                        
                        <p><strong>Essential Skills:</strong></p>
                        <ul>
                            <li>Identify highest and lowest values</li>
                            <li>Calculate differences between categories</li>
                            <li>Find totals and percentages</li>
                            <li>Recognize patterns and trends</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Key Calculations</h4>
                        
                        <p><strong>Common Calculations:</strong></p>
                        <ul>
                            <li><strong>Difference:</strong> Value A - Value B</li>
                            <li><strong>Total:</strong> Sum of all categories</li>
                            <li><strong>Percentage:</strong> (Category ÷ Total) × 100%</li>
                            <li><strong>Ratio:</strong> Value A ÷ Value B</li>
                        </ul>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <strong>Example Analysis:</strong><br>
                            If Chapter A has 950 marines and Chapter B has 750:<br>
                            • <strong>Difference:</strong> 950 - 750 = 200<br>
                            • <strong>Ratio:</strong> 950 ÷ 750 = 1.27<br>
                            • <strong>Percentage of total:</strong> 950 ÷ 4,250 × 100% = 22.4%
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Space Marine Chapter Analysis</h4>
                        
                        <p><strong>High Lords Strength Assessment:</strong></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="text-align: center; font-weight: bold; margin-bottom: 1rem; color: var(--secondary-gold);">
                                Battle-Brothers by Chapter
                            </div>
                            <div style="display: flex; align-items: end; height: 160px; gap: 8px; padding: 0 10px;">
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 140px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px; font-size: 0.8rem;">950</div>
                                    <div style="margin-top: 8px; text-align: center; font-size: 0.8rem;">Ultramarines</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 120px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px; font-size: 0.8rem;">850</div>
                                    <div style="margin-top: 8px; text-align: center; font-size: 0.8rem;">Blood Angels</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 130px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px; font-size: 0.8rem;">900</div>
                                    <div style="margin-top: 8px; text-align: center; font-size: 0.8rem;">Imperial Fists</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 100px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px; font-size: 0.8rem;">750</div>
                                    <div style="margin-top: 8px; text-align: center; font-size: 0.8rem;">Salamanders</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 110px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 5px; font-size: 0.8rem;">800</div>
                                    <div style="margin-top: 8px; text-align: center; font-size: 0.8rem;">Raven Guard</div>
                                </div>
                            </div>
                        </div>
                        
                        <p style="font-size: 0.9rem;"><strong>Data Analysis:</strong> Total Forces = 4,250 Battle-Brothers across 5 Chapters. Ultramarines have the highest strength, Salamanders the lowest.</p>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Tactical Intelligence Question</h4>
                        
                        <div class="interactive-element">
                            <p><strong>Mission Briefing:</strong> Calculate the difference in battle-brothers between the Imperial Fists and the Salamanders for force deployment planning.</p>
                            
                            <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <p><strong>Data Reference:</strong></p>
                                <ul style="font-size: 0.9rem; margin: 0;">
                                    <li>Imperial Fists: 900 battle-brothers</li>
                                    <li>Salamanders: 750 battle-brothers</li>
                                </ul>
                            </div>
                            
                            <div class="calculation-inputs">
                                <label>Difference: <input type="number" id="difference-input" step="1" placeholder="Enter the difference"></label>
                            </div>
                            <button class="check-answers-btn" onclick="window.lessonComponent.checkCalculation()">
                                Check Answer
                            </button>
                            <div class="feedback-area"></div>
                        </div>
                    </div>
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "Calculate the difference in battle-brothers between the Imperial Fists and the Salamanders.",
                data: {
                    "Imperial Fists": 900,
                    "Salamanders": 750
                },
                answers: {
                    difference: 150
                }
            }
        },
        {
            title: "Advanced Bar Graph Analysis: Percentage Calculations",
            content: `
                <h3>Converting Counts to Percentages for Strategic Planning</h3>
                <p>Imperial commanders need to understand proportional relationships and relative strengths. Learn the theory and practice of percentage calculations for tactical decision-making.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Percentage Theory</h4>
                        
                        <div class="formula-box">
                            <strong>Percentage Formula:</strong><br>
                            Percentage = (Individual Value ÷ Total Value) × 100%<br>
                            <em>Shows what portion each category represents of the whole</em>
                        </div>
                        
                        <p><strong>Why Use Percentages?</strong></p>
                        <ul>
                            <li>Compare different sized groups fairly</li>
                            <li>Understand relative importance</li>
                            <li>Make proportional comparisons</li>
                            <li>Standardize data for analysis</li>
                        </ul>
                        
                        <p><strong>Strategic Applications:</strong></p>
                        <ul>
                            <li>Resource allocation decisions</li>
                            <li>Force distribution analysis</li>
                            <li>Comparative strength assessment</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Step-by-Step Process</h4>
                        
                        <p><strong>Calculation Steps:</strong></p>
                        <ol>
                            <li><strong>Find the total</strong> - Add all values</li>
                            <li><strong>Select the category</strong> - Choose what to calculate</li>
                            <li><strong>Divide and multiply</strong> - (Category ÷ Total) × 100</li>
                            <li><strong>Round appropriately</strong> - Usually to 1 decimal place</li>
                        </ol>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <strong>Example Calculation:</strong><br>
                            If Raven Guard has 800 marines out of 4,250 total:<br>
                            • <strong>Step 1:</strong> Total = 4,250<br>
                            • <strong>Step 2:</strong> Raven Guard = 800<br>
                            • <strong>Step 3:</strong> 800 ÷ 4,250 × 100 = 18.8%<br>
                            • <strong>Step 4:</strong> Round to 18.8%
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Chapter Distribution Analysis</h4>
                        
                        <p><strong>Force Composition Assessment:</strong></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="text-align: center; font-weight: bold; margin-bottom: 1rem; color: var(--secondary-gold);">
                                Chapter Battle-Brothers (Total: 4,250)
                            </div>
                            <div style="display: flex; align-items: end; height: 120px; gap: 6px; padding: 0 8px;">
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 100px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 3px; font-size: 0.7rem;">950</div>
                                    <div style="margin-top: 5px; text-align: center; font-size: 0.7rem;">Ultramarines</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 85px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 3px; font-size: 0.7rem;">850</div>
                                    <div style="margin-top: 5px; text-align: center; font-size: 0.7rem;">Blood Angels</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 90px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 3px; font-size: 0.7rem;">900</div>
                                    <div style="margin-top: 5px; text-align: center; font-size: 0.7rem;">Imperial Fists</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 70px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 3px; font-size: 0.7rem;">750</div>
                                    <div style="margin-top: 5px; text-align: center; font-size: 0.7rem;">Salamanders</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; flex: 1;">
                                    <div style="background: var(--primary-red); width: 100%; height: 75px; display: flex; align-items: end; justify-content: center; color: white; font-weight: bold; padding-bottom: 3px; font-size: 0.7rem;">800</div>
                                    <div style="margin-top: 5px; text-align: center; font-size: 0.7rem;">Raven Guard</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                            <p><strong>📊 Example Calculations:</strong></p>
                            <ul style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                                <li><strong>Ultramarines:</strong> 950 ÷ 4,250 × 100% = 22.4%</li>
                                <li><strong>Blood Angels:</strong> 850 ÷ 4,250 × 100% = 20.0%</li>
                                <li><strong>Imperial Fists:</strong> 900 ÷ 4,250 × 100% = 21.2%</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Strategic Calculation</h4>
                        
                        <div class="interactive-element">
                            <p><strong>Mission Briefing:</strong> Calculate what percentage of total Space Marine forces the Raven Guard represents for resource allocation planning.</p>
                            
                            <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <p><strong>Data Reference:</strong></p>
                                <ul style="font-size: 0.9rem; margin: 0;">
                                    <li>Raven Guard: 800 battle-brothers</li>
                                    <li>Total Forces: 4,250 battle-brothers</li>
                                </ul>
                            </div>
                            
                            <div class="calculation-inputs">
                                <label>Percentage: <input type="number" id="percentage-input" step="0.1" min="0" max="100" placeholder="Enter percentage"> %</label>
                            </div>
                            <button class="check-answers-btn" onclick="window.lessonComponent.checkCalculation()">
                                Check Answer
                            </button>
                            <div class="feedback-area"></div>
                        </div>
                    </div>
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "What percentage of the total Space Marine forces do the Raven Guard represent? (Round to 1 decimal place)",
                data: {
                    "Raven Guard": 800,
                    "Total Forces": 4250
                },
                answers: {
                    percentage: 18.8
                }
            }
        },
        {
            title: "Comparative Bar Graph Analysis: Ratios and Relationships",
            content: `
                <h3>Understanding Relationships Between Categories</h3>
                <p>Beyond simple differences, Imperial strategists need to understand ratios and relationships between different forces. This helps in understanding relative strength and making tactical decisions.</p>
                
                <div class="example-box">
                    <h4>📊 Space Marine Chapter Strength - Visual Reference</h4>
                    <p>Let's use our Chapter strength bar graph to analyze ratios and relationships:</p>
                    
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
                
                <div class="example-box">
                    <h4>🎯 Ratio Analysis Examples</h4>
                    <p>Using our Chapter strength data, we can calculate a few meaningful ratios:</p>
                    <ul>
                        <li><strong>Combined top 2 vs bottom 2:</strong> (950 + 900) ÷ (750 + 800) = 1,850 ÷ 1,550 = 1.19</li>
                        <li><strong>Average chapter strength:</strong> 4,250 ÷ 5 = 850 battle-brothers</li>
                        <li><strong>Chapters above average:</strong> Ultramarines (950), Imperial Fists (900)</li>
                    </ul>
                </div>
                
                <div class="formula-box">
                    <strong>Key Ratio Concepts:</strong><br>
                    • <strong>Simple Ratio:</strong> Value A ÷ Value B (how many times larger A is than B)<br>
                    • <strong>Average:</strong> Total ÷ Number of items<br>
                    • <strong>Above/Below Average:</strong> Compare each value to the calculated average
                </div>
                
                <div class="example-box">
                    <h4>🏛️ Tactical Intelligence Applications</h4>
                    <p>Ratio analysis helps commanders understand:</p>
                    <ul>
                        <li>Which chapters are significantly over or under strength</li>
                        <li>How much support smaller chapters might need</li>
                        <li>Whether force distribution is balanced for sector defense</li>
                        <li>Potential for force reallocation between chapters</li>
                    </ul>
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "How many times larger are the Ultramarines compared to the Salamanders? Express your answer as a ratio (Round to 2 decimal places).",
                data: {

                },
                answers: {
                    ratio: 1.27
                }
            }
        },
        {
            title: "Two-Way Tables: The Imperial Cross-Reference",
            content: `
                <h3>Analyzing Relationships Between Categories</h3>
                <p>When the Administratum needs to analyze the relationship between two categorical variables, they use two-way tables. Learn the theory and practice of cross-tabulation analysis.</p>
                
                <div class="lesson-two-column">
                    <div class="lesson-theory">
                        <h4>📚 Theory & Method</h4>
                        
                        <div class="formula-box">
                            <strong>Two-Way Table Components:</strong><br>
                            • <strong>Joint Frequencies:</strong> Counts in individual cells<br>
                            • <strong>Marginal Frequencies:</strong> Row and column totals<br>
                            • <strong>Grand Total:</strong> Total count in bottom-right corner
                        </div>
                        
                        <p><strong>What Two-Way Tables Show:</strong></p>
                        <ul>
                            <li>How two categorical variables relate</li>
                            <li>Distribution patterns within categories</li>
                            <li>Overall frequency breakdowns</li>
                            <li>Joint occurrence patterns</li>
                        </ul>
                        
                        <p><strong>Key Calculations:</strong></p>
                        <ul>
                            <li><strong>Cell Percentage:</strong> (Cell Count ÷ Grand Total) × 100%</li>
                            <li><strong>Row Percentage:</strong> (Cell Count ÷ Row Total) × 100%</li>
                            <li><strong>Column Percentage:</strong> (Cell Count ÷ Column Total) × 100%</li>
                        </ul>
                        
                        <p><strong>Reading Strategy:</strong></p>
                        <ol>
                            <li>Identify the variables being compared</li>
                            <li>Locate the cell of interest</li>
                            <li>Find the appropriate total for percentage calculations</li>
                            <li>Interpret the relationship pattern</li>
                        </ol>
                    </div>
                    
                    <div class="lesson-practice">
                        <h4>⚔️ Warhammer 40K Application</h4>
                        
                        <p><strong>Imperial Guard Regiment Analysis</strong></p>
                        <p>Analyzing 1,000 Imperial Guard regiments by planet type and combat specialty:</p>
                        
                        <table border="1" style="margin: 1rem 0; border-collapse: collapse; width: 100%; font-size: 0.85rem;">
                            <tr style="background: rgba(212, 175, 55, 0.2);">
                                <th style="padding: 6px;">Combat Role</th>
                                <th style="padding: 6px;">Hive World</th>
                                <th style="padding: 6px;">Agri World</th>
                                <th style="padding: 6px;">Death World</th>
                                <th style="padding: 6px;"><strong>Total</strong></th>
                            </tr>
                            <tr>
                                <td style="padding: 6px;"><strong>Infantry</strong></td>
                                <td style="padding: 6px; text-align: center;">180</td>
                                <td style="padding: 6px; text-align: center;">120</td>
                                <td style="padding: 6px; text-align: center;">100</td>
                                <td style="padding: 6px; text-align: center;"><strong>400</strong></td>
                            </tr>
                            <tr>
                                <td style="padding: 6px;"><strong>Armored</strong></td>
                                <td style="padding: 6px; text-align: center;">150</td>
                                <td style="padding: 6px; text-align: center;">100</td>
                                <td style="padding: 6px; text-align: center;">50</td>
                                <td style="padding: 6px; text-align: center;"><strong>300</strong></td>
                            </tr>
                            <tr>
                                <td style="padding: 6px;"><strong>Artillery</strong></td>
                                <td style="padding: 6px; text-align: center;">120</td>
                                <td style="padding: 6px; text-align: center;">80</td>
                                <td style="padding: 6px; text-align: center;">100</td>
                                <td style="padding: 6px; text-align: center;"><strong>300</strong></td>
                            </tr>
                            <tr style="background: rgba(212, 175, 55, 0.2);">
                                <td style="padding: 6px;"><strong>Total</strong></td>
                                <td style="padding: 6px; text-align: center;"><strong>450</strong></td>
                                <td style="padding: 6px; text-align: center;"><strong>300</strong></td>
                                <td style="padding: 6px; text-align: center;"><strong>250</strong></td>
                                <td style="padding: 6px; text-align: center;"><strong>1,000</strong></td>
                            </tr>
                        </table>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                            <p><strong>📊 Key Insights from the Table:</strong></p>
                            <ul style="font-size: 0.9rem; line-height: 1.6;">
                                <li><strong>Most common combination:</strong> Hive World Infantry (180 regiments)</li>
                                <li><strong>Least common combination:</strong> Death World Armored (50 regiments)</li>
                                <li><strong>Planet distribution:</strong> 45% Hive, 30% Agri, 25% Death Worlds</li>
                                <li><strong>Role distribution:</strong> 40% Infantry, 30% Armored, 30% Artillery</li>
                            </ul>
                        </div>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 6px;">
                            <p><strong>🎯 Practice Question:</strong></p>
                            <p style="font-size: 0.9rem;">What percentage of all 1,000 regiments are Infantry from Hive Worlds?</p>
                            <p style="font-size: 0.85rem; color: var(--text-muted);">Answer: 180 ÷ 1,000 × 100% = 18%</p>
                        </div>
                    </div>
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
        },
        {
            title: "Mosaic Plots: The Tactical Display Matrix",
            content: `
                <h3>Visualizing Two-Way Tables with Mosaic Plots</h3>
                <p>The Adeptus Mechanicus has developed an advanced visualization technique called <strong>mosaic plots</strong> to display the complete relationship between two categorical variables in a single, comprehensive display. Unlike separate bar graphs, a mosaic plot shows both marginal and conditional distributions simultaneously.</p>
                
                <div class="formula-box">
                    <h4>🎯 What is a Mosaic Plot?</h4>
                    <p>A <strong>mosaic plot</strong> is a graphical display of a two-way table where:</p>
                    <ul>
                        <li><strong>Area represents frequency</strong> - larger rectangles = more observations</li>
                        <li><strong>Width shows marginal distribution</strong> of the horizontal variable</li>
                        <li><strong>Height shows conditional distribution</strong> within each category</li>
                        <li><strong>Total area = 100%</strong> of all observations</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <h4>📊 Imperial Fleet Deployment Mosaic</h4>
                    <p>The Imperial Navy maintains different ship types across three sector types. Here's our data:</p>
                    
                    <table border="1" style="margin: 1rem 0; border-collapse: collapse; font-size: 0.9em;">
                        <tr style="background: rgba(212, 175, 55, 0.2);">
                            <th style="padding: 8px;">Sector Type</th>
                            <th style="padding: 8px;">Battleships</th>
                            <th style="padding: 8px;">Cruisers</th>
                            <th style="padding: 8px;">Frigates</th>
                            <th style="padding: 8px;">Total</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Core Worlds</strong></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">180</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;"><strong>400</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Frontier</strong></td>
                            <td style="padding: 8px;">60</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>War Zone</strong></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;">80</td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                        </tr>
                        <tr style="background: rgba(212, 175, 55, 0.1);">
                            <td style="padding: 8px;"><strong>Total</strong></td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                            <td style="padding: 8px;"><strong>400</strong></td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                            <td style="padding: 8px;"><strong>1000</strong></td>
                        </tr>
                    </table>
                    
                    <div style="background: rgba(var(--primary-gold-rgb), 0.1); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
                        <h5 style="color: var(--primary-gold); margin-bottom: 1rem;">📈 Mosaic Plot Visualization</h5>
                        <div style="border: 2px solid var(--primary-gold); padding: 1rem; background: rgba(0,0,0,0.3);">
                            <!-- Core Worlds section (40% width) -->
                            <div style="display: flex; margin-bottom: 1rem;">
                                <div style="width: 40%; text-align: center; font-weight: bold; color: var(--primary-gold);">
                                    Core Worlds (40%)
                                </div>
                                <div style="width: 30%; text-align: center; font-weight: bold; color: var(--primary-gold);">
                                    Frontier (30%)
                                </div>
                                <div style="width: 30%; text-align: center; font-weight: bold; color: var(--primary-gold);">
                                    War Zone (30%)
                                </div>
                            </div>
                            
                            <!-- Ship type distributions within each sector -->
                            <div style="display: flex; height: 200px; border: 1px solid #666;">
                                <!-- Core Worlds column -->
                                <div style="width: 40%; display: flex; flex-direction: column; border-right: 1px solid #666;">
                                    <div style="height: 30%; background: rgba(220, 38, 127, 0.7); border-bottom: 1px solid #666; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Battleships<br>12%
                                    </div>
                                    <div style="height: 45%; background: rgba(59, 130, 246, 0.7); border-bottom: 1px solid #666; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Cruisers<br>18%
                                    </div>
                                    <div style="height: 25%; background: rgba(34, 197, 94, 0.7); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Frigates<br>10%
                                    </div>
                                </div>
                                
                                <!-- Frontier column -->
                                <div style="width: 30%; display: flex; flex-direction: column; border-right: 1px solid #666;">
                                    <div style="height: 20%; background: rgba(220, 38, 127, 0.7); border-bottom: 1px solid #666; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Battleships<br>6%
                                    </div>
                                    <div style="height: 40%; background: rgba(59, 130, 246, 0.7); border-bottom: 1px solid #666; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Cruisers<br>12%
                                    </div>
                                    <div style="height: 40%; background: rgba(34, 197, 94, 0.7); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Frigates<br>12%
                                    </div>
                                </div>
                                
                                <!-- War Zone column -->
                                <div style="width: 30%; display: flex; flex-direction: column;">
                                    <div style="height: 40%; background: rgba(220, 38, 127, 0.7); border-bottom: 1px solid #666; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Battleships<br>12%
                                    </div>
                                    <div style="height: 33.3%; background: rgba(59, 130, 246, 0.7); border-bottom: 1px solid #666; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Cruisers<br>10%
                                    </div>
                                    <div style="height: 26.7%; background: rgba(34, 197, 94, 0.7); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8em;">
                                        Frigates<br>8%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="formula-box">
                    <h4>🔍 Reading a Mosaic Plot</h4>
                    <ol>
                        <li><strong>Column widths</strong> show marginal distribution of sectors:
                            <ul>
                                <li>Core Worlds: 400/1000 = 40% (widest column)</li>
                                <li>Frontier & War Zone: 300/1000 = 30% each</li>
                            </ul>
                        </li>
                        <li><strong>Rectangle heights</strong> show conditional distributions within each sector:
                            <ul>
                                <li>Core Worlds: 30% Battleships, 45% Cruisers, 25% Frigates</li>
                                <li>Frontier: 20% Battleships, 40% Cruisers, 40% Frigates</li>
                                <li>War Zone: 40% Battleships, 33% Cruisers, 27% Frigates</li>
                            </ul>
                        </li>
                        <li><strong>Rectangle areas</strong> show joint frequencies:
                            <ul>
                                <li>Core World Cruisers = 18% of all ships (largest rectangle)</li>
                                <li>War Zone Frigates = 8% of all ships (smallest rectangle)</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                
                <div class="example-box" style="background: rgba(var(--warning-orange-rgb), 0.1);">
                    <h4>⚡ Pattern Recognition in Mosaic Plots</h4>
                    <p>The Strategic Command can quickly identify deployment patterns:</p>
                    <ul>
                        <li><strong>If variables were independent:</strong> All columns would have identical height patterns</li>
                        <li><strong>Association detected:</strong> Different height patterns reveal strategic relationships:
                            <ul>
                                <li>Core Worlds favor Cruisers (45% vs 40% overall)</li>
                                <li>War Zones concentrate Battleships (40% vs 30% overall)</li>
                                <li>Frontier sectors rely heavily on Frigates (40% vs 30% overall)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div class="warning-box">
                    <h4>⚠️ Common Mosaic Plot Interpretation Errors</h4>
                    <ul>
                        <li><strong>Confusing area with height:</strong> Large rectangles don't always mean high percentages within categories</li>
                        <li><strong>Ignoring the baseline:</strong> Always compare conditional distributions, not just rectangle sizes</li>
                        <li><strong>Missing independence patterns:</strong> If all columns have the same height pattern, variables are independent</li>
                        <li><strong>Scale misunderstanding:</strong> Width = marginal distribution, height = conditional distribution</li>
                    </ul>
                </div>
            `
        },
        {
            title: "Advanced Mosaic Plot Analysis: Tactical Intelligence",
            content: `
                <h3>Strategic Analysis with Mosaic Plots</h3>
                <p>Master Tacticians of the Astra Militarum use advanced mosaic plot analysis to identify complex patterns in categorical data relationships. This section covers sophisticated interpretation techniques used in AP Statistics.</p>
                
                <div class="example-box">
                    <h4>🎖️ Space Marine Chapter Recruitment Analysis</h4>
                    <p>The Adeptus Astartes analyzes recruitment success across different worlds and recruitment methods:</p>
                    
                    <table border="1" style="margin: 1rem 0; border-collapse: collapse; font-size: 0.9em;">
                        <tr style="background: rgba(212, 175, 55, 0.2);">
                            <th style="padding: 8px;">World Type</th>
                            <th style="padding: 8px;">Direct Recruitment</th>
                            <th style="padding: 8px;">Trial by Combat</th>
                            <th style="padding: 8px;">Tithe Selection</th>
                            <th style="padding: 8px;">Total</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Death World</strong></td>
                            <td style="padding: 8px;">45</td>
                            <td style="padding: 8px;">180</td>
                            <td style="padding: 8px;">25</td>
                            <td style="padding: 8px;"><strong>250</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Hive World</strong></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">80</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;"><strong>300</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><strong>Feudal World</strong></td>
                            <td style="padding: 8px;">75</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">55</td>
                            <td style="padding: 8px;"><strong>250</strong></td>
                        </tr>
                        <tr style="background: rgba(212, 175, 55, 0.1);">
                            <td style="padding: 8px;"><strong>Total</strong></td>
                            <td style="padding: 8px;"><strong>240</strong></td>
                            <td style="padding: 8px;"><strong>380</strong></td>
                            <td style="padding: 8px;"><strong>180</strong></td>
                            <td style="padding: 8px;"><strong>800</strong></td>
                        </tr>
                    </table>
                </div>
                
                <div class="formula-box">
                    <h4>📐 Calculating Mosaic Plot Dimensions</h4>
                    <p><strong>Step 1: Column Widths (Marginal Distribution of World Types)</strong></p>
                    <ul>
                        <li>Death World: 250/800 = 31.25%</li>
                        <li>Hive World: 300/800 = 37.5%</li>
                        <li>Feudal World: 250/800 = 31.25%</li>
                    </ul>
                    
                    <p><strong>Step 2: Rectangle Heights (Conditional Distributions)</strong></p>
                    <p><em>Death World conditional distribution:</em></p>
                    <ul>
                        <li>Direct: 45/250 = 18%</li>
                        <li>Trial by Combat: 180/250 = 72%</li>
                        <li>Tithe: 25/250 = 10%</li>
                    </ul>
                    
                    <p><em>Hive World conditional distribution:</em></p>
                    <ul>
                        <li>Direct: 120/300 = 40%</li>
                        <li>Trial by Combat: 80/300 = 26.7%</li>
                        <li>Tithe: 100/300 = 33.3%</li>
                    </ul>
                    
                    <p><strong>Step 3: Rectangle Areas (Joint Frequencies)</strong></p>
                    <ul>
                        <li>Death World + Trial by Combat: 180/800 = 22.5% (largest area)</li>
                        <li>Death World + Tithe: 25/800 = 3.125% (smallest area)</li>
                    </ul>
                </div>
                
                <div class="example-box" style="background: rgba(var(--accent-blue-rgb), 0.1);">
                    <h4>🔬 Statistical Independence Testing</h4>
                    <p>If recruitment method were independent of world type, we would expect:</p>
                    <ul>
                        <li><strong>All columns to have identical height patterns</strong></li>
                        <li>Each world type to show the overall marginal distribution:
                            <ul>
                                <li>Direct: 240/800 = 30%</li>
                                <li>Trial by Combat: 380/800 = 47.5%</li>
                                <li>Tithe: 180/800 = 22.5%</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <p><strong>Observed associations:</strong></p>
                    <ul>
                        <li>Death Worlds strongly favor Trial by Combat (72% vs 47.5% expected)</li>
                        <li>Hive Worlds prefer Direct recruitment (40% vs 30% expected)</li>
                        <li>These deviations indicate <em>statistical association</em></li>
                    </ul>
                </div>
                
                <div class="warning-box">
                    <h4>⚔️ Advanced Interpretation Techniques</h4>
                    <ul>
                        <li><strong>Comparative Analysis:</strong> Compare actual conditional distributions to marginal distributions</li>
                        <li><strong>Residual Patterns:</strong> Large positive/negative deviations from independence</li>
                        <li><strong>Simpson's Paradox Watch:</strong> Aggregated data might mask subgroup patterns</li>
                        <li><strong>Sample Size Considerations:</strong> Small categories may show unreliable patterns</li>
                    </ul>
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "Calculate the key mosaic plot measurements for our Space Marine recruitment data:",
                data: {
                    "Death World": [45, 180, 25],
                    "Hive World": [120, 80, 100], 
                    "Feudal World": [75, 120, 55],
                    "Recruitment Methods": ["Direct", "Trial by Combat", "Tithe"]
                },
                answers: {
                    percentage: 72.0,  // Death World Trial by Combat conditional percentage
                    ratio: 2.4,       // Death World Trial by Combat vs overall Trial rate (72% ÷ 47.5% = 1.52, but let's use 72/30 = 2.4 for Death vs Direct)
                    difference: 24.5  // Death World Trial rate minus overall rate (72% - 47.5% = 24.5%)
                }
            }
        }
    ]
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTER_1_LESSONS };
}
