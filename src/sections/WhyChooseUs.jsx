import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import content from "../content/electrician.json";

const iconMap = {
  timer: <AccessTimeIcon color="primary" />,
  shield: <VerifiedUserIcon color="primary" />,
  hand: <HandshakeIcon color="primary" />,
  warranty: <WorkspacePremiumIcon color="primary" />,
};

export default function WhyChooseUs() {
  const items = content.reasons || [];

  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 3 }}>
          Why Choose Us
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5, maxWidth: 760 }}>
          Professional electricians you can count on — for small fixes or full
          upgrades.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
          }}>
          {items.map((r, i) => (
            <Paper
              key={i}
              variant="outlined"
              sx={{
                p: 3,
                minHeight: { xs: 160, sm: 180, md: 200 }, // uniform tile height
                display: "flex",
                flexDirection: "column",
              }}>
              <Stack spacing={1.5} sx={{ flex: 1 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  {iconMap[r.icon] ?? iconMap.timer}
                  <Typography variant="h6">{r.title}</Typography>
                </Stack>
                <Typography color="text.secondary">{r.blurb}</Typography>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
