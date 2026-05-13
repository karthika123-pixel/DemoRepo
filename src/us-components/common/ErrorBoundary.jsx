import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '60vh',
              textAlign: 'center',
              gap: 3
            }}
          >
            <Typography variant="h4" color="error" gutterBottom>
              Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We're sorry for the inconvenience. Please try refreshing the page or contact support if the issue persists.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => window.location.reload()}
              sx={{ 
                borderRadius: '20px',
                px: 4,
                py: 1,
                background: 'linear-gradient(135deg, #1d4230, #2e6f4e)'
              }}
            >
              Refresh Page
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
