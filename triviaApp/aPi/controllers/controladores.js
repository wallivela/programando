

export async function buscarTrivia() {
    let data = await fetch("https://opentdb.com/api.php?amount=30");
    let dataParceda = await data.json();
    return dataParceda.results;
  }
  
buscarTrivia()
