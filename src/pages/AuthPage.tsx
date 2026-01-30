import { Box } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';
import SignUpForm from '../components/auth/SignUpForm';

import {useState} from 'react';
import { Link } from 'react-router-dom';
import { keyframes } from "@mui/system";

const breathe = keyframes`
  0% {
    background-position: 0% 50%;
    filter: brightness(0.95);
  }
  50% {
    background-position: 100% 50%;
    filter: brightness(1.05);
  }
  100% {
    background-position: 0% 50%;
    filter: brightness(0.95);
  }
`;

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
        height:"100%",
        width: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        background: `
          linear-gradient(
            135deg,
          #273064,
          #1E2236,
          #1e254e,
          #1e254e
          )
        `,
        backgroundSize: "300% 300%",
        animation: `${breathe} 30s ease infinite`,
          }}
    >
      {/* Centered auth area */}
      <Box
        id="idk"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* AUTH SLOT */}
        <Box
          sx={{
            width: 550,
            display: "flex",
            justifyContent:"center",
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