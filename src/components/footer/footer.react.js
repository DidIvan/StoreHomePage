import React, { Component } from 'react';

var Footer = React.createClass({
    render() {
        return (
            <footer id="footer">
                <div className="container container_footer">
                    <div className="row footer_top">
                        <a href="#" className="button_download"><img src="../../img/footer/Artwork.png"
                                                                     alt="download"/></a>
                        <div className="footer_titles">
                            <p className="footer_title1">download app</p>
                            <p className="footer_title2">show everyone what you can do!</p>
                        </div>
                    </div>
                    <div className="row footer_center buttons">
                        <a href="#" className="button button_1"><img src="../../img/header/IconApple.png"
                                                                     alt="apple"/><p>download on the <br/> app store</p>
                        </a>
                        <a href="#" className="button button_2"><img src="../../img/header/IconGoogle-Play.png"
                                                                     alt="google"/><p>get it on the <br/> google play
                        </p></a>
                    </div>
                    <div className="footer_bottom">
                        <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                        <div className="button_bar">
                            <a href="#" className="button_link"><img src="../../img/footer/Facebook.png"
                                                                     alt="facebook"/></a>
                            <a href="#" className="button_link"><img src="../../img/footer/twitter.png"
                                                                     alt="twitter"/></a>
                            <a href="#" className="button_link"><img src="../../img/footer/instagram.png"
                                                                     alt="instagram"/></a>
                        </div>

                        <p>Contact Us | Terms & Conditions</p>
                    </div>
                </div>
            </footer>

        )
    }
});

export default Footer;