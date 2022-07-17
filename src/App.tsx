import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Aboutme from "./components/Aboutme/Aboutme";
import Myskills from "./components/Myskills/Myskills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Aboutme/>
            <Myskills/>
        </div>
    );
}

export default App;
