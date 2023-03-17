
const quizData = [
    {
        question: "1. What will happen, if the following JavaScript code is executed?",
        a: "An error is displayed",
        b: "An exception is thrown",
        c: "The values of count variable are logged or stored in a particular location or storage",
        d: "The value of count from 0 to 9 is displayed in the console",
        correct: "c",
    },
    {
        question: "2. Which of the following is the correct output for the following JavaScript code:",
        a: "9",
        b: "0",
        c: "8",
        d: "Undefined",
        correct: "c",
    },
    {
        question: "3.  Which of the following variables takes precedence over the others if the names are the same?",
        a: "Global variable",
        b: "The local element",
        c: "The two of the above",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "4. Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        correct: "d",
    },
    {
        question: "5. Which of the following type of a variable is volatile?",
        a: " Mutable variable",
        b: " Dynamic variable",
        c: " Volatile variable",
        d: " mmutable variable",
        correct: "a",
    },
    {
        question: "6. Which of the following option is used as hexadecimal literal beginning?",
        a: "00",
        b: "0x",
        c: "0X",
        d: "Both",
        correct: "d",
    },
    {
        question: "7. 20) In the JavaScript, which one of the following is not considered as an error:",
        a: "Syntax error",
        b: "Missing of semicolons",
        c: "Division by zero",
        d: "Missing of Bracket",
        correct: "c",
    },
    {
        question: "8. Which of the following number object function returns the value of the number?",
        a: "toString()",
        b: "valueOf()",
        c: "toLocaleString()",
        d: "toPrecision()",
        correct: "d",
    },
    {
        question: "9. See the given code of JavaScript and choose the correct output from the following:",
        a: "Falscompilation error",
        b: "false",
        c: "runtime error",
        d: "truee",
        correct: "d",
    },
    {
        question: "10. What will be the output of the following JavaScript code?",
        a: "True",
        b: "False",
        c: "runtime error",
        d: "compilation error",
        correct: "a",
    },    
    

];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            
<h2 style = " color : white; ">You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="history.go(0)" style = "border-radius: 5px;cursor:pointer;margin-top : 5%;background-color:#fff;color:black;    box-shadow: 1px 1px 15px black;
;height: 50px;width: 250px;font-size: 25px;border: none;">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
        }
    }
});
