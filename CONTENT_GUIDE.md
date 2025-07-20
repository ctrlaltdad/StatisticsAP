# Content Creation Guide

## Quick Start: Adding a New Chapter

### 1. Create Chapter Lesson File
```bash
cp js/data/lessons/template.js js/data/lessons/chapter-X.js
```

### 2. Edit the Chapter Content
```javascript
const CHAPTER_X_LESSONS = {
    title: "Your Chapter Title",
    description: "Brief description of what students will learn",
    estimatedTime: "30 minutes",
    steps: [
        {
            title: "Step Title",
            content: `
                <h3>Concept Introduction</h3>
                <p>Explain the concept with Warhammer 40K theming...</p>
                
                <div class="example-box">
                    <h4>⚔️ Battle Scenario</h4>
                    <p>Real-world example in 40K context...</p>
                </div>
            `,
            interactive: {
                type: "calculation",
                question: "Calculate the mean of these Imperial Guard scores:",
                data: [85, 92, 78, 88, 95],
                answers: {
                    mean: 87.6,
                    median: 88
                }
            }
        }
    ]
};
```

### 3. Register the Chapter
Add to `js/data/lessons.js`:
```javascript
if (typeof CHAPTER_X_LESSONS !== 'undefined') {
    LESSONS_DATA[X] = CHAPTER_X_LESSONS;
}
```

### 4. Load the Script
Add to `index.html` before `lessons.js`:
```html
<script src="js/data/lessons/chapter-X.js"></script>
```

### 5. Add Chapter Metadata
Update `js/data/chapters.js`:
```javascript
{
    id: X,
    title: "Chapter Title",
    description: "What students will learn",
    difficulty: "Beginner",
    estimatedTime: "30 minutes",
    prerequisites: [X-1], // Previous chapter
    quizId: X
}
```

### 6. Create Chapter Quiz
Add to `js/data/quizzes.js`:
```javascript
{
    id: X,
    title: "Chapter X Assessment",
    questions: [
        {
            id: 1,
            text: "Question about the topic?",
            type: "multiple-choice",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correct: 0,
            explanation: "Explanation of why this is correct..."
        }
    ]
}
```

## Interactive Types

### Calculation Activities
```javascript
{
    type: "calculation",
    question: "Calculate the statistics for this data:",
    data: [1, 2, 3, 4, 5], // Simple array
    answers: {
        mean: 3.0,      // Required if asking for mean
        median: 3,      // Required if asking for median
        range: 4,       // Required if asking for range
        mode: "none"    // Required if asking for mode
    }
}
```

### Classification Activities
```javascript
{
    type: "classification",
    question: "Classify each data type:",
    items: [
        {
            text: "Height of Space Marines",
            category: "Quantitative Continuous"
        }
    ],
    categories: ["Quantitative Continuous", "Quantitative Discrete", "Categorical"]
}
```

### Bias Identification
```javascript
{
    type: "bias-identification",
    scenarios: [
        {
            text: "Survey only asks volunteers...",
            correctBias: "Voluntary Response Bias"
        }
    ]
}
```

## Content Guidelines

### Writing Style
- **Warhammer 40K theming**: Use Imperial terminology and lore
- **Educational clarity**: Explain concepts clearly despite theming
- **Example boxes**: Use `<div class="example-box">` for scenarios
- **Formula boxes**: Use `<div class="formula-box">` for math

### HTML Structure
```html
<h3>Section Title</h3>
<p>Explanation with <strong>key terms</strong> and <em>emphasis</em>.</p>

<div class="example-box">
    <h4>⚔️ Battle Scenario</h4>
    <p>Practical example...</p>
</div>

<div class="formula-box">
    <strong>Formula:</strong> Mathematical expression<br>
    Where: variable definitions
</div>
```

### Testing Your Content
1. **Admin Mode**: Press Ctrl+Shift+A, password: `password321`
2. **Jump to Chapter**: Click your new chapter to test
3. **Verify Interactives**: Ensure all interactive elements work
4. **Check Quiz**: Test quiz questions and explanations

## File Organization

```
js/data/lessons/
├── template.js          # Copy this for new chapters
├── chapter-1.js         # Data Collection
├── chapter-2.js         # Descriptive Statistics
└── chapter-X.js         # Your new chapter
```

## Quick Testing
- Use admin mode to quickly jump between chapters
- Check browser console for any JavaScript errors
- Test on mobile devices for responsive design
- Verify all interactive elements provide feedback

## Common Mistakes
- ❌ Forgetting to add script tag to index.html
- ❌ Not registering chapter in lessons.js
- ❌ Mismatched chapter IDs between lessons and quizzes
- ❌ Missing answers object for calculation activities
- ❌ HTML syntax errors in content strings

## Getting Help
- Check `template.js` for structure examples
- Look at existing chapters for content patterns
- Use admin mode for testing and debugging
- Verify in browser console for error messages
