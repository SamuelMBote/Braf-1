const produtos = document.querySelectorAll('.produtos .produtos-container div');
produtos.forEach((produto) => {
  let classe = produto.querySelector('h2').innerText.toLowerCase();
  produto.classList.add(classe);
  console.log(classe);
});
//console.log(produtos);
