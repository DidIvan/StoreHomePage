import React, {Component} from 'react';
import '../../../css/components-style/subscribe.css';

class Subscribe extends Component{
    render() {
        return (
            <div>
                <section className="subscribe">
                    <p>subscribe</p>
                    <p>stay updated on news</p>
                    <input type="text" placeholder="your email address"/>
                </section>
            </div>
        )
    }
};

export default Subscribe;