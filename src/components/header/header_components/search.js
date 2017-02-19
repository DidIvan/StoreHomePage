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
    constructor(props){
        super(props)
        this.displaySearch = this.displaySearch.bind(this)  
    }
    displaySearch = (event)=> {
        var search = document.getElementById("search");
        var style = window.getComputedStyle(search,"");
        search.style.display = (style.display == 'none')?'block':'none';
    };

    render() {
        return (
            <div>
                <IconButton tooltip="Basket"
                            iconStyle={styles.iconStyle}
                            hoveredStyle={styles.hoveredStyle}
                            style={styles.styleButton}
                            className="search"
                            onClick={this.displaySearch}
                >
                    <FontIcon className="material-icons">search</FontIcon>
                </IconButton>

                <form onSubmit={this.handleSubmit}>
                    <input id="search" type="search" placeholder="Search for something..." required/>
                </form>
            </div>
        )
    }
}
;
export default Search;