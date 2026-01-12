
import React, { useMemo, useState } from "react";
import { Box, Typography, TextField, FormControl, OutlinedInput, InputAdornment, IconButton, Divider, Button } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PasswordField from './PasswordField';
import ConfirmPasswordField from "./ConfirmPasswordField";
import EmailField from "./EmailField";

type SignUpFormProps = {
  onGoToLogin: () => void;
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
};

export default function SignUpForm({onGoToLogin, onSubmit}:SignUpFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleMouseUpPassword = () => function() {};
    
    const handleSignUpClick = () => {
        // basic guard (optional)
        if (!email.trim() || !password) {
            console.log("Missing email or password");
            return;
        }

        if (!password || !confirmPassword) {
            console.log("Missing fields");
            return;
        }

        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }

        console.log("submitted!")
        onSubmit(email, password, false);
    };

    return(
        <Box id="signUpFormContainer" sx={
            {
                display:'flex',
                height: "100%",
                flexDirection: "column",
                border: 2,
                borderColor: "black",
                backgroundColor:"#121212",
                padding: "24px"
            }}>
            <Typography id="loginFormTitle" display="flex" sx={{
                display:'flex', position:'relative', minHeight: 0
            }}>Create an account</Typography>
            <Typography id="typographyEmail"
                sx={{color:'white', position:'relative', display:'flex', minHeight: 0}}>
                    Email:
            </Typography>
            <EmailField value={email} onChange={setEmail} mode="signup" />

            <Typography id="typographyPassword"
                sx={{color:'white', position:'relative', display:'flex', minHeight: 0}}>
                Password:
            </Typography>

            <PasswordField value={password} onChange={setPassword} mode="signup"></PasswordField>
           <Typography id="typographyPassword"
            sx={{
                color:'white', position:'relative', display:'flex', minHeight: 0
            }}>
                Confirm Password:
            </Typography>
            <ConfirmPasswordField
                password={password}
                value={confirmPassword}
                onChange={setConfirmPassword}
            />

        <Button onClick={handleSignUpClick} sx={{
                color:'white',
                bgColor:'black',
                width:"100%",
                minHeight: 0,
                mt:'auto'
            }}
            variant='contained'>
            <Typography>
                Create Account
            </Typography>
        </Button>
           <Divider aria-hidden="true" sx={{ bgcolor:"#ffff", width:"100%",
            height:"1px" , display:'flex', mt:'20px', mb:'10px', minHeight: 0}} />

          <Button onClick={onGoToLogin} sx={{
                color:'white',
                bgColor:'black',
                width:"100%",
                minHeight: 0,
                marginTop:'12px'
            }}
            variant='contained'>
            <Typography>
                Back to Sign In
            </Typography>
          </Button>
        </Box>
    );
}