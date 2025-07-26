// Interactive Functions for Lesson Activities
// These functions handle the interactive elements in lessons

// Bar Graph Scenarios Check
function checkBarGraphScenarios() {
    const answerA = document.querySelector('input[name="scenario-a"]:checked');
    const answerB = document.querySelector('input[name="scenario-b"]:checked');
    const answerC = document.querySelector('input[name="scenario-c"]:checked');
    const feedback = document.getElementById('bar-graph-feedback');
    
    if (!answerA || !answerB || !answerC) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(234, 88, 12, 0.2)';
        feedback.innerHTML = '⚠️ Please answer all scenarios.';
        return;
    }
    
    feedback.style.display = 'block';
    
    const correctA = answerA.value === 'appropriate';
    const correctB = answerB.value === 'not-appropriate';
    const correctC = answerC.value === 'appropriate';
    
    if (correctA && correctB && correctC) {
        feedback.style.background = 'rgba(22, 163, 74, 0.2)';
        feedback.innerHTML = '✅ <span class="text-emphasis">Perfect!</span> A & C are categorical data (counts in categories), while B shows continuous change over time. Bar graphs excel at comparing categories!';
    } else {
        feedback.style.background = 'rgba(139, 0, 0, 0.2)';
        let explanation = '❌ <span class="text-key">Review needed:</span><br>';
        if (!correctA) explanation += '• A: Categorical data (chapters) - perfect for bar graphs<br>';
        if (!correctB) explanation += '• B: Continuous data over time - use line graph instead<br>';
        if (!correctC) explanation += '• C: Categorical data (planet types) - ideal for bar graphs<br>';
        feedback.innerHTML = explanation;
    }
}

// Marginal Probability Calculation Check
function checkMarginalCalculation() {
    const selected = document.querySelector('input[name="marginal-calc"]:checked');
    const feedback = document.getElementById('marginal-calc-feedback');
    
    if (!selected) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(234, 88, 12, 0.2)';
        feedback.innerHTML = '⚠️ Please select an answer.';
        return;
    }
    
    feedback.style.display = 'block';
    
    if (selected.value === '37.5%') {
        feedback.style.background = 'rgba(22, 163, 74, 0.2)';
        feedback.innerHTML = '✅ <span class="text-emphasis">Correct!</span> Rhinos: 45 ÷ 120 × 100% = 37.5%. This marginal distribution shows Rhinos make up over one-third of the chapter\'s vehicle fleet.';
    } else {
        feedback.style.background = 'rgba(139, 0, 0, 0.2)';
        if (selected.value === '35%') {
            feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> Check your calculation: 45 ÷ 120 × 100%. Remember to include the decimal.';
        } else if (selected.value === '40%') {
            feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This would be if there were 48 Rhinos. Double-check: 45 ÷ 120.';
        } else {
            feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This percentage is too high. Calculate: 45 ÷ 120 × 100%.';
        }
    }
}

// Conditional Probability Calculation Check
function checkConditionalCalculation() {
    const selected = document.querySelector('input[name="conditional-calc"]:checked');
    const feedback = document.getElementById('conditional-calc-feedback');
    
    if (!selected) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(234, 88, 12, 0.2)';
        feedback.innerHTML = '⚠️ Please select an answer.';
        return;
    }
    
    feedback.style.display = 'block';
    
    if (selected.value === '40%') {
        feedback.style.background = 'rgba(22, 163, 74, 0.2)';
        feedback.innerHTML = '✅ <span class="text-emphasis">Outstanding!</span> Death World Artillery: 100 ÷ 250 × 100% = 40%. This conditional distribution reveals that Death Worlds have a higher concentration of artillery specialists due to harsh environments.';
    } else {
        feedback.style.background = 'rgba(139, 0, 0, 0.2)';
        if (selected.value === '25%') {
            feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This would be 1/4. Calculate: 100 ÷ 250 × 100%.';
        } else if (selected.value === '35%') {
            feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> Close, but check: 100 ÷ 250 = 0.40, not 0.35.';
        } else {
            feedback.innerHTML = '❌ <span class="text-emphasis">Incorrect.</span> This percentage is too high. Calculate: 100 ÷ 250 × 100%.';
        }
    }
}

// Association Classification Check
function checkAssociationClassification() {
    const answer1 = document.querySelector('input[name="scenario-1"]:checked');
    const answer2 = document.querySelector('input[name="scenario-2"]:checked');
    const answer3 = document.querySelector('input[name="scenario-3"]:checked');
    const feedback = document.getElementById('association-feedback');
    
    if (!answer1 || !answer2 || !answer3) {
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(234, 88, 12, 0.2)';
        feedback.innerHTML = '⚠️ Please answer all scenarios.';
        return;
    }
    
    feedback.style.display = 'block';
    
    const correct1 = answer1.value === 'associated';
    const correct2 = answer2.value === 'independent';
    const correct3 = answer3.value === 'independent';
    
    if (correct1 && correct2 && correct3) {
        feedback.style.background = 'rgba(22, 163, 74, 0.2)';
        feedback.innerHTML = '✅ <span class="text-emphasis">Perfect Strategic Analysis!</span> A) Planet type affects combat roles (associated). B) Identical distributions = independence. C) Eye color has no logical connection to combat effectiveness (independent).';
    } else {
        feedback.style.background = 'rgba(139, 0, 0, 0.2)';
        let explanation = '❌ <span class="text-key">Review your classifications:</span><br>';
        if (!correct1) explanation += '• A: Different planet types produce different combat role distributions - this is association<br>';
        if (!correct2) explanation += '• B: When all groups have identical distributions, variables are independent<br>';
        if (!correct3) explanation += '• C: Physical traits like eye color don\'t affect combat ability - independence<br>';
        feedback.innerHTML = explanation;
    }
}

// Generic function to show feedback
function showFeedback(elementId, success, message) {
    const feedback = document.getElementById(elementId);
    if (feedback) {
        feedback.style.display = 'block';
        feedback.style.background = success ? 'rgba(22, 163, 74, 0.2)' : 'rgba(139, 0, 0, 0.2)';
        feedback.innerHTML = message;
    }
}

// Generic function to validate numerical input
function validateNumericalInput(value, expected, tolerance = 0.01) {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return false;
    return Math.abs(numValue - expected) < tolerance;
}

// Add any additional interactive functions here as needed
console.log('Interactive functions loaded successfully');
