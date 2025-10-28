import {
  Box,
  Container,
  Stack,
  Chip,
  Typography,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import BoltIcon from "@mui/icons-material/Bolt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CableIcon from "@mui/icons-material/Cable";
import VerifiedIcon from "@mui/icons-material/Verified";
import content from "../content/electrician.json";

// If your AppBar is fixed, set these; if not, set to 0
const APPBAR_XS = 56;
const APPBAR_MD = 64;

export default function HeroPlayful() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        // Cheerful gradient + subtle dot pattern overlay
        background:
          "linear-gradient(180deg,#0a3a5a 0%,#0b4468 50%,#0d4d75 100%)",
        color: "white",
        minHeight: {
          xs: `calc(100dvh - ${APPBAR_XS}px)`,
          md: `calc(100dvh - ${APPBAR_MD}px)`,
        },
        display: "flex",
        alignItems: "center",
        py: { xs: 4, sm: 6, md: 0 },
        "&:before": {
          // dotted texture
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          pointerEvents: "none",
        },
      }}>
      {/* Decorative blobs */}
      <Blob color="#FFD166" top="-120px" left="-120px" size={320} blur={40} />
      <Blob color="#06D6A0" top="60%" left="-140px" size={260} blur={30} />
      <Blob color="#EF476F" top="-100px" right="-120px" size={300} blur={34} />
      <Blob
        color="#118AB2"
        bottom="-140px"
        right="-120px"
        size={260}
        blur={30}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "stretch", md: "center" }}
          spacing={{ xs: 3, md: 6 }}>
          {/* LEFT — copy + CTAs */}
          <Box sx={{ flex: 1, maxWidth: { md: 620 } }}>
            {/* Sticker-like trust row */}
            <Stack direction="row" spacing={1} sx={{ mb: { xs: 1, sm: 1.5 } }}>
              <Chip
                icon={<VerifiedIcon />}
                label="Licensed & Insured"
                sx={chipStyle}
              />
              <Chip label="Local • St. John’s" sx={chipStyle} />
            </Stack>

            {/* Friendly headline with highlighted word */}
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                letterSpacing: -0.6,
                lineHeight: { xs: 1.12, md: 1.06 },
                fontSize: { xs: "clamp(34px, 9vw, 44px)", sm: 48, md: 60 },
                mb: 1,
              }}>
              Electrical help that’s{" "}
              <Box
                component="mark"
                sx={{
                  background: "linear-gradient(90deg,#FFD166 0%,#FFECB3 100%)",
                  color: "#0a2b45",
                  px: 1,
                  borderRadius: "12px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}>
                friendly & fast
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.92)",
                fontSize: { xs: 16.5, sm: 17, md: 18 },
                lineHeight: { xs: 1.6, md: 1.6 },
                mb: { xs: 2, sm: 2.5, md: 3 },
              }}>
              {content.heroSubtextMobile?.trim() ||
                "Panel upgrades, EV chargers, lighting design, troubleshooting, and emergency calls. Upfront pricing across St. John’s & area."}
            </Typography>

            {/* Chunky CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              sx={{ mb: { xs: 2, sm: 0 } }}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                startIcon={<PhoneInTalkIcon />}
                href={`tel:${content.phone}`}
                sx={{
                  background: "linear-gradient(180deg,#FFD166 0%,#FFC043 100%)",
                  color: "#0b2e49",
                  fontWeight: 800,
                  borderRadius: 3,
                  px: 2.2,
                  py: 1.3,
                  "&:hover": { filter: "brightness(0.98)" },
                }}>
                Call Now
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
                  fontWeight: 700,
                  borderRadius: 3,
                  px: 2.2,
                  py: 1.3,
                }}>
                Get Free Estimate
              </Button>
            </Stack>

            {/* Little reassurance line as a “sticker” */}
            <Box
              sx={{
                mt: { xs: 1.25, sm: 1.5 },
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.25,
                py: 0.5,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.12)",
                backdropFilter: "saturate(140%) blur(8px)",
                fontSize: 13.5,
              }}>
              <Avatar
                sx={{
                  width: 22,
                  height: 22,
                  bgcolor: "rgba(255,255,255,0.9)",
                  color: "#0b2e49",
                  fontSize: 14,
                  fontWeight: 800,
                }}>
                ✓
              </Avatar>
              Upfront pricing • On-time service
            </Box>
          </Box>

          {/* RIGHT — playful “stickerboard” card */}
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              borderRadius: 5,
              p: { xs: 2, sm: 2.5, md: 3 },
              bgcolor: "rgba(255,255,255,0.08)",
              backdropFilter: "saturate(140%) blur(10px)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}>
            <Typography
              sx={{
                fontWeight: 800,
                mb: 1.25,
                fontSize: { xs: 18, sm: 20 },
                letterSpacing: 0.2,
              }}>
              Same-day help with:
            </Typography>

            <StickerRow
              icon={<BoltIcon />}
              label="Panel upgrades"
              color="#FFD166"
            />
            <StickerRow
              icon={<LightbulbIcon />}
              label="Lighting design"
              color="#06D6A0"
            />
            <StickerRow
              icon={<CableIcon />}
              label="EV charger installs"
              color="#EF476F"
            />
            <StickerRow
              icon={<BoltIcon />}
              label="Emergency calls"
              color="#118AB2"
            />
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

function StickerRow({ icon, label, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.25,
        mb: 1.1,
      }}>
      <Avatar
        sx={{
          width: 36,
          height: 36,
          bgcolor: color,
          color: "#0b2e49",
          fontWeight: 900,
        }}>
        {icon}
      </Avatar>
      <Typography sx={{ fontSize: 16.5, fontWeight: 700 }}>{label}</Typography>
    </Box>
  );
}

function Blob({ color, size = 280, blur = 30, ...pos }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        filter: `blur(${blur}px)`,
        opacity: 0.35,
        background: color,
        ...pos,
      }}
    />
  );
}

const chipStyle = {
  bgcolor: "rgba(255,255,255,0.16)",
  color: "white",
  borderRadius: 2,
  height: 28,
  "& .MuiChip-label": { px: 1.25, fontSize: 12.5 },
};
