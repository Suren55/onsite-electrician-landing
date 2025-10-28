import { Box, Container, Stack, Chip, Typography, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import content from "../content/electrician.json";
import { useTheme } from "@mui/material/styles";

// If your AppBar is fixed; if not, set to 0
const APPBAR_XS = 56;
const APPBAR_MD = 64;

export default function HeroImageSplit() {
  const imgMobile = content.heroImageMobile || content.heroImage;
  const imgDesktop = content.heroImage;

  return (
    <Box component="section" sx={{ position: "relative" }}>
      {/* --- MOBILE: full-bleed image with centered content --- */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "relative",
          minHeight: `calc(100dvh - ${APPBAR_XS}px)`,
          backgroundImage: `url("${imgMobile}")`,
          backgroundSize: "cover",
          backgroundPosition: content.heroImagePositionMobile || "center",
          color: "white",
          // center content in viewport
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          py: `calc(12px + env(safe-area-inset-top))`,
        }}>
        {/* overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,37,64,0.55) 0%, rgba(10,37,64,0.75) 60%, rgba(10,37,64,0.85) 100%)",
          }}
        />
        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 1,
            px: 0,
          }}>
          <CopyBlock centerOnMobile />
        </Container>
      </Box>

      {/* --- DESKTOP: split layout --- */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "minmax(0,1fr) 45%",
          minHeight: `calc(100dvh - ${APPBAR_MD}px)`,
          background: "linear-gradient(180deg, #0A2540 0%, #0E2F4F 100%)",
          color: "white",
          alignItems: "center",
        }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <CopyBlock />
        </Container>

        {/* Image panel */}
        <Box sx={{ position: "relative", height: "100%" }}>
          <img
            src={imgDesktop}
            alt={content.heroImageAlt || "Electrician at work"}
            loading="eager"
            width="1600"
            height="1200"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: content.heroImagePosition || "center",
              display: "block",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(14,47,79,0.6) 0%, rgba(14,47,79,0.0) 28%)",
              pointerEvents: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function CopyBlock({ centerOnMobile = false }) {
  return (
    <Stack
      spacing={{ xs: 2, md: 3 }}
      sx={{
        maxWidth: 680,
        // center text + children on xs if requested
        textAlign: { xs: centerOnMobile ? "center" : "left", md: "left" },
        alignItems: {
          xs: centerOnMobile ? "center" : "flex-start",
          md: "flex-start",
        },
        mx: { xs: centerOnMobile ? "auto" : 0, md: 0 },
      }}>
      <Chip
        icon={<VerifiedIcon />}
        label="Licensed • Insured • Local"
        sx={{
          alignSelf: {
            xs: centerOnMobile ? "center" : "flex-start",
            md: "flex-start",
          },
          bgcolor: "rgba(255,255,255,0.18)",
          color: "white",
          height: { xs: 28, md: 30 },
          "& .MuiChip-label": { px: 1.25, fontSize: { xs: 12.5, md: 13.5 } },
        }}
      />

      <Typography
        component="h1"
        sx={{
          fontWeight: 800,
          letterSpacing: -0.6,
          fontSize: { xs: "clamp(34px, 8.8vw, 44px)", md: 58 },
          lineHeight: { xs: 1.12, md: 1.06 },
          textShadow: { xs: "0 1px 2px rgba(0,0,0,0.35)", md: "none" },
        }}>
        Reliable Electricians for Homes & Businesses
      </Typography>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.92)",
          fontSize: { xs: 16.5, md: 18 },
          lineHeight: 1.6,
          textShadow: { xs: "0 1px 2px rgba(0,0,0,0.35)", md: "none" },
          maxWidth: 820,
        }}>
        {content.heroSubtextMobile?.trim() ||
          "Panel upgrades, EV chargers, lighting design, troubleshooting, and emergency calls. Upfront pricing in St. John’s & area."}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.25}
        sx={{ width: "100%", maxWidth: { xs: 520, md: "none" } }}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="secondary"
          startIcon={<PhoneInTalkIcon />}
          href={`tel:${content.phone}`}
          sx={{
            py: { xs: 1.25, sm: 1.5 },
            fontSize: 16,
            fontWeight: 800,
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
            borderColor: "rgba(255,255,255,0.65)",
            color: "white",
            py: { xs: 1.25, sm: 1.5 },
            fontSize: 16,
            fontWeight: 700,
          }}>
          {content.secondaryCta}
        </Button>
      </Stack>
    </Stack>
  );
}
