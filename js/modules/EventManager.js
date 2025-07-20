// Event Manager Module
// Centralized event system for loose coupling between components

class EventManager {
    constructor() {
        this.listeners = new Map();
        this.eventHistory = [];
        this.maxHistorySize = 100;
    }

    /**
     * Subscribe to an event
     */
    on(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, []);
        }
        
        this.listeners.get(eventName).push(callback);
        
        return () => this.off(eventName, callback);
    }

    /**
     * Subscribe to an event (fires only once)
     */
    once(eventName, callback) {
        const onceCallback = (...args) => {
            callback(...args);
            this.off(eventName, onceCallback);
        };
        
        return this.on(eventName, onceCallback);
    }

    /**
     * Unsubscribe from an event
     */
    off(eventName, callback) {
        if (!this.listeners.has(eventName)) return;
        
        const callbacks = this.listeners.get(eventName);
        const index = callbacks.indexOf(callback);
        
        if (index > -1) {
            callbacks.splice(index, 1);
        }
        
        if (callbacks.length === 0) {
            this.listeners.delete(eventName);
        }
    }

    /**
     * Emit an event
     */
    emit(eventName, ...args) {
        // Record event in history
        this.recordEvent(eventName, args);
        
        if (!this.listeners.has(eventName)) return;
        
        const callbacks = this.listeners.get(eventName);
        callbacks.forEach(callback => {
            try {
                callback(...args);
            } catch (error) {
                console.error(`Error in event listener for ${eventName}:`, error);
            }
        });
    }

    /**
     * Record event in history
     */
    recordEvent(eventName, args) {
        this.eventHistory.push({
            event: eventName,
            args: args,
            timestamp: Date.now()
        });
        
        // Maintain history size
        if (this.eventHistory.length > this.maxHistorySize) {
            this.eventHistory.shift();
        }
    }

    /**
     * Remove all listeners for an event
     */
    removeAllListeners(eventName) {
        if (eventName) {
            this.listeners.delete(eventName);
        } else {
            this.listeners.clear();
        }
    }

    /**
     * Get event history
     */
    getEventHistory() {
        return [...this.eventHistory];
    }

    /**
     * Clear event history
     */
    clearEventHistory() {
        this.eventHistory = [];
    }

    /**
     * Get active listeners count
     */
    getListenerCount(eventName) {
        if (eventName) {
            return this.listeners.get(eventName)?.length || 0;
        }
        
        let total = 0;
        for (const callbacks of this.listeners.values()) {
            total += callbacks.length;
        }
        return total;
    }

    /**
     * Check if event has listeners
     */
    hasListeners(eventName) {
        return this.listeners.has(eventName) && this.listeners.get(eventName).length > 0;
    }

    /**
     * Get all event names with listeners
     */
    getActiveEvents() {
        return Array.from(this.listeners.keys());
    }
}

// Predefined event constants
const EVENTS = {
    // Application lifecycle
    APP_INIT: 'app:init',
    APP_READY: 'app:ready',
    APP_ERROR: 'app:error',
    
    // Screen navigation
    SCREEN_CHANGE: 'screen:change',
    SCREEN_BEFORE_CHANGE: 'screen:before-change',
    
    // Faction selection
    FACTION_SELECTED: 'faction:selected',
    FACTION_CHANGED: 'faction:changed',
    
    // Chapter progression
    CHAPTER_STARTED: 'chapter:started',
    CHAPTER_COMPLETED: 'chapter:completed',
    CHAPTER_UNLOCKED: 'chapter:unlocked',
    
    // Lesson events
    LESSON_STARTED: 'lesson:started',
    LESSON_STEP_CHANGED: 'lesson:step-changed',
    LESSON_COMPLETED: 'lesson:completed',
    LESSON_ACTIVITY_COMPLETED: 'lesson:activity-completed',
    
    // Quiz events
    QUIZ_STARTED: 'quiz:started',
    QUIZ_QUESTION_ANSWERED: 'quiz:question-answered',
    QUIZ_COMPLETED: 'quiz:completed',
    QUIZ_RETAKEN: 'quiz:retaken',
    
    // Progress events
    PROGRESS_UPDATED: 'progress:updated',
    PROGRESS_SAVED: 'progress:saved',
    PROGRESS_RESET: 'progress:reset',
    RANK_PROMOTED: 'rank:promoted',
    ACHIEVEMENT_UNLOCKED: 'achievement:unlocked',
    
    // UI events
    NOTIFICATION_SHOW: 'notification:show',
    NOTIFICATION_HIDE: 'notification:hide',
    MODAL_OPEN: 'modal:open',
    MODAL_CLOSE: 'modal:close',
    
    // Data events
    DATA_LOADED: 'data:loaded',
    DATA_ERROR: 'data:error',
    
    // Settings events
    SETTINGS_CHANGED: 'settings:changed',
    THEME_CHANGED: 'theme:changed'
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EventManager, EVENTS };
}
