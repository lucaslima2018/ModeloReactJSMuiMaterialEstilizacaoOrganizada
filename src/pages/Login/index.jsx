import React from "react";
import "./index.css";

import { Typography, TextField, Button, Container } from '@mui/material/';
import { button, container1, container2, text1, typography } from "./styleLogin";

const Login = () => {
   
    return (
        <>
            <div className="body">
                <Container sx={container1}>
                    <Container sx={container2}>
                        <Typography sx={typography} ><strong>Bem - Vindo</strong></Typography>
                        <TextField sx={text1} fullWidth id="outlined-basic" label="E-mail" variant="outlined"/>
                        <TextField fullWidth id="outlined-basic" label="Senha" type="password" variant="outlined"/>                        
                        <Button variant="contained" color="info" fullWidth sx={button}>Entrar</Button>
                    </Container>
                </Container>
            </div>
        </>
    );
}

export default Login;