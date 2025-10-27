import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Typography,
} from "@mui/material";
import theme from "./theme";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Hero />

      {/* Footer placeholder stays for now */}
      <Box sx={{ py: 6, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography color="text.secondary" variant="body2">
            © {new Date().getFullYear()} Demo — OnSite Digital
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
