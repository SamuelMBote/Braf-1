const produtos = document.querySelectorAll('.produtos .produtos-container div');
produtos.forEach((produto) => {
  let classe = produto.querySelector('h2').innerText.toLowerCase();
  produto.classList.add(classe);
  //console.log(classe);
});
//console.log(produtos);

const btnAumentar = document.querySelector('#aumentar');

function aumentarTexto() {
  const p = document.querySelectorAll('p');
  p.forEach((texto) => {
    texto.classList.add('texto-maior');
  });
}
btnAumentar.addEventListener('click', aumentarTexto);
console.log(btnAumentar);
