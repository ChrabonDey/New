const fs = require('fs');

const concepts = [
    "Closures", "Hoisting", "Prototypes", "Async/Await", "Promises", 
    "Execution Context", "Event Loop", "Scope Chain", "Call Stack", "Pure Functions"
];

const patterns = [
    (c) => `// Learning ${c}\nfunction demo() {\n  console.log("Exploring ${c} concept");\n}\ndemo();`,
    (c) => `// ${c} Example\nconst data = { concept: "${c}", level: "Advanced" };\nconsole.log(data);`,
    (c) => `// Deep Dive into ${c}\nclass Concept { constructor() { this.name = "${c}"; } }\nnew Concept();`
];

function generateRandomCode() {
    const randomConcept = concepts[Math.floor(Math.random() * concepts.length)];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    const code = randomPattern(randomConcept);
    
    const filename = `daily-js-${Date.now()}.js`;
    fs.writeFileSync(filename, code);
    console.log(`${filename} created!`);
}

generateRandomCode();