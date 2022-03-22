import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../hooks/useAuth";
import studentLogin from "../../../images/studentLogin.png";


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.conpassword) {
            alert("your password didn't match!!!");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 14 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="conpassword"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 3 }}
                            type="submit" variant="contained">Register
                        </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">Registered successfully!!! </Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <img style={{ width: '75%' }} src={studentLogin} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};
export default Register;