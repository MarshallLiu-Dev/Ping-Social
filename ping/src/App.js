import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">Ping</a>
        <nav>
          <a href="http://">Login</a>
          <a href="http://">Registra-se</a>
        </nav>
      </header>
      {/* //post area incio */}
      <div className="post">
        <div className="image">
          <img src="https://pbs.twimg.com/media/F4JbKHTWgAARUYu?format=jpg&name=medium" alt="" />
        </div>
        <div className="texts">
          <h2>This week's shrine is Flip-Flop, Made for This, A Nurse's Calling and Stridor.</h2>
          <p className="info">
            <a className="author">Marshall.Liu</a>
            <time>2023-24-08 15:30</time>
          </p>
          <p className="summary">#DeadbyDaylight is an asymmetrical multiplayer horror game by
            @Behaviour. Now available everywhere.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://www.riotgames.com/darkroom/1000/00063c3a42518a7b81a3f6cca2ee4539:f69068fd2ebbc020b7e95aeb8f28469a/vct-r2la-header.png" alt="" />
        </div>
        <div className="texts">
          <h2>FIM DE SEMANA DO CHAMPIONS: REVELAÇÃO DE MAPA, FAN FEST E GRANDE FINAL</h2>
          <p className="info">
            <a className="author">Marshall.Liu</a>
            <time>2023-24-08 15:30</time>
          </p>
          <p className="summary">Um campeão mundial será coroado no Kia Forum, quando as estrelas do VALORANT se reunirem neste final de semana em Los Angeles</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="https://pbs.twimg.com/media/F3yToeTWUAAnz_L?format=webp&name=small" alt="" />
        </div>
        <div className="texts">
          <h2>Thank you for the cover! Listen to our latest song 'Better Things' on </h2>
          <p className="info">
            <a className="author">Marshall.Liu</a>
            <time>2023-24-08 15:30</time>
          </p>
          <p className="summary">#NewMusicDaily playlist on
            @AppleMusic
            !🏝️</p>
        </div>
      </div>
      {/* //post area fim  */}
    </main>
  );
}

export default App;
