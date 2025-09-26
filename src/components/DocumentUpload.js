// src/components/DocumentUpload.js

import React, { useState } from 'react';

// MUI components for the upload section
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

/**
 * Renders the document upload section of the form.
 * Allows users to select files from their local machine.
 */
function DocumentUpload() {
  // State hook to store the selected file's metadata
  const [selectedFile, setSelectedFile] = useState(null);

  /**
   * Handles the change event from the file input element.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The file input change event.
   */
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

        {/* This is the actual file input, but it's hidden */}
        <input
          accept="application/pdf, .doc, .docx, .xls, .xlsx"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleFileChange}
        />

        {/* This styled button will trigger the hidden input */}
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
            Select Documents
          </Button>
        </label>

        {/* Displays the name of the selected file */}
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