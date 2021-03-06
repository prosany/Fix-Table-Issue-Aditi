import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon /> */}
                    {/* </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        School Management
                    </Typography>
                    <Link to="/aboutus"><Button color="inherit" sx={{ color: 'white' }}>AboutUs</Button></Link>

                    {
                        user?.email ?
                            <Box>
                                <NavLink to="/dashboard"><Button color="inherit" sx={{ color: 'white' }}>Dashboard</Button></NavLink>
                                <Button onClick={logout} color="inherit" sx={{ color: 'white' }}>Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login"><Button color="inherit" sx={{ color: 'white' }}>Login</Button></NavLink>
                    }


                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;