import React, {Component} from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    mediumIcon: {
        width: 48,
        height: 48,
    },
    largeIcon: {
        width: 60,
        height: 60,
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    },
    large: {
        width: 120,
        height: 120,
        padding: 30,
    },
};
const Basket = () => (
    <div>
        <Badge
            badgeContent={10}
            secondary={true}
            badgeStyle={{top: 12, right: 12}}
        >
            <IconButton tooltip="Basket"
                        iconStyle={styles.largeIcon}
                        style={styles.large}
            >
                <FontIcon className="material-icons">shopping_cart</FontIcon>
            </IconButton>
        </Badge>
    </div>
);

export default Basket;
