import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import Main from "./components/explanation/Main";
import Options from "./components/options/Options";

function App() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Options/>
    </div>
  );
}

export default App;
