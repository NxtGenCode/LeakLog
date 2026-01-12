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

type ConfirmPasswordFieldProps = {
  password: string;              // original password to match
  value: string;                 // confirm password input value
  onChange: (next: string) => void;
};

export default function ConfirmPasswordField({
  password,
  value,
  onChange,
}: ConfirmPasswordFieldProps) {
  const [touched, setTouched] = useState(false);
  const [show, setShow] = useState(false);

  const match = useMemo(() => value === password, [value, password]);
  const showFeedback = touched && value.length > 0;

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ mb: "12px" }}
      error={showFeedback && !match}
    >
      <OutlinedInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        type={show ? "text" : "password"}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          "& .MuiInputBase-input": { height: "10px", color: "#000" },

          // outline turns green/red after touch
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: showFeedback ? (match ? "success.main" : "error.main") : undefined,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: showFeedback ? (match ? "success.main" : "primary.main") : "primary.main",
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShow((s) => !s)}
              edge="end"
              aria-label={show ? "hide confirm password" : "show confirm password"}
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
          color: showFeedback ? (match ? "success.main" : "error.main") : "transparent",
        }}
      >
        {showFeedback ? (match ? "Passwords match ✓" : "Passwords do not match") : " "}
      </FormHelperText>
    </FormControl>
  );
}