


import { Link } from "react-router-dom";
import profile from "../assets/Profilbillede.png";
import logonohat from "../assets/logonohat.png";

export default function FilmPage() {
    return (
        <section>

            <div className="navigation-profile">
                <Link to="/front"><span className="back-arrow">&#8594;</span></Link>
                <img src={profile} alt="Billede af profil" className="profil-picture-to" />
            </div>

            <h1 className="movie-header">Find Film</h1>
            <p className="film-tekst">Er du i humør til at lade tilfældet råde eller foretrækker du at tilpasse dit filmvalg. <br /><br />Vælg mellem vores to spændende muligheder:</p>
            
            <img src={logonohat} alt="Billede af logo" className="logo-nohat"/>

            <div className="buttons-front">
            <Link to="/" className="button-front">Prøv Lykken</Link>
            <Link to="/" className="button-front">Tilpas Film</Link>
            </div>

        </section>
    )
}