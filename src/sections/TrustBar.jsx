import { Container, Paper, Stack, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ScheduleIcon from "@mui/icons-material/Schedule";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import content from "../content/electrician.json";

const iconMap = {
  verified: <VerifiedIcon color="primary" />,
  schedule: <ScheduleIcon color="primary" />,
  price: <RequestQuoteIcon color="primary" />,
};

export default function TrustBar() {
  const items = content.trustPoints || [];
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper variant="outlined" sx={{ p: 3, borderStyle: "dashed" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="space-between">
          {items.map((it, idx) => (
            <Stack key={idx} direction="row" spacing={1.5} alignItems="center">
              {iconMap[it.icon] ?? iconMap.verified}
              <Typography variant="subtitle1">{it.text}</Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
}
