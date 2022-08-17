import React from 'react';
import './DropDown.scss';
import {MessageOutlined, ReadOutlined, TeamOutlined, ApiOutlined, MobileOutlined, LoginOutlined, PieChartOutlined } from '@ant-design/icons';

const DropDown = (props) => {

    function DropDownItem (props) {
        return(
            <a href={props.page} className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return(
        <div className="dropdown">

            <DropDownItem leftIcon={<ReadOutlined />} page={"/manuals"} >
                <p>See Menu</p>
            </DropDownItem>
            <DropDownItem leftIcon={<MessageOutlined/>} page={"/chat"} >
                <p>Get In Touch</p>
            </DropDownItem>
            <DropDownItem leftIcon={<TeamOutlined />} page={"/knowledge"} >
                <p>Leave A Review</p>
            </DropDownItem>
            <DropDownItem leftIcon={<MobileOutlined />} page={"/app"} >
                <p>Book Now</p>
            </DropDownItem>



        </div>
    );
}

export default DropDown;