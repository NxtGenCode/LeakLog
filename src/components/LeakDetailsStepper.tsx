import * as React from 'react';

import {
    Stack,
    Typography,
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    InputLabel,
    OutlinedInput,
    Grid,
    FormGroup,
    Checkbox,
    TextareaAutosize,
    
} from '@mui/material';

import type { SelectChangeEvent } from '@mui/material/Select';
import type { ReportFormData } from "../pages/ReportEditorPage";

type Props = {
  formData: ReportFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReportFormData>>;
};

export default function LeakDetailsStepper({ formData, setFormData }: Props) {

    const handleTextChange =
    (field: keyof ReportFormData["leakDetails"]) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target; // For text input and textarea

        setFormData((prev) => ({
        ...prev,
        leakDetails: {
            ...prev.leakDetails,
            [field]: value,
        },
        }));
    };

    // Handler for checkboxes
    const handleCheckboxChange =
    (field: keyof ReportFormData["leakDetails"]) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target; // For checkbox input

        setFormData((prev) => ({
        ...prev,
        leakDetails: {
            ...prev.leakDetails,
            [field]: checked, // Update with boolean value for checkbox
        },
        }));
    };
    
    const handleSelectChange =
        (field: keyof ReportFormData["leakDetails"]) =>
        (event: SelectChangeEvent) => {
            setFormData(prev => ({
            ...prev,
            leakDetails: {
                ...prev.leakDetails,
                [field]: event.target.value,
            },
         }));
    };

    return (

    <Box display='flex' width="100%" justifyContent="center" sx={
            {
                bgcolor:'invisible',
            }
        }>
        <Stack display="flex" bgcolor="invisible" gap="10px" sx={{
            width:{xs:"95%", sm:"100%", md:"50%"}
        }}>
            <Box>
            <Typography borderRadius={3} sx={
                {
                    color:"white",
                    bgcolor:"invisible",
                    padding:"12px"
                }}>
                Leak Assessment<br></br>Provide detailed information about the leak
            </Typography>
            </Box>

            <Box bgcolor="white" borderRadius={3} padding="12px" width="100%" sx={{
                color:'white',
                bgcolor:"#1A1B1E"
            }}>
                <FormControl fullWidth>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{color:'white'}}>Leak Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="leak-slab"
                        value={formData.leakDetails.leakType}
                        onChange={handleTextChange("leakType")}
                        name="radio-buttons-group"
                        sx={{bgcolor:"invisible", gap:"10px"}}
                    >
                        <FormControlLabel value="leak-slab" control={<Radio />} label="Slab Leak" />
                        <FormControlLabel value="leak-structual" control={<Radio />} label="Structual Leak" />
                        <FormControlLabel value="leak-plumbing" control={<Radio />} label="Plumbing Leak" />
                        <FormControlLabel value="leak-other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box pt="12px" bgcolor="#1A1B1E" borderRadius={3} padding="5px">
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="component-outlined" sx={
                    {
                        color:'white',
                    }}>
                    Leak Location *
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue=""
                        value={formData.leakDetails.leakLocation}
                        onChange={handleTextChange("leakLocation")}
                        label="Leak Location *"
                        sx ={{
                            "& .MuiInputBase-input" : {
                                color:'white'
                            }
                        }}
                    />
                </FormControl>
            </Box>

            <Box pt="12px" bgcolor="#1A1B1E" borderRadius={3} padding="5px">
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="component-outlined" sx={
                    {
                        color:'white',
                    }}>
                    Water Source
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue=""
                        value={formData.leakDetails.waterSource}
                        onChange={handleTextChange("waterSource")}
                        label="Water Source"
                        sx ={{
                            "& .MuiInputBase-input" : {
                                color:'white'
                            }
                        }}
                    />
                </FormControl>
            </Box>

            <Box bgcolor="#1A1B1E" borderRadius={3} padding="12px">

                <FormControl fullWidth>
                    <FormLabel id="emergency-level-radio-buttons-group-label" sx={{color:'white', '&.Mui-focused': { color: 'white', },pb:'12px'}}> Emergency Level *</FormLabel>
                    <RadioGroup
                        aria-labelledby="emergency-level-radio-buttons-group-label"
                        defaultValue="low"
                        value={formData.leakDetails.emergencyLevel}
                        onChange={handleSelectChange("emergencyLevel")}
                        name="emergency-level-radio-buttons-group"
                    >
                        <Grid container spacing={2}>
                        
                            <Grid size={6} sx={{pl:'12px', bgcolor:'#2e2f30', borderRadius:'12px'}}>
                                <FormControlLabel sx={{color:'white'}} value="low" control={<Radio/>} label="Low"/>
                            </Grid>
                            <Grid size={6} sx={{pl:'12px', bgcolor:'#baab01ee', borderRadius:'12px'}}>
                                <FormControlLabel sx={{color:'white'}} value="medium" control={<Radio/>} label="Medium"/>
                            </Grid>
                            <Grid size={6} sx={{pl:'12px', bgcolor:'#ba6701ee', borderRadius:'12px'}}>
                                <FormControlLabel sx={{color:'white'}} value="high" control={<Radio/>} label="High"/>
                            </Grid>
                            <Grid size={6} sx={{pl:'12px', bgcolor:'#ba2901ee', borderRadius:'12px'}}>
                                <FormControlLabel sx={{color:'white'}} value="critical" control={<Radio/>} label="Critical"/>
                            </Grid>
                            
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box bgcolor="#1A1B1E" borderRadius={3}>
                <FormGroup>
                    <FormControlLabel
                        control = { <Checkbox checked={formData.leakDetails.visibleDamage} onChange={handleCheckboxChange("visibleDamage")}/> }
                        label="Visible damage present."
                        sx={{
                            color:'white',
                            padding:'12px',
                        }}
                    />
                </FormGroup>
            </Box>

            <Box width="100%"
                    bgcolor="#1A1B1E"
                    borderRadius="12px"
                    sx ={{
                        p:"12px",
                        mb:"12px"
                    }}>
                    <Typography sx={{color:"white", pb:'6px'}}>
                        Additional Notes (Optional)
                    </Typography>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Describe any additional observations or concerns..."
                        style={{ width:"100%", minHeight:"100px", borderRadius:'6px'}}
                        value={formData.leakDetails.additionalNotes}
                        onChange={handleTextChange("additionalNotes")}
                    />
                </Box>
        </Stack>
    </Box>
    );
}