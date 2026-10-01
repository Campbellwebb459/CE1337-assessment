const prompt = require("readline-sync");

let moneyAwarded = [500, 1000, 5000, 10000, 20000, 50000, 100000, 250000, 500000, 1000000];

let questionCounter = 0

let currentQuestion = 0

let  questions = [
    { question: "Which of these countries has the largest population?", answerList: "1. Brazil\n2. Nigeria\n3. India\n4. Russia", used: false, correctAnswer: 3},
    { question: "In computing, what does RAM stand for?", answerList: "1. Random Access Memory\n2. Rapid Access Module\n3. Readable Application Memory\n4. Runtime Allocation Mechanism", used: false, correctAnswer: 1},
    { question: "The chemical symbol K represents which element?", answerList: "1. Krypton\n2. Potassium\n3. Calcium\n4. Cobalt", used: false, correctAnswer: 2},
    { question: "Which mountain is the tallest above sea level?", answerList: "1. K2\n2. Kangchenjunga\n3. Mount Everest\n4. Annapurna I", used: false, correctAnswer: 3},
    { question: "What is the smallest prime number?", answerList: "1. Zero\n2. One\n3. Two\n4. Three", used: false, correctAnswer: 3},
    { question: "Which planet has the most moons in our solar system?", answerList: "1. Jupiter\n2. Uranus\n3. Saturn\n4. Neptune", used: false, correctAnswer: 3},
    { question: "The city of Machu Picchu is located in which country?", answerList: "1. Bolivia\n2. Chile\n3. Mexico\n4. Peru", used: false, correctAnswer: 4},
    { question: "In chess, which piece can only move diagonally?", answerList: "1. Knight\n2. Bishop\n3. King\n4. Rook", used: false, correctAnswer: 2},
    { question: "Which metal is a liquid at room temperature?", answerList: "1. Mercury\n2. Lead\n3. Tin\n4. Zinc", used: false, correctAnswer: 1},
    { question: "Which of these words appear on a keyboard exactly once?", answerList: "1. Shift\n2. Enter\n3. Space\n4. Delete", used: false, correctAnswer: 3},];

function nextQuestion(){
    let randomQuestion = Math.floor(Math.random() * 10)

    while(questions.used[randomQuestion] == true){
        randomQuestion = Math.floor(Math.random() * 10)
    }
currentQuestion = randomQuestion

questions.used[randomQuestion] = true
return currentQuestion
}