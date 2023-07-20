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
        <div className="App">
            <div className='App-wrapper'>
                <Header/>
                <div className="Content">
                    <Welbex/>
                </div>
                <Footer/>
                <div>
                    <PurpleBall/>
                    <RedBall/>
                    <RedBallSmall/>
                    <PurpleLight/>
                    <YellowLight/>
                    <YellowBall/>
                    <RedBallSmallForMobile/>
                </div>
            </div>
            <RedLight/>
        </div>
    );
}

export default App;
