import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import content from "../content/electrician.json";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" }, // we’ll add FAQ later; safe to keep for now
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backdropFilter: "saturate(1.2) blur(6px)",
          bgcolor: "rgba(255,255,255,0.85)",
        }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            {/* Logo / Brand */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, letterSpacing: -0.2, mr: 2 }}>
              {content.businessName || "Electrician"}
            </Typography>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 2 }}>
              {LINKS.map((link) => (
                <Button key={link.href} href={link.href} color="inherit">
                  {link.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop CTA */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PhoneInTalkIcon />}
                href={`tel:${content.phone}`}>
                Call {content.displayPhone || ""}
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }}
              onClick={() => setOpen(true)}
              aria-label="open navigation">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Stack spacing={2} sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {content.businessName || "Electrician"}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              startIcon={<PhoneInTalkIcon />}
              href={`tel:${content.phone}`}
              onClick={() => setOpen(false)}>
              Call {content.displayPhone || ""}
            </Button>
          </Stack>
          <List>
            {LINKS.map((link) => (
              <ListItemButton
                key={link.href}
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
