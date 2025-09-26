// src/App.js

// Core MUI components for theming and layout
import { CssBaseline, Container, Typography, createTheme, ThemeProvider } from '@mui/material';

// Application-specific components
import CourseInfoForm from './components/CourseInfoForm';
import DocumentUpload from './components/DocumentUpload'; // Import the new component

// Defines the dark theme for the entire application
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/**
 * The main application component.
 * Sets up the theme, layout, and renders page content.
 */
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <header style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Accreditation Assessment Tracker
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary">
            University of Southern Mississippi (USM)
          </Typography>
        </header>
        <main>
          <CourseInfoForm />
          <DocumentUpload /> {/* Add the new component here */}
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;