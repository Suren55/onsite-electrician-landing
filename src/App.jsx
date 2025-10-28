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
import HeroPlayful from "./sections/HeroPlayful";
import HeroImageSplit from "./sections/HeroImageSplit";
import TrustBar from "./sections/TrustBar";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Gallery from "./sections/Gallery";
import ServiceAreas from "./sections/ServiceAreas";
import Financing from "./sections/Financing";
import Emergency24x7 from "./sections/Emergency24x7";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      {/* <Hero /> */}
      {/* <HeroPlayful /> */}
      <HeroImageSplit />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <ServiceAreas />
      <Financing />
      <Emergency24x7 />

      <Footer />
    </ThemeProvider>
  );
}
