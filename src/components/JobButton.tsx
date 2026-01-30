import {Button, Box, Typography} from '@mui/material'

export default function JobButton({ job, onClick }) {

  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        bgcolor: "rgb(4, 80, 168)",
        display: "flex",
        justifyContent: "start",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box sx={{ display: "flex" }}>
          <img src={job.image} width="120" height="120" />
        </Box>

        <Box sx={{ color: "white", pl: "10px" }}>
          <Typography>{job.address}</Typography>
          <Typography>{job.cityStateZip}</Typography>
          <Typography>{job.customerName}</Typography>
        </Box>
      </Box>
    </Button>
  );
};