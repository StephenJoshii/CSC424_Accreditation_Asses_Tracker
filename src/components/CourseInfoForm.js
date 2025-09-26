// src/App.js
import { CssBaseline, Container, Typography, createTheme, ThemeProvider } from '@mui/material';

// Create a dark theme instance
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {}
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
          {}
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;