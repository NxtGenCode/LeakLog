import React, { useMemo, useState } from "react";
import { TextField } from "@mui/material";

type EmailMode = "login" | "signup";

type EmailFieldProps = {
  value: string;
  onChange: (next: string) => void;
  mode?: EmailMode;
  id?: string;
};

function isValidEmail(email: string): boolean {
  // allows .io, .ai, .com, etc.
  return /^[^\s@]+@[^\s@]+\.[A-Za-z]{3,}$/.test(email.trim());
}

export default function EmailField({
  value,
  onChange,
  mode = "login",
  id = "email",
}: EmailFieldProps) {
  const [touched, setTouched] = useState(false);

  const emailValid = useMemo(() => isValidEmail(value), [value]);
  const showFeedback = touched || value.length > 0;

  const showRules = mode === "signup";
  const emailError = showFeedback && !emailValid;

  const helperText = !showFeedback
    ? " "
    : value.length === 0
    ? "Email is required"
    : showRules && emailValid
    ? "Looks good ✓"
    : !emailValid
    ? "Enter a valid email (example@domain.com)"
    : " ";

  return (
    <TextField
      id={id}
      label=""
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => setTouched(true)}
      type="email"
      autoComplete="email"
      error={showRules && emailError}
      helperText={showRules ? helperText : " "}
      color={showRules && showFeedback && emailValid ? "success" : "primary"}
      fullWidth
      sx={{
        borderRadius: 2,
        marginBottom: "12px",

        "& .MuiInputBase-input": {
          height: "10px",
          color: "#000000",
        },

        "& .MuiFormHelperText-root": {
          color:
            showRules && showFeedback
              ? emailValid
                ? "success.main"
                : "error.main"
              : "transparent",
          backgroundColor: "transparent",
          marginLeft: 0,
          paddingLeft: 0,
        },

        // background ONLY on the input
        "& .MuiOutlinedInput-root": {
          backgroundColor: "white",
          borderRadius: 2,
        },
      }}
    />
  );
}