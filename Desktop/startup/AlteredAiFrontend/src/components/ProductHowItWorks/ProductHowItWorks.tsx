import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import OutputOutlinedIcon from "@mui/icons-material/OutputOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Button from "../shared/Button/Button";
import Typography from "../shared/Typography/Typography";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "#ffff", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                {/* <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks1.svg"
                  alt="suitcase"
                  sx={image}
                /> */}
                <UploadFileOutlinedIcon
                  color="primary"
                  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}
                />
                <Typography variant="h5" align="center">
                  User Upload their Data.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                {/* <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                /> */}
                <TransformOutlinedIcon
                  color="primary"
                  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}
                />
                <Typography variant="h5" align="center">
                  User Data converted into algorithmic data form
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                {/* <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                /> */}
                <RequestPageOutlinedIcon
                  color="primary"
                  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}
                />
                <Typography variant="h5" align="center">
                  {"Businessess request for data"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>4.</Box>
                {/* <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                /> */}
                <OutputOutlinedIcon
                  color="primary"
                  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}
                />
                <Typography variant="h5" align="center">
                  {"Data is provided to businessess"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>5.</Box>
                {/* <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                /> */}
                <StorageOutlinedIcon
                  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}
                />

                <Typography variant="h5" align="center">
                  {"Transaction is recorded in distrubuted ledger"}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>6.</Box>
                {/* <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  sx={image}
                /> */}
                <MonetizationOnOutlinedIcon
                  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}
                />
                <Typography variant="h5" align="center">
                  {
                    "User recieves rewards on their amount of data shared per times"
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/registerationType"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
