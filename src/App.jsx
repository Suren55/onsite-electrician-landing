import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Typography,
} from "@mui/material";
import theme from "./theme";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Gallery from "./sections/Gallery";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Gallery />

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
