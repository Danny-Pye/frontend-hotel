import React from 'react';
import './FeatureBox.scss';

const FeatureBox = (props) => {
    return (
        <div className="feature-box">
            <h4>{props.title}</h4>
            <div  className="icon-box">{props.icon}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis, dolorem harum itaque perferendis praesentium!</p>

        </div>
    );
}

export default FeatureBox;