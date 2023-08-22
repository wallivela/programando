import { fetchTriviaQuestions } from './controllers/controladores.js';

const categoriaSelect = document.getElementById('categoria');
const dificultadSelect = document.getElementById('dificultad');
const tipoSelect = document.getElementById('tipo');
const crearTriviaButton = document.getElementById('crearTrivia');
const triviaContainer = document.getElementById('triviaContainer');
const resultadoContainer = document.getElementById('resultadoContainer');

(async () => {
  const categoriasUnicas = [...new Set(datosDeMuestra.results.map(pregunta => pregunta.category))];
  categoriaSelect.innerHTML = categoriasUnicas.map(categoria => `<option value="${categoria}">${categoria}</option>`).join('');
})();

crearTriviaButton.addEventListener('click', async () => {
  const categoria = categoriaSelect.value;
  const dificultad = dificultadSelect.value;
  const tipo = tipoSelect.value;

  const preguntas = await fetchTriviaQuestions(categoria, dificultad, tipo);

  triviaContainer.innerHTML = '';

  preguntas.forEach((pregunta, index) => {
    const opcionesRespuesta = shuffleArray([...pregunta.incorrect_answers, pregunta.correct_answer]);
    const opcionesHTML = opcionesRespuesta.map(opcion => `<input type="radio" name="respuesta${index}" value="${opcion}">${opcion}<br>`).join('');

    const preguntaHTML = `
      <div class="pregunta">
        <p>${pregunta.question}</p>
        ${opcionesHTML}
      </div>
    `;

    triviaContainer.innerHTML += preguntaHTML;
  });

  const botonEnviar = document.createElement('button');
  botonEnviar.innerText = 'Enviar Respuestas';
  botonEnviar.addEventListener('click', () => {
    const puntaje = calcularPuntaje(preguntas);
    resultadoContainer.innerHTML = '';

    const puntajeContainer = document.createElement('div');
    puntajeContainer.classList.add('puntaje-container'); 
    resultadoContainer.appendChild(puntajeContainer); 

    const puntajeTexto = document.createElement('span');
    puntajeTexto.textContent = 'Puntaje: ';
    puntajeContainer.appendChild(puntajeTexto); 

    const puntajeValor = document.createElement('span'); 
    puntajeValor.id = 'puntajeValor';
    puntajeValor.textContent = puntaje;
    puntajeContainer.appendChild(puntajeValor); 

    animateScoreColor(puntajeContainer); 
  });

  triviaContainer.appendChild(botonEnviar);

 
  const cajasPregunta = document.querySelectorAll('.pregunta');
  cajasPregunta.forEach(caja => {
    caja.addEventListener('mouseenter', () => {
      caja.style.transform = 'scale(1.05)';
    });
    caja.addEventListener('mouseleave', () => {
      caja.style.transform = 'scale(1)';
    });
  });
});

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function calcularPuntaje(preguntas) {
  let puntaje = 0;
  preguntas.forEach((pregunta, index) => {
    const seleccion = document.querySelector(`input[name="respuesta${index}"]:checked`);
    if (seleccion && seleccion.value === pregunta.correct_answer) {
      puntaje += 10;
    }
  });
  return puntaje;
}

function animateScoreColor(element) {
  const colors = ['blue', 'yellow', 'green'];
  let currentColorIndex = 0;

  setInterval(() => {
    element.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }, 500);
}
