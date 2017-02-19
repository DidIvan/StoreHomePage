import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import '../../../css/components-style/search.css';

const styles = {
    iconStyle: {
        fontSize: 40
    },
    hoveredStyle: {
        fontSize: 40
    },
    styleButton: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 17,
        right: 35

    }
};

class Search extends Component {
    render() {
        return (
            <div>
                <IconButton tooltip="Basket"
                            iconStyle={styles.iconStyle}
                            hoveredStyle={styles.hoveredStyle}
                            style={styles.styleButton}
                            className="search"
                >
                    <FontIcon className="material-icons">search</FontIcon>
                </IconButton>

                <form>
                        <input id="search" type="search" required/>
                </form>
            </div>
        )
    }
}
;
export default Search;