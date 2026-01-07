let media = 0;

const botao = document.querySelector("button");

botao.onclick = function () {
  const span = document.querySelector("span");
  span.innerText = media;
};

function buscarDados() {
  const url = "./data.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tabela = document.querySelector("table");

      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const valor = item.score;
        const categoria = item.category;
        const icone = item.icon;
        const linha = document.createElement("tr");
        const colunaCategoria = document.createElement("td");
        const imagem = document.createElement("img");
        const colunaValor = document.createElement("td");

        colunaValor.innerText = `${valor} / 100`;
        imagem.src = icone;
        imagem.alt = "icone";
        colunaCategoria.appendChild(imagem);
        colunaCategoria.innerHTML += categoria;
        linha.appendChild(colunaCategoria);
        linha.appendChild(colunaValor);
        tabela.appendChild(linha);
        media += valor;
      }

      media /= data.length;
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

buscarDados();
