import React, {Component} from "react"


class SubscribeForm extends Component {
    render() {
        return (
            <form className="subscribe_form">
                    <input type="email"
                           className="subscribe_email"
                           id="subscribe_email"
                           placeholder="YOUR EMAIL ADDRESS"
                           required/>
                    <button className="subscribe_button">
                        <i className="material-icons">input</i>
                    </button>
            </form>
        )
    }
}
;

export default SubscribeForm;