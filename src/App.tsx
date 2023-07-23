import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Welbex from "./components/Content/Welbex/Welbex";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";


function App() {
    return (
        <div className="App-wrapper">
            <div className='App'>
                <Header/>
                <div className="Content">
                    <Welbex/>
                </div>
                <Footer/>
                <Background/>
            </div>
        </div>
    );
}

export default App;
