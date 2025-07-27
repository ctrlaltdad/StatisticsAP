# Warhammer 40K Statistics Academy

A gamified web application for learning AP Statistics through the grim darkness of the 41st millennium. This engaging platform combines the strategic depth of Warhammer 40,000 with comprehensive statistics education.

## 🚀 Features

### 🎮 Gamified Learning Experience
- **Rank System**: Progress from Recruit to Chapter Master based on quiz performance
- **Chapter Progression**: Unlock new content as you master previous concepts
- **Story-Driven Introduction**: Immersive Imperial lore sets the learning context
- **Promotion Ceremonies**: Dramatic rank advancement when achieving excellence

### 📚 Comprehensive AP Statistics Curriculum
- **10 Complete Chapters** covering all AP Statistics topics
- **Interactive Lessons** with Warhammer-themed examples
- **Battle Assessments** (quizzes) to test understanding
- **Real-time Feedback** with detailed explanations

### 🎯 Chapter Overview
1. **Data Collection & the Imperial Census** - Data types, sampling, bias
2. **Descriptive Statistics** - Central tendency, variability, outliers
3. **Probability** - Basic probability, conditional probability, independence
4. **Distributions** - Normal, binomial, and other key distributions
5. **Confidence Intervals** - Estimation and margin of error
6. **Hypothesis Testing** - Scientific method and statistical significance
7. **Linear Regression** - Correlation and prediction
8. **Chi-Square Tests** - Independence and goodness of fit
9. **ANOVA** - Comparing multiple groups
10. **Advanced Topics** - Non-parametric tests and advanced techniques

### 🎨 Immersive Design
- **Dark, atmospheric theme** inspired by Warhammer 40K
- **Responsive design** works on desktop, tablet, and mobile
- **Interactive elements** including calculations, classifications, and simulations
- **Progress tracking** with visual indicators and achievements

### ⚙️ Modular Architecture (NEW)
- **85% code reduction** through reusable components
- **LessonGridBuilder**: Standardized 2x2 lesson layouts
- **StandardTable**: Unified table generation system
- **LessonChart**: Preset chart configurations
- **Interactive Elements**: Auto-injected classification, calculation, and simulation activities

## 📋 Documentation

