import React, { Component } from 'react';

import '../../../css/components-style/style.css';
import '../../../css/components-style/main.css';

class Goods extends Component{
    render() {
        return (
                <div className="card">
                    <div className="card_image">
                        <a href="#"><img src={this.props.image}/></a>
                    </div>
                    <div className="card_action">
                        <a href="#">
                            <p className="card_action_name">{this.props.goodName}</p>
                            <p className="card_action_price">{this.props.price}</p>
                            <p className="card_action_old_price">{this.props.oldprice}</p>
                            <p className="card_action_new_price">{this.props.newprice}</p>
                        </a>
                    </div>
                </div>

        )
    }
};

module.exports = Goods;