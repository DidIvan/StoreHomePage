import React, {Component} from 'react';
import '../../css/components-style/subscribe.css';

class Subscribe extends Component {
    render() {
        return (
            <div>
                <section className="subscribe">
                    <div className="subscribe_center">
                        <h3>subscribe</h3>
                        <p>Stay updated on news</p>
                        <div className="subscribe_input">
                            <span className="subscribe_email">your email address</span>
                            <span className="subscribe_pointer"></span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
;

export default Subscribe;