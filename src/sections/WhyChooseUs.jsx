// src/sections/WhyChooseUs.jsx
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import content from "../content/electrician.json";

const iconMap = {
  timer: <AccessTimeIcon />,
  shield: <VerifiedUserIcon />,
  hand: <HandshakeIcon />,
  warranty: <WorkspacePremiumIcon />,
};

export default function WhyChooseUs() {
  const items = content.reasons || [];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        // Light gradient to contrast with dark sections
        background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)",
      }}>
      <Container maxWidth="lg">
        <Stack spacing={1.25} sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="overline"
            color="primary"
            sx={{ letterSpacing: 1 }}>
            Why Choose Us
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, letterSpacing: -0.2, lineHeight: 1.1 }}>
            Professional electricians you can count on
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            From small fixes to full upgrades — trusted, insured, and
            quality-driven service.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, sm: 2.5, md: 3 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
          }}>
          {items.map((r, i) => (
            <Paper
              key={i}
              elevation={0}
              variant="outlined"
              sx={{
                p: { xs: 2.5, md: 3 },
                minHeight: { xs: 160, sm: 180, md: 200 },
                borderRadius: 3,
                borderColor: "divider",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.86) 100%)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 180ms ease, box-shadow 180ms ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
                },
              }}>
              <Stack spacing={1.5} sx={{ flex: 1 }}>
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                    }}>
                    {iconMap[r.icon] ?? iconMap.timer}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
                    {r.title}
                  </Typography>
                </Stack>

                <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                  {r.blurb}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
