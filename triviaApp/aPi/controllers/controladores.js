export async function fetchTriviaQuestions(categoria, dificultad, tipo) {
  const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificultad}&type=${tipo}`);
  const data = await response.json();
  return data.results;
}
