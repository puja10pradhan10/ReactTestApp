import React from 'react';
// import logo from '../logo.svg';
import '../App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class Header extends React.Component {
    render() {
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            React & Material-UI Sample Application
                </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
