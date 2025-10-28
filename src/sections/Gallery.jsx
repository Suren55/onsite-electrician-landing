import {
  Box,
  Container,
  Typography,
  Paper,
  CardMedia,
  Stack,
} from "@mui/material";
import content from "../content/electrician.json";

export default function Gallery() {
  const images = content.gallery || [];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)",
      }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: 1 }}>
            Our Work
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
            Featured Work
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            A few recent projects — from service upgrades to lighting and EV
            installations.
          </Typography>
        </Stack>

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
          {images.map((img, i) => (
            <Tile key={i} img={img} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* --- subcomponents --- */
function Tile({ img }) {
  const { src, alt, caption } = img || {};
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        borderColor: "divider",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.86) 100%)",
        minHeight: { xs: 220, sm: 260, md: 300 },
        transition: "transform 180ms ease, box-shadow 180ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
        },
      }}>
      {/* Image */}
      <CardMedia
        component="img"
        loading="lazy"
        image={src}
        alt={alt || "Project photo"}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 400ms ease",
          "&:hover": { transform: "scale(1.04)" },
        }}
      />

      {/* Gradient + caption */}
      {(caption || alt) && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            p: 1.25,
            color: "white",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.65) 100%)",
          }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            {caption || alt}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
