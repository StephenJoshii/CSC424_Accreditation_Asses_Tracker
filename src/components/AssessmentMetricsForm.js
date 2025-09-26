// src/components/AssessmentMetricsForm.js
import React from 'react';
import { Card, CardContent, Typography, TextField, Grid, Button, IconButton, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

// This component receives its state and updater function via props.
function AssessmentMetricsForm({ metricRows, setMetricRows }) {

  const handleInputChange = (index, event) => {
    const values = [...metricRows];
    values[index][event.target.name] = event.target.value;
    setMetricRows(values);
  };

  const handleAddRow = () => {
    setMetricRows([...metricRows, { metric: '', students: '' }]);
  };

  const handleRemoveRow = (index) => {
    const values = [...metricRows];
    values.splice(index, 1);
    setMetricRows(values);
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          3. Instructor Assessment Metrics
        </Typography>
        {metricRows.map((row, index) => (
          <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth name="metric" label="Assessment Metric/Outcome" variant="outlined" value={row.metric} onChange={(event) => handleInputChange(index, event)} />
            </Grid>
            <Grid item xs={10} sm={4}>
              <TextField fullWidth name="students" label="Number of Students" type="number" variant="outlined" value={row.students} onChange={(event) => handleInputChange(index, event)} />
            </Grid>
            <Grid item xs={2} sm={2}>
              <IconButton onClick={() => handleRemoveRow(index)} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Box mt={2}>
          <Button startIcon={<AddCircleOutlineIcon />} onClick={handleAddRow}>
            Add Metric
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AssessmentMetricsForm;