import React, {Component} from 'react';
import '../../css/components-style/footer.css';
import '../../css/components-style/style.css';

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="container">
                <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                <ul className="footer_nav">
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