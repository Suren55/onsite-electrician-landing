import { Box, Container, Typography } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import content from "../content/electrician.json";

export default function Services() {
  const items = content.services || [];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)",
      }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          color="primary"
          sx={{ letterSpacing: 1 }}>
          Services
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            letterSpacing: -0.2,
            lineHeight: 1.1,
            mt: 0.5,
          }}>
          Electrical Services
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1, mb: { xs: 3, md: 4 }, maxWidth: 760 }}>
          From quick fixes to full upgrades, we handle residential and
          commercial work with permits and code compliance.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, sm: 2.5, md: 3 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}>
          {items.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              title={s.title}
              blurb={s.blurb}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
