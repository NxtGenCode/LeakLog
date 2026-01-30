import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return(
        <Box sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
            <Outlet/>
        </Box>
    );
}