import React from 'react';
import './Card.scss';
import Button from "../button/Button";

const Card = (props) => {

    return (
        <div className="card">
            <div className="card__side card-front">
                <div className={`card__header card__header-${props.num}`}></div>
                <h3 className="card__title">
                    <span className={`card__title-span card__title-span-${props.num}`}>{props.title}</span>
                </h3>
                <div className="card__info">
                    <ul>
                        {props.info && props.info.map((each) => <li key={Math.random()}>{each}</li>)}
                    </ul>
                </div>
            </div>
            <div className={`card__side card-back card-back-${props.num}`}>
                <h3>Book Now</h3>
                <h4>Rooms starting from £60</h4>
                <Button btnStyle={"light"}/>

            </div>
        </div>
    );

}

export default Card;