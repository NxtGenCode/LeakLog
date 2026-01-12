import React, { useMemo, useState } from "react";
import { Box, Typography, TextField, FormControl, OutlinedInput, InputAdornment, IconButton, FormControlLabel, Checkbox, Divider, FormHelperText } from '@mui/material';
import PasswordField from "./PasswordField";

import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import EmailField from "./EmailField";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type LoginFormProps = {
  onGoToSignup: () => void;
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
};

export default function LoginForm({onGoToSignup, onSubmit}:LoginFormProps) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [touchedEmail, setTouchedEmail] = useState(false);

    const [checked, setChecked] = React.useState(true); // Remember Me Check Box

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[A-Za-z]{3,}$/.test(email.trim());

    const emailValid = useMemo(() => isValidEmail(email), [email]);

    // Only show feedback once they’ve interacted
    const showFeedback = touchedEmail || email.length > 0;
    const emailError = showFeedback && !emailValid;
    const emailHelperText = !showFeedback
      ? " "
      : email.length === 0
      ? "Email is required"
      : emailValid
      ? "Looks good ✓"
      : "Enter a valid email (example@domain.com)";

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
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: 2,
            borderColor: "black",
            backgroundColor: "#242323",
            padding: "24px"
          }}>

          <Typography id="loginFormTitle" display="flex">Leak Data Pro</Typography>

          <Typography id="typographyEmail"
            sx={{color:'white', position:'relative', display:'flex'}}
            >Email:</Typography>

          <EmailField value={email} onChange={setEmail} mode="login" />

          <Typography id="typographyPassword" sx={{color:'white', position:'relative', display:'flex'}}>Password:</Typography>
          <PasswordField value={password} onChange={setPassword}>
          </PasswordField>

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
          <Typography display="inline-block"
            sx={
              {
                float:"right",
                paddingTop: "8px",
                textDecoration: "underline"
              }
            }
          >
            Forgot password?
          </Typography>
          <br></br><br></br>

          <LoginButton onClick={handleSignInClick}>
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