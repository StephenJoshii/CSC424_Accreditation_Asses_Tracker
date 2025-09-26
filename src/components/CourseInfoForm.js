// src/components/CourseInfoForm.js

import React, { useState } from 'react';

// MUI components for building the form structure
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';

/**
 * Renders the course information section of the form.
 * Captures course number and student counts.
 */
function CourseInfoForm() {
  // State hooks for form inputs
  const [courseNumber, setCourseNumber] = useState('');
  const [csStudents, setCsStudents] = useState('');
  const [ceStudents, setCeStudents] = useState('');

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          1. Course Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="courseNumber"
              label="Course Number"
              variant="outlined"
              placeholder="e.g., CSC 424"
              value={courseNumber}
              onChange={(e) => setCourseNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="csStudents"
              label="Number of CS Students"
              type="number"
              variant="outlined"
              value={csStudents}
              onChange={(e) => setCsStudents(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="ceStudents"
              label="Number of CEng Students"
              type="number"
              variant="outlined"
              value={ceStudents}
              onChange={(e) => setCeStudents(e.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CourseInfoForm;