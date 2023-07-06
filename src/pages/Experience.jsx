import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import "../Styles/Experience.css"


const steps = [
  { title: 'School', description: 'Z.P.High School, CGPA :- 9.0' },
  { title: 'College', description: 'VEMU Institute of Technology (ECE), Precentage :- 71%' },
  { title: 'Work Experience', description: 'JIRAX Techs, Building Add-ins, Responsive Websites and UI Designing' },
];
 function Experience() {
  return (
    <div className='exp_cont'>
    <Box sx={{ width: '100%', height:"103px" }}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label.title}</StepLabel>
            <Typography>{label.description}</Typography>
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>
  );
}
export default Experience;