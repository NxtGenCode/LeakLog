import React from "react"
import { Box, AppBar, Toolbar, Typography, Stack, Button, Drawer, CssBaseline } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";
import MyLogo from '../assets/logo.png'

export default function AppLayout() {
    const drawerWidth = 240;
    
      return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <React.Fragment>
          <CssBaseline />
          <AppBar position="fixed" sx={{ height:"50px", zIndex: (t) => t.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
              <Typography variant="h6">Leak Data Pro</Typography>
            </Toolbar>
          </AppBar>

          {/* Left sidebar */}
          <Drawer variant="permenant" close sx={{
                              }}
                              slotProps ={{
                                  paper: {
                                      sx: {
                                          backgroundColor: 'blue',
                                          height:'100%',
                                          top:'50px'
                                      },
                                  }
                              }}>
                              <Box>
                              <div id="header" style={{
                                  display:'flex',
                                  alignItems:'center',
                                  justifyContent:'left',
                                  borderBottom:'1px solid black',
                                  paddingBottom:'30px',
                              }}>
                                  <img id="logo22" alt="DataLeakPro" src={MyLogo} width="80" height="80"
                                      style={
                                      {
                                          margin:"0px",
                                          padding:"0"
                                      }
                                  }/>
                                  <div style={{
          
                                  }}>
                                      <h2 style={{textAlign:'left', color:'white'}}>Leak Data Pro</h2>
                                      <h5 style={{textAlign:'left', color:'grey'}}>Reports System</h5>
                                  </div>
                              </div>
          
                           <Box component="section" sx={{
                                  display:'flex',
                                  flexDirection:'column',
                                  padding:'10px',
                                  gap:'10px'
                              }}>
                                  <Button variant="text" sx={{
                                      width:"100%",
          
                                  }}>
                                      <Typography color="white">
                                          Dashboard
                                      </Typography>
                                  </Button>
                                  <Button variant="contained" sx={{
                                      width:"100%",
                                  }}>
                                      <Typography color="white">
                                          Reports
                                      </Typography>
                                  </Button>
                              </Box>
                              <Box component="footer" sx={{
                                  display:'flex',
                                  position:'absolute',
                                  justifyContent:'center',
                                  width:'100%',
                                  height:'100px',
                                  bottom:'50px',
                                  left:'0px',
                                  borderTop:'1px solid black',
                              }}>
                                  <Button variant="contained" sx={{
                                      display:'flex',
                                      width:'200px',
                                      margin:'25px',
                                      borderRadius:'20px'
                                  }}>
                                      <Typography sx={{
                                          color:'#fffff'
                                      }}>
                                          Logout
                                      </Typography>
                                  </Button>
                              </Box>
                              </Box>
                          </Drawer>
          </React.Fragment>
          
    
          {/* Main */}
          <Box component="main" sx={{ flex: 1 }}>
            <Box sx={{ pt: "50px" }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      );
}