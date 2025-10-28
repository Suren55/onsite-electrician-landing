import {
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import EvStationIcon from "@mui/icons-material/EvStation";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ParkIcon from "@mui/icons-material/Park";

const iconMap = {
  bolt: <BoltIcon />,
  ev: <EvStationIcon />,
  light: <LightbulbIcon />,
  inspection: <ManageSearchIcon />,
  business: <BusinessCenterIcon />,
  outdoor: <ParkIcon />,
};

export default function ServiceCard({ icon = "bolt", title, blurb }) {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: 200, sm: 220, md: 240 },
        borderRadius: 3,
        borderColor: "divider",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.86) 100%)",
        transition: "transform 180ms ease, box-shadow 180ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 10px 30px rgba(16,24,40,0.08)",
        },
      }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: 1.5, flex: 1 }}>
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
            {iconMap[icon] || iconMap.bolt}
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
            {title}
          </Typography>
        </Stack>

        <Typography color="text.secondary" sx={{ flexGrow: 1 }}>
          {blurb}
        </Typography>

        <Button
          size="small"
          variant="outlined"
          href="#estimate"
          sx={{
            alignSelf: "flex-start",
            borderRadius: 2,
          }}>
          Get a Quote
        </Button>
      </CardContent>
    </Card>
  );
}
