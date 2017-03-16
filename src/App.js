import React, {Component} from 'react';
import Header from './components/header/header.react';
import Main from './components/main/main.react';
import Subscribe from './components/subscribe/subscribe.react';
import Footer from './components/footer/footer.react';
import GoodsDetail from './components/main/content/GoodsDetail.react';
import {connect} from 'react-redux'
import './css/components-style/style.css';
import './css/fonts.css';

class App extends Component {
    render() {
        let goodsView = '';
        switch (this.state.viewType) {
            case 'true':
                goodsView = <GoodsDetail/>;
                break;
            case 'false' :
                goodsView = <Main/>;
                break;
        }
        return (
            <div>
                <Header/>
                {goodsView}
                <Subscribe/>
                <Footer/>
            </div>
        )
    }
}

export default connect(
    state=>({}),
    dispatch=>({})
)(App);
