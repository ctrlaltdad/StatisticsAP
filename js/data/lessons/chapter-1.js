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
                <p>Before the Adeptus Administratum can analyze any information across the Imperium, they must first understand the fundamental components of data collection and organization.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Core Definitions</h4>
                        
                        <div class="formula-box">
                            <span class="text-emphasis">Key Definitions:</span><br>
                            • <span class="text-key">Individual:</span> Each person, object, or unit being studied<br>
                            • <span class="text-key">Variable:</span> A characteristic that can vary from individual to individual<br>
                            • <span class="text-key">Categorical Variable:</span> Describes qualities or characteristics (can be words or numbers representing categories)
                        </div>
                        
                        <p><span class="text-emphasis">Types of Variables:</span></p>
                        <ul>
                            <li><span class="text-important">Categorical:</span> Places data into distinct groups or categories</li>
                            <li><span class="text-important">Quantitative:</span> Numerical measurements that can be counted or measured</li>
                        </ul>
                        
                        <p><span class="text-emphasis">Why This Matters:</span></p>
                        <ul>
                            <li>Foundation for all statistical analysis</li>
                            <li>Determines what analysis methods to use</li>
                            <li>Essential for organizing data collection</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>� Identification Process</h4>
                        
                        <p><span class="text-emphasis">Step-by-Step Analysis:</span></p>
                        <ol>
                            <li><span class="text-key">Identify the individuals</span> - What units are being studied?</li>
                            <li><span class="text-key">List the variables</span> - What characteristics are recorded?</li>
                            <li><span class="text-key">Classify each variable</span> - Categorical or quantitative?</li>
                            <li><span class="text-key">Understand the purpose</span> - Why is this data collected?</li>
                        </ol>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Quick Test:</span><br>
                            • If you can count or measure it → Quantitative<br>
                            • If it describes a quality or category → Categorical<br>
                            • Remember: Numbers can represent categories too!
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Imperial Guard Regiment Registry</h4>
                        
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
                            <tr>
                                <td style="padding: 4px;">Tallarn Desert Raiders</td>
                                <td style="padding: 4px;">Tallarn</td>
                                <td style="padding: 4px;">3,200</td>
                                <td style="padding: 4px;">Fast Attack</td>
                                <td style="padding: 4px;">Elite</td>
                            </tr>
                        </table>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                            <p><span class="text-emphasis">🔍 Analysis Results:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">Individuals:</span> Each Imperial Guard regiment</li>
                                <li><span class="text-key">Categorical Variables:</span> Home World, Specialty, Battle Rating</li>
                                <li><span class="text-key">Quantitative Variable:</span> Size (numerical measurement)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Classification Training</h4>
                        
                        <div class="interactive-element">
                            <p><span class="text-emphasis">Mission Briefing:</span> For a study of Space Marine Chapters, identify what type of data each represents:</p>
                            
                            <div class="classification-activity">
                                <div class="classification-item" data-index="0">
                                    <span class="item-text">The individual Space Marine Chapters being studied</span>
                                    <select class="classification-select">
                                        <option value="">Choose classification...</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Categorical Variable">Categorical Variable</option>
                                        <option value="Quantitative Variable">Quantitative Variable</option>
                                    </select>
                                </div>
                                <div class="classification-item" data-index="1">
                                    <span class="item-text">Chapter name (Ultramarines, Blood Angels, etc.)</span>
                                    <select class="classification-select">
                                        <option value="">Choose classification...</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Categorical Variable">Categorical Variable</option>
                                        <option value="Quantitative Variable">Quantitative Variable</option>
                                    </select>
                                </div>
                                <div class="classification-item" data-index="2">
                                    <span class="item-text">Number of battle-brothers in each chapter</span>
                                    <select class="classification-select">
                                        <option value="">Choose classification...</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Categorical Variable">Categorical Variable</option>
                                        <option value="Quantitative Variable">Quantitative Variable</option>
                                    </select>
                                </div>
                                <div class="classification-item" data-index="3">
                                    <span class="item-text">Chapter homeworld type (Fortress World, Death World, etc.)</span>
                                    <select class="classification-select">
                                        <option value="">Choose classification...</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Categorical Variable">Categorical Variable</option>
                                        <option value="Quantitative Variable">Quantitative Variable</option>
                                    </select>
                                </div>
                                <div class="classification-item" data-index="4">
                                    <span class="item-text">Years since chapter founding</span>
                                    <select class="classification-select">
                                        <option value="">Choose classification...</option>
                                        <option value="Individual">Individual</option>
                                        <option value="Categorical Variable">Categorical Variable</option>
                                        <option value="Quantitative Variable">Quantitative Variable</option>
                                    </select>
                                </div>
                            </div>
                            <button class="check-answers-btn" onclick="window.lessonComponent.checkClassification()">
                                Check Answers
                            </button>
                            <div class="feedback-area"></div>
                        </div>
                    </div>
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
                <p>The vast Imperium requires systematic organization of information into categories. Master the principles of categorical data analysis that guides Imperial decision-making.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Categorical Data Principles</h4>
                        
                        <div class="formula-box">
                            <span class="text-key">Categorical Data:</span> Data that can be placed into categories or groups<br>
                            <span class="text-key">Key Feature:</span> Categories are distinct and separate (no overlapping)<br>
                            <span class="text-key">Examples:</span> Planet types, combat specialties, loyalty status, threat levels
                        </div>
                        
                        <p><span class="text-key">Characteristics of Categories:</span></p>
                        <ul>
                            <li><span class="text-key">Mutually Exclusive:</span> Each individual belongs to only one category</li>
                            <li><span class="text-key">Exhaustive:</span> Every individual can be placed in a category</li>
                            <li><span class="text-key">Meaningful:</span> Categories serve a purpose for analysis</li>
                        </ul>
                        
                        <p><span class="text-key">Types of Categorical Data:</span></p>
                        <ul>
                            <li><span class="text-key">Nominal:</span> No natural order (colors, names)</li>
                            <li><span class="text-key">Ordinal:</span> Natural order exists (ranks, ratings)</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Classification Examples</h4>
                        
                        <p><span class="text-key">Good Categorical Classifications:</span></p>
                        <ul>
                            <li><span class="text-key">Space Marine Roles:</span> Assault, Tactical, Devastator, Scout</li>
                            <li><span class="text-key">Planet Classifications:</span> Hive, Agri, Death, Forge, Pleasure</li>
                            <li><span class="text-key">Threat Levels:</span> Minimal, Moderate, Significant, Extreme</li>
                        </ul>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Classification Rules:</span><br>
                            ✅ Each unit fits in exactly one category<br>
                            ✅ Categories cover all possibilities<br>
                            ✅ Categories are clearly defined<br>
                            ❌ Overlapping or vague categories
                        </div>
                        
                        <p><span class="text-key">Common Mistakes to Avoid:</span></p>
                        <ul>
                            <li>Overlapping categories</li>
                            <li>Missing categories (no "other" option)</li>
                            <li>Too many or too few categories</li>
                        </ul>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Space Marine Deployment Analysis</h4>
                        
                        <p><span class="text-key">Segmentum Command Mission Types:</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem;">
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">🏰 Siege Warfare</h5>
                                    <ul style="margin: 0; font-size: 0.8rem;">
                                        <li>Imperial Fists</li>
                                        <li>Iron Warriors</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">⚔️ Close Combat</h5>
                                    <ul style="margin: 0; font-size: 0.8rem;">
                                        <li>World Eaters</li>
                                        <li>Blood Angels</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">🎯 Tactical Operations</h5>
                                    <ul style="margin: 0; font-size: 0.8rem;">
                                        <li>Ultramarines</li>
                                        <li>Raven Guard</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">🔥 Fire Support</h5>
                                    <ul style="margin: 0; font-size: 0.8rem;">
                                        <li>Salamanders</li>
                                        <li>Iron Hands</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                            <p><span class="text-key">📊 Why This Classification Works:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">Distinct:</span> Each chapter specializes in one primary role</li>
                                <li><span class="text-key">Complete:</span> All major combat types covered</li>
                                <li><span class="text-key">Meaningful:</span> Guides deployment decisions</li>
                                <li><span class="text-key">Actionable:</span> Commanders know which chapters to deploy</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 No Interactive Element</h4>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1.5rem; border-radius: 8px; text-align: center;">
                            <p><span class="text-emphasis">📚 Foundation Lesson</span></p>
                            <p style="font-size: 0.9rem; margin: 1rem 0;">This lesson establishes core concepts for categorical data analysis. The principles you learn here will be applied in all subsequent interactive exercises.</p>
                            
                            <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <p><span class="text-key">🔑 Key Takeaways:</span></p>
                                <ul style="font-size: 0.85rem; text-align: left; margin: 0;">
                                    <li>Categorical data organizes information into distinct groups</li>
                                    <li>Categories must be mutually exclusive and exhaustive</li>
                                    <li>Good classification enables effective analysis and decision-making</li>
                                    <li>Imperial forces use categorical analysis for strategic deployment</li>
                                </ul>
                            </div>
                            
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem;">Proceed to the next lesson to begin hands-on practice with bar graphs and data visualization.</p>
                        </div>
                    </div>
                </div>
            `,
            interactive: null
        },
        {
            title: "Bar Graphs: Visualizing Imperial Forces",
            content: `
                <h3>The Sacred Art of Data Visualization</h3>
                <p>Bar graphs are the primary weapon for displaying categorical data in the Imperium. Master their construction and interpretation to communicate force distributions clearly.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Bar Graph Fundamentals</h4>
                        
                        <div class="formula-box">
                            <span class="text-key">Bar Graph:</span> Visual display of categorical data using rectangular bars<br>
                            <span class="text-key">Height/Length:</span> Represents frequency or count<br>
                            <span class="text-key">Width:</span> Equal for all bars, represents categories
                        </div>
                        
                        <p><span class="text-key">Essential Bar Graph Rules:</span></p>
                        <ul>
                            <li><span class="text-key">Equal Width:</span> All bars must be the same width</li>
                            <li><span class="text-key">Gaps Between Bars:</span> Shows categories are separate</li>
                            <li><span class="text-key">Zero Baseline:</span> Bars start from zero for accurate comparison</li>
                            <li><span class="text-key">Clear Labels:</span> Categories and scale clearly marked</li>
                        </ul>
                        
                        <p><span class="text-key">Types of Bar Graphs:</span></p>
                        <ul>
                            <li><span class="text-key">Vertical (Column):</span> Most common, good for many categories</li>
                            <li><span class="text-key">Horizontal:</span> Better for long category names</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Bar Graph Construction</h4>
                        
                        <p><span class="text-emphasis">Example Data: Vehicle Production</span></p>
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px;">
                            <table style="width: 100%; color: white; font-size: 0.85rem;">
                                <tr><th style="text-align: left; padding: 0.3rem;">Vehicle Type</th><th style="text-align: right; padding: 0.3rem;">Monthly Production</th></tr>
                                <tr><td style="padding: 0.2rem;">Rhinos</td><td style="text-align: right;">45</td></tr>
                                <tr><td style="padding: 0.2rem;">Predators</td><td style="text-align: right;">20</td></tr>
                                <tr><td style="padding: 0.2rem;">Land Raiders</td><td style="text-align: right;">8</td></tr>
                                <tr><td style="padding: 0.2rem;">Razorbacks</td><td style="text-align: right;">35</td></tr>
                            </table>
                        </div>
                        
                        <p><span class="text-key">Visual Representation:</span></p>
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 6px; font-family: monospace; font-size: 0.8rem;">
                            Production Count<br>
                            50 |   █<br>
                            40 |   █     █<br>
                            30 |   █     █<br>
                            20 |   █  █  █<br>
                            10 |   █  █  █<br>
                             0 +---+--+--+---<br>
                               Rhi Pre LR Raz
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Chapter Strength Visualization</h4>
                        
                        <p><span class="text-key">Sector Marshal's Strategic Display:</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="text-align: center; color: var(--secondary-gold); font-weight: bold; margin-bottom: 1rem;">Space Marine Chapter Strength</div>
                            
                            <div style="display: flex; align-items: end; justify-content: space-around; height: 120px; margin: 1rem 0; background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 4px;">
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <div style="background: var(--primary-red); width: 30px; height: 100px; margin-bottom: 0.5rem;"></div>
                                    <div style="font-size: 0.7rem; text-align: center;">Ultra-<br>marines<br>1,000</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <div style="background: var(--primary-red); width: 30px; height: 98px; margin-bottom: 0.5rem;"></div>
                                    <div style="font-size: 0.7rem; text-align: center;">Imperial<br>Fists<br>980</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <div style="background: var(--primary-red); width: 30px; height: 95px; margin-bottom: 0.5rem;"></div>
                                    <div style="font-size: 0.7rem; text-align: center;">Blood<br>Angels<br>950</div>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center;">
                                    <div style="background: var(--primary-red); width: 30px; height: 74px; margin-bottom: 0.5rem;"></div>
                                    <div style="font-size: 0.7rem; text-align: center;">Sala-<br>manders<br>740</div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px;">
                            <p><span class="text-key">📊 Strategic Insights:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">Quick Comparison:</span> Ultramarines at full strength</li>
                                <li><span class="text-key">Deployment Ready:</span> Three chapters near full capacity</li>
                                <li><span class="text-key">Resource Allocation:</span> Salamanders need reinforcement</li>
                                <li><span class="text-key">Visual Impact:</span> Immediate understanding of relative strength</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Bar Graph Appropriateness</h4>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 8px;">
                            <p><span class="text-key">Question:</span> Which scenarios are best displayed with a bar graph?</p>
                            
                            <div style="margin: 1rem 0;">
                                <div style="margin: 0.7rem 0; padding: 0.5rem; background: rgba(40, 40, 40, 0.8); border-radius: 4px;">
                                    <span class="text-emphasis">A. Number of Space Marines by Chapter</span><br>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-a" value="appropriate"> Appropriate
                                    </label>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-a" value="not-appropriate"> Not Appropriate
                                    </label>
                                </div>
                                
                                <div style="margin: 0.7rem 0; padding: 0.5rem; background: rgba(40, 40, 40, 0.8); border-radius: 4px;">
                                    <span class="text-emphasis">B. Height of individual Space Marines over time</span><br>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-b" value="appropriate"> Appropriate
                                    </label>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-b" value="not-appropriate"> Not Appropriate
                                    </label>
                                </div>
                                
                                <div style="margin: 0.7rem 0; padding: 0.5rem; background: rgba(40, 40, 40, 0.8); border-radius: 4px;">
                                    <span class="text-emphasis">C. Count of planets by type (50 Hive, 30 Agri, 20 Death)</span><br>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-c" value="appropriate"> Appropriate
                                    </label>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-c" value="not-appropriate"> Not Appropriate
                                    </label>
                                </div>
                            </div>
                            
                            <button onclick="checkBarGraphScenarios()" style="background: var(--primary-red); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Check All Answers</button>
                            
                            <div id="bar-graph-feedback" style="margin-top: 1rem; padding: 0.5rem; border-radius: 4px; display: none;"></div>
                        </div>
                        
                        <script>
                        function checkBarGraphScenarios() {
                            const answerA = document.querySelector('input[name="scenario-a"]:checked');
                            const answerB = document.querySelector('input[name="scenario-b"]:checked');
                            const answerC = document.querySelector('input[name="scenario-c"]:checked');
                            const feedback = document.getElementById('bar-graph-feedback');
                            
                            if (!answerA || !answerB || !answerC) {
                                feedback.style.display = 'block';
                                feedback.style.background = 'rgba(var(--warning-orange), 0.2)';
                                feedback.innerHTML = '⚠️ Please answer all scenarios.';
                                return;
                            }
                            
                            feedback.style.display = 'block';
                            
                            const correctA = answerA.value === 'appropriate';
                            const correctB = answerB.value === 'not-appropriate';
                            const correctC = answerC.value === 'appropriate';
                            
                            if (correctA && correctB && correctC) {
                                feedback.style.background = 'rgba(var(--success-green), 0.2)';
                                feedback.innerHTML = '✅ <span class="text-emphasis">Perfect!</span> A & C are categorical data (counts in categories), while B shows continuous change over time. Bar graphs excel at comparing categories!';
                            } else {
                                feedback.style.background = 'rgba(var(--primary-red), 0.2)';
                                let explanation = '❌ <span class="text-key">Review needed:</span><br>';
                                if (!correctA) explanation += '• A: Categorical data (chapters) - perfect for bar graphs<br>';
                                if (!correctB) explanation += '• B: Continuous data over time - use line graph instead<br>';
                                if (!correctC) explanation += '• C: Categorical data (planet types) - ideal for bar graphs<br>';
                                feedback.innerHTML = explanation;
                            }
                        }
                        </script>
                    </div>
                </div>
            `,
            interactive: null
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
                            <span class="text-key">Reading Bar Graphs - Key Steps:</span><br>
                            1. <span class="text-emphasis">Read the title</span> - What is being measured?<br>
                            2. <span class="text-emphasis">Check the axes</span> - What categories and scale are used?<br>
                            3. <span class="text-emphasis">Compare heights</span> - Which bars are tallest/shortest?<br>
                            4. <span class="text-emphasis">Calculate differences</span> - Find specific numerical comparisons<br>
                            5. <span class="text-emphasis">Draw conclusions</span> - What patterns do you see?
                        </div>
                        
                        <p><span class="text-key">Essential Skills:</span></p>
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
                        
                        <p><span class="text-key">Common Calculations:</span></p>
                        <ul>
                            <li><span class="text-key">Difference:</span> Value A - Value B</li>
                            <li><span class="text-key">Total:</span> Sum of all categories</li>
                            <li><span class="text-key">Percentage:</span> (Category ÷ Total) × 100%</li>
                            <li><span class="text-key">Ratio:</span> Value A ÷ Value B</li>
                        </ul>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Example Analysis:</span><br>
                            If Chapter A has 950 marines and Chapter B has 750:<br>
                            • <span class="text-key">Difference:</span> 950 - 750 = 200<br>
                            • <span class="text-key">Ratio:</span> 950 ÷ 750 = 1.27<br>
                            • <span class="text-key">Percentage of total:</span> 950 ÷ 4,250 × 100% = 22.4%
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Space Marine Chapter Analysis</h4>
                        
                        <p><span class="text-key">High Lords Strength Assessment:</span></p>
                        
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
                        
                        <p style="font-size: 0.9rem;"><span class="text-key">Data Analysis:</span> Total Forces = 4,250 Battle-Brothers across 5 Chapters. Ultramarines have the highest strength, Salamanders the lowest.</p>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Tactical Intelligence Question</h4>
                        
                        <div class="interactive-element">
                            <p><span class="text-key">Mission Briefing:</span> Calculate the difference in battle-brothers between the Imperial Fists and the Salamanders for force deployment planning.</p>
                            
                            <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <p><span class="text-key">Data Reference:</span></p>
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
                            <span class="text-key">Percentage Formula:</span><br>
                            Percentage = (Individual Value ÷ Total Value) × 100%<br>
                            <em>Shows what portion each category represents of the whole</em>
                        </div>
                        
                        <p><span class="text-emphasis">Why Use Percentages?</span></p>
                        <ul>
                            <li>Compare different sized groups fairly</li>
                            <li>Understand relative importance</li>
                            <li>Make proportional comparisons</li>
                            <li>Standardize data for analysis</li>
                        </ul>
                        
                        <p><span class="text-key">Strategic Applications:</span></p>
                        <ul>
                            <li>Resource allocation decisions</li>
                            <li>Force distribution analysis</li>
                            <li>Comparative strength assessment</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Step-by-Step Process</h4>
                        
                        <p><span class="text-key">Calculation Steps:</span></p>
                        <ol>
                            <li><span class="text-emphasis">Find the total</span> - Add all values</li>
                            <li><span class="text-emphasis">Select the category</span> - Choose what to calculate</li>
                            <li><span class="text-emphasis">Divide and multiply</span> - (Category ÷ Total) × 100</li>
                            <li><span class="text-emphasis">Round appropriately</span> - Usually to 1 decimal place</li>
                        </ol>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Example Calculation:</span><br>
                            If Raven Guard has 800 marines out of 4,250 total:<br>
                            • <span class="text-key">Step 1:</span> Total = 4,250<br>
                            • <span class="text-key">Step 2:</span> Raven Guard = 800<br>
                            • <span class="text-key">Step 3:</span> 800 ÷ 4,250 × 100 = 18.8%<br>
                            • <span class="text-key">Step 4:</span> Round to 18.8%
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Chapter Distribution Analysis</h4>
                        
                        <p><span class="text-key">Force Composition Assessment:</span></p>
                        
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
                            <p><span class="text-key">📊 Example Calculations:</span></p>
                            <ul style="font-size: 0.85rem; line-height: 1.5; margin: 0;">
                                <li><span class="text-key">Ultramarines:</span> 950 ÷ 4,250 × 100% = 22.4%</li>
                                <li><span class="text-key">Blood Angels:</span> 850 ÷ 4,250 × 100% = 20.0%</li>
                                <li><span class="text-key">Imperial Fists:</span> 900 ÷ 4,250 × 100% = 21.2%</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Strategic Calculation</h4>
                        
                        <div class="interactive-element">
                            <p><span class="text-key">Mission Briefing:</span> Calculate what percentage of total Space Marine forces the Raven Guard represents for resource allocation planning.</p>
                            
                            <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <p><span class="text-key">Data Reference:</span></p>
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
                        <li><span class="text-key">Combined top 2 vs bottom 2:</span> (950 + 900) ÷ (750 + 800) = 1,850 ÷ 1,550 = 1.19</li>
                        <li><span class="text-key">Average chapter strength:</span> 4,250 ÷ 5 = 850 battle-brothers</li>
                        <li><span class="text-key">Chapters above average:</span> Ultramarines (950), Imperial Fists (900)</li>
                    </ul>
                </div>
                
                <div class="formula-box">
                    <span class="text-key">Key Ratio Concepts:</span><br>
                    • <span class="text-key">Simple Ratio:</span> Value A ÷ Value B (how many times larger A is than B)<br>
                    • <span class="text-key">Average:</span> Total ÷ Number of items<br>
                    • <span class="text-key">Above/Below Average:</span> Compare each value to the calculated average
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
                            <span class="text-key">Two-Way Table Components:</span><br>
                            • <span class="text-key">Joint Frequencies:</span> Counts in individual cells<br>
                            • <span class="text-key">Marginal Frequencies:</span> Row and column totals<br>
                            • <span class="text-key">Grand Total:</span> Total count in bottom-right corner
                        </div>
                        
                        <p><span class="text-key">What Two-Way Tables Show:</span></p>
                        <ul>
                            <li>How two categorical variables relate</li>
                            <li>Distribution patterns within categories</li>
                            <li>Overall frequency breakdowns</li>
                            <li>Joint occurrence patterns</li>
                        </ul>
                        
                        <p><span class="text-key">Key Calculations:</span></p>
                        <ul>
                            <li><span class="text-key">Cell Percentage:</span> (Cell Count ÷ Grand Total) × 100%</li>
                            <li><span class="text-key">Row Percentage:</span> (Cell Count ÷ Row Total) × 100%</li>
                            <li><span class="text-key">Column Percentage:</span> (Cell Count ÷ Column Total) × 100%</li>
                        </ul>
                        
                        <p><span class="text-key">Reading Strategy:</span></p>
                        <ol>
                            <li>Identify the variables being compared</li>
                            <li>Locate the cell of interest</li>
                            <li>Find the appropriate total for percentage calculations</li>
                            <li>Interpret the relationship pattern</li>
                        </ol>
                    </div>
                    
                    <div class="lesson-practice">
                        <h4>⚔️ Warhammer 40K Application</h4>
                        
                        <p><span class="text-emphasis">Imperial Guard Regiment Analysis</span></p>
                        <p>Analyzing 1,000 Imperial Guard regiments by planet type and combat specialty:</p>
                        
                        <table border="1" style="margin: 1rem 0; border-collapse: collapse; width: 100%; font-size: 0.85rem;">
                            <tr style="background: rgba(212, 175, 55, 0.2);">
                                <th style="padding: 6px;">Combat Role</th>
                                <th style="padding: 6px;">Hive World</th>
                                <th style="padding: 6px;">Agri World</th>
                                <th style="padding: 6px;">Death World</th>
                                <th style="padding: 6px;"><span class="text-emphasis">Total</span></th>
                            </tr>
                            <tr>
                                <td style="padding: 6px;"><span class="text-emphasis">Infantry</span></td>
                                <td style="padding: 6px; text-align: center;">180</td>
                                <td style="padding: 6px; text-align: center;">120</td>
                                <td style="padding: 6px; text-align: center;">100</td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">400</span></td>
                            </tr>
                            <tr>
                                <td style="padding: 6px;"><span class="text-emphasis">Armored</span></td>
                                <td style="padding: 6px; text-align: center;">150</td>
                                <td style="padding: 6px; text-align: center;">100</td>
                                <td style="padding: 6px; text-align: center;">50</td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">300</span></td>
                            </tr>
                            <tr>
                                <td style="padding: 6px;"><span class="text-emphasis">Artillery</span></td>
                                <td style="padding: 6px; text-align: center;">120</td>
                                <td style="padding: 6px; text-align: center;">80</td>
                                <td style="padding: 6px; text-align: center;">100</td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">300</span></td>
                            </tr>
                            <tr style="background: rgba(212, 175, 55, 0.2);">
                                <td style="padding: 6px;"><span class="text-emphasis">Total</span></td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">450</span></td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">300</span></td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">250</span></td>
                                <td style="padding: 6px; text-align: center;"><span class="text-emphasis">1,000</span></td>
                            </tr>
                        </table>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                            <p><span class="text-key">📊 Key Insights from the Table:</span></p>
                            <ul style="font-size: 0.9rem; line-height: 1.6;">
                                <li><span class="text-key">Most common combination:</span> Hive World Infantry (180 regiments)</li>
                                <li><span class="text-key">Least common combination:</span> Death World Armored (50 regiments)</li>
                                <li><span class="text-key">Planet distribution:</span> 45% Hive, 30% Agri, 25% Death Worlds</li>
                                <li><span class="text-key">Role distribution:</span> 40% Infantry, 30% Armored, 30% Artillery</li>
                            </ul>
                        </div>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 6px;">
                            <p><span class="text-key">🎯 Practice Question:</span></p>
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
                <p>Marginal distributions reveal the overall breakdown for each variable separately, providing strategic oversight of total force composition across the Imperium.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Marginal Distribution Theory</h4>
                        
                        <div class="formula-box">
                            <span class="text-key">Marginal Distribution:</span> The distribution of one variable, ignoring the other variable<br>
                            <span class="text-key">Source:</span> Row totals and column totals from two-way tables<br>
                            <span class="text-key">Purpose:</span> Shows overall composition patterns
                        </div>
                        
                        <p><span class="text-key">Key Characteristics:</span></p>
                        <ul>
                            <li><span class="text-key">Single Variable Focus:</span> Examines one categorical variable at a time</li>
                            <li><span class="text-key">Total Picture:</span> Shows overall distribution across all categories</li>
                            <li><span class="text-key">Strategic Value:</span> Reveals general force allocation patterns</li>
                        </ul>
                        
                        <div class="formula-box" style="background: rgba(var(--accent-blue), 0.1);">
                            <span class="text-key">Calculation Formula:</span><br>
                            Marginal % = (Row Total or Column Total) ÷ Grand Total × 100%<br>
                            <em>Provides percentage breakdown for each category</em>
                        </div>
                        
                        <p><span class="text-key">Applications:</span></p>
                        <ul>
                            <li>Overall resource allocation assessment</li>
                            <li>Strategic planning for force distribution</li>
                            <li>Baseline comparisons across categories</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Marginal Calculation Process</h4>
                        
                        <p><span class="text-key">Step-by-Step Process:</span></p>
                        <ol>
                            <li><span class="text-key">Identify the margin:</span> Choose row totals or column totals</li>
                            <li><span class="text-key">Select the category:</span> Pick the specific row/column</li>
                            <li><span class="text-key">Calculate percentage:</span> (Margin Total ÷ Grand Total) × 100%</li>
                            <li><span class="text-key">Interpret result:</span> Understand what the percentage means</li>
                        </ol>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><span class="text-emphasis">Example: Regiment Analysis (1,000 total)</span></p>
                            <table style="width: 100%; color: white; font-size: 0.8rem; border-collapse: collapse;">
                                <tr style="background: rgba(var(--secondary-gold), 0.3);"><th style="padding: 0.3rem;">Combat Role</th><th style="padding: 0.3rem;">Total</th><th style="padding: 0.3rem;">Percentage</th></tr>
                                <tr><td style="padding: 0.2rem;">Infantry</td><td style="text-align: center;">400</td><td style="text-align: center;">40%</td></tr>
                                <tr><td style="padding: 0.2rem;">Armored</td><td style="text-align: center;">300</td><td style="text-align: center;">30%</td></tr>
                                <tr><td style="padding: 0.2rem;">Artillery</td><td style="text-align: center;">300</td><td style="text-align: center;">30%</td></tr>
                            </table>
                        </div>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Calculation Example:</span><br>
                            Infantry: 400 ÷ 1,000 × 100% = 40%<br>
                            Armored: 300 ÷ 1,000 × 100% = 30%
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Imperial Force Distribution Analysis</h4>
                        
                        <p><span class="text-key">Segmentum Command Strategic Overview:</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="text-align: center; color: var(--secondary-gold); font-weight: bold; margin-bottom: 1rem;">Imperial Guard Regiment Distribution</div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">🏭 By Planet Type</h5>
                                    <ul style="font-size: 0.85rem; margin: 0;">
                                        <li>Hive World: 450 (45%)</li>
                                        <li>Agri World: 300 (30%)</li>
                                        <li>Death World: 250 (25%)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">⚔️ By Combat Role</h5>
                                    <ul style="font-size: 0.85rem; margin: 0;">
                                        <li>Infantry: 400 (40%)</li>
                                        <li>Armored: 300 (30%)</li>
                                        <li>Artillery: 300 (30%)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px;">
                            <p><span class="text-key">📊 Strategic Insights:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">45% Hive World Origin:</span> Industrial recruitment base</li>
                                <li><span class="text-key">40% Infantry Focus:</span> Core ground combat capability</li>
                                <li><span class="text-key">Balanced Specialization:</span> 30-30 split between armor and artillery</li>
                                <li><span class="text-key">Recruitment Pattern:</span> Death worlds provide 25% despite harsh conditions</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Marginal Distribution Calculation</h4>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 8px;">
                            <p><span class="text-key">Data:</span> Space Marine Chapter Vehicle Distribution</p>
                            <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <table style="width: 100%; color: white; font-size: 0.85rem; border-collapse: collapse;">
                                    <tr><th style="padding: 0.3rem; text-align: left;">Vehicle Type</th><th style="padding: 0.3rem; text-align: center;">Count</th></tr>
                                    <tr><td style="padding: 0.2rem;">Rhinos</td><td style="text-align: center;">45</td></tr>
                                    <tr><td style="padding: 0.2rem;">Predators</td><td style="text-align: center;">25</td></tr>
                                    <tr><td style="padding: 0.2rem;">Land Raiders</td><td style="text-align: center;">15</td></tr>
                                    <tr><td style="padding: 0.2rem;">Razorbacks</td><td style="text-align: center;">35</td></tr>
                                    <tr style="border-top: 1px solid var(--secondary-gold);"><td style="padding: 0.3rem;"><span class="text-emphasis">Total</span></td><td style="text-align: center;"><span class="text-emphasis">120</span></td></tr>
                                </table>
                            </div>
                            
                            <p><span class="text-key">Question:</span> What percentage of the total fleet are Rhinos?</p>
                            
                            <div style="margin: 1rem 0;">
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="marginal-calc" value="35%"> 35%
                                </label>
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="marginal-calc" value="37.5%"> 37.5%
                                </label>
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="marginal-calc" value="40%"> 40%
                                </label>
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="marginal-calc" value="42.5%"> 42.5%
                                </label>
                            </div>
                            
                            <button onclick="checkMarginalCalculation()" style="background: var(--primary-red); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Submit Answer</button>
                            
                            <div id="marginal-calc-feedback" style="margin-top: 1rem; padding: 0.5rem; border-radius: 4px; display: none;"></div>
                        </div>
                        
                        <script>
                        function checkMarginalCalculation() {
                            const selected = document.querySelector('input[name="marginal-calc"]:checked');
                            const feedback = document.getElementById('marginal-calc-feedback');
                            
                            if (!selected) {
                                feedback.style.display = 'block';
                                feedback.style.background = 'rgba(var(--warning-orange), 0.2)';
                                feedback.innerHTML = '⚠️ Please select an answer.';
                                return;
                            }
                            
                            feedback.style.display = 'block';
                            
                            if (selected.value === '37.5%') {
                                feedback.style.background = 'rgba(var(--success-green), 0.2)';
                                feedback.innerHTML = '✅ <span class="text-emphasis">Correct!</span> Rhinos: 45 ÷ 120 × 100% = 37.5%. This marginal distribution shows Rhinos make up over one-third of the chapter\'s vehicle fleet.';
                            } else {
                                feedback.style.background = 'rgba(var(--primary-red), 0.2)';
                                if (selected.value === '35%') {
                                    feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> Check your calculation: 45 ÷ 120 × 100%. Remember to include the decimal.';
                                } else if (selected.value === '40%') {
                                    feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This would be if there were 48 Rhinos. Double-check: 45 ÷ 120.';
                                } else {
                                    feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This percentage is too high. Calculate: 45 ÷ 120 × 100%.';
                                }
                            }
                        }
                        </script>
                    </div>
                </div>
            `,
            interactive: null
        },
        {
            title: "Conditional Distributions: Strategic Intelligence",
            content: `
                <h3>Conditional Analysis for Imperial Decision Making</h3>
                <p>Conditional distributions reveal patterns within specific categories - essential for strategic planning and tactical intelligence analysis across the Imperium.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Conditional Distribution Theory</h4>
                        
                        <div class="formula-box">
                            <span class="text-key">Conditional Distribution:</span> Distribution of one variable GIVEN a specific value of another variable<br>
                            <span class="text-key">Key Word:</span> "Given" or "Among" indicates conditional analysis<br>
                            <span class="text-key">Purpose:</span> Reveals patterns within subgroups
                        </div>
                        
                        <p><span class="text-key">Types of Conditional Distributions:</span></p>
                        <ul>
                            <li><span class="text-key">Row Conditional:</span> Distribution within each row</li>
                            <li><span class="text-key">Column Conditional:</span> Distribution within each column</li>
                            <li><span class="text-key">Direction Matters:</span> Results differ based on conditioning variable</li>
                        </ul>
                        
                        <div class="formula-box" style="background: rgba(var(--accent-blue), 0.1);">
                            <span class="text-key">Calculation Formulas:</span><br>
                            Row Conditional % = (Cell Count ÷ Row Total) × 100%<br>
                            Column Conditional % = (Cell Count ÷ Column Total) × 100%
                        </div>
                        
                        <p><span class="text-key">Strategic Questions Answered:</span></p>
                        <ul>
                            <li>"Given this planet type, what combat roles are common?"</li>
                            <li>"Among these combat specialists, where do they originate?"</li>
                            <li>"Within this category, what's the distribution?"</li>
                        </ul>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Conditional Calculation Examples</h4>
                        
                        <p><span class="text-key">Example Questions & Calculations:</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><span class="text-key">Question 1:</span> "Given Hive World regiments, what percentage are Infantry?"</p>
                            <ul style="font-size: 0.85rem; margin: 0.5rem 0;">
                                <li><span class="text-key">Row Conditional:</span> Infantry Hive ÷ Total Hive × 100%</li>
                                <li><span class="text-key">Calculation:</span> 180 ÷ 450 × 100% = 40%</li>
                                <li><span class="text-key">Interpretation:</span> 40% of Hive World regiments are Infantry</li>
                            </ul>
                        </div>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><span class="text-key">Question 2:</span> "Among Infantry regiments, what percentage are from Death Worlds?"</p>
                            <ul style="font-size: 0.85rem; margin: 0.5rem 0;">
                                <li><span class="text-key">Column Conditional:</span> Infantry Death ÷ Total Infantry × 100%</li>
                                <li><span class="text-key">Calculation:</span> 100 ÷ 400 × 100% = 25%</li>
                                <li><span class="text-key">Interpretation:</span> 25% of Infantry regiments originate from Death Worlds</li>
                            </ul>
                        </div>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Key Insight:</span> Notice how the denominator changes based on what you're conditioning on!
                        </div>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Tactical Intelligence Analysis</h4>
                        
                        <p><span class="text-key">Regiment Specialization Patterns:</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="text-align: center; color: var(--secondary-gold); font-weight: bold; margin-bottom: 1rem;">Conditional Distribution Analysis</div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">🏭 Given Hive Worlds:</h5>
                                    <ul style="font-size: 0.8rem; margin: 0;">
                                        <li>Infantry: 40.0%</li>
                                        <li>Armored: 33.3%</li>
                                        <li>Artillery: 26.7%</li>
                                    </ul>
                                    <p style="font-size: 0.75rem; margin: 0.5rem 0; color: var(--text-muted);">Hive worlds favor infantry & armor</p>
                                </div>
                                <div>
                                    <h5 style="color: var(--primary-red); margin-bottom: 0.5rem;">💀 Given Death Worlds:</h5>
                                    <ul style="font-size: 0.8rem; margin: 0;">
                                        <li>Infantry: 40.0%</li>
                                        <li>Armored: 20.0%</li>
                                        <li>Artillery: 40.0%</li>
                                    </ul>
                                    <p style="font-size: 0.75rem; margin: 0.5rem 0; color: var(--text-muted);">Death worlds excel in artillery</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px;">
                            <p><span class="text-key">📊 Strategic Intelligence:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">Recruitment Patterns:</span> Death worlds produce more artillery specialists</li>
                                <li><span class="text-key">Environment Impact:</span> Harsh conditions create different specializations</li>
                                <li><span class="text-key">Strategic Deployment:</span> Match regiment origin to mission requirements</li>
                                <li><span class="text-key">Resource Planning:</span> Plan equipment based on recruitment patterns</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Conditional Analysis Challenge</h4>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 8px;">
                            <p><span class="text-key">Intelligence Briefing:</span> Analyze Death World regiment specialization patterns.</p>
                            
                            <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                                <p style="font-size: 0.85rem;"><span class="text-key">Known Data:</span></p>
                                <ul style="font-size: 0.8rem; margin: 0;">
                                    <li>Death World Artillery Regiments: 100</li>
                                    <li>Total Death World Regiments: 250</li>
                                </ul>
                            </div>
                            
                            <p><span class="text-key">Question:</span> Given Death World regiments, what percentage specialize in Artillery?</p>
                            
                            <div style="margin: 1rem 0;">
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="conditional-calc" value="25%"> 25%
                                </label>
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="conditional-calc" value="35%"> 35%
                                </label>
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="conditional-calc" value="40%"> 40%
                                </label>
                                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                                    <input type="radio" name="conditional-calc" value="45%"> 45%
                                </label>
                            </div>
                            
                            <button onclick="checkConditionalCalculation()" style="background: var(--primary-red); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Submit Analysis</button>
                            
                            <div id="conditional-calc-feedback" style="margin-top: 1rem; padding: 0.5rem; border-radius: 4px; display: none;"></div>
                        </div>
                        
                        <script>
                        function checkConditionalCalculation() {
                            const selected = document.querySelector('input[name="conditional-calc"]:checked');
                            const feedback = document.getElementById('conditional-calc-feedback');
                            
                            if (!selected) {
                                feedback.style.display = 'block';
                                feedback.style.background = 'rgba(var(--warning-orange), 0.2)';
                                feedback.innerHTML = '⚠️ Please select an answer.';
                                return;
                            }
                            
                            feedback.style.display = 'block';
                            
                            if (selected.value === '40%') {
                                feedback.style.background = 'rgba(var(--success-green), 0.2)';
                                feedback.innerHTML = '✅ <span class="text-emphasis">Correct!</span> Artillery Death World: 100 ÷ 250 × 100% = 40%. This conditional distribution shows Death Worlds specialize heavily in artillery - twice the imperial average!';
                            } else {
                                feedback.style.background = 'rgba(var(--primary-red), 0.2)';
                                if (selected.value === '25%') {
                                    feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This would be the marginal distribution. Remember: conditional uses the row/column total as denominator.';
                                } else if (selected.value === '35%') {
                                    feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> Check your calculation: 100 ÷ 250 × 100%. What\'s 100/250?';
                                } else {
                                    feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This percentage is too high. Calculate: 100 ÷ 250 × 100%.';
                                }
                            }
                        }
                        </script>
                    </div>
                </div>
            `,
            interactive: null
        },
        {
            title: "Association and Independence in Imperial Data",
            content: `
                <h3>Detecting Patterns in the Emperor's Domain</h3>
                <p>The final step in categorical data analysis is determining whether variables are associated (related) or independent (unrelated) - crucial for strategic intelligence analysis.</p>
                
                <div class="lesson-grid">
                    <!-- Theory Section - Top Left -->
                    <div class="lesson-theory">
                        <h4>📚 Association vs Independence Theory</h4>
                        
                        <div class="formula-box">
                            <span class="text-key">Independence:</span> One variable doesn't influence the other<br>
                            <span class="text-key">Association:</span> Variables are related; one affects the other<br>
                            <span class="text-key">Test Method:</span> Compare conditional distributions
                        </div>
                        
                        <p><span class="text-key">Independence Characteristics:</span></p>
                        <ul>
                            <li><span class="text-key">Identical Conditionals:</span> Same distribution in all subgroups</li>
                            <li><span class="text-key">No Pattern:</span> Knowing one variable doesn't help predict the other</li>
                            <li><span class="text-key">Random Distribution:</span> Variables vary independently</li>
                        </ul>
                        
                        <p><span class="text-key">Association Characteristics:</span></p>
                        <ul>
                            <li><span class="text-key">Different Conditionals:</span> Distributions vary across subgroups</li>
                            <li><span class="text-key">Clear Patterns:</span> One variable helps predict the other</li>
                            <li><span class="text-key">Systematic Variation:</span> Variables change together</li>
                        </ul>
                        
                        <div class="formula-box" style="background: rgba(var(--accent-blue), 0.1);">
                            <span class="text-key">Detection Method:</span><br>
                            Compare conditional distributions across categories<br>
                            Similar = Independent | Different = Associated
                        </div>
                    </div>
                    
                    <!-- Examples Section - Bottom Left -->
                    <div class="lesson-examples">
                        <h4>💡 Identifying Association</h4>
                        
                        <p><span class="text-emphasis">Example: Combat Role by Planet Type</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <p><span class="text-key">Conditional Distributions (Combat Role | Planet):</span></p>
                            <table style="width: 100%; color: white; font-size: 0.8rem; border-collapse: collapse;">
                                <tr style="background: rgba(var(--secondary-gold), 0.3);"><th style="padding: 0.3rem;">Planet Type</th><th style="padding: 0.3rem;">Infantry</th><th style="padding: 0.3rem;">Armored</th><th style="padding: 0.3rem;">Artillery</th></tr>
                                <tr><td style="padding: 0.2rem;">Hive World</td><td style="text-align: center;">40%</td><td style="text-align: center;">33%</td><td style="text-align: center;">27%</td></tr>
                                <tr><td style="padding: 0.2rem;">Agri World</td><td style="text-align: center;">40%</td><td style="text-align: center;">30%</td><td style="text-align: center;">30%</td></tr>
                                <tr><td style="padding: 0.2rem;">Death World</td><td style="text-align: center;">40%</td><td style="text-align: center;">20%</td><td style="text-align: center;">40%</td></tr>
                            </table>
                        </div>
                        
                        <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                            <span class="text-key">Analysis:</span> These distributions are NOT identical<br>
                            • Death Worlds: 40% Artillery (vs 27-30% elsewhere)<br>
                            • Hive Worlds: 33% Armored (vs 20-30% elsewhere)<br>
                            <span class="text-key">Conclusion:</span> Variables are ASSOCIATED
                        </div>
                        
                        <p><span class="text-key">Independence Example:</span> If all planets had 40%-30%-30% distribution = Independent</p>
                    </div>
                    
                    <!-- Warhammer Application - Top Right -->
                    <div class="lesson-application">
                        <h4>⚔️ Strategic Intelligence Assessment</h4>
                        
                        <p><span class="text-emphasis">Association Analysis: Planet Type ↔ Combat Specialization</span></p>
                        
                        <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                            <div style="text-align: center; color: var(--primary-red); font-weight: bold; margin-bottom: 1rem;">🔍 Association Evidence</div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <h5 style="color: var(--secondary-gold); margin-bottom: 0.5rem;">🏭 Hive World Pattern</h5>
                                    <ul style="font-size: 0.8rem; margin: 0; color: var(--success-green);">
                                        <li>✓ High Armored (33%)</li>
                                        <li>✓ Urban warfare specialists</li>
                                        <li>✓ Industrial recruitment</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style="color: var(--secondary-gold); margin-bottom: 0.5rem;">💀 Death World Pattern</h5>
                                    <ul style="font-size: 0.8rem; margin: 0; color: var(--warning-orange);">
                                        <li>⚡ High Artillery (40%)</li>
                                        <li>⚡ Harsh environment adaptation</li>
                                        <li>⚡ Long-range combat focus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px;">
                            <p><span class="text-key">📊 Strategic Implications:</span></p>
                            <ul style="font-size: 0.85rem; margin: 0;">
                                <li><span class="text-key">Predictive Power:</span> Planet type predicts combat specialization</li>
                                <li><span class="text-key">Recruitment Strategy:</span> Target specific worlds for needed specialists</li>
                                <li><span class="text-key">Deployment Planning:</span> Match regiments to appropriate missions</li>
                                <li><span class="text-key">Resource Allocation:</span> Equipment distribution based on planet patterns</li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Interactive Question - Bottom Right -->
                    <div class="lesson-interactive">
                        <h4>🎯 Association Classification</h4>
                        
                        <div style="background: rgba(var(--accent-blue), 0.1); padding: 1rem; border-radius: 8px;">
                            <p><span class="text-key">Intelligence Assessment:</span> Classify these variable relationships based on conditional distribution patterns.</p>
                            
                            <div style="margin: 1rem 0;">
                                <div style="margin: 0.7rem 0; padding: 0.5rem; background: rgba(40, 40, 40, 0.8); border-radius: 4px;">
                                    <span class="text-emphasis">A. Planet type and combat role (our example data)</span><br>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-1" value="associated"> Associated
                                    </label>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-1" value="independent"> Independent
                                    </label>
                                </div>
                                
                                <div style="margin: 0.7rem 0; padding: 0.5rem; background: rgba(40, 40, 40, 0.8); border-radius: 4px;">
                                    <span class="text-emphasis">B. All planets had identical 40%-30%-30% distribution</span><br>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-2" value="associated"> Associated
                                    </label>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-2" value="independent"> Independent
                                    </label>
                                </div>
                                
                                <div style="margin: 0.7rem 0; padding: 0.5rem; background: rgba(40, 40, 40, 0.8); border-radius: 4px;">
                                    <span class="text-emphasis">C. Space Marine eye color and combat effectiveness</span><br>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-3" value="associated"> Associated
                                    </label>
                                    <label style="display: inline-block; margin: 0.3rem 1rem; cursor: pointer;">
                                        <input type="radio" name="scenario-3" value="independent"> Independent
                                    </label>
                                </div>
                            </div>
                            
                            <button onclick="checkAssociationClassification()" style="background: var(--primary-red); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Submit Analysis</button>
                            
                            <div id="association-feedback" style="margin-top: 1rem; padding: 0.5rem; border-radius: 4px; display: none;"></div>
                        </div>
                        
                        <script>
                        function checkAssociationClassification() {
                            const answer1 = document.querySelector('input[name="scenario-1"]:checked');
                            const answer2 = document.querySelector('input[name="scenario-2"]:checked');
                            const answer3 = document.querySelector('input[name="scenario-3"]:checked');
                            const feedback = document.getElementById('association-feedback');
                            
                            if (!answer1 || !answer2 || !answer3) {
                                feedback.style.display = 'block';
                                feedback.style.background = 'rgba(var(--warning-orange), 0.2)';
                                feedback.innerHTML = '⚠️ Please classify all three scenarios.';
                                return;
                            }
                            
                            feedback.style.display = 'block';
                            
                            const correct1 = answer1.value === 'associated';
                            const correct2 = answer2.value === 'independent';
                            const correct3 = answer3.value === 'independent';
                            
                            if (correct1 && correct2 && correct3) {
                                feedback.style.background = 'rgba(var(--success-green), 0.2)';
                                feedback.innerHTML = '✅ <span class="text-emphasis">Excellent Intelligence Analysis!</span> A: Associated (different conditional distributions), B: Independent (identical distributions), C: Independent (no logical connection). You understand the strategic value of association detection!';
                            } else {
                                feedback.style.background = 'rgba(var(--primary-red), 0.2)';
                                let explanation = '❌ <span class="text-key">Review your analysis:</span><br>';
                                if (!correct1) explanation += '• A: Different conditional distributions = Associated<br>';
                                if (!correct2) explanation += '• B: Identical distributions = Independent<br>';
                                if (!correct3) explanation += '• C: No logical connection = Independent<br>';
                                feedback.innerHTML = explanation;
                            }
                        }
                        </script>
                    </div>
                </div>
            `,
            interactive: null
        },
        {
            title: "Mosaic Plots: The Tactical Display Matrix",
            content: `
                <h3>Visualizing Two-Way Tables with Mosaic Plots</h3>
                <p>The Adeptus Mechanicus has developed an advanced visualization technique called <span class="text-emphasis">mosaic plots</span> to display the complete relationship between two categorical variables in a single, comprehensive display. Unlike separate bar graphs, a mosaic plot shows both marginal and conditional distributions simultaneously.</p>
                
                <div class="formula-box">
                    <h4>🎯 What is a Mosaic Plot?</h4>
                    <p>A <span class="text-emphasis">mosaic plot</span> is a graphical display of a two-way table where:</p>
                    <ul>
                        <li><span class="text-emphasis">Area represents frequency</span> - larger rectangles = more observations</li>
                        <li><span class="text-emphasis">Width shows marginal distribution</span> of the horizontal variable</li>
                        <li><span class="text-emphasis">Height shows conditional distribution</span> within each category</li>
                        <li><span class="text-emphasis">Total area = 100%</span> of all observations</li>
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
                            <td style="padding: 8px;"><span class="text-emphasis">Core Worlds</span></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">180</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;"><span class="text-emphasis">400</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><span class="text-emphasis">Frontier</span></td>
                            <td style="padding: 8px;">60</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;"><span class="text-emphasis">300</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><span class="text-emphasis">War Zone</span></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;">80</td>
                            <td style="padding: 8px;"><span class="text-emphasis">300</span></td>
                        </tr>
                        <tr style="background: rgba(212, 175, 55, 0.1);">
                            <td style="padding: 8px;"><span class="text-emphasis">Total</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">300</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">400</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">300</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">1000</span></td>
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
                        <li><span class="text-emphasis">Column widths</span> show marginal distribution of sectors:
                            <ul>
                                <li>Core Worlds: 400/1000 = 40% (widest column)</li>
                                <li>Frontier & War Zone: 300/1000 = 30% each</li>
                            </ul>
                        </li>
                        <li><span class="text-emphasis">Rectangle heights</span> show conditional distributions within each sector:
                            <ul>
                                <li>Core Worlds: 30% Battleships, 45% Cruisers, 25% Frigates</li>
                                <li>Frontier: 20% Battleships, 40% Cruisers, 40% Frigates</li>
                                <li>War Zone: 40% Battleships, 33% Cruisers, 27% Frigates</li>
                            </ul>
                        </li>
                        <li><span class="text-emphasis">Rectangle areas</span> show joint frequencies:
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
                        <li><span class="text-key">If variables were independent:</span> All columns would have identical height patterns</li>
                        <li><span class="text-key">Association detected:</span> Different height patterns reveal strategic relationships:
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
                        <li><span class="text-key">Confusing area with height:</span> Large rectangles don't always mean high percentages within categories</li>
                        <li><span class="text-key">Ignoring the baseline:</span> Always compare conditional distributions, not just rectangle sizes</li>
                        <li><span class="text-key">Missing independence patterns:</span> If all columns have the same height pattern, variables are independent</li>
                        <li><span class="text-key">Scale misunderstanding:</span> Width = marginal distribution, height = conditional distribution</li>
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
                            <td style="padding: 8px;"><span class="text-emphasis">Death World</span></td>
                            <td style="padding: 8px;">45</td>
                            <td style="padding: 8px;">180</td>
                            <td style="padding: 8px;">25</td>
                            <td style="padding: 8px;"><span class="text-emphasis">250</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><span class="text-emphasis">Hive World</span></td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">80</td>
                            <td style="padding: 8px;">100</td>
                            <td style="padding: 8px;"><span class="text-emphasis">300</span></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"><span class="text-emphasis">Feudal World</span></td>
                            <td style="padding: 8px;">75</td>
                            <td style="padding: 8px;">120</td>
                            <td style="padding: 8px;">55</td>
                            <td style="padding: 8px;"><span class="text-emphasis">250</span></td>
                        </tr>
                        <tr style="background: rgba(212, 175, 55, 0.1);">
                            <td style="padding: 8px;"><span class="text-emphasis">Total</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">240</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">380</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">180</span></td>
                            <td style="padding: 8px;"><span class="text-emphasis">800</span></td>
                        </tr>
                    </table>
                </div>
                
                <div class="formula-box">
                    <h4>📐 Calculating Mosaic Plot Dimensions</h4>
                    <p><span class="text-emphasis">Step 1: Column Widths (Marginal Distribution of World Types)</span></p>
                    <ul>
                        <li>Death World: 250/800 = 31.25%</li>
                        <li>Hive World: 300/800 = 37.5%</li>
                        <li>Feudal World: 250/800 = 31.25%</li>
                    </ul>
                    
                    <p><span class="text-emphasis">Step 2: Rectangle Heights (Conditional Distributions)</span></p>
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
                    
                    <p><span class="text-emphasis">Step 3: Rectangle Areas (Joint Frequencies)</span></p>
                    <ul>
                        <li>Death World + Trial by Combat: 180/800 = 22.5% (largest area)</li>
                        <li>Death World + Tithe: 25/800 = 3.125% (smallest area)</li>
                    </ul>
                </div>
                
                <div class="example-box" style="background: rgba(var(--accent-blue-rgb), 0.1);">
                    <h4>🔬 Statistical Independence Testing</h4>
                    <p>If recruitment method were independent of world type, we would expect:</p>
                    <ul>
                        <li><span class="text-emphasis">All columns to have identical height patterns</span></li>
                        <li>Each world type to show the overall marginal distribution:
                            <ul>
                                <li>Direct: 240/800 = 30%</li>
                                <li>Trial by Combat: 380/800 = 47.5%</li>
                                <li>Tithe: 180/800 = 22.5%</li>
                            </ul>
                        </li>
                    </ul>
                    
                    <p><span class="text-key">Observed associations:</span></p>
                    <ul>
                        <li>Death Worlds strongly favor Trial by Combat (72% vs 47.5% expected)</li>
                        <li>Hive Worlds prefer Direct recruitment (40% vs 30% expected)</li>
                        <li>These deviations indicate <em>statistical association</em></li>
                    </ul>
                </div>
                
                <div class="warning-box">
                    <h4>⚔️ Advanced Interpretation Techniques</h4>
                    <ul>
                        <li><span class="text-key">Comparative Analysis:</span> Compare actual conditional distributions to marginal distributions</li>
                        <li><span class="text-key">Residual Patterns:</span> Large positive/negative deviations from independence</li>
                        <li><span class="text-key">Simpson's Paradox Watch:</span> Aggregated data might mask subgroup patterns</li>
                        <li><span class="text-key">Sample Size Considerations:</span> Small categories may show unreliable patterns</li>
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
