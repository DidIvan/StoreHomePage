import React, {Component} from 'react';
import '../../css/components-style/header.css';
import '../../css/components-style/style.css';
import '../../css/fonts.css';
import Dropdown from '../../components/dropdown.react';
/*import arrow from '../../../public/img/content/arrow.png';*/

const colours = [{
    name: "Red",
    hex: "#F21B1B"
}, {
    name: "Blue",
    hex: "#1B66F2"
}, {
    name: "Green",
    hex: "#07BA16"
}];

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
                            <Dropdown list={colours} selected={colours[0]}/>
                            { /* <ul>
                                <li className="header_currency"><a href="#">currency</a><img src={arrow}
                                                                                             alt="arrow"/>
                                    <ul>
                                        <li><a href="#">dolars</a></li>
                                        <li><a href="#">grivnas</a></li>
                                        <li><a href="#">dinars</a></li>
                                    </ul>
                                </li>
                                <li className="header_language">
                                    <a href="#">en</a>
                                    <ul>
                                        <li><a href="#">ua</a></li>
                                        <li><a href="#">ru</a></li>
                                    </ul>
                                </li>
                            </ul>*/}
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