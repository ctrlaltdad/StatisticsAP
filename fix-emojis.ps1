# Fix emoji characters in lesson file
$content = Get-Content "js\data\lessons\chapter-1.js" -Encoding UTF8 -Raw

# Replace emoji characters with FontAwesome icons
$content = $content.Replace('ðŸ"š', '<i class="fas fa-book"></i>')
$content = $content.Replace('âš"ï¸', '<i class="fas fa-sword"></i>') 
$content = $content.Replace('ðŸ'¡', '<i class="fas fa-lightbulb"></i>')
$content = $content.Replace('ðŸ"Š', '<i class="fas fa-chart-bar"></i>')
$content = $content.Replace('ðŸŽ¯', '<i class="fas fa-bullseye"></i>')

# Also clean up any remaining problematic characters
$content = $content.Replace('â†'', '->')

# Save the cleaned content
Set-Content "js\data\lessons\chapter-1.js" $content -Encoding UTF8

Write-Host "Emoji characters have been replaced with FontAwesome icons"
