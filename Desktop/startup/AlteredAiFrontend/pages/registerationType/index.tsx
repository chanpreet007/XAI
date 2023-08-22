'use client'
import * as React from "react";
import { Theme } from "@mui/material/styles";
import Link from "next/link";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Typography from "../../src/components/shared/Typography/Typography";
import Button from "../../src/components/shared/Button/Button";
import AppFooter from "@/components/AppFooter/AppFooter";
import AppAppBar from "@/components/AppAppBar/AppAppBar";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function RegisterationType() {
  return (
    <>
      <AppAppBar />
      <Box
        component="div"
        sx={{
          display: "flex",
          overflow: "hidden",
          bgcolor: "secondary.light",
          height: "60vh",
          // alignItems: 'center'
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            paddingTop: "5%",
            paddingBottom: "10%",
          }}
        >
          <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
            Choose right account for you.
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Link
                  href={{
                    pathname: "/register",
                    query: { userType: "user" },
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    sx={{ mt: 8 }}
                  >
                    User SignUp
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Link
                  href={{
                    pathname: "/register",
                    query: { userType: "business" },
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    sx={{ mt: 8 }}
                  >
                    Business SignUp
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Link
                  href={{
                    pathname: "/register",
                    query: { userType: "clinic" },
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    sx={{ mt: 8 }}
                  >
                    Clinic SignUp
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <AppFooter />
    </>
  );
}

export default RegisterationType;
