import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import Arrow from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function InsetDividers(props) {
    const { classes } = props;
    return (
        <List className={classes.root}>
            <ListItem>
                <Avatar>
                    <AirplaneIcon />
                </Avatar>
                <ListItemText secondary="Price: 214 kr">CPH <Arrow /> BLL</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary="Departure" secondary="1-7-2019, 21:04" />
                <ListItemText primary="Arrival" secondary="1-7-2019, 23:04" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Airline" secondary="Lufthansa Group" />
                <ListItemText primary="Available Seats" secondary="23" />
            </ListItem>
            <li>
                <Divider variant="inset" />
            </li>
        </List>
    );
}

InsetDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);