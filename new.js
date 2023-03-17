
const quizData = [
    {
        question: "1. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "5. Who is making the Web standards?",
        a: " The World Wide Web Consortium",
        b: " Microsoft",
        c: " Google",
        d: " Mozilla",
        correct: "d",
    },
    {
        question: "6.What is the correct HTML for making a checkbox?",
        a: "<dl>",
        b: "<list>",
        c: "<ol>",
        d: "<ul>",
        correct: "d",
    },
    {
        question: "7. How can you make a bulleted list?",
        a: "<input type=&lbquo;chekbox &lbquo;>",
        b: "<input type=&lbquo;chek &lbquo;>",
        c: "<checkbox>",
        d: "<check>",
        correct: "d",
    },
    {
        question: "8. What is the correct HTML for making a drop-down list?",
        a: "<list>",
        b: "<input type=&lbquo; list &lbquo;>",
        c: "<input type=&lbquo; dropdown &lbquo;>",
        d: "<select>",
        correct: "d",
    },
    {
        question: "9. An <iframe> is used to display a web page within a web page.",
        a: "False",
        b: " There is no such thing as an &lt;iframe&gt;",
        c: "True",
        d: "No One",
        correct: "d",
    },
    {
        question: "10. Which HTML element defines the title of a document?",
        a: "<meta>",
        b: "<title>",
        c: "<head>",
        d: "<body>",
        correct: "d",
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
