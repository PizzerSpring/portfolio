import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Aboutme from "./components/Aboutme/Aboutme";
import Myskills from "./components/Myskills/Myskills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";

function App() {
    return (
        <div className="App">
            {/*<Header/>
            <Aboutme/>*/}
            <Myskills/>
            <Experience/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
