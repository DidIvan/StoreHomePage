import React, { Component } from 'react';

class Goods extends Component{
    render() {
        return (
                <div className="card">
                    <div className="card-image">
                        <a href="#"><img src={this.props.image}/></a>
                    </div>
                    <div className="card-action">
                        <a href="#">
                            <span className="">{this.props.goodName}</span>
                            <span className="price">{this.props.price}</span>
                        </a>
                    </div>
                </div>

        )
    }
};

module.exports = Goods;