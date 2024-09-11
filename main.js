//Leonardo Souza e Giovanna Gomes

const objeto = { numeros: [1, 3, 7, 9, -1, 0, 4], qt: 7 };

function gerarTabela() {
  let div = document.querySelector("#teste"); //acha a caixa onde temos que inserir os números

  let table = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");

  div.appendChild(table);
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  let theadRow = document.createElement("tr");
  tableHead.appendChild(theadRow);

  //conteudo da tableHead
  let nome = document.createElement("th");
  let quantidade = document.createElement("th");
  let soma = document.createElement("th");

  theadRow.appendChild(nome);
  theadRow.appendChild(quantidade);
  theadRow.appendChild(soma);

  nome.innerHTML = "Numero";
  quantidade.innerHTML = "Quantidade";
  soma.innerHTML = "Soma";

  //table body
  let sum = objeto.numeros.reduce((sum, number) => sum + number, 0);

  objeto.numeros.forEach((elemento, index) => {
    const actualRow = document.createElement("tr");
    let tbodyDataNumbers = document.createElement("td");
    let tbodyDataQuantity = document.createElement("td");
    let tbodyDataSum = document.createElement("td");

    if (index === Math.round(objeto.numeros.length / 2) - 1) {
      tbodyDataQuantity.innerText = objeto.qt;
      tbodyDataSum.innerText = sum;
    }
    if (index % 2 != 0) {
      actualRow.style.backgroundColor = "#D3D3D3";
    }
    tbodyDataNumbers.innerText = elemento;
    actualRow.appendChild(tbodyDataNumbers);
    actualRow.appendChild(tbodyDataQuantity);
    actualRow.appendChild(tbodyDataSum);
    tableBody.appendChild(actualRow);
  });
}
