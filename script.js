// Hardcoded present tense conjugations for the verbs "avere", "essere", and "fare"
const verbConjugations = {
    avere: {
        io: {conjugation: 'ho', example: 'Io ho un cane.', score: 0},
        tu: {conjugation: 'hai', example: 'Tu hai fame.', score: 0},
        lui_lei: {conjugation: 'ha', example: 'Lui ha una macchina.', score: 0},
        noi: {conjugation: 'abbiamo', example: 'Noi abbiamo una casa.', score: 0},
        voi: {conjugation: 'avete', example: 'Voi avete una bicicletta.', score: 0},
        loro: {conjugation: 'hanno', example: 'Loro hanno dei libri.', score: 0}
    },
    essere: {
        io: {conjugation: 'sono', example: 'Io sono felice.', score: 0},
        tu: {conjugation: 'sei', example: 'Tu sei italiano.', score: 0},
        lui_lei: {conjugation: 'è', example: 'Lui è stanco.', score: 0},
        noi: {conjugation: 'siamo', example: 'Noi siamo in ritardo.', score: 0},
        voi: {conjugation: 'siete', example: 'Voi siete amici.', score: 0},
        loro: {conjugation: 'sono', example: 'Loro sono studenti.', score: 0}
    },
    fare: {
        io: {conjugation: 'faccio', example: 'Io faccio sport.', score: 0},
        tu: {conjugation: 'fai', example: 'Tu fai la spesa.', score: 0},
        lui_lei: {conjugation: 'fa', example: 'Lei fa una torta.', score: 0},
        noi: {conjugation: 'facciamo', example: 'Noi facciamo una passeggiata.', score: 0},
        voi: {conjugation: 'fate', example: 'Voi fate jogging.', score: 0},
        loro: {conjugation: 'fanno', example: 'Loro fanno shopping.', score: 0}
    },
    andare: {
        io: {conjugation: 'vado', example: 'Io vado al lavoro.', score: 0},
        tu: {conjugation: 'vai', example: 'Tu vai al cinema.', score: 0},
        lui_lei: {conjugation: 'va', example: 'Lui va al parco.', score: 0},
        noi: {conjugation: 'andiamo', example: 'Noi andiamo al mare.', score: 0},
        voi: {conjugation: 'andate', example: 'Voi andate a scuola.', score: 0},
        loro: {conjugation: 'vanno', example: 'Loro vanno in vacanza.', score: 0}
    },
    venire: {
        io: {conjugation: 'vengo', example: 'Io vengo al cinema.', score: 0},
        tu: {conjugation: 'vieni', example: 'Tu vieni con me.', score: 0},
        lui_lei: {conjugation: 'viene', example: 'Lui viene a casa mia.', score: 0},
        noi: {conjugation: 'veniamo', example: 'Noi veniamo in ritardo.', score: 0},
        voi: {conjugation: 'venite', example: 'Voi venite con noi.', score: 0},
        loro: {conjugation: 'vengono', example: 'Loro vengono all\'evento.', score: 0}
    },
    uscire: {
        io: {conjugation: 'esco', example: 'Io esco con gli amici.', score: 0},
        tu: {conjugation: 'esci', example: 'Tu esci di casa.', score: 0},
        lui_lei: {conjugation: 'esce', example: 'Lei esce dall\'ufficio.', score: 0},
        noi: {conjugation: 'usciamo', example: 'Noi usciamo per una passeggiata.', score: 0},
        voi: {conjugation: 'uscite', example: 'Voi uscite stasera.', score: 0},
        loro: {conjugation: 'escono', example: 'Loro escono a cena.', score: 0}
    },
    volere: {
        io: {conjugation: 'voglio', example: 'Io voglio imparare l\'italiano.', score: 0},
        tu: {conjugation: 'vuoi', example: 'Tu vuoi una pizza.', score: 0},
        lui_lei: {conjugation: 'vuole', example: 'Lei vuole una risposta.', score: 0},
        noi: {conjugation: 'vogliamo', example: 'Noi vogliamo viaggiare.', score: 0},
        voi: {conjugation: 'volete', example: 'Voi volete andare al cinema.', score: 0},
        loro: {conjugation: 'vogliono', example: 'Loro vogliono festeggiare.', score: 0}
    },
    potere: {
        io: {conjugation: 'posso', example: 'Io posso aiutarti.', score: 0},
        tu: {conjugation: 'puoi', example: 'Tu puoi fare tutto.', score: 0},
        lui_lei: {conjugation: 'può', example: 'Lui può venire domani.', score: 0},
        noi: {conjugation: 'possiamo', example: 'Noi possiamo andare insieme.', score: 0},
        voi: {conjugation: 'potete', example: 'Voi potete partecipare.', score: 0},
        loro: {conjugation: 'possono', example: 'Loro possono mangiare.', score: 0}
    },
    dovere: {
        io: {conjugation: 'devo', example: 'Io devo studiare.', score: 0},
        tu: {conjugation: 'devi', example: 'Tu devi lavorare.', score: 0},
        lui_lei: {conjugation: 'deve', example: 'Lui deve partire presto.', score: 0},
        noi: {conjugation: 'dobbiamo', example: 'Noi dobbiamo prepararci.', score: 0},
        voi: {conjugation: 'dovete', example: 'Voi dovete telefonare.', score: 0},
        loro: {conjugation: 'devono', example: 'Loro devono fare i compiti.', score: 0}
    },
    sapere: {
        io: {conjugation: 'so', example: 'Io so nuotare.', score: 0},
        tu: {conjugation: 'sai', example: 'Tu sai parlare italiano.', score: 0},
        lui_lei: {conjugation: 'sa', example: 'Lei sa suonare il pianoforte.', score: 0},
        noi: {conjugation: 'sappiamo', example: 'Noi sappiamo cucinare.', score: 0},
        voi: {conjugation: 'sapete', example: 'Voi sapete la risposta.', score: 0},
        loro: {conjugation: 'sanno', example: 'Loro sanno ballare.', score: 0}
    },
    dire: {
        io: {conjugation: 'dico', example: 'Io dico sempre la verità.', score: 0},
        tu: {conjugation: 'dici', example: 'Tu dici delle bugie.', score: 0},
        lui_lei: {conjugation: 'dice', example: 'Lei dice sempre "ciao".', score: 0},
        noi: {conjugation: 'diciamo', example: 'Noi diciamo le nostre opinioni.', score: 0},
        voi: {conjugation: 'dite', example: 'Voi dite cose interessanti.', score: 0},
        loro: {conjugation: 'dicono', example: 'Loro dicono "grazie".', score: 0}
    },
    bere: {
        io: {conjugation: 'bevo', example: 'Io bevo acqua.', score: 0},
        tu: {conjugation: 'bevi', example: 'Tu bevi il caffè.', score: 0},
        lui_lei: {conjugation: 'beve', example: 'Lui beve il succo.', score: 0},
        noi: {conjugation: 'beviamo', example: 'Noi beviamo vino.', score: 0},
        voi: {conjugation: 'bevete', example: 'Voi bevete la birra.', score: 0},
        loro: {conjugation: 'bevono', example: 'Loro bevono il tè.', score: 0}
    }
    // Add other verbs with conjugations and example sentences similarly...
};


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
            } else if (score < 0 ) {
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


// Display a random verb when the page loads
displayRandomVerb();
