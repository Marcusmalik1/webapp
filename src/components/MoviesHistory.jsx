





import glass from "../assets/Glass.png";
import smile from "../assets/Smile.png";
import uncharted from "../assets/Uncharted.png";
import winnie from "../assets/Winnie.png";


export default function MoviesHistory() {
        return (
            <div className="movie-history-container">
            
                <img src={glass} alt="Billede af glass" className="movie-profile" />
                <img src={smile} alt="Billede af smile" className="movie-profile" />
                <img src={uncharted} alt="Billede af uncharted" className="movie-profile" />
                <img src={winnie} alt="Billede af winnie" className="movie-profile" />
                
            </div>
    
        )
    
    }

