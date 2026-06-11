import './Hero.css'
import { FaStar } from "react-icons/fa";

const Hero = ({ popGames }) => {

    return(
        <div className="hero-section">
            <img src={popGames?.[6]?.background_image}
            alt={popGames?.[6]?.name}
            className='hero-img'/>
            <div className="header-details">
               <h1 className='header-title'>{popGames?.[6]?.name}</h1>
               <h1 className='rating'><FaStar className='icon'/>{popGames?.[6]?.rating}</h1>
               //replace description by passing the id from prop {/* <h1>{popGames?.[6]?.released}</h1> */}
               <div className='platforms'>
                    <h1>{popGames?.[6]?.platforms?.[0]?.platform?.name}</h1>
                    <h1>{popGames?.[6]?.platforms?.[1]?.platform?.name}</h1>
                    <h1>{popGames?.[6]?.platforms?.[2]?.platform?.name}</h1>
                    <h1>{popGames?.[6]?.platforms?.[3]?.platform?.name}</h1>
                    <h1>{popGames?.[6]?.platforms?.[4]?.platform?.name}</h1>
                    <h1>{popGames?.[6]?.platforms?.[5]?.platform?.name}</h1>
               </div>
            </div>
        </div>
    )
}

export default Hero;