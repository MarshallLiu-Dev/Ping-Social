import './App.css';
export default function Post(){
    return(
        <div className = "post" >
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
      </div >
    );
}