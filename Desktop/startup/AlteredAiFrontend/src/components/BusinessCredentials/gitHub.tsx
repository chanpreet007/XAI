import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24, color:'black', fontWeight:'500' }} color="text.secondary" gutterBottom>
          How to get data?
        </Typography>
        <Typography variant="body2">
          You need to call our API with above keys.
        </Typography>
        <Typography variant="body2">
          Use our package from below link.
        </Typography>
      </CardContent>
      <CardActions
        onClick={() =>
          window.open("https://github.com/AlteredAiEigen/AlteredAi", "_blank")
        }
      >
        <Typography variant="h6" component="h6">AlteredAi</Typography>
        <GitHubIcon />
      </CardActions>
    </Card>
  );
}
