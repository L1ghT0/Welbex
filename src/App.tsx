import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Welbex from "./components/Content/Welbex/Welbex";
import RedLight from "./assets/lights/RedLight";
import PurpleLight from "./assets/lights/PurpleLight";
import PurpleBall from "./assets/balls/PurpleBall";
import RedBall from "./assets/balls/RedBall";
import RedBallSmall from "./assets/balls/RedBallSmall";
import Footer from "./components/Footer/Footer";
import YellowLight from "./assets/lights/YellowLight";
import YellowBall from "./assets/balls/YellowBall";
import RedBallSmallForMobile from "./assets/balls/RedBallSmallForMobile";


function App() {
    return (
        <div className="App-wrapper">
            <div className='App'>
                <Header/>
                <div className="Content">
                    <Welbex/>
                </div>
                <Footer/>
                <div className="Background">
                    <div className='balls'>
                        <PurpleBall/>
                        <RedBall/>
                        <RedBallSmall/>
                        <YellowBall/>
                        <RedBallSmallForMobile/>
                    </div>
                    <div className='lights'>
                        <RedLight/>
                        <PurpleLight/>
                        <YellowLight/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
