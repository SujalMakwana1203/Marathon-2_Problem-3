
const quizData = [
    {
        question: "1. PHP stands for -",
        a: "Hypertext Preprocessor",
        b: "Pretext Hypertext Preprocessor",
        c: "Personal Home Processor",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "2. Who is known as the father of PHP?",
        a: "Drek Kolkevi",
        b: "List Barely",
        c: "Rasmus Lerdrof",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "3. Which of the following is the default file extension of PHP?",
        a: ".php",
        b: ".hphp",
        c: ".xml",
        d: ".html",
        correct: "a",
    },
    {
        question: "4. Which of the following is not a variable scope in PHP?",
        a: "Extern",
        b: "Local",
        c: "Static",
        d: "Global",
        correct: "b",
    },
    {
        question: "5. Which of the following is used to display the output in PHP?",
        a: " echo",
        b: "write",
        c: "print",
        d: "Both (a) and (c)",
        correct: "d",
    },
    {
        question: "6. Which of the following starts with __ (double underscore) in PHP?",
        a: "Inbuilt constants",
        b: "User-defined constants",
        c: "Magic constants",
        d: "Default constants",
        correct: "c",
    },
    {
        question: "7. Which of the following is the correct way to create a function in PHP?",
        a: "Create myFunction()",
        b: "New_function myFunction()",
        c: "function myFunction()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "8. Which of the following PHP function is used to generate unique id?",
        a: "id()",
        b: "mdid()",
        c: "uniqueid()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "9. Which of the following function displays the information about PHP and its configuration?",
        a: "php_info()",
        b: "phpinfo()",
        c: "info()",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "10. Which of the following function is used to find files in PHP?",
        a: "glob()",
        b: "fold()",
        c: "file()",
        d: "None of the above",
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
