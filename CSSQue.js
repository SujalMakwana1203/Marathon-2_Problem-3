
const quizData = [
    {
        question: "1. CSS stands for",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "2. The property in CSS used to change the background color of an element is",
        a: "bgcolor",
        b: "color",
        c: "background-color",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "3. The CSS property used to control the element's font-size is?",
        a: "text-style",
        b: "text-size",
        c: "font-size",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "4. Which of the following CSS property is used to set the background image of an element?",
        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "5. Which of the following property is used as the shorthand property for the padding properties?",
        a: "padding-left",
        b: "padding-right",
        c: " padding",
        d: " All of the above",
        correct: "c",
    },
    {
        question: "6. The CSS property used to make the text bold is?",
        a: "font-weight : bold",
        b: "weight: bold",
        c: "font: bold",
        d: "style: bold",
        correct: "a",
    },
    {
        question: "7. Are the negative values allowed in padding property?",
        a: "Yes",
        b: "No",
        c: "Can't say",
        d: "May be",
        correct: "b",
    },
    {
        question: "8. The CSS property used to specify the transparency of an element is -",
        a: "opacity",
        b: "filter",
        c: "visibility",
        d: "overlay",
        correct: "a",
    },
    {
        question: "9. Which of the following is used to specify the subscript of text using CSS?",
        a: "vertical-align: sub",
        b: "vertical-align: super",
        c: "vertical-align: subscript",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "10. How to select the elements with the class name ?",
        a: "example",
        b: "#example",
        c: ".example",
        d: "Class example",
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
<button onclick="history.go(0)" style = "border-radius: 5px;
cursor: pointer;
margin-top: 5%;
background-color: #fff;
color: #ff00f0;
box-shadow: 2px 2px 2px #ff00e0;
height: 50px;
width: 250px;
font-size: 25px;
border: 2px solid #ff00e5;">Play Again</button>
` // location.reload() won't work in CodePen for security reasons;
        }
    }
});
