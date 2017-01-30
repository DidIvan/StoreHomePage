import React, { Component } from 'react';

var Header = React.createClass({
    render() {
        return (
            <header id="header">
                    <div className="header-top">
                        <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                        <p className="right_logo">for athlets and coaches</p>
                    </div>
                    <div className="header-center row">
                        <p className="p_left">BE RECRUITED</p>
                        <p className="p_right">PLAY COLLEGE SPORTS</p>
                    </div> <div className="header-center row">
                        <p className="p_left">BE RECRUITED</p>
                        <p className="p_left">BE RECRUITED</p>
                        <p className="p_right">PLAY COLLEGE SPORTS</p>
                    </div>
                    <div className="row">
                        <ul className="nav">
                            <li><a href="#">FOOTBALL</a></li>
                            <li><a href="#">BASKETBALL</a></li>
                            <li><a href="#">BASEBALL</a></li>
                            <li><a href="#">SOCCER</a></li>
                            <li><a href="#">ICE HOCKEY</a></li>
                        </ul>
                    </div>
                    <div className="row buttons">
                        <a href="#" className="button button_1"><img src="../../img/header/IconApple.png"
                                                                     alt="apple"/><p>download on the <br/> app store</p></a>
                        <a href="#" className="button button_2"><img src="../../img/header/IconGoogle-Play.png"
                                                                     alt="google"/><p>get it on the <br/> google play</p></a>
                    </div>
            </header>

        )
    }
});

export default Header;