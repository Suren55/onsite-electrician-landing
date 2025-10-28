// src/sections/Footer.jsx
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import content from "../content/electrician.json";

export default function Footer() {
  const year = new Date().getFullYear();
  const s = content.social || {};
  const addr = content.address || {};
  const areas = (content.serviceAreas || []).slice(0, 6); // small list in footer

  const addressLine = [
    addr.street,
    [addr.city, addr.province].filter(Boolean).join(", "),
    addr.postal,
    addr.country,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Box component="footer" sx={{ bgcolor: "transparent" }}>
      {/* Light band for strong contrast vs Emergency section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)",
          borderTop: "1px solid",
          borderColor: "divider",
        }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Col 1 — Brand + Social */}
            <Grid item xs={12} sm={6} md={3}>
              <Stack spacing={1.25}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
                  {content.businessName || "Electrician"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Licensed, insured electricians for homes & businesses across
                  St. John’s metro.
                </Typography>
                <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
                  {s.facebook && (
                    <IconLink href={s.facebook} label="Facebook">
                      <FacebookIcon fontSize="small" />
                    </IconLink>
                  )}
                  {s.instagram && (
                    <IconLink href={s.instagram} label="Instagram">
                      <InstagramIcon fontSize="small" />
                    </IconLink>
                  )}
                  {s.google && (
                    <IconLink href={s.google} label="Google">
                      <GoogleIcon fontSize="small" />
                    </IconLink>
                  )}
                  {s.linkedin && (
                    <IconLink href={s.linkedin} label="LinkedIn">
                      <LinkedInIcon fontSize="small" />
                    </IconLink>
                  )}
                  {s.tiktok && (
                    <IconLink href={s.tiktok} label="TikTok">
                      <MusicNoteIcon fontSize="small" />
                    </IconLink>
                  )}
                </Stack>
              </Stack>
            </Grid>

            {/* Col 2 — Quick Links */}
            <Grid item xs={12} sm={6} md={3}>
              <SectionTitle>Quick Links</SectionTitle>
              <Stack spacing={0.75} sx={{ mt: 1 }}>
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#why-us">Why Choose Us</FooterLink>
                <FooterLink href="#areas">Service Areas</FooterLink>
                <FooterLink href="#financing">Financing</FooterLink>
                <FooterLink href="#emergency">24/7 Emergency</FooterLink>
                <FooterLink href="#faq">FAQ</FooterLink>
              </Stack>
            </Grid>

            {/* Col 3 — Contact */}
            <Grid item xs={12} sm={6} md={3}>
              <SectionTitle>Contact</SectionTitle>
              <Stack spacing={1.25} sx={{ mt: 1 }}>
                {content.phone && (
                  <Row icon={<PhoneInTalkIcon />}>
                    <MuiLink
                      href={`tel:${content.phone}`}
                      underline="hover"
                      color="text.primary">
                      {content.displayPhone || content.phone}
                    </MuiLink>
                  </Row>
                )}
                {content.email && (
                  <Row icon={<MailOutlineIcon />}>
                    <MuiLink
                      href={`mailto:${content.email}`}
                      underline="hover"
                      color="text.primary">
                      {content.email}
                    </MuiLink>
                  </Row>
                )}
                {addressLine && (
                  <Row icon={<RoomIcon />}>
                    {addr.mapUrl ? (
                      <MuiLink
                        href={addr.mapUrl}
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        color="text.primary">
                        {addressLine}
                      </MuiLink>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        {addressLine}
                      </Typography>
                    )}
                  </Row>
                )}
              </Stack>
            </Grid>

            {/* Col 4 — Hours + Areas chips */}
            <Grid item xs={12} sm={6} md={3}>
              <SectionTitle>Hours</SectionTitle>
              <Stack spacing={0.5} sx={{ mt: 1 }}>
                {content.hours?.monFri && (
                  <Line left="Mon–Fri" right={content.hours.monFri} />
                )}
                {content.hours?.sat && (
                  <Line left="Sat" right={content.hours.sat} />
                )}
                {content.hours?.sun && (
                  <Line left="Sun" right={content.hours.sun} />
                )}
              </Stack>

              {areas.length > 0 && (
                <>
                  <SectionTitle sx={{ mt: 3 }}>Also Serving</SectionTitle>
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1 }}>
                    {areas.map((a) => (
                      <Chip
                        key={a.city}
                        label={a.city}
                        size="small"
                        sx={{ borderRadius: 2 }}
                      />
                    ))}
                  </Stack>
                </>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Legal bar */}
      <Container maxWidth="lg">
        <Divider />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          sx={{ py: 2.5 }}>
          <Typography variant="body2" color="text.secondary">
            © {year} {content.businessName || "Electrician"}. All rights
            reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

/* helpers */
function SectionTitle({ children, sx }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        textTransform: "uppercase",
        letterSpacing: 1,
        color: "text.secondary",
        ...sx,
      }}>
      {children}
    </Typography>
  );
}

function IconLink({ href, label, children }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      size="small"
      sx={{
        color: "text.primary",
        bgcolor: "rgba(0,0,0,0.04)",
        "&:hover": { bgcolor: "rgba(0,0,0,0.08)" },
      }}>
      {children}
    </IconButton>
  );
}

function Row({ icon, children }) {
  return (
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <Box sx={{ mt: "2px", color: "text.secondary" }}>{icon}</Box>
      <Box sx={{ lineHeight: 1.4 }}>{children}</Box>
    </Stack>
  );
}

function Line({ left, right }) {
  return (
    <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Typography variant="body2" color="text.secondary">
        {left}
      </Typography>
      <Typography variant="body2" color="text.primary">
        {right}
      </Typography>
    </Stack>
  );
}

function FooterLink({ href, children }) {
  return (
    <MuiLink href={href} underline="hover" color="text.primary">
      {children}
    </MuiLink>
  );
}
