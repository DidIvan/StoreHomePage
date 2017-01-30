import React, { Component } from 'react';
import Header from './components/header/header.react';
import Main from './components/main/main.react';
import Footer from './components/footer/footer.react';
/*import './App.css';*/

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;
