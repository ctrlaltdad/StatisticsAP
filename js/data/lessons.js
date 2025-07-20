// Modular Lesson Content System
// This file loads lessons from individual chapter files for better organization

// Import individual chapter lessons (these will be loaded via script tags)
// Note: In a browser environment, these are loaded as separate script files

const LESSONS_DATA = {};

// This function builds the lessons data from individual chapter files
function buildLessonsData() {
    // Chapter lessons are loaded from separate files and available as globals
    if (typeof CHAPTER_1_LESSONS !== 'undefined') {
        console.log('Loading Chapter 1 lessons:', CHAPTER_1_LESSONS);
        LESSONS_DATA[1] = CHAPTER_1_LESSONS;
    }
    
    if (typeof CHAPTER_2_LESSONS !== 'undefined') {
        console.log('Loading Chapter 2 lessons:', CHAPTER_2_LESSONS);
        LESSONS_DATA[2] = CHAPTER_2_LESSONS;
    }
    
    // Add more chapters as they're created
    // if (typeof CHAPTER_3_LESSONS !== 'undefined') {
    //     LESSONS_DATA[3] = CHAPTER_3_LESSONS;
    // }
    
    console.log(`📚 Loaded ${Object.keys(LESSONS_DATA).length} chapter lesson(s):`, LESSONS_DATA);
    return LESSONS_DATA;
}

// Initialize lesson data when this script loads
document.addEventListener('DOMContentLoaded', function() {
    buildLessonsData();
});

// Also build immediately if DOM is already ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildLessonsData);
} else {
    buildLessonsData();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LESSONS_DATA, buildLessonsData };
}
