# Modular Lesson Creation Guide

## Overview
This guide details the step-by-step process for creating new lessons using the modularized approach implemented in the Statistics Academy application. This system achieves 85% code reduction through reusable components while maintaining full functionality.

## Table of Contents
1. [Core Components](#core-components)
2. [Lesson Structure](#lesson-structure)
3. [Step-by-Step Creation Process](#step-by-step-creation-process)
4. [Component Usage Examples](#component-usage-examples)
5. [Interactive Elements](#interactive-elements)
6. [Best Practices](#best-practices)
7. [Troubleshooting](#troubleshooting)

## Core Components

### 1. LessonGridBuilder.js
**Purpose**: Creates standardized 2x2 grid layouts for lessons
**Location**: `js/components/LessonGridBuilder.js`
**Key Method**: `LessonGridBuilder.create(config)`

### 2. StandardTable.js
**Purpose**: Generates various table formats (basic, comparison, cross-tabulation)
**Location**: `js/components/StandardTable.js`
**Key Methods**: 
- `StandardTable.generate(config)`
- `StandardTable.comparison(config)`
- `StandardTable.fromData(config)`

### 3. LessonChart.js
**Purpose**: Standardized chart rendering with preset configurations
**Location**: `js/components/LessonChart.js`
**Key Methods**:
- `LessonChart.create(preset)`
- `LessonChart.presets.{presetName}()`

## Lesson Structure

### Basic Lesson Object
```javascript
{
    title: "Lesson Title",
    content: `HTML content with modular components`,
    interactive: {  // Optional
        type: "classification|calculation|bias-identification|simulation",
        // ... type-specific properties
    }
}
```

### Chapter Structure
```javascript
const CHAPTER_X_LESSONS = {
    title: "Chapter Title",
    description: "Chapter description",
    estimatedTime: "XX minutes",
    steps: [
        // Array of lesson objects
    ]
};
```

## Step-by-Step Creation Process

### Step 1: Plan Your Lesson
1. **Define Learning Objectives**: What should students learn?
2. **Choose Layout Type**: 
   - Simple content (manual HTML)
   - 2x2 grid layout (use LessonGridBuilder)
   - Mixed approach
3. **Identify Required Components**:
   - Tables (StandardTable)
   - Charts (LessonChart)
   - Interactive elements

### Step 2: Create Basic Lesson Structure
```javascript
{
    title: "Your Lesson Title",
    content: `
        <h3>Lesson Introduction</h3>
        <p>Brief description of what this lesson covers.</p>
        
        // Content goes here
    `
}
```

### Step 3: Choose Content Approach

#### Option A: Manual Layout (Simple Lessons)
```javascript
content: `
    <h3>Title</h3>
    <p>Content...</p>
    <div class="formula-box">
        <span class="text-emphasis">Key Point:</span><br>
        Important information here
    </div>
`
```

#### Option B: Modular Grid Layout (Recommended)
```javascript
content: `
    <h3>Title</h3>
    <p>Introduction...</p>
    
    ${LessonGridBuilder.create({
        theory: { /* theory section config */ },
        examples: { /* examples section config */ },
        application: { /* application section config */ },
        interactive: { /* interactive section config */ }
    })}
`
```

### Step 4: Configure Grid Sections

#### Theory Section (Top-Left)
```javascript
theory: {
    title: "Section Title",
    definitions: [
        { term: "Term", definition: "Definition" }
    ],
    lists: [{
        title: "List Title",
        items: [
            { category: "Category", description: "Description" }
        ]
    }]
}
```

#### Examples Section (Bottom-Left)
```javascript
examples: {
    title: "Examples Title",
    steps: [
        { action: "Action", description: "Description" }
    ],
    highlights: {
        title: "Highlights Title",
        items: ["Item 1", "Item 2"]
    }
}
```

#### Application Section (Top-Right)
```javascript
application: {
    title: "Application Title",
    subtitle: "Optional subtitle",
    customContent: StandardTable.generate({
        headers: ["Col 1", "Col 2"],
        rows: [["Data 1", "Data 2"]]
    }),
    insights: {
        title: "Insights Title",
        items: ["Insight 1", "Insight 2"]
    }
}
```

#### Interactive Section (Bottom-Right)
```javascript
interactive: {
    title: "Interactive Title",
    prompt: "Simple prompt text"
}
```

### Step 5: Add Tables (If Needed)

#### Basic Table
```javascript
StandardTable.generate({
    headers: ["Column 1", "Column 2", "Column 3"],
    rows: [
        ["Row 1 Data", "Row 1 Data", "Row 1 Data"],
        ["Row 2 Data", "Row 2 Data", "Row 2 Data"]
    ],
    caption: "Optional table caption"
})
```

#### Comparison Table
```javascript
StandardTable.comparison({
    title: "Comparison Title",
    categories: ["Category A", "Category B"],
    outcomes: ["Outcome 1", "Outcome 2", "Outcome 3"],
    data: [
        [value1, value2, value3],  // Category A data
        [value4, value5, value6]   // Category B data
    ]
})
```

### Step 6: Add Charts (If Needed)

#### Use Existing Presets
```javascript
LessonChart.create(LessonChart.presets.chapterStrength())
LessonChart.create(LessonChart.presets.chapterDistribution())
LessonChart.create(LessonChart.presets.multiSectorForces())
```

#### Create Custom Preset (Advanced)
1. Add preset to `LessonChart.js`:
```javascript
static presets = {
    // existing presets...
    
    customPreset() {
        return {
            id: 'custom-chart',
            title: 'Custom Chart Title',
            data: [
                { label: 'Label 1', value: 100, color: 'rgba(220, 38, 127, 0.8)' },
                { label: 'Label 2', value: 150, color: 'rgba(77, 171, 247, 0.8)' }
            ],
            options: {
                width: 400,
                height: 300,
                yAxisLabel: 'Y Axis Label'
            }
        };
    }
}
```

### Step 7: Add Interactive Elements (If Needed)

#### Embedded Interactive (In Grid)
```javascript
// In lesson object:
interactive: {
    type: "classification",
    question: "Question text here",
    items: [
        { text: "Item to classify", category: "Correct Category" }
    ],
    categories: ["Category 1", "Category 2", "Category 3"]
}

// In grid config:
interactive: {
    title: "Interactive Title",
    prompt: "Instructions for activity"
}
```

#### Standalone Interactive (Appended)
```javascript
// Just define interactive object, don't include in grid
interactive: {
    type: "classification",
    question: "Question text",
    // ... configuration
}
```

### Step 8: Add to Chapter File
1. Open appropriate chapter file (e.g., `js/data/lessons/chapter-2.js`)
2. Add lesson object to `steps` array
3. Ensure proper comma separation

### Step 9: Test Your Lesson
1. Start development server: `npm start`
2. Navigate to your chapter
3. Check lesson displays correctly
4. Test interactive elements (if any)
5. Verify responsive design

## Component Usage Examples

### Complete Modular Lesson Example
```javascript
{
    title: "Advanced Statistical Concepts",
    content: `
        <h3>Understanding Complex Data Relationships</h3>
        <p>This lesson explores advanced statistical concepts through practical applications.</p>
        
        ${LessonGridBuilder.create({
            theory: {
                title: "Core Theory",
                definitions: [
                    { term: "Correlation", definition: "Measure of linear relationship between variables" },
                    { term: "Causation", definition: "One variable directly influences another" }
                ],
                lists: [{
                    title: "Key Principles",
                    items: [
                        { category: "Correlation ≠ Causation", description: "Association doesn't imply cause" },
                        { category: "Multiple Factors", description: "Many variables can influence outcomes" }
                    ]
                }]
            },
            examples: {
                title: "Real-World Examples",
                steps: [
                    { action: "Identify variables", description: "Determine what you're measuring" },
                    { action: "Collect data", description: "Gather relevant information" },
                    { action: "Analyze relationship", description: "Look for patterns and connections" }
                ]
            },
            application: {
                title: "Statistical Analysis",
                subtitle: "Sample Data Set:",
                customContent: StandardTable.generate({
                    headers: ["Variable A", "Variable B", "Correlation"],
                    rows: [
                        ["Temperature", "Ice Cream Sales", "0.85"],
                        ["Study Hours", "Test Scores", "0.72"],
                        ["Exercise", "Health Rating", "0.68"]
                    ]
                }),
                insights: {
                    title: "Key Insights",
                    items: [
                        "Strong positive correlation between temperature and ice cream sales",
                        "Moderate correlation between study time and performance"
                    ]
                }
            },
            interactive: {
                title: "Practice Analysis",
                prompt: "Apply concepts to identify relationships in data"
            }
        })}
    `,
    interactive: {
        type: "classification",
        question: "Classify each scenario as correlation or causation:",
        items: [
            { text: "Ice cream sales increase when temperature rises", category: "Correlation" },
            { text: "Pressing gas pedal makes car accelerate", category: "Causation" },
            { text: "Umbrella sales correlate with rain", category: "Correlation" }
        ],
        categories: ["Correlation", "Causation"]
    }
}
```

## Interactive Elements

### Supported Interactive Types

#### 1. Classification
```javascript
interactive: {
    type: "classification",
    question: "Question text",
    items: [
        { text: "Item to classify", category: "Correct category" }
    ],
    categories: ["Category 1", "Category 2"]
}
```

#### 2. Calculation
```javascript
interactive: {
    type: "calculation",
    question: "Calculate the result",
    formula: "x + y = ?",
    answer: 42,
    tolerance: 0.1  // Optional: for decimal answers
}
```

#### 3. Bias Identification
```javascript
interactive: {
    type: "bias-identification",
    scenarios: [
        {
            text: "Scenario description",
            biasType: "Selection Bias",
            explanation: "Why this is biased"
        }
    ]
}
```

#### 4. Simulation
```javascript
interactive: {
    type: "simulation",
    parameters: {
        // Simulation-specific parameters
    }
}
```

### Interactive Placement Options

#### Option 1: Embedded in Grid (Bottom-Right)
- Add `lesson-interactive` div to content
- Interactive auto-injected into this div
- Maintains 2x2 grid layout

#### Option 2: Appended After Content
- No `lesson-interactive` div in content
- Interactive automatically appended after main content
- Good for simple layouts

## Best Practices

### 1. Code Organization
- Use modular components whenever possible
- Keep custom HTML minimal
- Consistent naming conventions
- Comment complex configurations

### 2. Content Structure
- Start with clear learning objectives
- Use progressive disclosure (simple → complex)
- Include practical examples
- End with application/practice

### 3. Visual Design
- Maintain consistent styling
- Use established color schemes
- Ensure responsive design
- Test on different screen sizes

### 4. Performance
- Minimize custom HTML
- Reuse existing components
- Avoid inline styles when possible
- Use CSS classes for consistency

### 5. Accessibility
- Include proper headings hierarchy
- Use semantic HTML elements
- Ensure keyboard navigation works
- Test with screen readers

## Troubleshooting

### Common Issues

#### 1. "Component is not defined" Error
**Cause**: Script loading order issue
**Solution**: Ensure component scripts load before lesson data in `index.html`

#### 2. Interactive Elements Not Showing
**Cause**: Missing required properties or incorrect placement
**Solutions**:
- Check interactive object has all required properties
- Verify `lesson-interactive` div exists if using embedded placement
- Check console for error messages

#### 3. Tables Not Rendering
**Cause**: Incorrect StandardTable configuration
**Solutions**:
- Verify headers and rows arrays match
- Check for syntax errors in configuration
- Ensure StandardTable.js is loaded

#### 4. Charts Not Displaying
**Cause**: Missing chart preset or configuration error
**Solutions**:
- Verify preset exists in LessonChart.js
- Check chart ID is unique
- Ensure BarChart.js dependency is loaded

#### 5. Grid Layout Issues
**Cause**: Missing or malformed LessonGridBuilder configuration
**Solutions**:
- Check all required sections are defined
- Verify template literal syntax is correct
- Test with minimal configuration first

### Debug Process
1. **Check Browser Console**: Look for JavaScript errors
2. **Verify Dependencies**: Ensure all required scripts are loaded
3. **Test Components Individually**: Isolate problematic components
4. **Check Configuration**: Validate object structure and properties
5. **Review Network Tab**: Ensure all resources load successfully

### Getting Help
1. **Check Documentation**: Review this guide and component JSDoc comments
2. **Examine Working Examples**: Look at existing lessons for patterns
3. **Test Incrementally**: Build lessons step by step
4. **Use Browser Dev Tools**: Inspect HTML structure and CSS

## File Locations Reference

### Core Components
- `js/components/LessonGridBuilder.js` - Grid layout system
- `js/components/StandardTable.js` - Table generation
- `js/components/LessonChart.js` - Chart system
- `js/components/LessonComponent.js` - Main lesson rendering
- `js/components/BarChart.js` - Chart rendering engine

### Lesson Data Files
- `js/data/lessons/chapter-1.js` - Chapter 1 lessons
- `js/data/lessons/chapter-2.js` - Chapter 2 lessons
- `js/data/lessons/template.js` - Template for new chapters

### Configuration
- `js/data/config.js` - App configuration
- `js/data/chapters.js` - Chapter definitions
- `index.html` - Script loading order

## Version History
- **v1.0** - Initial modular system implementation
- **v1.1** - Added interactive element injection for embedded placement
- **v1.2** - Enhanced StandardTable with cross-tabulation support
- **v1.3** - Added LessonChart preset system

---

**Note**: This guide reflects the modular system that achieved 85% code reduction in Chapter 1 (from 1,602 lines to 318 lines). Always test new lessons thoroughly before deployment.
