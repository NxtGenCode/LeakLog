import { useState } from 'react'
import { Box, TextField, Stack, Button, Typography, Autocomplete, IconButton} from '@mui/material'

import HouseImage from '../assets/front_of_house.png'
import MenuIcon from '@mui/icons-material/Menu'
import MyLogo from '../assets/logo.png'

import { Link } from 'react-router-dom';

import JobButton from '../components/JobButton.js'

export default function ReportsPage() {
    const [jobs, setJobs] = useState([
    {
        id: 1,
        address: "8721 Main St",
        cityStateZip: "Los Angeles, CA 90001",
        customerName: "Steve Williams",
        image: HouseImage,
    },
    {
        id: 2,
        address: "8721 Main St",
        cityStateZip: "Los Angeles, CA 90001",
        customerName: "Steve Williams",
        image: HouseImage,
    },
    {
        id: 3,
        address: "8721 Main St",
        cityStateZip: "Los Angeles, CA 90001",
        customerName: "Steve Williams",
        image: HouseImage,
    },
    {
        id: 4,
        address: "8721 Main St",
        cityStateZip: "Los Angeles, CA 90001",
        customerName: "Steve Williams",
        image: HouseImage,
    },
    {
        id: 5,
        address: "8721 Main St",
        cityStateZip: "Los Angeles, CA 90001",
        customerName: "Steve Williams",
        image: HouseImage,
    },
    ]);

    return (
        <Box component="div" flex="1" display="flex" bgcolor="#1B211A" width="100%" height="100vh" flexDirection="column">  
            <Stack direction="column" useFlexGap spacing={2} sx={{
                padding:'10px',
                bgcolor:'#invisible',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Autocomplete
                    freeSolo 
                    fullWidth
                    id="free-solo-2-demo"
                    disableClearable
                    options={["Eric, Heinz", "Steve, Willams"]}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search jobs"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                type: 'search',
                            },
                            inputLabel: {
                                sx: {
                                color: "#9CA3AF", // default label
                                "&.Mui-focused": {
                                    color: "#3B82F6", // focused label
                                },
                            }}
                        }}
                    />
                    )}>
                </Autocomplete>

                <Button variant="contained" component={Link} to="/reports/new" sx={{
                    width:"50%",
                    alignItems:'end'
                }}>
                    New Job
                </Button>
            </Stack>

            <Stack height="100%" bgcolor="invisible" color="white">

                <Box bgcolor="invisible">
                    <Typography sx={{color:"white", pt:"10px", pl:"10px"}}>
                        Reports
                    </Typography>
                    <Typography sx={{color:"white", pb:"10px", pl:"10px"}}>
                        10 of 10 jobs
                    </Typography>
                </Box>

                <Box bgcolor="invisible" padding="5px" sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"15px",
                    width:{xs:"100%", sm:"100%", md:"100%"},
                    
                }}>
                    {jobs.map((job) => (
                        <JobButton
                        key={job.id}
                        job={job}
                        onClick={() => console.log("Clicked job:", job)}
                        />
                    ))}
                </Box>
            </Stack>
        </Box>
    );
}