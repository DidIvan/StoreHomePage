import React, {Component} from 'react';
import '../css/components-style/dropdown.css';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            listVisible: false,
            display: ""
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
    }

    select(item) {
        debugger;
        this.props.selected = item;
    }

    show() {
        this.setState({listVisible: true});
        document.addEventListener("click", this.hide);
    }

    hide() {
        this.setState({listVisible: false});
        document.removeEventListener("click", this.hide);
    }

    renderListItems() {
        var items = [];
        for (var i = 0; i < this.props.list.length; i++) {
            var item = this.props.list[i];
            items.push(<div key={item.name} onClick={this.select.bind(null, item)}>
                <span key={item} style={{ color: item.hex }}>{item.name}</span>
                <i className="fa fa-check"></i>
            </div>);
        }
        return items;
    }

    render() {
        return (
            <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
                <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
                    <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <div className="dropdown-list">
                    <div>
                        {this.renderListItems()}
                    </div>
                </div>
            </div>
        );
    }
}
;

export default Dropdown;