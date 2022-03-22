import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import studentLogin from "../../../images/studentLogin.png";
import useAuth from "../../../hooks/useAuth";

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 18 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 3 }}
                            type="submit" variant="contained">Login
                        </Button>

                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success"  >Login successfully!!! </Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}
                        {/* <p>--------------------------------------</p> */} <br></br> <br></br>

                        <Button onClick={handleGoogleSignIn} variant="contained">Login with Google</Button>
                    </form>




                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <img style={{ width: '75%' }} src={studentLogin} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};
export default Login;