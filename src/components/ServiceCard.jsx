import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import EvStationIcon from "@mui/icons-material/EvStation";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ParkIcon from "@mui/icons-material/Park";

const iconMap = {
  bolt: <BoltIcon color="primary" />,
  ev: <EvStationIcon color="primary" />,
  light: <LightbulbIcon color="primary" />,
  inspection: <ManageSearchIcon color="primary" />,
  business: <BusinessCenterIcon color="primary" />,
  outdoor: <ParkIcon color="primary" />,
};

export default function ServiceCard({ icon = "bolt", title, blurb }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // 👇 uniform height across all cards (tweak as you like)
        minHeight: { xs: 180, sm: 200, md: 220 },
      }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: 1.5, flex: 1 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          {iconMap[icon] || iconMap.bolt}
          <Typography variant="h6">{title}</Typography>
        </Stack>
        <Typography color="text.secondary" sx={{ flexGrow: 1 }}>
          {blurb}
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ alignSelf: "flex-start", mt: 1 }}
          href="#estimate">
          Get a Quote
        </Button>
      </CardContent>
    </Card>
  );
}
