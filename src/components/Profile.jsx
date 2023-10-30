




import { Link } from "react-router-dom";
import profile from "../assets/Profilbillede.png";


export default function Profile() {
        return (
            <div>
            <Link to="/profile"> {/* Tilføj dette Link omkring billedet */}
                <img src={profile} alt="Billede af profil" className="profil-picture" />
            </Link>
                
            </div>
    
        )
    
    }


