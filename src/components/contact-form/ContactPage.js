import React from 'react';
import './Contact.scss';
import DatePicker from "./DatePicker";
import SecondDatePicker from "./SecondDatePicker";
import Button from "../button/Button";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="shadow">
                <div className="contact-page__inner">
                    <div className="contact-page__inner-form" >
                        <h5>Pick starting and ending date</h5>
                        <DatePicker />
                        <SecondDatePicker />

                    </div>
                    <div className="input-container">
                        <input placeholder="Name..." />
                        <input  placeholder="Email..." />
                        <div className="button-wrapper">
                            <Button btnStyle={"secondary"} text="see availability" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContactPage;