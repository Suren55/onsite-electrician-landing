import { Box, Container, Typography, Paper, CardMedia } from "@mui/material";
import content from "../content/electrician.json";

export default function Gallery() {
  const images = content.gallery || [];

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F7FAFC" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 3 }}>
          Featured Work
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5, maxWidth: 760 }}>
          A few recent projects — from service upgrades to lighting and EV
          installations.
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
          {images.map((img, i) => (
            <Paper
              key={i}
              variant="outlined"
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                minHeight: { xs: 240, sm: 260, md: 320 }, // uniform tile height
              }}>
              <CardMedia
                component="img"
                image={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
