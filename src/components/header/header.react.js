import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="header_top">
                    <div className="header_top_left">
                        <a className="" href="#">delivery</a>
                        <a className="" href="#">faq</a>
                        <a className="" href="#">help</a>
                    </div>
                    <div className="header_top_right">

                    </div>
                </div>
                <hr/>
                <nav>
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