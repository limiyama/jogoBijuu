const nomes = [ "Shukaku", "Matatabi", "Isobu", "Son Gokū", "Kokuō", "Saiken", "Chōmei", "Gyūki", "Kurama" ]

function sortearBijuu() {
  const bijuuEscolhida = nomes[Math.floor(nomes.length * Math.random())];
  console.log("Essa é a bijuu escolhida",bijuuEscolhida)
  sortearOpcao(bijuuEscolhida)
}

function sortearOpcao(bijuu) {
  const bijuu1 = nomes[Math.floor(nomes.length * Math.random())]
  console.log("Bijuu inicial teste", bijuu1)

  if (bijuu1 == bijuu) {
    const bijuu1 = nomes[Math.floor(nomes.length * Math.random())]
    console.log("A bijuu inicial era igual a escolhida, trocamo",bijuu1)
  }
  else {
    const bijuu2 = nomes[Math.floor(nomes.length * Math.random())]
    if (bijuu2 == bijuu1) {
      const bijuu2 = nomes[Math.floor(nomes.length * Math.random())]
      console.log("Segunda bijuu", bijuu2)
    }
    else {
      const bijuu3 = nomes[Math.floor(nomes.length * Math.random())]
      if (bijuu3 == bijuu1 || bijuu3 == bijuu2) {
        const bijuu3 = nomes[Math.floor(nomes.length * Math.random())]
        console.log("Terceira bijuu", bijuu3)
      }
      else {
        console.log(bijuu1, bijuu2, bijuu3)      
      }
    }
  }
  
}    

function pegarInfo () {
  const btn = document.getElementById('btnComecar').values;
  const url = "https://api.narutodb.xyz/tailed-beast/search?name=";
  const bijuu = sortearBijuu();

  console.log(bijuu)

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
              </div>`;

              bijuucard.innerHTML = card;
            })
        .catch(err =>console.log(err))
}

