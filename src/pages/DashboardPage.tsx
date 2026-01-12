import { AppBar, Toolbar, Box, Drawer, Grid, Typography, Card, CardContent, Stack, Button} from '@mui/material'
import MyLogo from '../assets/logo.png'

export default function DashboardPage() {

    const jobCategories = [
        { name: "Plumbing Leak Detection", count: 48 },
        { name: "Pool Leak Detection", count: 7 },
    ];

    return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor:'green'
      }}
    >
    {
    /* App Bar */}
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

        <Drawer>

        </Drawer>

      <Box sx={{ flex: 1, display: "flex", gap: 0 }}>
        {/* Sidebar */}
        <Box sx={{display:'flex', width: 240, bgcolor: "#2D3142" }}>
            <Stack sx={{width:"100%"}}>
                <Button sx={{color:'white', justifyContent:'left', width:'100%'}}>
                    Dashboard
                </Button>
                <Button sx={{color:'white', justifyContent:'left', width:'100%'}}>
                    Reports
                </Button>
                <Button sx={{color:'white', justifyContent:'left', width:'100%'}}>
                    Logout
                </Button>
            </Stack>
        </Box>

        {/* Main content */}
        <Box sx={{ flex: 1, bgcolor: "#0D1321", p: 2 }}>

            <Typography variant="h5" sx={
                    {color:'white'}
                }>
                Dashboard
            </Typography>
             <Box sx={{ p: 3, flex: 1, bgcolor: "#2C50AB" }}>
                <Grid container spacing={2} sx={{justifyContent:'center'}}>
                    {jobCategories.map((cat) => (
                    <Grid item xs={12} sm={6} md={3} key={cat.name}>
                        <Card
                        sx={{
                            cursor: "pointer",
                            p: 2,
                            textAlign: "center",
                            "&:hover": { boxShadow: 6 },
                        }}
                        onClick={function(){}}
                        >
                        <CardContent>
                            <Typography variant="h5">{cat.name}</Typography>
                            <Typography variant="body2">{cat.count} jobs</Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ textAlign: "center", py: 0 , color:'white', bgcolor:'#1976d2'}}>
        Copyright 2026 LeakDataPro, LLC.
      </Box>

    </Box>
    );
}