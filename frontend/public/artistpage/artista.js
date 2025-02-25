const url = "http://localhost:3000/artistas/Pabllo Vittar";
const destino = "";

async function obterArtista() {
  
    const resultado = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const artista = await resultado.json();
    document.getElementById("nomeArtista").innerText = artista.name.toLowerCase();

    var video = document.getElementById("videoArtista");
    video.src = "/backend/videos/" + artista.name + ".mp4";
    
    var imagem = document.getElementById("fotoArtistas");
    console.log(artista.imgUrl);
    imagem.src = artista.imgUrl;

    window.location.href = destino;
    return artista;
  }
  
  function setArtista(x , y){
    url = "http://localhost:3000/artistas/" + x;
    destino = y;
    obterArtista();
  }