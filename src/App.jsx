// src/App.jsx
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Typography,
} from "@mui/material";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* PAGE SHELL ONLY — sections come next */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(180deg, #0A2540 0%, #0A2540 60%, #0E2F4F 100%)",
        }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{ color: "white", fontSize: { xs: 36, sm: 48, md: 56 } }}>
            Electrician Landing — OnSite Digital (Skeleton)
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.9)", mt: 2 }}>
            Next: add Hero, Trust Bar, Services, and more.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Typography color="text.secondary" variant="body2">
            © {new Date().getFullYear()} Demo — OnSite Digital
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
