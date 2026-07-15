import React from 'react'
import chaval from '../assets/chaval.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItem from '../components/RecipeItem'

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Food Recipes</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus id deserunt beatae aut sunt pariatur qui repellat quis nesciunt, similique ab quo odio quibusdam consequuntur reprehenderit quaerat dolorum ullam deleniti.</h5>
                    <button>share your recipe</button>
                </div>
                <div className='right'>
                    <img src={chaval} width="320px" height="300px" />
                </div>
            </section>
            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L10.4,58.7C20.9,53,42,43,63,42.7C83.5,43,104,53,125,58.7C146.1,64,167,64,188,90.7C208.7,117,230,171,250,197.3C271.3,224,292,224,313,224C333.9,224,355,224,376,197.3C396.5,171,417,117,438,112C459.1,107,480,149,501,149.3C521.7,149,543,107,563,85.3C584.3,64,605,64,626,58.7C647,53,668,43,689,69.3C709.6,96,730,160,751,160C772.2,160,793,96,814,106.7C834.8,117,856,203,877,208C897.4,213,918,139,939,117.3C960,96,981,128,1002,144C1022.6,160,1043,160,1064,165.3C1085.2,171,1106,181,1127,176C1147.8,171,1169,149,1190,160C1210.4,171,1231,213,1252,213.3C1273,213,1294,171,1315,128C1335.7,85,1357,43,1377,53.3C1398.3,64,1419,128,1430,160L1440,192L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"></path></svg>
            </div>
            <div className='recipe'>
                <RecipeItem />
            </div>
        </>
    )
}

export default Home