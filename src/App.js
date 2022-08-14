import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import Main from "./components/explanation/Main";
import Options from "./components/options/Options";
import LocalArea from "./components/local-area/LocalArea";
import ContactPage from "./components/contact-form/ContactPage";

function App() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Options/>
      <LocalArea/>
        <ContactPage/>
    </div>
  );
}

export default App;
