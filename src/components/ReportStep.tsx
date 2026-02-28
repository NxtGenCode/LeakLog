import {
    Typography,
    Box,
    TextareaAutosize,
    TextField
} from "@mui/material";

import type { ReportFormData } from "../pages/ReportEditorPage";

type Props = {
  formData: ReportFormData;
  setFormData: React.Dispatch<React.SetStateAction<ReportFormData>>;
};

export default function ReportStep({ formData, setFormData }: Props) {

    const handleTextChange =
        (field: keyof ReportFormData["report"]) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { value } = event.target; // For text input and textarea
    
            setFormData((prev) => ({
            ...prev,
            report: {
                ...prev.report,
                [field]: value,
            },
        }));
    };

    return (
        <Box
            display="flex"
            width="100%"
            bgcolor="invisible"
            alignItems="center"
            flexDirection="column">
                    
            <Box bgcolor="invisible" sx={{
                display:"flex",
                flexDirection:"column",
                gap:"15px",
                mt:"12px",
                width:{xs:"95%", sm:"100%", md:"50%"}
            }}>
                <Typography color="white" variant="h3">
                    Job Report
                </Typography>
                <Typography color="white">
                    Summarize findings and provide recommendations   
                </Typography>


                { /* Findings Container */ }
                <Box sx ={{
                    flex: 1,
                    bgcolor:"#1A1B1E",
                    padding:"12px",
                    borderRadius:"12px"
                }}>
                    <Typography variant="h5" color="white" pb="6px">
                        Findings *
                    </Typography>
                    <TextareaAutosize
                        maxRows={4}
                        minRows={6}
                        aria-label="maximum height"
                        placeholder="Describe what was found during your inspection."
                        defaultValue=""
                        value={formData.report.findings}
                        onChange={handleTextChange("findings")}
                        style={{
                            width:"100%",
                            height:"50px",
                            borderRadius:"6px",
                            backgroundColor:"#1d1e1e",
                            color:"white"
                        }}
                        
                        />
                </Box>


                { /* Recommended Actions Container */ }
                <Box sx ={{
                    flex: 1,
                    bgcolor:"#1A1B1E",
                    padding:"12px",
                    borderRadius:"12px"
                }}>
                    <Typography variant="h5" color="white" pb="6px">
                        Recommended Actions *
                    </Typography>
                    <TextareaAutosize
                        maxRows={4}
                        minRows={6}
                        aria-label="maximum height"
                        placeholder="List the recommended steps to address the issue..."
                        defaultValue=""
                        value={formData.report.recommendations}
                        onChange={handleTextChange("recommendations")}
                        style={{
                            width:"100%",
                            height:"50px",
                            borderRadius:"6px",
                            backgroundColor:"#1d1e1e",
                            color:"white"
                        }}
                        
                        />
                </Box>

                { /* Estimated Cost & Timeframe Containers */ }
                <Box sx={{display:'flex', flexDirection:'row', width:"100%",bgcolor:"#1A1B1E", gap:"20px", padding:"12px", mb:"12px", borderRadius:"12px"}}>
                
                    <Box sx={{flex:1, bgcolor:"invisible"}}>
                        <Typography sx={{color:"white"}}>
                            Estimated Cost *
                        </Typography>

                        <TextField
                            fullWidth
                            label="Enter estimated job cost"
                            value={formData.report.estimatedCost}
                            onChange={handleTextChange("estimatedCost")}
                            slotProps =
                            {
                                {
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
                                }
                            } >
                        </TextField>
                    </Box>
                        
                    <Box sx={{flex:1, bgcolor:"invisible"}}>
                        <Typography sx={{color:"white"}}>
                            Estimated Timeframe *
                        </Typography>

                        <TextField
                            fullWidth
                            label="Enter estimated time frame"
                            value={formData.report.estimatedTimeFrame}
                            onChange={handleTextChange("estimatedTimeFrame")}
                            slotProps=
                            {
                                {
                                input: {
                                    sx: {
                                            mt:"10px",
                                            color:"white",
                                            pb:"12"
                                    }
                                },
                                inputLabel: {
                                    sx: {
                                            color:"white",
                                            mt:"10px"
                                        }
                                    },
                                }
                            } >                    
                        </TextField>
                    </Box>
                </Box>
            </Box>


        </Box>
    );
}