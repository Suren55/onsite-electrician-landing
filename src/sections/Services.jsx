import { Box, Container, Typography } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import content from "../content/electrician.json";

export default function Services() {
  const items = content.services || [];
  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 3 }}>
          Electrical Services
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5, maxWidth: 760 }}>
          From quick fixes to full upgrades, we handle residential and
          commercial work with permits and code compliance.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
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
