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
    constructor(props) {
        super(props);
     
        
    }

    render() {
        let switcher = this.props.view.goodsDetail.viewType;
        console.log(switcher);
        let goodsView = '';
        debugger;
        switch (switcher) {
            case true:
                goodsView = <GoodsDetail/>;
                break;
            case false :
                goodsView = <Main/>;
                break;
        }
        return (
            <div>
                <Header/>
                
                <input type="button" value="switcher" onClick={this.onSwitcher}/>
                {goodsView}
                <Subscribe/>

                <Footer/>
            </div>
        )
    }
}

export default connect(
    state=>({
        view: state
    }),
    dispatch=>({
        onSwitcher(){
            debugger;
            dispatch({type: 'GOODS_DETAIL_VIEW', payload: false})
        }
    })
)(App);
