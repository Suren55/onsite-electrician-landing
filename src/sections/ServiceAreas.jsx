import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Card,
  CardContent,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ServiceAreasMap from "../components/ServiceAreasMap";
import RoomIcon from "@mui/icons-material/Room";
import content from "../content/electrician.json";

const COLLAPSED_COUNT = 6; // how many neighborhoods to show before “Show more”

export default function ServiceAreas() {
  const areas = content.serviceAreas || [];
  const [expanded, setExpanded] = useState({});
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const toggle = (city) => setExpanded((s) => ({ ...s, [city]: !s[city] }));

  return (
    <Box
      component="section"
      id="areas"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.2} sx={{ mb: { xs: 3, md: 4 } }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <RoomIcon color="primary" />
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: 1 }}>
              Service Areas
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
            Where we work
          </Typography>
          {content.serviceAreasIntro && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 820 }}>
              {content.serviceAreasIntro}
            </Typography>
          )}
        </Stack>

        {/* Layout: list left, map right (map stacks below on mobile) */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 4 }}
          alignItems="stretch">
          {/* Cities list */}
          <Stack spacing={2.5} sx={{ flex: 1, minWidth: 0 }}>
            {areas.map((area) => {
              const city = area.city;
              const n = area.neighborhoods || [];
              const isOpen = !!expanded[city];
              const shown = isOpen ? n : n.slice(0, COLLAPSED_COUNT);
              const hasMore = n.length > COLLAPSED_COUNT;

              return (
                <Card key={city} variant="outlined" sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {city}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mb: hasMore ? 2 : 0 }}>
                      {shown.map((name) => (
                        <Chip
                          key={name}
                          label={name}
                          size="small"
                          sx={{
                            borderRadius: 2,
                            bgcolor: "action.hover",
                            "& .MuiChip-label": { px: 1.2 },
                          }}
                        />
                      ))}
                    </Stack>

                    {hasMore && (
                      <Button size="small" onClick={() => toggle(city)}>
                        {isOpen
                          ? "Show less"
                          : `Show ${n.length - COLLAPSED_COUNT} more`}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            {/* Fallback if no areas provided */}
            {areas.length === 0 && (
              <Typography color="text.secondary">
                Coverage info coming soon. Call us to confirm your location.
              </Typography>
            )}
          </Stack>

          {/* Map / visual */}
          <Box
            sx={{
              flex: { md: "0 0 40%" },
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
              minHeight: { xs: 220, md: 360 },
              display: "flex",
            }}>
            <ServiceAreasMap height={isMdUp ? 420 : 260} />
          </Box>
        </Stack>

        {/* Bottom CTA */}
        <Divider sx={{ my: { xs: 3, md: 4 } }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems={{ xs: "stretch", sm: "center" }}>
          <Typography variant="body1" sx={{ flex: 1 }}>
            Not sure if we cover your neighborhood? We probably do.
          </Typography>
          <Button
            variant="outlined"
            href="tel:+1"
            sx={{ whiteSpace: "nowrap" }}>
            Call to confirm
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
