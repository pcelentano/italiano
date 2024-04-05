// Hardcoded present tense conjugations for the verbs "avere", "essere", and "fare"

let verbConjugations = {};

// Function to parse query string and get all options
function parseQueryString() {
    return new URLSearchParams(window.location.search).getAll('option');
}

// Function to construct file path based on option
// Function to fetch JSON file
async function fetchJSONFile(filePath) {
    try {
        const response = await fetch(filePath);
        return await response.json();
    } catch (error) {
        console.error('Error fetching JSON file:', error);
        return null;
    }
}

// Load JSON files based on query string options
const options = parseQueryString();
const promises = options.map(option => {
    return fetchJSONFile(`${option}.json`);
});

Promise.all(promises)
    .then(results => {
        results.forEach(result => {
            if (result) {
                console.log(result);
                // Merge the result into verbConjugations
                Object.assign(verbConjugations, result);
            }
        });
        displayRandomVerb();
    })
    .catch(error => {
        console.error('Error loading JSON files:', error);
    });


let currentState = {}
let totalCount = 0;

// Function to display a random verb for conjugation
function displayRandomVerb() {
    const verbs = Object.keys(verbConjugations);
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const conjugations = verbConjugations[randomVerb];
    const pronouns = Object.keys(conjugations);
    const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

    const {conjugation, example, score} = conjugations[randomPronoun];

    if (score >= 3) displayRandomVerb()

    document.getElementById('verbDisplay').textContent = `Conjugate "${randomVerb}" for "${randomPronoun}"`;
    // Clear input field and feedback display
    document.getElementById('answerInput').value = '';
    document.getElementById('errorDisplay').textContent = '';
    document.getElementById('successDisplay').textContent = '';

    currentState.randomVerb = randomVerb;
    currentState.randomPronoun = randomPronoun;
    currentState.correctAnswer = conjugation;
    currentState.example = example;

    totalCount++;
}

// Function to check the conjugated answer
function checkAnswer() {
    const userAnswer = removeAccents(document.getElementById('answerInput').value.trim().toLowerCase());
    const correctAnswer = removeAccents(currentState.correctAnswer.toLowerCase());

    if (userAnswer === correctAnswer) {
        document.getElementById('successDisplay').textContent = `Correct! ${currentState.example}`;
        verbConjugations[currentState.randomVerb][currentState.randomPronoun].score++;

        // You can add scoring mechanism here if needed
    } else {
        document.getElementById('errorDisplay').textContent = `Incorrect. The correct answer is "${currentState.correctAnswer}. ${currentState.example}".`;
        verbConjugations[currentState.randomVerb][currentState.randomPronoun].score--;
    }

    // Add a 2-second delay
    setTimeout(() => {
        // Call displayRandomVerb() again
        displayRandomVerb();
    }, 2000); // 2000 milliseconds = 2 seconds
}


// Event listener for the submit button
document.getElementById('submitBtn').addEventListener('click', checkAnswer);

// Function to check if the pressed key is Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') checkAnswer();
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Event listener for keypress on the input field
document.getElementById('answerInput').addEventListener('keypress', handleKeyPress);

// Function to display all verb conjugations
function displayAllConjugations() {
    const conjugationsContainer = document.getElementById('conjugationsContainer');
    conjugationsContainer.innerHTML = ''; // Clear previous content

    // Iterate over each verb and its conjugations
    Object.keys(verbConjugations).forEach(verb => {
        const verbDiv = document.createElement('div');
        verbDiv.classList.add('verbTable');

        const table = document.createElement('table');
        const caption = document.createElement('caption');
        caption.textContent = verb;
        table.appendChild(caption);

        // Iterate over each pronoun and its conjugation
        Object.entries(verbConjugations[verb]).forEach(([pronoun, {conjugation, example, score}]) => {
            const row = document.createElement('tr');

            const pronounCell = document.createElement('td');
            pronounCell.textContent = pronoun;
            row.appendChild(pronounCell);

            const conjugationCell = document.createElement('td');
            conjugationCell.textContent = conjugation;
            row.appendChild(conjugationCell);

            let colorClass = '';

            if (score <= -2) {
                colorClass = 'very-poor'; // Worst
            } else if (score < 0) {
                colorClass = 'poor'; // Worse than average
            } else if (score < 1) {
                colorClass = 'average'; // Average
            } else if (score < 3) {
                colorClass = 'good'; // Better than average
            } else {
                colorClass = 'excellent'; // Way better than average
            }

            row.classList.add(colorClass);

            // const exampleCell = document.createElement('td');
            // exampleCell.textContent = example;
            // row.appendChild(exampleCell);

            table.appendChild(row);
        });

        verbDiv.appendChild(table);
        conjugationsContainer.appendChild(verbDiv);
    });
}

// Event listener for the "Display All Conjugations" button
document.getElementById('displayAllBtn').addEventListener('click', displayAllConjugations);
