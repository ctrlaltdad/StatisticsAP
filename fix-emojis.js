const fs = require('fs');

// Read the file
let content = fs.readFileSync('js/data/lessons/chapter-1.js', 'utf8');

// Replace problematic characters
content = content.replace(/ðŸ"š/g, '<i class="fas fa-book"></i>');
content = content.replace(/âš"ï¸/g, '<i class="fas fa-sword"></i>');
content = content.replace(/ðŸ'¡/g, '<i class="fas fa-lightbulb"></i>');
content = content.replace(/ðŸ"Š/g, '<i class="fas fa-chart-bar"></i>');
content = content.replace(/ðŸŽ¯/g, '<i class="fas fa-bullseye"></i>');
content = content.replace(/â†'/g, '->');

// Also fix any other common problematic chars
content = content.replace(/[^\x00-\x7F]/g, function(match) {
    // Replace any remaining non-ASCII characters with safe alternatives
    switch(match) {
        case 'ðŸ"š': return '<i class="fas fa-book"></i>';
        case 'âš"': return '<i class="fas fa-sword"></i>';
        case 'ðŸ'¡': return '<i class="fas fa-lightbulb"></i>';
        case 'ðŸ"Š': return '<i class="fas fa-chart-bar"></i>';
        case 'ðŸŽ¯': return '<i class="fas fa-bullseye"></i>';
        default: return ''; // Remove other problematic characters
    }
});

// Write the cleaned content back
fs.writeFileSync('js/data/lessons/chapter-1.js', content, 'utf8');

console.log('Fixed emoji characters in chapter-1.js');
