import React, {Component} from "react"


class SubscribeForm extends Component {
    render() {
        return (
            <form className="subscr-form" target="_blank">
                <div className="form-group">
                    <input type="text" className="form-control" id="subscr-name" placeholder="Enter name"
                           required/>
                    <button className="subscr-next"><i className="material-icons">input</i></button>
                </div>
            </form>
        )
    }
}
;

export default SubscribeForm;