### For Developers
- **[Modular Lesson Creation Guide](MODULAR_LESSON_CREATION_GUIDE.md)** - Complete guide for creating new lessons using the modular system
- **[Content Guide](CONTENT_GUIDE.md)** - Basic content creation reference
- **[Admin Mode Guide](ADMIN_MODE.md)** - Admin features and testing tools

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (for development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start
1. **Clone or download** the repository
2. **Navigate** to the project directory
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. **Open your browser** and navigate to `http://localhost:3000`

## 🔧 Development

### Project Structure
```
├── index.html                   # Main application entry point
├── styles.css                   # Application styling
├── js/
│   ├── app-refactored.js        # Main application logic
│   ├── components/              # UI and modular components
│   │   ├── ChapterComponent.js  # Chapter selection screen
│   │   ├── LessonComponent.js   # Lesson display and navigation
│   │   ├── QuizComponent.js     # Quiz functionality
│   │   ├── LessonGridBuilder.js # Modular 2x2 lesson layouts
│   │   ├── StandardTable.js     # Table generation system
│   │   ├── LessonChart.js       # Chart preset system
│   │   └── BarChart.js         # Chart rendering engine
│   ├── modules/                 # Core system modules
│   │   ├── DataManager.js       # Data loading and management
│   │   ├── ProgressManager.js   # User progress tracking
│   │   ├── EventManager.js      # Event system
│   │   ├── ContentManager.js    # Content loading
│   │   └── AdminManager.js      # Admin mode functionality
│   └── data/                    # Content and configuration
│       ├── config.js            # Application configuration
│       ├── chapters.js          # Chapter metadata
│       ├── quizzes.js           # Quiz data
│       ├── lessons.js           # Lesson system loader
│       └── lessons/             # Individual chapter lessons
│           ├── template.js      # Template for new chapters
│           ├── chapter-1.js     # Chapter 1 content
│           ├── chapter-2.js     # Chapter 2 content
│           └── ...              # Additional chapters
└── README.md                    # This file
```

### Key Features
- **Modular Architecture**: Clean separation of concerns with reusable components
- **Event-Driven System**: Decoupled communication between modules
- **Progress Persistence**: Automatic saving of user progress to localStorage
- **Admin Mode**: Testing and development tools (see Admin Mode section)

## 🎓 Admin Mode

### Activation
- Press **Ctrl+Shift+A** anywhere in the application
- Enter admin password: `password321`
- Admin indicator appears in top-right corner

### Features
- **Chapter Access Override**: Skip to any chapter for testing
- **Admin Panel**: Unlock all chapters, reset progress, debug tools
- **Visual Indicators**: Gold key icons on admin-unlocked content
- **Session Management**: 1-hour timeout with persistent login

### Quick Actions
- **Ctrl+Shift+A**: Toggle admin panel
- Click any locked chapter with admin access to jump directly to it
- Test quizzes and lessons without affecting progression

## 📝 Adding New Content

### Creating a New Chapter

1. **Copy the template**:
   ```bash
   cp js/data/lessons/template.js js/data/lessons/chapter-X.js
   ```

2. **Update the chapter constant**:
   ```javascript
   const CHAPTER_X_LESSONS = {
       title: "Your Chapter Title",
       description: "Chapter description",
       estimatedTime: "30 minutes",
       steps: [...]
   };
   ```

3. **Add to lessons.js**:
   ```javascript
   if (typeof CHAPTER_X_LESSONS !== 'undefined') {
       LESSONS_DATA[X] = CHAPTER_X_LESSONS;
   }
   ```

4. **Update index.html**:
   ```html
   <script src="js/data/lessons/chapter-X.js"></script>
   ```

5. **Update chapters.js** with chapter metadata

### Lesson Structure
```javascript
{
    title: "Lesson Step Title",
    content: `<h3>HTML Content</h3><p>Lesson text with Warhammer theming</p>`,
    interactive: {
        type: "calculation", // or "classification", "bias-identification", "simulation"
        question: "What is the mean of this data?",
        data: [1, 2, 3, 4, 5],
        answers: { mean: 3.0, median: 3 }
    }
}
```

### Interactive Types
- **calculation**: Math problems with input validation
- **classification**: Categorization exercises with dropdowns
- **bias-identification**: Identify types of bias in scenarios
- **simulation**: Interactive demonstrations

### Adding Quizzes
Edit `js/data/quizzes.js` to add chapter quizzes:
```javascript
{
    id: chapterNumber,
    title: "Chapter X Assessment",
    questions: [
        {
            id: 1,
            text: "Question text",
            type: "multiple-choice",
            options: ["A", "B", "C", "D"],
            correct: 0,
            explanation: "Why this answer is correct"
        }
    ]
}
```

## 🚀 Deployment

### Production Build
1. Ensure all content is complete and tested
2. Update `js/data/config.js` for production settings
3. Change admin password hash in config
4. Test with admin mode for final verification

### Hosting
- Any static web hosting service (GitHub Pages, Netlify, Vercel)
- No server-side requirements
- Ensure all files are uploaded including the `js/data/lessons/` directory

## 🛡️ Configuration

### Admin Password
Update in `js/data/config.js`:
```javascript
adminConfig: {
    passwordHash: "your-sha256-hash-here",
    sessionTimeout: 3600000 // 1 hour
}
```

### Progress Storage
```javascript
storage: {
    progressKey: 'your-app-progress-key',
    settingsKey: 'your-app-settings-key'
}
```

## 📱 Browser Support
- Chrome 80+
- Firefox 74+
- Safari 13+
- Edge 80+

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Add your content following the modular structure
4. Test with admin mode
5. Submit a pull request

For questions or support, please check the admin mode documentation and template files for guidance on content creation.
   ```bash
   npm start
   ```
5. **Open your browser** to `http://localhost:8080`

### Alternative Setup (No Node.js)
Simply open `index.html` in your web browser - the app works as a static site!

## 🎮 How to Use

### Getting Started
1. **Choose Your Faction** on the welcome screen
2. **Begin Your Crusade** to enter the chapter selection
3. **Complete chapters sequentially** - later chapters unlock as you progress
4. **Take battle assessments** to test your knowledge
5. **Achieve 70%+ on quizzes** to unlock the next chapter

### Learning Flow
- **Read lesson content** with Warhammer-themed explanations
- **Interact with examples** and practice problems
- **Complete each lesson step** to progress through the chapter
- **Take the chapter quiz** to test mastery
- **Review incorrect answers** with detailed explanations

### Progress Tracking
- **Imperial Rank**: Advance from Recruit to Chapter Master based on performance
- **Chapter Progress**: Visual indicators show your advancement
- **Save/Load**: Progress automatically saves to browser storage
- **Promotion System**: Dramatic ceremonies when achieving new ranks

## 🔧 Technical Details

### Technologies Used
- **HTML5** with semantic structure
- **CSS3** with custom properties and animations
- **Vanilla JavaScript** (ES6+) for interactivity
- **Local Storage** for progress persistence
- **Responsive Grid/Flexbox** for layout

### File Structure
```
StatisticsAP/
├── index.html          # Main application page
├── styles.css          # Complete stylesheet
├── js/
│   ├── app.js          # Main application logic
│   ├── lessons.js      # Lesson management system
│   └── quiz.js         # Quiz and assessment system
├── package.json        # Project configuration
└── README.md          # This file
```

### Key Features Implementation
- **Modular JavaScript**: Separate managers for app, lessons, and quizzes
- **Event-driven architecture**: Clean separation of concerns
- **Progressive enhancement**: Works without JavaScript for basic content
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Minimal dependencies, optimized loading

## 🎓 Educational Approach

### Pedagogical Strategy
- **Narrative context**: Every concept explained through Imperial scenarios
- **Gradual complexity**: Concepts build upon previous knowledge
- **Multiple examples**: Varied contexts reinforce understanding
- **Immediate feedback**: Students learn from mistakes immediately
- **Practical application**: Real-world statistical thinking

### Warhammer Integration
- **Authentic terminology**: Uses proper 40K lore and language
- **Relevant examples**: Combat effectiveness, resource management, strategic planning
- **Immersive scenarios**: Students become Imperial analysts and strategists
- **Consistent theme**: Every lesson maintains the dark sci-fi atmosphere

## 🔮 Future Enhancements

### Planned Features
- **Additional chapters** for advanced topics
- **Practice problem banks** with randomly generated questions
- **Graphing calculator** integrated into lessons
- **Study guides** and formula references
- **Multiplayer competitions** between students
- **Teacher dashboard** for progress monitoring

### Technical Improvements
- **Database integration** for cloud save/sync
- **Advanced analytics** for learning pattern analysis
- **Mobile app** versions for iOS/Android
- **Offline functionality** with service workers
- **Print-friendly** study materials

## 📊 Learning Outcomes

Students who complete this course will be able to:
- **Understand** all major AP Statistics concepts
- **Apply** statistical thinking to real-world problems
- **Interpret** data and statistical results critically
- **Communicate** statistical findings effectively
- **Succeed** on the AP Statistics exam

## 🎖️ Contributing

This project is designed to be educational and engaging. Contributions are welcome for:
- **Additional lesson content** and examples
- **New interactive elements** and activities
- **Bug fixes** and performance improvements
- **Accessibility enhancements**
- **Translation** to other languages

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Games Workshop** for the incredible Warhammer 40,000 universe
- **Educational content** inspired by AP Statistics curriculum standards
- **Font Awesome** for icons
- **Google Fonts** for typography

---

*In the grim darkness of the far future, there is only... excellent statistical education!*

For the Emperor! 🛡️
