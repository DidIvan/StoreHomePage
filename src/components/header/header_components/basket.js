import React, {Component} from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
    badgeStyle: {
        width: 90,
        height: 60,
    },
    iconStyle: {
        fontSize: 40
    },
    hoveredStyle: {
        fontSize: 40
    },
    styleButton: {
        width: 60,
        height: 60
    }
};
const Basket = () => (
    <div>
        <Badge
            badgeContent={10}
            secondary={true}
            badgeStyle={{top: 12, right: 12}}
            style={styles.badgeStyle}
        >
            <IconButton tooltip="Basket"
                        iconStyle={styles.iconStyle}
                        hoveredStyle={styles.hoveredStyle}
                        style={styles.styleButton}
            >
                <FontIcon className="material-icons">shopping_cart</FontIcon>
            </IconButton>
        </Badge>
    </div>
);

export default Basket;
