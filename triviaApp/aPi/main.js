import { buscarTrivia } from "./controllers/controladores.js";

let root = document.getElementById("root");

async function renderData() {
  let trivia = await buscarTrivia();
  let html = "";
  trivia.forEach((pregunta) => {
    let preguntasTrivia = `<div>
                            <span>${pregunta.category}</span>
                            <span>${pregunta.question}</span>
                            <span>${pregunta.correct_answer}</span>
                            <span>${pregunta.incorrect_answers}</span>
                        </div>`;

    html += preguntasTrivia;
  });

  root.innerHTML += html;
}

renderData();
