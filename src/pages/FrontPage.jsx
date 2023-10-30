






import { Link } from "react-router-dom";
import logocow from "../assets/logocowboy.png";
import Profile from "../components/Profile";







export default function FrontPage() {
    return (
        <section>

            <Profile />
            <h1 className="movie-header">Movie Magnet</h1>
            <hr className="line" />
            <p className="movie-tekst">Din filmanbefaling er kun <strong> et klik væk!</strong></p>
            <p className="movie-tekst-to">Klar til at komme igang?</p>
            <img src={logocow} alt="Billede af logo" className="logo-cowboy"/>
            
            <div className="buttons-front">
            <Link to="/swipe" className="button-front">Swipe</Link>
            <Link to="/findfilm" className="button-front">Find Film</Link>
            </div>
        </section>
    )
}








