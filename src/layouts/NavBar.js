import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';

const NavBar = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        localStorage.removeItem('user');
        props.setUserState();
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.menubackgroud}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title} align = "center" >
                         Find my School Admin Panel
                    </Typography>
                    
                    
                    {auth && (
                    <div>
                        <IconButton
                        align = "right"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                        >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1
    },
    menubackgroud: {
        background: 'linear-gradient(45deg, #234bc6 30%, #234bc6 90%)',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }, 
    title: {
        flexGrow: 1,
        fontFamily: 'poppins',
        fontWeight: '300',
    }
}));

export default NavBar;