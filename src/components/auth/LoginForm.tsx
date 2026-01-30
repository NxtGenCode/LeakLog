import React, { useState } from "react";
import { Box, Typography, FormControlLabel, Checkbox, Divider } from '@mui/material';
import PasswordField from "./PasswordField";

import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import EmailField from "./EmailField";

type LoginFormProps = {
  onGoToSignup: () => void;
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
};

export default function LoginForm({onGoToSignup, onSubmit}:LoginFormProps) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = React.useState(true); // Remember Me Check Box

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Remember Me Check Box
        setChecked(event.target.checked);
    };
    
    const handleSignInClick = () => {
        if (!email.trim()) {
            console.log("Missing email or password");
            return;
        }
        if (!password) {
            console.log("Missing password");
            return;
        }
        console.log("submitted!")
        onSubmit(email, password, false);
    };

    return(
        <Box id="loginFormContainer" sx={{
            display: "flex",
            flexDirection: "column",
            border: 2,
            borderColor: "black",
            backgroundColor: "#121212",
            padding: "24px",
            margin: "12px",
            borderRadius: "18px"
          }}>

          <Typography id="loginFormTitle" display="flex" justifyContent="center" color="white">Leak Data Pro</Typography>
          
          <Typography id="typographyEmail"
            sx={{color:'white', position:'relative', display:'flex'}}
            >Email:</Typography>

          <EmailField value={email} onChange={setEmail} mode="login" />

          <Typography id="typographyPassword" sx={{color:'white', position:'relative', display:'flex'}}>Password:</Typography>
          <PasswordField value={password} onChange={setPassword}>
          </PasswordField>


          <Box sx={{
            display:'flex',
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
          }}>
            <FormControlLabel
              labelPlacement="end"
              sx={{
                display:'inline-flex-box',
                alignContent:'start',
                textAlign:'end'
              }}
              control= {
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name="myCheckbox"
                  disableRipple
                  sx={{
                    color:'#ffffff',
                  }}
                />
              }
              label={<Typography style={{color: 'white'}}>Remember me</Typography>}
            />
            <Typography
              sx={
                {
                  textDecoration: "underline",
                  color:'red'
                }
              }
            >
              Forgot password?
            </Typography>
          </Box>


          <LoginButton onClick={handleSignInClick} path={"/dashboard"}>
          </LoginButton>
          <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
          <Divider sx={{ flexGrow: 1, bgcolor:"#ffff" }} />
          <Typography variant="body2" color="#ffff" sx={{ mx: 1 }}>
          OR
          </Typography>
          <Divider sx={{ flexGrow: 1, bgcolor: "#ffff" }} />
          </Box>
          <SignUpButton onClick={onGoToSignup}>
          </SignUpButton>
        </Box>
    );
}