/**
 * Lesson Chart Manager - Standardized chart rendering for lessons
 * Integrates with BarChart component and manages chart registration
 */

class LessonChart {
    /**
     * Create a standardized chart container with consistent styling
     * @param {Object} config - Chart configuration
     * @param {string} config.id - Chart element ID
     * @param {string} config.title - Chart title
     * @param {Array} config.data - Chart data array
     * @param {Object} config.options - Chart options (height, maxValue, etc.)
     */
    static create(config) {
        const { id, title, data, options = {} } = config;
        
        // Register chart for injection
        LessonChart.registerChart(id, {
            title,
            data,
            height: options.height || 200,
            maxValue: options.maxValue || Math.max(...data.map(d => d.value)) * 1.1,
            yAxisLabel: options.yAxisLabel || ''
        });

        // Return standardized container HTML
        return `
            <div style="background: rgba(var(--accent-blue), 0.1); padding: 1.5rem; border-radius: 8px;">
                <div id="${id}"></div>
            </div>
            <div style="text-align: center; margin-top: 1rem; font-size: 0.8rem; color: var(--text-muted);">
                <span class="text-key">${title}</span> ${options.subtitle || ''}
            </div>
        `;
    }

    /**
     * Register chart configurations for later injection
     */
    static registerChart(id, config) {
        if (!LessonChart._registeredCharts) {
            LessonChart._registeredCharts = {};
        }
        LessonChart._registeredCharts[id] = config;
    }

    /**
     * Get all registered charts
     */
    static getRegisteredCharts() {
        return LessonChart._registeredCharts || {};
    }

    /**
     * Clear registered charts (useful for cleanup)
     */
    static clearRegisteredCharts() {
        LessonChart._registeredCharts = {};
    }

    /**
     * Inject all registered charts using BarChart component
     */
    static injectRegisteredCharts() {
        const charts = LessonChart.getRegisteredCharts();
        
        Object.entries(charts).forEach(([id, config]) => {
            const element = document.getElementById(id);
            if (element && typeof BarChart !== 'undefined') {
                element.innerHTML = BarChart.generate(config);
            }
        });
    }

    /**
     * Quick chart presets for common chart types
     */
    static presets = {
        vehicleProduction: (id = 'vehicle-production-chart') => ({
            id,
            title: 'Monthly Vehicle Production',
            data: [
                { label: 'Rhinos', value: 45, color: 'rgba(220, 38, 127, 0.8)' },
                { label: 'Predators', value: 30, color: 'rgba(77, 171, 247, 0.8)' },
                { label: 'Land Raiders', value: 15, color: 'rgba(218, 165, 32, 0.8)' },
                { label: 'Dreadnoughts', value: 25, color: 'rgba(81, 207, 102, 0.8)' }
            ],
            options: {
                height: 200,
                maxValue: 50,
                yAxisLabel: 'Units per Month',
                subtitle: '(Units per Month)'
            }
        }),

        chapterStrength: (id = 'chapterVisualizationChart') => ({
            id,
            title: 'Space Marine Chapter Strength',
            data: [
                { label: 'Ultramarines', value: 1000, color: 'rgba(220, 38, 127, 0.8)' },
                { label: 'Imperial Fists', value: 980, color: 'rgba(77, 171, 247, 0.8)' },
                { label: 'Blood Angels', value: 950, color: 'rgba(218, 165, 32, 0.8)' },
                { label: 'Salamanders', value: 740, color: 'rgba(81, 207, 102, 0.8)' }
            ],
            options: {
                height: 200,
                maxValue: 1100,
                yAxisLabel: 'Battle-Brothers',
                subtitle: '(Battle-Brothers)'
            }
        }),

        chapterDistribution: (id = 'chapterDistributionChart') => ({
            id,
            title: 'Chapter Battle-Brothers Distribution',
            data: [
                { label: 'Ultramarines', value: 950, color: 'rgba(220, 38, 127, 0.8)' },
                { label: 'Blood Angels', value: 850, color: 'rgba(77, 171, 247, 0.8)' },
                { label: 'Imperial Fists', value: 900, color: 'rgba(218, 165, 32, 0.8)' },
                { label: 'Salamanders', value: 750, color: 'rgba(81, 207, 102, 0.8)' },
                { label: 'Raven Guard', value: 800, color: 'rgba(156, 39, 176, 0.8)' }
            ],
            options: {
                height: 200,
                maxValue: 1000,
                yAxisLabel: 'Battle-Brothers',
                subtitle: '(Battle-Brothers)'
            }
        }),

        multiSectorForces: (id = 'multiSectorForcesChart') => ({
            id,
            title: 'Multi-Sector Force Deployment',
            data: [
                { label: 'Sector Alpha', value: 12000, color: 'rgba(220, 38, 127, 0.8)' },
                { label: 'Sector Beta', value: 8500, color: 'rgba(77, 171, 247, 0.8)' },
                { label: 'Sector Gamma', value: 15000, color: 'rgba(218, 165, 32, 0.8)' },
                { label: 'Sector Delta', value: 6000, color: 'rgba(81, 207, 102, 0.8)' }
            ],
            options: {
                height: 200,
                maxValue: 16000,
                yAxisLabel: 'Total Forces',
                subtitle: '(Imperial Guard & Space Marines)'
            }
        })
    };
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LessonChart };
}
