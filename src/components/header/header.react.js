import React, {Component} from 'react';
import '../../css/components-style/header.css';
import '../../css/components-style/style.css';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="header_top container">
                    <ul className="header_top_left">
                        <li><a href="#">delivery</a></li>
                        <li><a href="#">faq</a></li>
                        <li><a href="#">help</a></li>
                    </ul>
                    <div className="header_top_right">

                    </div>
                </div>
                <hr/>
                <nav className="container">
                    <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                    <ul className="nav">
                        <li><a href="#">home</a></li>
                        <li><a href="#">catalog</a></li>
                        <li><a href="#">news</a></li>
                        <li><a href="#">sale</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
                <hr/>
            </header>

        )
    }
}
;

export default Header;