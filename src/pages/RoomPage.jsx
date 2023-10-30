




import { Link } from "react-router-dom";

import Cooklogo from "../assets/cookmagney.png";
import Profile from "../components/Profile";


export default function RoomPage() {
    return (
        <section>

            <Profile />
            
            
            <p>1. Tryk på knappen inviter til rum (det vil automatisk kopiere linket).</p>
            <p>2. Inviter personen ved at sende linket.</p>
            <p>3. Når personen deltager i rummet trykker du på start rum.</p>
            <p>4. Nu mangler i bare at blive enige om en film, når i får et match får i en notifikation.</p>
            
            <img src={Cooklogo} alt="Billede af logo" className="logo-straw"/>
            <div className="button-magnet-container">
        <Link to="/" className="button-room">
          Inviter til rum
        </Link>
      </div>
            
        </section>
    )
}



