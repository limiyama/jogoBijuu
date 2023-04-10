const nomes = [ "Shukaku", "Matatabi", "Isobu", "Son Gokū", "Kokuō", "Saiken", "Chōmei", "Gyūki", "Kurama" ]

function sortearBijuu() {
  const bijuuEscolhida = nomes[Math.floor(nomes.length * Math.random())];
  return bijuuEscolhida;
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