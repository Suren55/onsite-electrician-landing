import { Box, Container, Stack, Chip, Typography, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import content from "../content/electrician.json";

// If your AppBar is fixed, set its heights here.
// If your AppBar is NOT fixed, set both to 0.
const APPBAR_XS = 56; // Material default small toolbar
const APPBAR_MD = 64; // Material default desktop toolbar

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        color: "white",
        background:
          "linear-gradient(180deg,#0A2540 0%,#0A2540 60%,#0E2F4F 100%)",

        // Full-screen height that behaves correctly on mobile browsers
        // Use minHeight (not height) so content can grow if needed.
        minHeight: {
          xs: `calc(100dvh - ${APPBAR_XS}px)`,
          md: `calc(100dvh - ${APPBAR_MD}px)`,
        },

        // Center vertically; allow natural scroll if content exceeds viewport.
        display: "flex",
        alignItems: "center",

        // Respect notches/safe areas
        pt: { xs: `calc(env(safe-area-inset-top))`, md: 0 },
        pb: { xs: `calc(env(safe-area-inset-bottom))`, md: 0 },
      }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack spacing={{ xs: 2.25, sm: 2.75, md: 3 }} sx={{ width: "100%" }}>
          <Chip
            icon={<VerifiedIcon />}
            label={`Licensed • Insured • Local — ${content.serviceArea}`}
            sx={{
              alignSelf: "flex-start",
              bgcolor: "rgba(255,255,255,0.14)",
              color: "white",
              height: { xs: 28, sm: 30 },
              "& .MuiChip-label": {
                px: 1.25,
                fontSize: { xs: 12.5, sm: 13.5 },
              },
            }}
          />

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: -0.6,
              fontSize: { xs: "clamp(34px, 8.8vw, 42px)", sm: 46, md: 60 },
              lineHeight: { xs: 1.15, md: 1.1 },
              maxWidth: 900,
            }}>
            <Box component="span" display={{ xs: "block", md: "inline" }}>
              Reliable Electricians
            </Box>{" "}
            <Box component="span" display={{ xs: "block", md: "inline" }}>
              for Homes & Businesses
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: 820,
              fontSize: { xs: 16.5, sm: 17, md: 18 },
              lineHeight: { xs: 1.6, sm: 1.6 },
            }}>
            {content.heroSubtextMobile?.trim() ||
              "Panel upgrades, EV chargers, lighting, troubleshooting, and emergency calls. Upfront pricing in St. John’s & area."}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="secondary"
              startIcon={<PhoneInTalkIcon />}
              href={`tel:${content.phone}`}
              sx={{
                width: { sm: "auto" },
                py: { xs: 1.25, sm: 1.5 },
                fontSize: 16,
              }}>
              {content.primaryCta}
              {content.displayPhone ? ` ${content.displayPhone}` : ""}
            </Button>

            <Button
              fullWidth
              size="large"
              variant="outlined"
              href="#estimate"
              sx={{
                width: { sm: "auto" },
                borderColor: "rgba(255,255,255,0.6)",
                color: "white",
                py: { xs: 1.25, sm: 1.5 },
                fontSize: 16,
              }}>
              {content.secondaryCta}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
