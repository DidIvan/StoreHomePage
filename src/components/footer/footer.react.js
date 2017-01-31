import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                <ul className="nav">
                    <li><a href="#">home</a></li>
                    <li><a href="#">catalog</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">sale</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
                <span>©2010 - 2016 All Rights reserved</span>
            </footer>
        )
    }
}
;

export default Footer;