const prompt = require("readline-sync");

let moneyAwarded = [500, 1000, 5000, 10000, 20000, 50000, 100000, 250000, 500000, 1000000];













function nextQuestion(question){
    let currentQuestion;
    let randomQuestion = Math.floor(Math.random() * 10) + 1;
    while(question.used[randomQuestion] == true){
        randomQuestion = Math.floor(Math.random() * 10) + 1;
    }
    currentQuestion = randomQuestion
    question.used[randomQuestion] = true
    return randomQuestion 
}