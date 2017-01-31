import React, { Component } from 'react';
import Subscribe from './content/subscribe.react';
import Goods from './content/goods.react';

var Main = React.createClass({
    render() {
        return (
            <div>
                <main>
                    <h1>catalog</h1>
                    <ul className="nav">
                        <li><a href="#">all</a></li>
                        <li><a href="#">t-shirt</a></li>
                        <li><a href="#">sweaters</a></li>
                        <li><a href="#">shorts</a></li>
                        <li><a href="#">jackets</a></li>
                        <li><a href="#">accessories</a></li>
                    </ul>
                    <Goods image="" price="" goodName=""/>
                 <Subscribe/>
                </main>
            </div>
        )
    }
});

export default Main;