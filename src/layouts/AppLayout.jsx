import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  CssBaseline,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import MyLogo from "../assets/logo.png";

const drawerWidth = 240;
const APP_BAR_HEIGHT = 50;

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Reports', path: '/reports' },
];

export default function AppLayout() {
    const location = useLocation();

    const isDashboard = location.pathname.startsWith('/dashboard');
    const isReports = location.pathname.startsWith('/reports');

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeNav, setActiveNav] = useState(navItems[0]?.id ?? 'dashboard');

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
        
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh",}}>
        <CssBaseline />

        {/* App Bar */}
        <AppBar
            sx={{
                height: APP_BAR_HEIGHT,
                zIndex: (theme) => theme.zIndex.drawer + 1,
                boxShadow:'none',
            }}
        >
            <Toolbar sx={{ minHeight: APP_BAR_HEIGHT,  }}>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{ mr: 0 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer
            variant="temporary"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            ModalProps={{ keepMounted: true }}
            slotProps={{
                paper: {
                    sx: {
                    width: drawerWidth,
                    bgcolor: "#1A1B1E",
                    top: `${APP_BAR_HEIGHT}px`,
                    height: `calc(100% - ${APP_BAR_HEIGHT}px)`,
                    },
                },
            }}
        >
            <Box sx={{ p: 1 }}>
            {/* Header */}
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderBottom: "1px solid #333",
                pb: 2,
                mb: 2,
                }}
            >
                <img src={MyLogo} alt="Leak Data Pro" width={60} height={60} />
                <Box>
                <Typography color="white" fontWeight="bold">
                    Leak Data Pro
                </Typography>
                <Typography color="gray" variant="body2">
                    Reports System
                </Typography>
                </Box>
            </Box>

            {/* Navigation */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Button
                fullWidth
                component={Link}
                to="./dashboard"
                variant={isDashboard ? "contained" : "text"}
                onClick={() => setDrawerOpen(false)}
            >
                <Typography color="white">Dashboard</Typography>
            </Button>

  <Button
    fullWidth
    component={Link}
    to="./reports"
    variant={isReports ? "contained" : "text"}
    onClick={() => setDrawerOpen(false)}
  >
    <Typography color="white">Reports</Typography>
  </Button>
            </Box>

            {/* Footer */}
            <Box
                sx={{
                position: "absolute",
                bottom: 20,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                }}
            >
                <Button variant="contained" component={Link} to={"./"} sx={{ borderRadius: 20, px: 4 }}>
                Logout
                </Button>
            </Box>
            </Box>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flex: 1 }}>
            <Box sx={{ pt: `${APP_BAR_HEIGHT}px`, }}>
                <Outlet />
            </Box>
        </Box>
    </Box>
  );
}