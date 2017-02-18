import React, {Component} from 'react';
import '../../css/components-style/header.css';
import '../../css/components-style/style.css';
import '../../css/fonts.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Basket from './header_components/basket';
import Search from './header_components/search';

const styles = {
    borderStyle: {
        border: "none"
    },
    labelStyle: {
        top: -5
    },
    iconStyle: {
        top: -2
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueCurrency: 1,
            valueLanguage: 1
        };
    }

    handleChangeCurrency = (event, index, valueCurrency) => {
        this.setState({valueCurrency});
    };
    handleChangeLanguage = (event, index, valueLanguage) => {
        this.setState({valueLanguage});
    };

    render() {
        return (
            <header id="header" className="horizont">
                <div className="horizont">
                    <div className="header_top container">
                        <ul className="header_top_left">
                            <li><a href="#">delivery</a></li>
                            <li><a href="#">faq</a></li>
                            <li><a href="#">help</a></li>
                        </ul>
                        <div className="header_top_right">
                            <MuiThemeProvider>
                                <DropDownMenu value={this.state.valueCurrency}
                                              onChange={this.handleChangeCurrency}
                                              className="currencyDropdown"
                                              underlineStyle={styles.borderStyle}
                                              labelStyle={styles.labelStyle}
                                              iconStyle={styles.iconStyle}
                                >
                                    <MenuItem value={1} primaryText="EUR"/>
                                    <MenuItem value={2} primaryText="USD"/>
                                    <MenuItem value={3} primaryText="UAH"/>
                                    <MenuItem value={4} primaryText="RUB"/>
                                </DropDownMenu>
                            </MuiThemeProvider>
                            <MuiThemeProvider>
                                <DropDownMenu value={this.state.valueLanguage}
                                              onChange={this.handleChangeLanguage}
                                              underlineStyle={styles.borderStyle}
                                              labelStyle={styles.labelStyle}
                                              iconStyle={styles.iconStyle}
                                >
                                    <MenuItem value={1} primaryText="EN"/>
                                    <MenuItem value={2} primaryText="UA"/>
                                    <MenuItem value={3} primaryText="RU"/>
                                </DropDownMenu>
                            </MuiThemeProvider>

                        </div>
                    </div>
                </div>
                <nav className="container">
                    <a className="logo" href="#"><img src="../../img/logo.png" alt="logo"/></a>
                    <ul className="header_nav">
                        <li><a href="#">home</a></li>
                        <li><a href="#">catalog</a></li>
                        <li><a href="#">news</a></li>
                        <li><a href="#">sale</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                    <MuiThemeProvider>
                        <Basket/>
                    </MuiThemeProvider> 
                    <MuiThemeProvider>
                        <Search/>
                    </MuiThemeProvider>
                </nav>
            </header>

        )
    }
}
;

export default Header;