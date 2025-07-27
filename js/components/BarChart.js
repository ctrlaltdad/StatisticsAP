/**
 * Standardized Bar Chart Component for Warhammer Statistics Academy
 * Ensures consistent formatting and proper display across all lessons
 */

class BarChart {
    /**
     * Generate a standardized bar chart HTML
     * @param {Object} config - Chart configuration
     * @param {string} config.title - Chart title
     * @param {Array} config.data - Array of {label, value, color} objects
     * @param {number} config.maxValue - Maximum value for Y-axis (optional, auto-calculated if not provided)
     * @param {string} config.yAxisLabel - Y-axis label (optional)
     * @param {number} config.height - Chart height in pixels (default: 200)
     * @param {number} config.barWidth - Bar width in pixels (default: 40)
     */
    static generate(config) {
        const {
            title,
            data,
            maxValue = Math.max(...data.map(d => d.value)) * 1.1, // 10% padding above max
            yAxisLabel = '',
            height = 200,
            barWidth = 40
        } = config;

        // Calculate Y-axis tick marks (4 evenly spaced, excluding 0)
        const yTicks = [];
        for (let i = 1; i <= 4; i++) {
            yTicks.push(Math.round((maxValue * i / 4) * 100) / 100);
        }

        // Generate bars (just the bars, labels will be separate)
        const bars = data.map(item => {
            const barHeight = (item.value / maxValue) * (height - 70); // 70px for labels and padding
            const defaultColor = 'linear-gradient(135deg, var(--primary-red), #a91b1b)';
            
            return `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="
                        background: ${item.color || defaultColor}; 
                        width: ${Math.min(barWidth, 32)}px; 
                        height: ${barHeight}px; 
                        border-radius: 3px 3px 0 0; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                        display: flex;
                        align-items: end;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        font-size: 0.6rem;
                        padding-bottom: 4px;
                    ">${item.value}</div>
                </div>
            `;
        }).join('');

        // Generate X-axis labels (below the X-axis line)
        const xAxisLabels = data.map(item => `
            <div style="
                font-size: 0.7rem; 
                text-align: center; 
                font-weight: bold;
                color: var(--text-light);
                line-height: 1.1;
            ">${item.label.replace(/\s+/g, '<br>')}</div>
        `).join('');

        // Generate Y-axis ticks (excluding 0)
        const yAxisTicks = yTicks.map((tick, index) => `
            <div style="
                position: absolute; 
                left: 5px; 
                top: ${(height - 70) - (index * (height - 70) / 4) + 10}px; 
                font-size: 0.7rem; 
                color: var(--text-muted);
                background: var(--darker-bg);
                padding: 2px 4px;
                border-radius: 2px;
            ">${tick}</div>
        `).join('');

        return `
            <div style="background: rgba(40, 40, 40, 0.8); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                <div style="text-align: center; color: var(--secondary-gold); font-weight: bold; margin-bottom: 1rem;">
                    ${title}
                </div>
                <div style="
                    position: relative;
                    height: ${height}px;
                    margin: 1rem 0; 
                    background: rgba(0,0,0,0.3); 
                    padding: 20px 20px 50px 50px; 
                    border-radius: 6px; 
                    overflow: hidden;
                ">
                    <!-- Y-axis line -->
                    <div style="
                        position: absolute;
                        left: 40px;
                        top: 20px;
                        bottom: 50px;
                        width: 2px;
                        background: var(--text-muted);
                    "></div>
                    
                    <!-- X-axis line -->
                    <div style="
                        position: absolute;
                        left: 40px;
                        right: 20px;
                        bottom: 50px;
                        height: 2px;
                        background: var(--text-muted);
                    "></div>
                    
                    <!-- Y-axis ticks and labels -->
                    ${yAxisTicks}
                    
                    <!-- Bars container - aligned to X-axis -->
                    <div style="
                        position: absolute;
                        bottom: 52px;
                        left: 55px;
                        right: 20px;
                        display: flex;
                        align-items: end;
                        justify-content: space-around;
                    ">
                        ${bars}
                    </div>
                    
                    <!-- X-axis labels - positioned below the X-axis line -->
                    <div style="
                        position: absolute;
                        bottom: 10px;
                        left: 55px;
                        right: 20px;
                        display: flex;
                        justify-content: space-around;
                    ">
                        ${xAxisLabels}
                    </div>
                </div>
                ${yAxisLabel ? `<div style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">${yAxisLabel}</div>` : ''}
            </div>
        `;
    }
}

// Export for use in lesson files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BarChart;
}
