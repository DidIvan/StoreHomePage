import React, { Component } from 'react';
import Header from './components/header/header.react';
import Main from './components/main/main.react';
import Subscribe from './components/main/content/subscribe.react';
import Footer from './components/footer/footer.react';
/*import {css} from "aphrodite/no-important";
import style from './Appstyles/Appstyles';*/
import './css/components-style/style.css';
import './css/fonts.css';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Subscribe/>
                <Footer/>
            </div>
        )
    }
}

export default App;
