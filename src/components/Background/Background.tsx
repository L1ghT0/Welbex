import React from 'react';
import PurpleBall from "../../assets/balls/PurpleBall";
import RedBall from "../../assets/balls/RedBall";
import RedBallSmall from "../../assets/balls/RedBallSmall";
import YellowBall from "../../assets/balls/YellowBall";
import RedBallSmallForMobile from "../../assets/balls/RedBallSmallForMobile";
import RedLight from "../../assets/lights/RedLight";
import PurpleLight from "../../assets/lights/PurpleLight";
import YellowLight from "../../assets/lights/YellowLight";

const Background = () => {
    return (
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
    );
};

export default Background;