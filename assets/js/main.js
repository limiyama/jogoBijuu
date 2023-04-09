function buscarPersonagem () {
    const url = "https://api.narutodb.xyz/tailed-beast/search?name=";
    const procurar = document.getElementById('btnProcurar').value;
    const nomePersonagem = document.getElementById('pesquisaNome').value;

    console.log(nomePersonagem)
    pegarInfo(url, nomePersonagem)
}

function pegarInfo(url, nomePersonagem) {
    fetch(url + nomePersonagem)
        .then(response => response.json())
            .then(data => {
                personagem = data;
                imgBijuu = personagem.images[1];
                imgBijuu = imgBijuu.substring(0, imgBijuu.length - 14)
                nameBijuu = personagem.name
            })
        .catch(err =>console.log(err))
}

window.getPokeData = async function() {
    const bijuu = await getBijuu();
    const bijuuAleatoria = sortearBijuu();
    console.log(bijuuAleatoria)
    //const chute = document.getElementById('tentativa').values;
    //const [ firstPokemon ] = pokemonChoices;
    //const imagem = getBijuuImg(bijuuAleatoria);

   // return { 
     // pokemonChoices: shuffle(pokemonChoices),
     // correct: {
    //    image,
    //    name: firstPokemon.name,
    //  }
   // };
  };
  
  async function getBijuu() {
    const res = await fetch('https://api.narutodb.xyz/tailed-beast');
    const bijuu = await res.json();
    
    return bijuu;
  }
  
  function sortearBijuu() {
    const nomes = [ Shukaku, Matatabi, Isobu, Son Gokū, Kokuō, Saiken, Chōmei, Gyūki, Kurama ]
    const bijuuEscolhida = nomes[Math.floor(nomes.length * Math.random())];
    console.log(bijuuEscolhida)
  }
  

//  function get4Pokemon(randomPokemon) {
 //   return randomPokemon.splice(0, 4);
//  }
