


import { Link } from "react-router-dom";
import user from "../assets/Maleuser.png";
import logoside from "../assets/moviemagmeyside.png";
import GhostIcon from "../components/GhostIcon";
import HeartIcon from "../components/HeartIcon";
import ComedyIcon from "../components/ComedyIcon";
import friend from "../assets/Femaleprofile.png";
import MoviesHistory from "../components/MoviesHistory";




export default function ProfilePage() {
    return (
    <section>
      
      <Link to="/front"><span className="back-arrow">&#8594;</span></Link>
      <div className="user-container">
      <img src={user} alt="Billede af bruger" className="user-profile" />
      </div>
      <h1 className="john-text">John</h1>
      <h2 className="titel-text">Casual Watcher</h2>

      <img src={logoside} alt="Billede af logo" className="logo-side" />

      <h3 className="icons-text">Mine Film Magnets</h3>  
      
      <div className="profile-icons">
      <GhostIcon />
      <HeartIcon />
      <ComedyIcon />
      </div>

      <div className="button-magnet-container">
        <Link to="/magnet" className="button-magnet">Opnå Magnets</Link>
      </div>  

      <h3 className="my-friends-text">Mine Venner</h3>
      <div className="friends">
        <div className="brian-friend">
            <img src={user} alt="Billede af bruger" className="friend" />
            <p>Brian</p>
        </div>
        <div className="brian-friend">
            <img src={friend} alt="Billede af bruger" className="friend" />
            <p>Carla</p>
        </div>  
      </div>
      <div className="button-friends-container">
        <Link to="/swipe" className="button-magnet">Tilføj Ven</Link>
      </div>  

      <h3 className="movie-history-text">Filmhistorik</h3>
        <MoviesHistory />
    </section>
    )
}