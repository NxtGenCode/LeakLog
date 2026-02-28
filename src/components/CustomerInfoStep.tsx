import * as React from 'react';

import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    Typography,
    MenuItem,
} from '@mui/material';

import type { SelectChangeEvent } from '@mui/material/Select';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import type { ReportFormData } from "../pages/ReportEditorPage";

type Props = {
  formData: ReportFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReportFormData>>;
};

export default function CustomerInfoStep({ formData, setFormData }: Props) {
    
    const handleTextChange =
    (field: keyof ReportFormData["customerInfo"]) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
        ...prev,
        customerInfo: {
            ...prev.customerInfo,
            [field]: event.target.value,
        },
        }));
    };

    const handleSelectChange =
    (field: keyof ReportFormData["customerInfo"]) =>
    (event: SelectChangeEvent) => {
        setFormData(prev => ({
        ...prev,
        customerInfo: {
            ...prev.customerInfo,
            [field]: event.target.value,
        },
        }));
    };

    return(
        <Box
                display="flex"
                bgcolor="invisible"
                width="100%"
                alignItems="center"
                flexDirection="column">
            
                <Box bgcolor="invisible" sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"15px",
                    mt:"12px",
                    width:{xs:"95%", sm:"100%", md:"50%"}
                }}>
                    <Box sx={{display:'block', bgcolor:'invisible', p:'12px'}}>
                        <Typography component="h1" sx={{color:'white'}}>
                            Customer Information
                        </Typography>
                        <Typography component="p" sx={{color:'white', fontSize:'12px'}}>
                            Enter the customer's contact details and property information
                        </Typography>
                    </Box>
                    <Box width="100%"
                        bgcolor="#1A1B1E"
                        borderRadius="12px"
                        sx ={{
                            p:"12px"
                        }}>
                        <Typography sx={{color:"white"}}>
                            Customer Name *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter job name"
                            value={formData.customerInfo.customerName}
                            onChange={handleTextChange("customerName")}
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
                        sx = {{
                            p:"12px"
                        }}>
                        <Typography sx = {{
                            color:"white"
                        }}>
                            Property Address *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter job address"
                            value={formData.customerInfo.address}
                            onChange={handleTextChange("address")}
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
                            Phone Number *
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter phone number"
                            value={formData.customerInfo.phone}
                            onChange={handleTextChange("phone")}
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
                            Email Address*
                        </Typography>
                        <TextField
                            fullWidth
                            label="Enter email"
                            value={formData.customerInfo.email}
                            onChange={handleTextChange("email")}
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
                                        value={formData.customerInfo.jobStatus}
                                        onChange={handleSelectChange("jobStatus")}
                                        label="Active"
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
                                    <MenuItem value={"1"} sx={{color:"orange"}}>Active</MenuItem>
                                    <MenuItem value={"2"} sx={{color:"yellow"}}>Pending</MenuItem>
                                    <MenuItem value={"3"} sx={{color:"green"}}>Completed</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    


                    <Box sx={{flex:1}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={formData.customerInfo.jobDate}
                                onChange={(newValue) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        customerInfo: {
                                        ...prev.customerInfo,
                                        jobDate: newValue,
                                        },
                                    }))
                                }
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

                
            </Box>
        </Box>
    );
}