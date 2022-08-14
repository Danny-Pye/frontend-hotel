import React from 'react';
import './LocalArea.scss';
import Card from "../card/Card";


const LocalArea = () => {
    return (
        <div className="local-area-main">
            <div className="row">
                <h2>Things To Consider</h2>
            </div>
            <div className="row perspective">
                <Card num={1} title="Beautiful setting" info={["in the country", "local village with shops" , "walks from the hotel"]} />
                <Card num={2} title="awesome staff" info={["room service available", "breakfast in bed on request", "early check in available on request"]} />
                <Card num={3} title="best food around" info={["dietary requirements met", "award winning chef", "on site vegetable garden"]} />
            </div>
        </div>
    );
}

export default LocalArea;
