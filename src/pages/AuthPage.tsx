import { Box, AppBar, Toolbar, Drawer } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';
import MyLogo from '../assets/logo.png';
import SignUpForm from '../components/auth/SignUpForm';
import {useState} from 'react';

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  function handleLoginSubmit() {
    if (mode === "login") {
        console.log("Mode: Login");
    } else {
        console.log("Mode: Sign Up");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* App Bar */}
      <AppBar position="sticky">
        <Toolbar variant="dense" sx={{ height: "48px" }}>
          <Box
            component="img"
            src={MyLogo}
            alt="Your Logo"
            sx={{
              height: 80,
              width: 160,
              ml: -2,
            }}
          />
        </Toolbar>
      </AppBar>

      {/* Centered auth area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor:'#2C50AB'
        }}
      >
        {/* 🔒 AUTH SLOT (fixed size) */}
        <Box
          sx={{
            width: 550,
            height: 620, // pick max of login/signup
            display: "flex",
            flexDirection: "column",
          }}
        >
          {mode === "login" ? (
            <LoginForm onGoToSignup={() => setMode("signup")} onSubmit={() => {}} />
          ) : (
            
            <SignUpForm onGoToLogin={() => setMode("login")} onSubmit={handleLoginSubmit} />
          )}
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ textAlign: "center", py: 2 , color:'white'}}>
        Copyright 2026 LeakDataPro, LLC.
      </Box>
    </Box>
  );
}