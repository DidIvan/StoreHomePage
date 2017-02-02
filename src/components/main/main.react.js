import React, { Component } from 'react';
import Subscribe from './content/subscribe.react';
import Goods from './content/goods.react';

import '../../css/components-style/style.css';

var Main = React.createClass({
    render() {
        return (
            <div>
                <main className="container">
                    <h1>catalog</h1>
                    <ul className="nav">
                        <li><a href="#">all</a></li>
                        <li><a href="#">t-shirt</a></li>
                        <li><a href="#">sweaters</a></li>
                        <li><a href="#">shorts</a></li>
                        <li><a href="#">jackets</a></li>
                        <li><a href="#">accessories</a></li>
                    </ul>
                    <Goods image="../../img/content/Base1.jpg" price="$23" goodName="Printed swimsuit"/>
                    <Goods image="../../img/content/Base2.jpg" price="$32 $12" goodName="Jogging bermuda shorts"/>
                    <Goods image="../../img/content/Base3.jpg" price="$9" goodName="Basic beach flip flops"/>
                    <Goods image="../../img/content/Base4.jpg" price="$29" goodName="Black sunglasses"/>
                    <Goods image="../../img/content/Base5.jpg" price="$20" goodName="Long sleeved twill shirt"/>
                    <Goods image="../../img/content/Base6.jpg" price="$36" goodName="Basic swimsuit"/>
                    <Goods image="../../img/content/Base7.jpg" price="$12" goodName="Bleached shorts"/>
                    <Goods image="../../img/content/Base8.jpg" price="$32 $12" goodName="T-shirt with lower panel"/>
                </main>
            </div>
        )
    }
});

export default Main;