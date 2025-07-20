// Chapter Template for Easy Lesson Creation
// Copy this file and modify for new chapters

const CHAPTER_TEMPLATE = {
    title: "Chapter Title Here",
    description: "Brief description of what students will learn",
    estimatedTime: "XX minutes",
    steps: [
        {
            title: "Step 1 Title",
            content: `
                <h3>Main Heading</h3>
                <p>Introduction paragraph with Warhammer 40K context...</p>
                
                <div class="example-box">
                    <h4>🏛️ Imperial Example</h4>
                    <p>Concrete example using 40K universe...</p>
                </div>
                
                <div class="formula-box">
                    <strong>Key Formula or Concept:</strong><br>
                    Mathematical formula or important rule
                </div>
                
                <p>Additional explanation and context...</p>
            `,
            interactive: null // or interactive object
        },
        {
            title: "Step 2 Title",
            content: `
                <!-- Content here -->
            `,
            interactive: {
                type: "classification", // or "calculation", "bias-identification", "simulation"
                question: "Interactive question here",
                // Additional properties based on type
                items: [
                    { text: "Item to classify", type: "Correct Category" }
                ]
            }
        }
        // Add more steps as needed
    ]
};

// Available Interactive Types:
const INTERACTIVE_TYPES = {
    classification: {
        description: "Students classify items into categories",
        properties: {
            question: "String - The question to ask",
            items: "Array - Objects with {text, type} properties"
        }
    },
    calculation: {
        description: "Students perform mathematical calculations",
        properties: {
            question: "String - The problem to solve",
            data: "Array or Object - Data to work with",
            answers: "Object - Expected answers with tolerances"
        }
    },
    "bias-identification": {
        description: "Students identify types of bias in scenarios",
        properties: {
            scenarios: "Array - Objects with {text, bias, explanation}"
        }
    },
    simulation: {
        description: "Interactive simulations or experiments",
        properties: {
            type: "String - Type of simulation",
            parameters: "Object - Simulation parameters"
        }
    }
};

// Export for reference
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTER_TEMPLATE, INTERACTIVE_TYPES };
}
