import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class Navbar extends Component {
    state = {}
    render() {
        return (
            <AppBar
                position="fixed"

            >
                <Toolbar>
                    
                    <Typography variant="h6" noWrap>
                        Transact App
            </Typography>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;