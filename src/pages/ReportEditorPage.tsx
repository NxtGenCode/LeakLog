import * as React from 'react';

import { Button, Stepper, Step, StepButton } from '@mui/material'
import { keyframes } from "@mui/system";
import dayjs from 'dayjs';

import CustomerInfoStep from '../components/CustomerInfoStep'
import LeakDetailsStepper from '../components/LeakDetailsStepper'
import ImagesStep from '../components/ImagesStep';
import ReportStep from '../components/ReportStep';

import {
    Box,
    Typography,
} from '@mui/material'

const steps = ['Customer Info', 'Leak Details', 'Images', 'Report'];

const breathe = keyframes`
  0% {
    background-position: 0% 50%;
    filter: brightness(0.95);
  }
  50% {
    background-position: 100% 50%;
    filter: brightness(1.05);
  }
  100% {
    background-position: 0% 50%;
    filter: brightness(0.95);
  }
`;

export type ReportFormData = {
  customerInfo: {
    customerName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    jobStatus: string;
    jobDate: dayjs.Dayjs | null;
  };
  
  leakDetails: {
    leakType: string;
    leakLocation: string;
    waterSource: string;
    emergencyLevel: string;
    visibleDamage: boolean;
    additionalNotes: string;
  };

  images: {
    files: File[];
  };

  report: {
    findings: string;
    recommendations: string;
    estimatedCost: string;
    estimatedTimeFrame: string;
  };
};


export default function ReportEditorPage() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [completed, setCompleted] = React.useState < { [k: number]: boolean; } > ({});

  const [formData, setFormData] = React.useState<ReportFormData>({
    customerInfo: {
      customerName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      jobStatus: "1",
      jobDate: null,
    },

    leakDetails: {
      leakType: "",
      leakLocation: "",
      waterSource: "",
      emergencyLevel: "",
      visibleDamage: false,
      additionalNotes: "",
    },

    images: {
      files: [],
    },

    report: {
      findings: "",
      recommendations: "",
      estimatedCost: "",
      estimatedTimeFrame: "",
    },
});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  React.useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [activeStep]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={
      {
        display:'flex',
        flexDirection:'column',
        width: '100%',
        minHeight:'100vh',
        background: `
          linear-gradient(
            135deg,
          #273064,
          #1E2236,
          #1e254e,
          #1e254e
          )`,
        backgroundSize: "300% 300%",
        animation: `${breathe} 30s ease infinite`,
        pt:'6px'
      }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)} sx={
                {
                    color:'invisible',
                    '& .MuiStepLabel-label': {
                        color:"white"
                    },
                    '& .MuiStepLabel-label.Mui-active': {
                        color: '#8dffa0',
                        fontWeight: 'bold',
                    },
                }
            }>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      
      
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            
          {
            <Box sx={{ flex: 1, display: "flex" }}>
            {
              activeStep === 0 ? <CustomerInfoStep formData={formData} setFormData={setFormData} /> :
              activeStep === 1 ? <LeakDetailsStepper formData={formData} setFormData={setFormData} /> :
              activeStep === 2 ? <ImagesStep formData={formData} setFormData={setFormData} /> :
              activeStep === 3 ? <ReportStep formData={formData} setFormData={setFormData}/> :
              <CustomerInfoStep formData={formData} setFormData={setFormData}/>
            }
            </Box>
          }
          </React.Fragment>
        )}
      

      <Box component="footer" sx={{width:'100%'}}>
              <Box sx={{display:'flex', width:'100%'}}>
                  <Button
                    //disabled={activeStep === 0}
                    variant='outlined'
                    onClick={handleBack}
                    sx = {
                        {
                          flex:1,
                          mr: 1,
                          color:'white'
                        }
                    }
                  >
                    PREV
                </Button>
                <Button variant="contained" onClick={handleNext} sx={{ flex:1}}>
                  Next
                </Button>
                </Box>
                {
                //  activeStep !== steps.length && (completed[activeStep] ? (
                    //<Typography variant="caption" sx={{ display: 'inline-block' }}>
                    //  Step {activeStep + 1} already completed
                   // </Typography>
                  //) : (
                    //<Button onClick={handleComplete}>
                    //  {
                    //    completedSteps() === totalSteps() - 1
                    //    ? 'Finish'
                    //    : 'Complete Step'
                    //  }
                    //</Button>
                  //))
                }
            </Box>
      
    </Box>
  );
}