/**
 * Lesson Grid Builder - Creates standardized 2x2 lesson layouts
 * Reduces repetitive HTML and ensures consistent structure
 */

class LessonGridBuilder {
    /**
     * Create a 2x2 lesson grid with standardized sections
     * @param {Object} config - Grid configuration
     * @param {Object} config.theory - Theory section content (top-left)
     * @param {Object} config.examples - Examples section content (bottom-left) 
     * @param {Object} config.application - Application section content (top-right)
     * @param {Object} config.interactive - Interactive section content (bottom-right)
     */
    static create(config) {
        const { theory, examples, application, interactive } = config;
        
        return `
            <div class="lesson-grid">
                ${this.createTheorySection(theory)}
                ${this.createExamplesSection(examples)}
                ${this.createApplicationSection(application)}
                ${this.createInteractiveSection(interactive)}
            </div>
        `;
    }

    /**
     * Create theory section (top-left, blue theme)
     */
    static createTheorySection(content) {
        if (!content) return '';
        
        return `
            <div class="lesson-theory">
                <h4>${content.icon || ''} ${content.title}</h4>
                ${content.definitions ? this.createDefinitionsBox(content.definitions) : ''}
                ${content.lists ? content.lists.map(list => this.createList(list)).join('') : ''}
                ${content.customContent || ''}
            </div>
        `;
    }

    /**
     * Create examples section (bottom-left, green theme)
     */
    static createExamplesSection(content) {
        if (!content) return '';
        
        return `
            <div class="lesson-examples">
                <h4><i class="fas fa-search"></i> ${content.title}</h4>
                ${content.steps ? this.createStepsList(content.steps) : ''}
                ${content.highlights ? this.createHighlightBox(content.highlights) : ''}
                ${content.customContent || ''}
            </div>
        `;
    }

    /**
     * Create application section (top-right, red theme)
     */
    static createApplicationSection(content) {
        if (!content) return '';
        
        return `
            <div class="lesson-application">
                <h4> ${content.title}</h4>
                ${content.subtitle ? `<p><span class="text-key">${content.subtitle}</span></p>` : ''}
                ${content.table ? StandardTable.generate(content.table) : ''}
                ${content.chart ? `<div id="${content.chart.id}"></div>` : ''}
                ${content.insights ? this.createInsightsBox(content.insights) : ''}
                ${content.customContent || ''}
            </div>
        `;
    }

    /**
     * Create interactive section (bottom-right, gold theme)
     */
    static createInteractiveSection(content) {
        if (!content) return '';
        
        return `
            <div class="lesson-interactive">
                <h4>${content.icon || ''} ${content.title}</h4>
                ${content.customContent || ''}
            </div>
        `;
    }

    /**
     * Helper: Create definitions box
     */
    static createDefinitionsBox(definitions) {
        const definitionItems = definitions.map(def => 
            `• <span class="text-key">${def.term}:</span> ${def.definition}`
        ).join('<br>');
        
        return `
            <div class="formula-box">
                <span class="text-emphasis">Key Definitions:</span><br>
                ${definitionItems}
            </div>
        `;
    }

    /**
     * Helper: Create categorized list
     */
    static createList(listConfig) {
        const items = listConfig.items.map(item => 
            `<li><span class="text-important">${item.category}:</span> ${item.description}</li>`
        ).join('');
        
        return `
            <p><span class="text-emphasis">${listConfig.title}:</span></p>
            <ul>${items}</ul>
        `;
    }

    /**
     * Helper: Create numbered steps list
     */
    static createStepsList(steps) {
        const stepItems = steps.map(step => 
            `<li><span class="text-key">${step.action}</span> - ${step.description}</li>`
        ).join('');
        
        return `
            <p><span class="text-emphasis">Step-by-Step Analysis:</span></p>
            <ol>${stepItems}</ol>
        `;
    }

    /**
     * Helper: Create highlight box
     */
    static createHighlightBox(content) {
        return `
            <div class="formula-box" style="background: rgba(22, 163, 74, 0.1); border-color: var(--success-green);">
                <span class="text-key">${content.title}:</span><br>
                ${content.items.map(item => `• ${item}`).join('<br>')}
            </div>
        `;
    }

    /**
     * Helper: Create insights box
     */
    static createInsightsBox(insights) {
        return `
            <div style="background: rgba(var(--secondary-gold), 0.1); padding: 1rem; border-radius: 6px; margin: 1rem 0;">
                <p><span class="text-emphasis">${insights.title}:</span></p>
                <ul style="font-size: 0.85rem; margin: 0;">
                    ${insights.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LessonGridBuilder };
}
