/**
 * Standard Table Component - Creates consistently styled tables
 * Reduces repetitive table HTML and ensures uniform appearance
 */

class StandardTable {
    /**
     * Generate a standardized table
     * @param {Object} config - Table configuration
     * @param {Array} config.headers - Array of header strings
     * @param {Array} config.rows - Array of row arrays
     * @param {string} config.caption - Optional table caption
     * @param {string} config.size - 'small', 'medium', 'large' (default: 'medium')
     */
    static generate(config) {
        const { headers, rows, caption, size = 'medium' } = config;
        
        const fontSize = {
            small: '0.75rem',
            medium: '0.85rem', 
            large: '0.95rem'
        }[size];

        const headerRow = headers.map(header => 
            `<th style="padding: 4px;">${header}</th>`
        ).join('');

        const dataRows = rows.map(row => 
            `<tr>${row.map(cell => `<td style="padding: 4px;">${cell}</td>`).join('')}</tr>`
        ).join('');

        return `
            <table border="1" style="margin: 1rem 0; border-collapse: collapse; font-size: ${fontSize}; width: 100%;">
                <tr style="background: rgba(212, 175, 55, 0.2);">
                    ${headerRow}
                </tr>
                ${dataRows}
            </table>
            ${caption ? `<div style="text-align: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">${caption}</div>` : ''}
        `;
    }

    /**
     * Generate a simple data table with automatic styling
     * @param {Object} data - Object where keys are headers and values are arrays of cell data
     * @param {Object} options - Additional options
     */
    static fromData(data, options = {}) {
        const headers = Object.keys(data);
        const numRows = Math.max(...Object.values(data).map(arr => arr.length));
        
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            const row = headers.map(header => data[header][i] || '');
            rows.push(row);
        }

        return this.generate({
            headers,
            rows,
            ...options
        });
    }

    /**
     * Generate a comparison table (useful for before/after, category comparisons)
     * @param {Array} comparisons - Array of {label, value1, value2} objects
     * @param {Object} config - Table configuration
     */
    static comparison(comparisons, config = {}) {
        // Handle complex data structure for cross-tabulation
        if (comparisons.title && comparisons.categories && comparisons.outcomes && comparisons.data) {
            return this.crossTabulation(comparisons, config);
        }
        
        const { column1 = 'Category', column2 = 'Value 1', column3 = 'Value 2' } = config;
        
        return this.generate({
            headers: [column1, column2, column3],
            rows: comparisons.map(comp => [comp.label, comp.value1, comp.value2]),
            ...config
        });
    }

    /**
     * Generate a cross-tabulation table from categories, outcomes, and data matrix
     * @param {Object} config - Cross-tabulation configuration
     * @param {string} config.title - Table title
     * @param {Array} config.categories - Row categories
     * @param {Array} config.outcomes - Column outcomes  
     * @param {Array} config.data - 2D data matrix
     * @param {Object} options - Additional table options
     */
    static crossTabulation(config, options = {}) {
        const { title, categories, outcomes, data } = config;
        
        // Build headers: first column is category name, then outcome columns
        const headers = ['Training Level', ...outcomes];
        
        // Build rows: each category with its corresponding data values
        const rows = categories.map((category, index) => {
            const rowData = data[index] || [];
            return [category, ...rowData.map(val => `${val}%`)];
        });
        
        return this.generate({
            headers,
            rows,
            caption: title || '',
            ...options
        });
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StandardTable };
}
