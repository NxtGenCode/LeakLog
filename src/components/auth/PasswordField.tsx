import React, { useMemo, useState } from "react";

import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function isPasswordValid(password: string): boolean {
  return (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
}

function passwordHint(password: string): string {
  if (password.length < 8) return "At least 8 characters";
  if (!/[A-Z]/.test(password)) return "Add an uppercase letter";
  if (!/[a-z]/.test(password)) return "Add a lowercase letter";
  if (!/\d/.test(password)) return "Add a number";
  return "Strong password ✓";
}

type PasswordFieldProps = {
  value: string;
  onChange: (next: string) => void;
  mode?: "login" | "signup";
  id?: string;
};

export default function PasswordField({
  value,
  onChange,
  mode="login",
  id = "outlined-adornment-password",
}: PasswordFieldProps) {
  const [touched, setTouched] = useState(false);
  const [show, setShow] = useState(false);

  const valid = useMemo(() => isPasswordValid(value), [value]);
  const showFeedback = touched && value.length > 0;

  const showRules = mode === "signup";

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ bgcolor: "transparent", mb: "12px" }}
      error={showRules && showFeedback && !valid}
    >
      <OutlinedInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        id={id}
        type={show ? "text" : "password"}
        sx={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: 2,

          "& .MuiInputBase-input": {
            height: "10px",
            color: "#000000",
          },

          // optional: make outline turn green/red after touched
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: showRules && showFeedback ? (valid ? "success.main" : "error.main") : undefined,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: showRules && showFeedback ? (valid ? "success.main" : "primary.main") : "primary.main",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={show ? "hide the password" : "display the password"}
              onClick={() => setShow((s) => !s)}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />

      <FormHelperText
        sx={{
          ml: 0,
          backgroundColor: "transparent",
          color: showRules && showFeedback ? (valid ? "success.main" : "error.main") : "transparent",
        }}
      >
        {showFeedback ? passwordHint(value) : " "}
      </FormHelperText>
    </FormControl>
  );
}