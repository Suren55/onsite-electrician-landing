import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BoltIcon from "@mui/icons-material/Bolt";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import content from "../content/electrician.json";

export default function Emergency24x7({ showStickyOnMobile = true }) {
  const cfg = content.emergency || {};
  if (cfg.enabled === false) return null;

  return (
    <Box
      component="section"
      id="emergency"
      sx={{
        // Strong visual break
        py: { xs: 6, md: 10 },
        color: "white",
        background:
          "linear-gradient(135deg, #0B2239 0%, #0D2B4B 45%, #122B5E 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Subtle accent blobs */}
      <AccentBlob
        color="#EF4444"
        size={360}
        opacity={0.18}
        top={-140}
        left={-120}
      />
      <AccentBlob
        color="#22C55E"
        size={280}
        opacity={0.14}
        bottom={-120}
        right={-120}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Stack spacing={1.25} sx={{ mb: { xs: 3, md: 4 } }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <BoltIcon color="error" />
            <Typography
              variant="overline"
              sx={{ letterSpacing: 1, color: "rgba(255,255,255,0.9)" }}>
              24/7 EMERGENCY
            </Typography>
          </Stack>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              letterSpacing: -0.2,
              lineHeight: { xs: 1.12, md: 1.08 },
            }}>
            {cfg.headline || "24/7 Emergency Electrician"}
          </Typography>

          {cfg.subtext && (
            <Typography sx={{ color: "rgba(255,255,255,0.88)", maxWidth: 900 }}>
              {cfg.subtext}
            </Typography>
          )}

          {/* Badges row */}
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {cfg.avgResponseMins && (
              <Chip
                icon={<AccessTimeFilledIcon />}
                label={`Avg response ~${cfg.avgResponseMins} min`}
                sx={chipDark}
              />
            )}
            <Chip
              icon={<ShieldOutlinedIcon />}
              label="Upfront pricing"
              sx={chipDark}
            />
            {(cfg.badges || []).map((b) => (
              <Chip key={b} label={b} sx={chipDark} />
            ))}
          </Stack>
        </Stack>

        {/* Content: Left CTAs, Right scenarios */}
        <Grid container spacing={3} alignItems="stretch">
          {/* Left: CTA panel */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
              elevation={0}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                  Get help now
                </Typography>
                <Typography sx={{ opacity: 0.95, mb: 2 }}>
                  Call anytime — nights, weekends, and holidays. We’ll diagnose
                  over the phone and dispatch a licensed electrician.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    startIcon={<LocalPhoneIcon />}
                    href={`tel:${content.phone}`}
                    sx={{ fontWeight: 900 }}>
                    Call {content.displayPhone || ""}
                  </Button>
                  <Button
                    size="large"
                    variant="outlined"
                    href="#estimate"
                    sx={{
                      borderColor: "rgba(255,255,255,0.6)",
                      color: "white",
                    }}>
                    Not urgent? Get estimate
                  </Button>
                </Stack>

                {cfg.feeNote && (
                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 2, opacity: 0.8 }}>
                    {cfg.feeNote}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Optional sticky call bar on mobile */}
      {showStickyOnMobile && (
        <Box
          sx={{
            position: "sticky",
            bottom: 12,
            mt: 4,
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            px: 2,
          }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<LocalPhoneIcon />}
            href={`tel:${content.phone}`}
            sx={{
              py: 1.25,
              fontWeight: 900,
              borderRadius: 999,
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}>
            24/7 Call {content.displayPhone || ""}
          </Button>
        </Box>
      )}
    </Box>
  );
}

/* --- helpers --- */
function AccentBlob({ color, size, opacity, ...pos }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(50px)",
        opacity,
        pointerEvents: "none",
        ...pos,
      }}
    />
  );
}

const chipDark = {
  borderRadius: 2,
  bgcolor: "rgba(255,255,255,0.10)",
  color: "white",
  "& .MuiChip-label": { px: 1.2 },
};
