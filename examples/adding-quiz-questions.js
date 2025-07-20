// Example: Adding New Quiz Questions
// This example shows how to add quiz questions to the new modular system

// 1. To add questions to an existing quiz, edit js/data/quizzes.js:

const QUIZ_DATA = {
    // Existing chapters...
    
    4: { // New Chapter 4 Quiz
        title: "Probability & Battle Odds - Strategic Assessment",
        description: "Test your understanding of probability in combat scenarios.",
        passingScore: 75,
        timeLimit: 45, // minutes
        questions: [
            {
                id: 1,
                question: "A Space Marine squad has an 80% chance of successfully completing each mission phase. If they need to complete 3 phases, what's the probability they complete all phases successfully?",
                options: [
                    "0.512 (51.2%)",
                    "0.64 (64%)", 
                    "0.8 (80%)",
                    "0.24 (24%)"
                ],
                correct: 0,
                explanation: "Independent events multiply: 0.8 × 0.8 × 0.8 = 0.512 or 51.2%",
                difficulty: "medium",
                concept: "Independent Probability"
            },
            {
                id: 2,
                question: "An Imperial Guard regiment reports that 15% of their las-gun shots miss their target. If a guardsman fires 20 shots, what's the expected number of hits?",
                options: [
                    "3 hits",
                    "15 hits",
                    "17 hits", 
                    "20 hits"
                ],
                correct: 2,
                explanation: "If 15% miss, then 85% hit. Expected hits = 20 × 0.85 = 17 hits",
                difficulty: "easy",
                concept: "Expected Value"
            },
            {
                id: 3,
                question: "A Tau Fire Warrior squad's pulse rifle has the following damage distribution: 1 damage (40%), 2 damage (35%), 3 damage (20%), 4 damage (5%). What's the expected damage per shot?",
                options: [
                    "1.9 damage",
                    "2.0 damage",
                    "2.1 damage",
                    "2.5 damage"
                ],
                correct: 0,
                explanation: "Expected value = (1×0.4) + (2×0.35) + (3×0.2) + (4×0.05) = 0.4 + 0.7 + 0.6 + 0.2 = 1.9",
                difficulty: "medium",
                concept: "Expected Value"
            },
            {
                id: 4,
                question: "In a battle, the probability of an Ork assault succeeding is 0.6 if they outnumber the defenders, and 0.3 if they don't. If there's a 40% chance they outnumber the defenders, what's the overall probability of a successful assault?",
                options: [
                    "0.42 (42%)",
                    "0.45 (45%)",
                    "0.48 (48%)",
                    "0.90 (90%)"
                ],
                correct: 0,
                explanation: "Using law of total probability: P(success) = P(success|outnumber)×P(outnumber) + P(success|don't outnumber)×P(don't outnumber) = 0.6×0.4 + 0.3×0.6 = 0.24 + 0.18 = 0.42",
                difficulty: "hard",
                concept: "Law of Total Probability"
            },
            {
                id: 5,
                question: "A Chaos Space Marine warband captures Imperial soldiers with the following success rates by unit type: Scouts (90%), Guardsmen (70%), Space Marines (30%). If they encounter 2 Scouts, 5 Guardsmen, and 1 Space Marine, what's the expected number of captures?",
                options: [
                    "5.0 captures",
                    "5.5 captures", 
                    "6.0 captures",
                    "6.3 captures"
                ],
                correct: 1,
                explanation: "Expected captures = (2×0.9) + (5×0.7) + (1×0.3) = 1.8 + 3.5 + 0.3 = 5.6 ≈ 5.5",
                difficulty: "medium",
                concept: "Expected Value"
            }
        ]
    }
};

// 2. The QuizComponent will automatically:
//    - Load the new quiz data
//    - Shuffle questions and options
//    - Handle scoring and feedback
//    - Track progress
//    - Show results and rank assessment

// 3. To add the quiz to a chapter, edit js/data/chapters.js:

const CHAPTERS_DATA = {
    // Existing chapters...
    
    4: {
        id: 4,
        title: "Probability & Battle Odds",
        description: "Master the mathematics of uncertainty in the grim darkness of the far future.",
        difficulty: "Veteran Sergeant",
        estimatedTime: "45 min",
        topics: [
            "Independent Events",
            "Expected Value", 
            "Conditional Probability",
            "Law of Total Probability",
            "Battle Outcome Analysis"
        ],
        concepts: [
            "Multiplication Rule",
            "Expected Value Calculation",
            "Probability Trees",
            "Conditional Probability",
            "Risk Assessment"
        ],
        prerequisites: [3],
        unlockRequirements: {
            previousChapters: [1, 2, 3],
            minimumScore: 75
        }
    }
};

// 4. Quiz Features Available:
//    - Automatic question shuffling
//    - Option randomization  
//    - Real-time feedback with explanations
//    - Score calculation with percentage
//    - Rank assessment based on performance
//    - Progress saving and restoration
//    - Review mode for completed quizzes
//    - Navigation between questions
//    - Time tracking
//    - Detailed results with question-by-question review

// 5. Adding Custom Difficulty Levels:
//    Edit js/data/config.js to add new ranks:

const APP_CONFIG = {
    ranks: [
        { min: 95, title: "Primarch", icon: "👑", description: "Legendary mastery of statistical warfare" },
        { min: 90, title: "Chapter Master", icon: "⭐", description: "Exceptional tactical analysis" },
        // ... existing ranks
    ]
};

// The new modular architecture makes it easy to:
// ✅ Add new quiz questions by editing data files
// ✅ Create new quizzes for new chapters
// ✅ Customize scoring and ranking systems
// ✅ Add new question types and formats
// ✅ Implement advanced features like time limits
// ✅ Track detailed analytics and progress

console.log('📚 Quiz system ready for expansion!');
