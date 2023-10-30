

import moviemagnet from "../assets/moviemagnett.png";
import moviemagmey from "../assets/moviemagmey.png";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
    <section>
      <div className="container">
        
        <img src={moviemagnet} alt="Billede af movie" className="movie-picture" />
        <img src={moviemagmey} alt="Billede af logo" className="moviemagmey-picture" />
      
       
        <Link to="/front" className="button-link">Udforsk Appen<span className="arrow-button">&#8594;</span></Link>
        
        

      </div>
    </section>
    )
}