import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    button: {
        backgroundColor: "#187dd6",
        float:"right",
        padding:0,
        margin:0
    }
};
class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <RaisedButton
                    href="#"
                    buttonStyle={styles.button}
                    style={styles.button}
                    label={this.props.label}
                    secondary={true}
                    icon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
                />
            </div>
        )
    }
}

export default Button;