import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Endereço',
  'Pagamento',
  'Revisão',
];

export default function BuyingSteps({ActiveStep=0}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper 
        activeStep={ActiveStep} 
        alternativeLabel
        sx={{
          '& .MuiStepIcon-root.Mui-active': {
            color: 'rgb(23 37 84)',
          },
          '& .MuiStepIcon-root.Mui-completed': {
            color: 'rgb(23 37 84)',
          }
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
