import { useMemo, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Grid,
  Button,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PaidIcon from "@mui/icons-material/Paid";
import content from "../content/electrician.json";

function monthlyPayment(P, apr, n) {
  const r = apr / 100 / 12;
  if (!r) return P / n;
  const pow = Math.pow(1 + r, n);
  return (P * r * pow) / (pow - 1);
}

export default function Financing() {
  const cfg = content.financing || {};
  const d = cfg.defaults || {};

  const [amount, setAmount] = useState(d.amount ?? 2500);
  const [apr, setApr] = useState(d.apr ?? 10.99);
  const [term, setTerm] = useState(d.termMonths ?? 36);

  const perMonth = useMemo(() => {
    const p = Math.max(0, Number(amount) || 0);
    const a = Math.max(0, Number(apr) || 0);
    const t = Math.max(1, Number(term) || 1);
    return monthlyPayment(p, a, t);
  }, [amount, apr, term]);

  return (
    <Box
      component="section"
      id="financing"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #F4F7FF 0%, #EFF6FF 100%)",
      }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: { xs: 3, md: 4 } }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <PaidIcon color="primary" />
            <Typography
              variant="overline"
              color="primary"
              sx={{ letterSpacing: 1 }}>
              Financing Available
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
            {cfg.headline || "Finance your electrical project"}
          </Typography>
          {cfg.subtext && (
            <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
              {cfg.subtext}
            </Typography>
          )}
        </Stack>

        {/* Inner panel */}
        <Box
          sx={{
            position: "relative",
            borderRadius: 4,
            p: { xs: 2, sm: 3, md: 4 },
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.86) 100%)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 10px 30px rgba(16,24,40,0.06)",
          }}>
          <Grid container spacing={3} alignItems="stretch">
            {/* LEFT — calculator ONLY */}
            <Grid item xs={12} md={7}>
              <Card variant="outlined" sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                    Estimate your monthly payment
                  </Typography>

                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                          inputProps: { min: 0, step: 100 },
                        }}
                        InputLabelProps={{ sx: { whiteSpace: "nowrap" } }}
                      />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <TextField
                        fullWidth
                        label="APR"
                        type="number"
                        value={apr}
                        onChange={(e) => setApr(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                          inputProps: { min: 0, max: 49, step: 0.25 },
                        }}
                        InputLabelProps={{ sx: { whiteSpace: "nowrap" } }}
                      />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <TextField
                        fullWidth
                        label="Term"
                        type="number"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">mo</InputAdornment>
                          ),
                          inputProps: { min: 3, max: 120, step: 3 },
                        }}
                        InputLabelProps={{ sx: { whiteSpace: "nowrap" } }}
                      />
                    </Grid>
                  </Grid>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems={{ xs: "stretch", sm: "center" }}
                    justifyContent="space-between">
                    <Stack spacing={0.5}>
                      <Typography variant="body2" color="text.secondary">
                        Estimated from
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 900, lineHeight: 1 }}>
                        ${perMonth.toFixed(2)}{" "}
                        <Typography
                          component="span"
                          variant="body1"
                          color="text.secondary">
                          /mo
                        </Typography>
                      </Typography>
                    </Stack>
                    {/* (no chips here to avoid duplication) */}
                  </Stack>

                  {cfg.disclaimer && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block", mt: 2 }}>
                      {cfg.disclaimer}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>

            {/* RIGHT — callout + checks + partners */}
            <Grid item xs={12} md={5}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}>
                <CardContent sx={{ pb: 1.5 }}>
                  {/* Example payment callout */}
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      mb: 2,
                      color: "white",
                      background:
                        "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
                    }}>
                    <Typography variant="overline" sx={{ opacity: 0.9 }}>
                      Example payment
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                      ${perMonth.toFixed(2)} /mo
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      For ${Number(amount || 0).toLocaleString()} over {term}{" "}
                      months @ {apr}% APR
                    </Typography>
                  </Box>

                  {/* Three green checks (benefits) */}
                  <List dense disablePadding sx={{ mb: 2 }}>
                    {(
                      cfg.benefits || [
                        "As low as 0% promo plans",
                        "No prepayment penalties",
                        "Decisions in minutes",
                      ]
                    ).map((b) => (
                      <ListItem key={b} disableGutters sx={{ py: 0.3 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleRoundedIcon
                            color="success"
                            fontSize="small"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{ variant: "body2" }}
                          primary={b}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Divider sx={{ my: 2 }} />

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 800, mb: 1 }}>
                    Apply with our partners
                  </Typography>

                  <Stack spacing={1}>
                    {(cfg.partners || []).map((p) => (
                      <Stack
                        key={p.name}
                        direction="row"
                        spacing={1.25}
                        alignItems="center"
                        sx={{
                          p: 1,
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: 2,
                        }}>
                        <Avatar
                          variant="rounded"
                          src={p.logo}
                          alt={p.name}
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: "background.default",
                          }}
                        />
                        <Stack sx={{ flex: 1 }}>
                          <Typography sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                            {p.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Secure online application
                          </Typography>
                        </Stack>
                        <Button
                          component="a"
                          href={p.url}
                          target="_blank"
                          rel="noopener"
                          variant="outlined"
                          size="small"
                          sx={{ whiteSpace: "nowrap" }}>
                          Apply
                        </Button>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
