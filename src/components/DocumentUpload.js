// src/components/DocumentUpload.js
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// This component receives its state and updater function via props.
function DocumentUpload({ selectedFile, setSelectedFile }) {

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          2. Dynamic Document Upload
        </Typography>
        <input accept="application/pdf, .doc, .docx, .xls, .xlsx" style={{ display: 'none' }} id="raised-button-file" type="file" onChange={handleFileChange} />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
            Select Document
          </Button>
        </label>
        {selectedFile && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              Selected file: <strong>{selectedFile.name}</strong>
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default DocumentUpload;