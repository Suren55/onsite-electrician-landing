import { Box, Container, Stack, Chip, Typography, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import content from "../content/electrician.json";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        background:
          "linear-gradient(180deg, #0A2540 0%, #0A2540 60%, #0E2F4F 100%)",
      }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Chip
            icon={<VerifiedIcon />}
            label={`Licensed • Insured • Local — ${content.serviceArea}`}
            sx={{
              alignSelf: "flex-start",
              bgcolor: "rgba(255,255,255,0.14)",
              color: "white",
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 36, sm: 48, md: 60 },
              fontWeight: 800,
              letterSpacing: -0.5,
            }}>
            {content.heroHeadline}
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 820 }}>
            {content.heroSubtext}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<PhoneInTalkIcon />}
              href={`tel:${content.phone}`}>
              {content.primaryCta}{" "}
              {content.displayPhone ? ` ${content.displayPhone}` : ""}
            </Button>
            <Button
              size="large"
              variant="outlined"
              sx={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}
              href="#estimate">
              {content.secondaryCta}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
