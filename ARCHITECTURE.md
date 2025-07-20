# Warhammer 40K Statistics Academy - Refactored Architecture

## 🏗️ Architecture Overview

The codebase has been refactored into a modular, scalable architecture that separates concerns and makes it easy to add new content and features.

## 📁 New File Structure

```
StatisticsAP/
├── index.html                          # Main application page
├── styles.css                          # Complete stylesheet
├── js/
│   ├── data/                           # 📊 Data Files
│   │   ├── config.js                   # Application configuration
│   │   ├── chapters.js                 # Chapter metadata
│   │   ├── lessons.js                  # Lesson content
│   │   └── quizzes.js                  # Quiz questions
│   ├── modules/                        # 🔧 Core Modules
│   │   ├── DataManager.js              # Data loading and validation
│   │   ├── ProgressManager.js          # User progress and persistence
│   │   ├── EventManager.js             # Event system for loose coupling
│   │   └── ContentManager.js           # Content management utilities
│   ├── components/                     # 🎨 UI Components
│   │   ├── ChapterComponent.js         # Chapter display and interaction
│   │   ├── LessonComponent.js          # Lesson display and activities
│   │   └── QuizComponent.js            # Quiz management and interaction
│   ├── app-refactored.js               # 🚀 Main application entry point
│   ├── app.js                          # Legacy main app (for reference)
│   ├── lessons.js                      # Legacy lesson manager (for reference)
│   └── quiz.js                         # Legacy quiz manager (replaced)
├── package.json                        # Project configuration
└── README.md                          # This file
```

## 🔧 Core Modules

### DataManager
- **Purpose**: Centralized data loading and validation
- **Features**:
  - Loads chapters, lessons, and quiz data
  - Validates data integrity
  - Provides easy access to content
  - Supports dynamic content addition

### ProgressManager
- **Purpose**: Manages user progress and achievements
- **Features**:
  - Tracks chapter completion and scores
  - Manages rank progression
  - Handles achievement system
  - Automatic save/load functionality
  - Import/export capabilities

### EventManager
- **Purpose**: Decoupled communication between components
- **Features**:
  - Publish/subscribe event system
  - Event history tracking
  - Error handling in event listeners
  - Predefined event constants

### ContentManager
- **Purpose**: Utilities for adding and managing content
- **Features**:
  - Easy content addition with validation
  - Bulk import/export functionality
  - Content templates and examples
  - Statistics and validation tools

## 🎨 UI Components

### ChapterComponent
- **Purpose**: Displays and manages chapter selection
- **Features**:
  - Dynamic chapter rendering
  - Progress-based unlocking
  - Chapter status indicators
  - Click handling and navigation

### LessonComponent
- **Purpose**: Handles lesson display and interaction
- **Features**:
  - Step-by-step lesson navigation
  - Interactive activity support
  - Progress tracking
  - Activity validation

### QuizComponent
- **Purpose**: Manages quiz delivery and assessment
- **Features**:
  - Dynamic quiz loading from data files
  - Question shuffling and option randomization
  - Real-time feedback and explanations
  - Score calculation and rank assessment
  - Progress tracking and results storage
  - Review mode for completed quizzes
  - Navigation between questions
  - Placeholder support for incomplete quizzes

## 📊 Data Structure

### Chapters
```javascript
{
  id: 1,
  title: "Chapter Title",
  description: "Chapter description",
  difficulty: "Novice Acolyte",
  estimatedTime: "30 min",
  topics: ["Topic 1", "Topic 2"],
  concepts: ["Concept A", "Concept B"],
  prerequisites: [0], // Previous chapter IDs
  unlockRequirements: {
    previousChapters: [0],
    minimumScore: 70
  }
}
```

### Lessons
```javascript
{
  title: "Lesson Title",
  steps: [
    {
      title: "Step Title",
      content: "HTML content",
      interactive: {
        type: "classification|calculation|bias-identification|simulation",
        // Activity-specific configuration
      }
    }
  ]
}
```

### Quizzes
```javascript
{
  title: "Quiz Title",
  description: "Quiz description",
  passingScore: 70,
  questions: [
    {
      id: 1,
      question: "Question text",
      options: ["A", "B", "C", "D"],
      correct: 1, // Index of correct answer
      explanation: "Explanation text",
      difficulty: "easy|medium|hard",
      concept: "Concept name"
    }
  ]
}
```

## 🔄 Event System

The application uses a centralized event system for communication:

```javascript
// Predefined events
EVENTS.CHAPTER_STARTED
EVENTS.LESSON_COMPLETED
EVENTS.QUIZ_STARTED
EVENTS.RANK_PROMOTED
EVENTS.PROGRESS_UPDATED
// ... and many more

// Usage
eventManager.emit(EVENTS.CHAPTER_COMPLETED, { chapterId: 1, score: 85 });
eventManager.on(EVENTS.RANK_PROMOTED, (data) => {
  console.log(`Promoted from ${data.oldRank} to ${data.newRank}`);
});
```

## ✨ Adding New Content

### Adding a New Chapter

