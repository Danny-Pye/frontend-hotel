import React, {useState} from 'react';
import './App.scss';

import Header from './components/header/Header';
import Main from "./components/explanation/Main";
import Options from "./components/options/Options";
import LocalArea from "./components/local-area/LocalArea";
import ContactPage from "./components/contact-form/ContactPage";
import Footer from "./components/footer/Footer";
import NavItem from "./components/nav/NavItem";
// import DropDown from "./components/nav/DropDown";
import {MenuOutlined } from '@ant-design/icons';

function App() {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="big-div">
        <NavItem isOpen={isOpen} setIsOpen={setIsOpen} icon={<MenuOutlined />} />
        <Header/>
        <Main/>
        <Options/>
        <LocalArea/>
        <ContactPage/>
        <Footer/>
    </div>
  );
}

export default App;
