# Modular Lesson System Documentation

## Overview
The lesson system has been refactored from a single large file into a modular structure that makes it easy to add, edit, and maintain lesson content.

## 📁 File Structure

```
js/data/
├── lessons.js                    # Main lessons manager
├── lessons/                      # Individual chapter lessons
│   ├── template.js              # Template for creating new chapters
│   ├── chapter-1.js             # Chapter 1: Data Collection
│   ├── chapter-2.js             # Chapter 2: Descriptive Statistics
│   └── chapter-X.js             # Future chapters...
├── quizzes.js                   # Quiz data (separate system)
└── chapters.js                  # Chapter metadata
```

## 🎯 Benefits of the New System

### ✅ **Maintainability**
- Each chapter is in its own file
- Easy to find and edit specific content
- Changes don't affect other chapters
- Smaller, focused files are easier to work with

### ✅ **Scalability**
- Add new chapters without modifying existing ones
- No single large file that becomes unwieldy
- Clear separation of concerns

### ✅ **Collaboration**
- Multiple people can work on different chapters simultaneously
- Version control is cleaner with smaller files
- Less merge conflicts

### ✅ **Organization**
- Template file provides consistent structure
- Clear naming conventions
- Easy to see what chapters exist

## 📝 Adding a New Chapter

### Step 1: Create the Chapter File
Copy the template and create a new file:
```bash
cp js/data/lessons/template.js js/data/lessons/chapter-3.js
```

### Step 2: Update the Chapter Content
Edit the new file with your content:
```javascript
const CHAPTER_3_LESSONS = {
    title: "Your Chapter Title",
    description: "What students will learn",
    estimatedTime: "XX minutes",
    steps: [
        // Your lesson steps here
    ]
};
```

### Step 3: Add to Index.html
Add the script tag to load your chapter:
```html
<script src="js/data/lessons/chapter-3.js"></script>
```

### Step 4: Register in lessons.js
Add your chapter to the loader:
```javascript
if (typeof CHAPTER_3_LESSONS !== 'undefined') {
    LESSONS_DATA[3] = CHAPTER_3_LESSONS;
}
```

## 🏗️ Chapter Structure

Each chapter file follows this structure:

```javascript
const CHAPTER_X_LESSONS = {
    title: "Chapter Title",
    description: "Brief description for educators",
    estimatedTime: "Estimated completion time",
    steps: [
        {
            title: "Step Title",
            content: `HTML content with Warhammer 40K theming`,
            interactive: null | { interactive_object }
        }
        // More steps...
    ]
};
```

### Content Guidelines

#### **HTML Structure**
```html
<h3>Main Section Header</h3>
<p>Explanatory paragraph with 40K context...</p>

<div class="example-box">
    <h4>🏛️ Imperial Example</h4>
    <p>Concrete example using 40K universe...</p>
</div>

<div class="formula-box">
    <strong>Key Formula or Concept:</strong><br>
    Mathematical formula or important rule
</div>
```

#### **Interactive Types**
- `classification` - Students classify items into categories
- `calculation` - Mathematical problem solving
- `bias-identification` - Identify statistical biases
- `simulation` - Interactive experiments

## 🎮 Interactive Activities

### Classification Activity
```javascript
interactive: {
    type: "classification",
    question: "Classify these Imperial measurements:",
    items: [
        { text: "Item description", type: "Correct Category" }
    ]
}
```

### Calculation Activity
```javascript
interactive: {
    type: "calculation",
    question: "Calculate the mean for these scores:",
    data: [85, 92, 78, 88, 95],
    answers: {
        mean: 87.6,
        median: 88
    }
}
```

### Bias Identification
```javascript
interactive: {
    type: "bias-identification",
    scenarios: [
        {
            text: "Scenario description",
            bias: "Type of Bias",
            explanation: "Why this is biased"
        }
    ]
}
```

## 🔧 System Integration

### Loading Process
1. Individual chapter files load and create global variables
2. Main `lessons.js` detects available chapters
3. `buildLessonsData()` combines all chapters into `LESSONS_DATA`
4. DataManager can access lessons normally

### Backwards Compatibility
- Existing lesson components work unchanged
- Same data structure and API
- No breaking changes to existing code

## 📋 Content Creation Workflow

### For New Chapters
1. **Copy template**: Use `template.js` as starting point
2. **Plan content**: Outline the learning objectives
3. **Write steps**: Create 3-7 lesson steps with 40K theming
4. **Add interactives**: Include 1-2 interactive activities per chapter
5. **Test content**: Use admin mode to jump to your chapter
6. **Update index.html**: Add script tag for your chapter

### For Editing Existing Chapters
1. **Open chapter file**: Find the specific chapter in `/lessons/`
2. **Edit content**: Modify HTML content and interactives
3. **Test changes**: Refresh browser to see updates
4. **No other files needed**: Changes are isolated to that chapter

## 🚀 Example: Creating Chapter 3

```javascript
// js/data/lessons/chapter-3.js
const CHAPTER_3_LESSONS = {
    title: "Probability: The Emperor's Dice",
    description: "Understanding chance and probability in Imperial warfare",
    estimatedTime: "40 minutes",
    steps: [
        {
            title: "Introduction to Probability",
            content: `
                <h3>The Mathematics of Fate</h3>
                <p>In the grim darkness of the 41st millennium, even the Emperor cannot predict every outcome. Probability helps us understand uncertainty...</p>
                
                <div class="example-box">
                    <h4>⚔️ Battle Example</h4>
                    <p>What's the chance a Guardsman hits their target? If historical data shows 70% accuracy, probability theory can help predict battle outcomes.</p>
                </div>
            `,
            interactive: null
        }
        // More steps...
    ]
};
```

Then add to index.html:
```html
<script src="js/data/lessons/chapter-3.js"></script>
```

And register in lessons.js:
```javascript
if (typeof CHAPTER_3_LESSONS !== 'undefined') {
    LESSONS_DATA[3] = CHAPTER_3_LESSONS;
}
```

## 🎯 Best Practices

### Content Creation
- **Keep 40K Theme**: Use Imperial terminology and examples
- **Progressive Difficulty**: Start simple, build complexity
- **Interactive Learning**: Include hands-on activities
- **Clear Examples**: Provide concrete scenarios
- **Visual Organization**: Use example-box and formula-box classes

### File Management
- **Descriptive Names**: `chapter-X.js` where X is the chapter number
- **Consistent Variables**: `CHAPTER_X_LESSONS` naming convention
- **Comments**: Include purpose and description at file top
- **Template Use**: Start new chapters with template.js

### Testing
- **Admin Mode**: Use admin access to test new chapters immediately
- **Content Validation**: Ensure HTML renders correctly
- **Interactive Testing**: Verify interactive activities work
- **Cross-Chapter**: Test navigation between chapters

This modular system makes the Warhammer 40K Statistics Academy much easier to expand and maintain while preserving the immersive educational experience!
