

const Home: React.FC = () => {

  return (
    <>
    <style>{`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --green: #00FF00;
    --pink: #FF00FF;
    --cyan: #00FFFF;
    --red: #FF4500;
    --yellow: #FFD700;
    --clr-bg: hsl(320, 14%, 8%);
    --pixo:var(--pink);

    --offpink: #f062f0bd;
}

  


.caixa{
    background-color: var(--clr-bg);
}

@font-face {
    font-family: 'Cyber Sport';
    src: url("/frontend/font/Cyber Sport.ttf") format('truetype');
}

@font-face {
    font-family:"Pixo Reto Regular";
    src:url("PixoReto-Regular.eot?") format("eot"),url("PixoReto-Regular.woff") format("woff"),url("PixoReto-Regular.ttf") format("truetype"),url("PixoReto-Regular.svg#PixoReto-Regular") format("svg");
    font-weight:normal;
    font-style:normal;
}

@font-face {
    font-family: "BabaPro";
    src: url("/frontend/font/BabaPro-Bold.ttf") format("truetype");
}
    footer{
    width: 100%;
    height: 5vw;
    margin-top: 0.5vh;
}
    header{
    width: 100%;
    height: 5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0.2%;
}


nav{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.2%;
    background-color: var(--clr-bg);
    padding: 0 1% 0 1%;
}

nav a{
    color: var(--pixo);
    /* text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor; */
    font-family: "BabaPro";
    font-size: 2rem;
    text-decoration: none;
}

nav a:hover{
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
}

.headerBox{
    width: 100%;
    height: 100%;
    background-color: var(--clr-bg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.navBox{
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 2%;
}

.logoBox{
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logoBox a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10% 10% 10% 10%;
}

.headerImg{
    width: 100%;
    height: 100%;
}

.headerImg:hover{
    -webkit-filter: drop-shadow(0 0 10px var(--offpink));
    filter: drop-shadow(0 0 10px var(--offpink));
}
    .neon-box {
    font-size: 1.7vw;

    display: inline-block;
    text-decoration: none;
    text-align: center;
    justify-content: center;

    
    color: var(--pixo);
    border: var(--pixo) 0.125em solid;
    border-radius: 0.25em;

  
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  
    box-shadow: inset 0 0 0.5em 0 var(--pixo), 0 0 0.5em 0 var(--pixo);
  
    position: relative;

    width: 5vw;
    height: 100%;

    padding: 1vw 0;

    letter-spacing: 0.1rem;

    text-orientation: upright;
    writing-mode: vertical-lr;

  }
  

  .neon-box::-webkit-scrollbar {
    display: none !important;
  }

  .neon-box-horizontal {
    font-size: 2vw;

    display: inline-block;
    text-decoration: none;
    text-align: center;

    overflow-y: scroll;
    
    color: var(--pixo);
    border: var(--pixo) 0.125em solid;
    border-radius: 0.25em;

    
    text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  
    box-shadow: inset 0 0 0.5em 0 var(--pixo), 0 0 0.5em 0 var(--pixo);
  
    position: relative;

    width: 100%;
    height: 12vh;


  }

  .neon-box-horizontal::-webkit-scrollbar {
    display: none !important;
  }
    #pageCenter{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    align-items: center;
    justify-content: center;
    background-color: var(--clr-bg);
    background-image: url("/frontend/imgs/bg (3).png");
    background-size: cover;
    padding: 1%;
}

header{
    width: 100%;
    height: 5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0.2%;
}

#logoContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
}

.mainImg{
    height: 80%;
    width: auto;
    max-width: 100%;
    max-height: 100vw;
}

.confira{
    padding-top: 2vh;
    font-size: 5rem;
    font-family: "Pixo Reto Regular";
}


.title{
    font-size: 5em;
    font-family: "BabaPro";
}


`}
    </style>
      {/* Header */}
      <header>
        <nav>
          <div className="logoBox">
            <a href="../frontpage/index.html">
              <img
                src="/imgs/logo.png"
                className="headerImg"
                alt="logo da FASC"
              />
            </a>
          </div>

          <div className="navBox">
            <a href="/artistas">Artistas</a>
            <a href="/palcos">Palcos</a>
            <a href="/artists">Shows</a>
          </div>
        </nav>
      </header>

      <div id="pageCenter">
        <div className="neon-box">
          <h1>fasc2k77</h1>
        </div>
        <div id="logoContainer">
          <img
            src="/imgs/logo.png"
            className="mainImg"
            alt="logo da FASC"
          />
        </div>
        <div className="neon-box">
          <h1>fasc2k77</h1>
        </div>
      </div>

      <footer></footer>

        </>
  );
};

export default Home;
