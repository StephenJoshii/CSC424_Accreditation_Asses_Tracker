// src/components/CourseInfoForm.js
import React from 'react';
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';

// This component now receives its state and updater function via props.
function CourseInfoForm({ courseInfo, setCourseInfo }) {
  
  /**
   * Handles input changes and updates the parent state.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourseInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          1. Course Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="number" label="Course Number" variant="outlined" value={courseInfo.number} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="cs" label="Number of CS Students" type="number" variant="outlined" value={courseInfo.cs} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth name="ce" label="Number of CEng Students" type="number" variant="outlined" value={courseInfo.ce} onChange={handleChange}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CourseInfoForm;