// Application Configuration
// Central configuration for the entire application

const APP_CONFIG = {
    // Application metadata
    name: "Warhammer 40K Statistics Academy",
    version: "2.0.0",
    description: "A gamified web application for learning AP Statistics through the grim darkness of the 41st millennium",
    
    // Rank system configuration
    ranks: {
        "Recruit": {
            minChapters: 0,
            minAverageScore: 0,
            icon: "fas fa-user",
            color: "#6b7280",
            description: "New to the Imperium"
        },
        "Initiate": {
            minChapters: 1,
            minAverageScore: 70,
            icon: "fas fa-shield",
            color: "#059669",
            description: "Proven in basic combat"
        },
        "Sergeant": {
            minChapters: 2,
            minAverageScore: 75,
            icon: "fas fa-chevron-up",
            color: "#0d9488",
            description: "Leader of squads"
        },
        "Lieutenant": {
            minChapters: 4,
            minAverageScore: 80,
            icon: "fas fa-star",
            color: "#0284c7",
            description: "Company officer"
        },
        "Captain": {
            minChapters: 6,
            minAverageScore: 85,
            icon: "fas fa-crown",
            color: "#7c3aed",
            description: "Chapter commander"
        },
        "Chapter Master": {
            minChapters: 8,
            minAverageScore: 90,
            icon: "fas fa-gem",
            color: "#dc2626",
            description: "Master of the Chapter"
        }
    },
    
    // Progression settings
    progression: {
        minimumPassingScore: 70,
        perfectScore: 100,
        retakeAllowed: true,
        unlockNextChapterScore: 70
    },
    
    // UI Configuration
    ui: {
        animationSpeed: 300,
        notificationDuration: 3000,
        promotionModalDuration: 8000,
        autoSaveInterval: 30000, // 30 seconds
        theme: "dark-imperial"
    },
    
    // Feature flags
    features: {
        enableProgressSaving: true,
        enableRankSystem: true,
        enablePromotions: true,
        enableStatistics: true,
        enableAccessibility: true,
        enableAnalytics: false
    },
    
    // Storage keys
    storage: {
        progressKey: "warhammer-stats-progress",
        settingsKey: "warhammer-stats-settings",
        achievementsKey: "warhammer-stats-achievements"
    },

    // Admin configuration
    admin: {
        enabled: true,
        passwordHash: "a20aff106fe011d5dd696e3b7105200ff74331eeb8e865bb80ebd82b12665a07", // 'passwordxyz' for development
        sessionTimeout: 3600000, // 1 hour in milliseconds
        features: {
            skipChapterRequirements: true,
            unlockAllChapters: true,
            skipQuizRequirements: true,
            debugMode: true,
            contentPreview: true
        }
    },
    
    // Faction configuration
    factions: {
        "space-marines": {
            name: "Space Marines",
            description: "Tactical and methodical approach to statistics",
            icon: "fas fa-shield-alt",
            color: "#1d4ed8",
            learningStyle: "methodical"
        },
        "imperial-guard": {
            name: "Imperial Guard", 
            description: "Learn through overwhelming data and examples",
            icon: "fas fa-users",
            color: "#059669",
            learningStyle: "comprehensive"
        },
        "adeptus-mechanicus": {
            name: "Adeptus Mechanicus",
            description: "Technical and formula-focused learning",
            icon: "fas fa-cog",
            color: "#dc2626",
            learningStyle: "technical"
        }
    },
    
    // Interactive activity types
    activityTypes: {
        classification: {
            name: "Data Classification",
            description: "Classify data into appropriate categories"
        },
        calculation: {
            name: "Mathematical Calculation",
            description: "Perform statistical calculations"
        },
        "bias-identification": {
            name: "Bias Identification",
            description: "Identify types of bias in scenarios"
        },
        simulation: {
            name: "Statistical Simulation",
            description: "Run probability simulations"
        },
        "graph-interpretation": {
            name: "Graph Interpretation",
            description: "Analyze and interpret statistical graphs"
        }
    }
};

// Validation rules
const VALIDATION_RULES = {
    chapterRequirements: {
        minSteps: 3,
        maxSteps: 10,
        requiredFields: ['title', 'content']
    },
    quizRequirements: {
        minQuestions: 5,
        maxQuestions: 15,
        requiredFields: ['question', 'options', 'correct', 'explanation']
    },
    userProgress: {
        maxRetakes: 3,
        scoreRange: [0, 100]
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_CONFIG, VALIDATION_RULES };
}
