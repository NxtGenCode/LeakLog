import * as React from 'react';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button, Stack } from '@mui/material'

import dayjs from 'dayjs';
import { useState } from 'react'

import {
    Box,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    MenuItem,
} from '@mui/material'

import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ReportEditorPage() {
    const [jobStatus, setJobStatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setJobStatus(event.target.value);
    };

    return (
        <Box component="div"
            flex={1}
            display="flex"
            bgcolor="#212122"
            width="100%"
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"> 
                <Box minHeight="100vh" bgcolor="invisible" sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"15px",
                    mt:"12px",
                    pb:"40px",
                    pt:"40px",
                    width:{xs:"95%", sm:"100%", md:"50%"}
                }}>
                    <Box width="100%"
                        bgcolor="#1A1B1E"
                        borderRadius="12px"
                        sx ={{
                            p:"12px"
                        }}>
                        <Typography sx={{color:"white"}}>
                            Job Name *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter job name"
                            slotProps={{
                                input: {
                                    sx: {
                                        mt:"10px",
                                        color:"white"
                                    }
                                },
                                inputLabel: {
                                    sx: {
                                        color:"white",
                                        mt:"10px"
                                    }
                                },
                            }}>
                                
                        </TextField>
                    </Box>

                    <Box width="100%"
                        bgcolor="#1A1B1E"
                        borderRadius="12px"
                        sx ={{
                            p:"12px"
                        }}>
                        <Typography sx={{color:"white"}}>
                            Address *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter job address"
                            slotProps={{
                                input: {
                                    sx: {
                                        mt:"10px",
                                        color:"white"
                                    }
                                },
                                inputLabel: {
                                    sx: {
                                        color:"white",
                                        mt:"10px"
                                    }
                                },
                            }}>
                                
                        </TextField>
                    </Box>

                    <Box width="100%"
                        bgcolor="#1A1B1E"
                        borderRadius="12px"
                        sx ={{
                            p:"12px"
                        }}>
                        <Typography sx={{color:"white"}}>
                            Phone *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter phone number"
                            slotProps={{
                                input: {
                                    sx: {
                                        mt:"10px",
                                        color:"white"
                                    }
                                },
                                inputLabel: {
                                    sx: {
                                        color:"white",
                                        mt:"10px"
                                    }
                                },
                            }}>
                                
                        </TextField>
                    </Box>

                    <Box width="100%"
                        bgcolor="#1A1B1E"
                        borderRadius="12px"
                        sx ={{
                            p:"12px"
                        }}>
                        <Typography sx={{color:"white"}}>
                            Email *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter email"
                            slotProps={{
                                input: {
                                    sx: {
                                        mt:"10px",
                                        color:"white"
                                    }
                                },
                                inputLabel: {
                                    sx: {
                                        color:"white",
                                        mt:"10px"
                                    }
                                },
                            }}>
                                
                        </TextField>
                    </Box>
                
                    <Box sx ={{
                        width:"100%",
                        display:"flex",
                        bgcolor:"#1A1B1E",
                        p:"12px",
                        gap:"15px",
                        borderRadius:"12px",
                        justifyContent:"center",
                    }}> 
                

                            <Box sx={{flex:1, minWidth:"80px"}}>
                                <FormControl fullWidth>
                                    <InputLabel variant="outlined" id="demo-simple-select-label" sx={{
                                        color:"white"
                                    }}>Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={jobStatus}
                                        label="Active"
                                        onChange={handleChange}
                                        sx ={{
                                            color:"white",
                                        }}
                                        MenuProps={{
                                            PaperProps: {
                                            sx: {
                                                bgcolor: "#0d0d0d",
                                                color: "white",
                                            },
                                        },
                                        }}
                                    >
                                    <MenuItem value={1} sx={{color:"orange"}}>Active</MenuItem>
                                    <MenuItem value={2} sx={{color:"yellow"}}>Pending</MenuItem>
                                    <MenuItem value={3} sx={{color:"green"}}>Completed</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    


                    <Box sx={{flex:1}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                defaultValue={dayjs('2026-01-30')}
                                label="Select date"
                                slotProps={{
                                    textField: {
                                    sx: {
                                        width:"100%",
                                        "& .MuiInputLabel-root": {
                                            color: "#F0EAD6",
                                        },
                                        "& .MuiPickersOutlinedInput-root": {
                                            color: "#F0EAD6",
                                        },
                                        "& .MuiIconButton-root": {
                                            color: "#F0EAD6", // calendar icon color
                                        },
                                        "& .MuiIconButton-root:hover": {
                                            color: "#19C37D",
                                        },
                                    },
                                },
                                }}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>

                <Box width="100%"
                    bgcolor="#1A1B1E"
                    borderRadius="12px"
                    sx ={{
                        p:"12px"
                    }}>
                    <Typography sx={{color:"white"}}>
                        Description (Optional)
                    </Typography>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Empty"
                        style={{ width:"100%", minHeight:"100px"}}
                    />
                </Box>
                
                <Stack bgcolor="invisible" gap="15px">
                    <Button variant="contained">
                       Create Job 
                    </Button>
                    <Button variant="contained">
                       Cancel
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}