const form = document.getElementById('agenda-de-contatos'),
  corpoTabela = document.querySelector('tbody'),
  linhas = [];

corpoTabela.onclick=ev=>{
 if (ev.target.tagName=="BUTTON"){
   const tr=ev.target.closest("tr");
   linhas.splice(tr.rowIndex-1,1);
   tr.remove();
   console.log(linhas);
}}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputNomeContato = document.getElementById('nome-do-contato');
  const inputNumeroTelefone = document.getElementById('numero-de-telefone');

  if (linhas.includes(inputNumeroTelefone.value)) {
    alert(`Número: ${inputNumeroTelefone.value} já foi inserido`);
  } else {
    linhas.push(inputNumeroTelefone.value);
    corpoTabela.insertAdjacentHTML("beforeend", `<tr>
    <td>${inputNomeContato.value}</td>
    <td>${inputNumeroTelefone.value}</td>
    <td><button class='excluir'>Remover</button></td>
   </tr>`);
   console.log(linhas);
  }
})