```javascript
// Method 1: Direct data file editing
// Edit js/data/chapters.js and add new chapter object

// Method 2: Using ContentManager (runtime)
const contentManager = new ContentManager(dataManager);
const newChapter = contentManager.addChapter({
  id: 11,
  title: "Advanced Topics",
  description: "Master advanced statistical concepts",
  difficulty: "Expert",
  estimatedTime: "60 min",
  topics: ["Topic A", "Topic B"],
  concepts: ["Advanced Concept"],
  prerequisites: [10],
  unlockRequirements: {
    previousChapters: [10],
    minimumScore: 85
  }
});
```

### Adding New Lessons

```javascript
// Method 1: Edit js/data/lessons.js
// Add new lesson object with steps array

// Method 2: Using ContentManager
const newLesson = contentManager.addLesson(11, {
  title: "Advanced Topics Lesson",
  steps: [
    {
      title: "Introduction",
      content: "<h3>Welcome</h3><p>Content here...</p>",
      interactive: null
    },
    {
      title: "Practice",
      content: "<h3>Practice</h3><p>Try this activity...</p>",
      interactive: {
        type: "calculation",
        question: "Calculate the mean:",
        data: [1, 2, 3, 4, 5],
        answers: { mean: 3, median: 3 }
      }
    }
  ]
});
```

### Adding New Quiz Questions

```javascript
// Method 1: Edit js/data/quizzes.js
// Add questions to existing quiz or create new quiz

// Method 2: Using ContentManager
const newQuiz = contentManager.addQuiz(11, {
  title: "Advanced Topics Assessment",
  description: "Test your advanced knowledge",
  passingScore: 80,
  questions: [
    {
      id: 1,
      question: "What is the advanced concept?",
      options: ["A", "B", "C", "D"],
      correct: 2,
      explanation: "C is correct because...",
      difficulty: "hard",
      concept: "Advanced Statistics"
    }
  ]
});
```

## 🎯 Interactive Activities

The system supports multiple activity types:

### Classification Activity
```javascript
{
  type: "classification",
  question: "Classify these items:",
  items: [
    { text: "Item 1", type: "Type A" },
    { text: "Item 2", type: "Type B" }
  ]
}
```

### Calculation Activity
```javascript
{
  type: "calculation",
  question: "Calculate mean and median:",
  data: [1, 2, 3, 4, 5],
  answers: {
    mean: 3,
    median: 3
  }
}
```

### Bias Identification Activity
```javascript
{
  type: "bias-identification",
  scenarios: [
    {
      text: "Scenario description",
      bias: "Selection Bias",
      explanation: "Why this is selection bias..."
    }
  ]
}
```

### Simulation Activity
```javascript
{
  type: "simulation",
  question: "Run probability simulation:",
  description: "Description of what to simulate"
}
```

## 🔧 Configuration

The application is highly configurable through `js/data/config.js`:

- **Rank System**: Define ranks, requirements, and styling
- **Progression**: Set passing scores and unlock requirements
- **UI Settings**: Animation speeds, notification durations
- **Feature Flags**: Enable/disable features
- **Faction System**: Configure learning styles and themes

## 📈 Progress and Analytics

The ProgressManager tracks:
- Chapter completion and scores
- Time spent learning
- Achievement unlocks
- User preferences and settings
- Detailed statistics for analysis

## 🛠️ Development Workflow

1. **Adding Content**: Use data files or ContentManager
2. **Testing**: Validate content with ContentManager.validateAllContent()
3. **Deployment**: All content is loaded dynamically
4. **Maintenance**: Use built-in statistics and validation tools

## 🔄 Migration from Legacy Code

The refactored version maintains compatibility:
- Legacy quiz.js is still used temporarily
- HTML structure remains the same
- All existing functionality is preserved
- Progressive migration path available

## 🎯 Benefits of New Architecture

1. **Scalability**: Easy to add new chapters, lessons, and activities
2. **Maintainability**: Clear separation of concerns
3. **Testability**: Modular components can be tested independently
4. **Extensibility**: Plugin-like architecture for new features
5. **Data Management**: Centralized, validated content management
6. **Performance**: Efficient loading and caching
7. **Developer Experience**: Clear APIs and documentation

## 🚀 Future Enhancements

The new architecture supports:
- Dynamic content loading from APIs
- User-generated content
- Advanced analytics and learning paths
- Multi-language support
- Plugin system for custom activities
- Enhanced accessibility features
- Real-time collaboration features

## 🔗 API Reference

### DataManager Methods
- `getChapter(id)` - Get chapter by ID
- `getAllChapters()` - Get all chapters
- `hasChapter(id)` - Check if chapter exists
- `addChapter(id, data)` - Add new chapter

### ProgressManager Methods
- `completeChapter(id, score)` - Mark chapter complete
- `getProgressStats()` - Get progress statistics
- `saveProgress()` - Save to localStorage
- `resetProgress()` - Clear all progress

### EventManager Methods
- `on(event, callback)` - Subscribe to event
- `emit(event, data)` - Emit event
- `off(event, callback)` - Unsubscribe
- `once(event, callback)` - Subscribe once

### ContentManager Methods
- `addChapter(data)` - Add chapter with validation
- `addLesson(id, data)` - Add lesson with validation
- `addQuiz(id, data)` - Add quiz with validation
- `validateAllContent()` - Validate all content

This refactored architecture provides a solid foundation for scaling the Warhammer 40K Statistics Academy while maintaining the engaging user experience!
