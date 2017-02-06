import React, {Component} from 'react';
import '../../css/components-style/header.css';
import '../../css/components-style/style.css';
import '../../css/fonts.css';

class Header extends Component {
    render() {
        return (
            <header id="header" className="horizont">
                <div className="horizont">
                    <div className="header_top container">
                        <ul className="header_top_left">
                            <li><a href="#">delivery</a></li>
                            <li><a href="#">faq</a></li>
                            <li><a href="#">help</a></li>
                        </ul>
                        <div className="header_top_right">
                            <ul>
                                <li><a href="#">currency</a>
                                    <ul>
                                        <li><a href="#">dolars</a></li>
                                        <li><a href="#">grivnas</a></li>
                                        <li><a href="#">dinars</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">language</a>
                                    <ul>
                                        <li><a href="#">en</a></li>
                                        <li><a href="#">ua</a></li>
                                        <li><a href="#">ru</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="container">
                    <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                    <ul className="header_nav">
                        <li><a href="#">home</a></li>
                        <li><a href="#">catalog</a></li>
                        <li><a href="#">news</a></li>
                        <li><a href="#">sale</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
            </header>

        )
    }
}
;

export default Header;