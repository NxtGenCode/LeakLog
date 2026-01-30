import { AppBar, Toolbar, Box, Drawer, Grid, Typography, Card, CardContent, Stack, Button} from '@mui/material'
import MyLogo from '../assets/logo.png'
import { Link } from 'react-router-dom';

type DashboardPageProps ={
  OnGoToReportsPage: () => void;
};

export default function DashboardPage({OnGoToReportsPage}:DashboardPageProps) {

    const jobCategories = [
        { name: "Plumbing Leak Detection", count: 48 },
        { name: "Pool Leak Detection", count: 7 },
    ];

    return (
    <Box sx={{ bgcolor: "#0D1321", p: 2 }}>
      <Typography variant="h5" sx={{ color: "white", mb: 2 }}>
        Dashboard
      </Typography>

      <Box sx={{ p: 3, bgcolor: "#2C50AB" }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {jobCategories.map((cat) => (
              <Grid item xs={12} sm={6} md={3} key={cat.name}>
                <Button variant="contained" component={Link} to="/reports" sx={{
                  cursor: "pointer", p: 2, textAlign: "center"
                  }}>
                  <CardContent>
                    <Typography variant="h6">{cat.name}</Typography>
                    <Typography variant="body2">{cat.count} jobs</Typography>
                  </CardContent>
                </Button>
              </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}