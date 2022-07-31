import React from 'react';
import './Main.scss';
import pic1 from '../../images/hotel-gbb350926e_1280.jpg';
import pic2 from '../../images/towel-ga9a84c032_1280.jpg';
import pic3 from '../../images/villa-cortine-palace-g7369f6025_1280.jpg';

const Main = () => {
    return (
        <main className="explanation-section">
            <div className="row">
                <div>
                    <h2>Explanation</h2>
                    <hr/>
                </div>
            </div>
            <div className="row col-container">
                <div className="column">
                    <h3>Its nice here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque, distinctio dolor eligendi fugit modi neque porro quas saepe voluptatum?</p>
                    <h3>And value for money</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ea et illum magnam obcaecati omnis. Obcaecati, repellendus.</p>
                    <a href="#" className="btn-text">Click it &rarr;</a>
                </div>
                <div className="column">
                    <div className="images-container">
                        <img src={pic1} alt="room" className="picture picture--1" style={{margin: 0}}/>
                        <img src={pic2} alt="towels" className="picture picture--2"/>
                        <img src={pic3} alt="dining area" className="picture picture--3"/>
                    </div>


                </div>
            </div>
        </main>
    );
}

export default Main;