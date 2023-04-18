const nomes = [ "Shukaku", "Matatabi", "Isobu", "Son Gokū", "Kokuō", "Saiken", "Chōmei", "Gyūki" ];

async function jogar() {
  const bijuusAleatorias = shuffle(nomes)
  const quatroBijuus = getBijuu(bijuusAleatorias)
  console.log(quatroBijuus)
  const primeiraBijuu = quatroBijuus[0]
  console.log(primeiraBijuu)
  getBtn(quatroBijuus)
  getInfo(primeiraBijuu)
}

function getBijuu(aleatorio) {
  return aleatorio.splice(0, 4)
}

function shuffle(unshuffled) {
  const shuffled = unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  
  return shuffled;
}

function getInfo(bijuu) {
  const url = "https://api.narutodb.xyz/tailed-beast/search?name=";

  fetch(url + bijuu)
        .then(response => response.json())
            .then(data => {
              personagem = data;
              
              imgBijuu = personagem.images[0];
              imgBijuu = imgBijuu.substring(0, imgBijuu.length - 14)

              console.log(imgBijuu, personagem.name)
              card = `
              <div id="card">
                <img src="${imgBijuu}" class="imagemBijuu" crossorigin="anonymous" referrerPolicy="no-referrer">
                <p class="pergunta"> Qual o nome dessa bijuu? </p>
              </div>`;

              bijuucard.innerHTML = card;
            })
        .catch(err =>console.log(err))
}

function getBtn(array) {
  const btnAleatorio = shuffle(array)
  console.log(btnAleatorio)
  const opcoesHTML = []
  for (var i in btnAleatorio) {
    const botao = `<button data-name="${btnAleatorio[i]}" class="opcaoBijuu color">${btnAleatorio[i]}</button>`;
    opcoesHTML.push(botao)
    opcoes.innerHTML = opcoesHTML;
  }
}