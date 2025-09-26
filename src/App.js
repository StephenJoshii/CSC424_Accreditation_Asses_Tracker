// src/App.js
import React, { useState } from 'react';

// MUI components
import { CssBaseline, Container, Typography, createTheme, ThemeProvider, Button, Box } from '@mui/material';

// Firebase services and functions
import { db, storage } from './firebase'; // <-- Import your firebase config
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Application components
import CourseInfoForm from './components/CourseInfoForm';
import DocumentUpload from './components/DocumentUpload';
import AssessmentMetricsForm from './components/AssessmentMetricsForm';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [courseInfo, setCourseInfo] = useState({ number: '', cs: '', ce: '' });
  const [selectedFile, setSelectedFile] = useState(null);
  const [metricRows, setMetricRows] = useState([{ metric: '', students: '' }]);
  const [loading, setLoading] = useState(false); // State to handle submission process

  /**
   * Handles the entire form submission process:
   * 1. Uploads the selected file to Firebase Storage.
   * 2. Gets the URL of the uploaded file.
   * 3. Saves all form data, including the file URL, to Firestore.
   */
  const handleSubmit = async () => {
    // Basic validation
    if (!courseInfo.number || !selectedFile) {
      alert("Please fill out the course number and select a file.");
      return;
    }

    setLoading(true);

    try {
      // 1. Upload file to Firebase Storage
      const storageRef = ref(storage, `documents/${selectedFile.name}_${Date.now()}`);
      const snapshot = await uploadBytes(storageRef, selectedFile);

      // 2. Get the file's download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      // 3. Create the data object to save in Firestore
      const assessmentData = {
        courseInfo,
        metricRows,
        documentUrl: downloadURL,
        documentName: selectedFile.name,
        submittedAt: new Date(),
      };

      // 4. Add the document to the 'assessments' collection in Firestore
      const docRef = await addDoc(collection(db, "assessments"), assessmentData);

      alert(`Assessment submitted successfully! Document ID: ${docRef.id}`);
      // Optionally, reset the form here
      
    } catch (error) {
      console.error("Error submitting assessment: ", error);
      alert("An error occurred while submitting the assessment. Please try again.");
    } finally {
      setLoading(false); // Re-enable the button
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <header style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Accreditation Assessment Tracker
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary">
            University of Southern Mississippi (USM)
          </Typography>
        </header>
        <main>
          <CourseInfoForm courseInfo={courseInfo} setCourseInfo={setCourseInfo} />
          <DocumentUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
          <AssessmentMetricsForm metricRows={metricRows} setMetricRows={setMetricRows} />
        </main>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            onClick={handleSubmit} 
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Submitting...' : 'Submit Assessment'}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;