import * as React from "react";
import Link from "../../../src/Link";
import Container from "@mui/material/Container";
import Typography from "../shared/Typography/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href='/'>
        AlteredAi
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}



export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 8, display: "flex", justifyContent: 'center' }}>
        <Copyright />
      </Container>
    </Typography>
  );
}
