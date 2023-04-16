const nomes = [ "Shukaku", "Matatabi", "Isobu", "Son Gokū", "Kokuō", "Saiken", "Chōmei", "Gyūki", "Kurama" ]

function sortearBijuu() {
  const bijuuEscolhida = nomes[Math.floor(nomes.length * Math.random())];
  console.log("Essa é a bijuu escolhida", bijuuEscolhida)
  sortearOpcoes(bijuuEscolhida)
  pegarInfo(bijuuEscolhida)
}

function sortearOpcoes(bijuu) {
  const nomesUsados = []
  nomesUsados.push(bijuu)
  console.log('Array nomes usados',nomesUsados)

  var index = nomes.indexOf(bijuu)
  nomes.splice(index, 1)
  console.log('Array com nomes nao usados', nomes)
  
  for (var i = 0; i < 3; i++) {
    const besta = nomes[Math.floor(nomes.length * Math.random())]
    var x = nomes.indexOf(besta)
    nomes.splice(x, 1)
    nomesUsados.push(besta)
    console.log(nomesUsados)
  }
}

function pegarInfo (bijuu) {
  const btn = document.getElementById('btnComecar').values;
  const url = "https://api.narutodb.xyz/tailed-beast/search?name=";

  console.log("Pegando foto e nome da: ", bijuu)

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

