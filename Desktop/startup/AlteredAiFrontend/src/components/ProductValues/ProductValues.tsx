import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Typography from '../shared/Typography/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              /> */}
              <ShareOutlinedIcon  sx={{ margin: "32px 0 32px 0", fontSize: 50 }}/>
              <Typography variant="h6" sx={{ my: 5 }}>
               Data Sharing Platform
              </Typography>
              <Typography variant="h5">
                {
                  'A Platform for people and business'
                }
                {
                  ',where people can sell data with their consent and business can buy their data.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              /> */}
              <HubOutlinedIcon sx={{ margin: "32px 0 32px 0", fontSize: 50 }}/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Decentrailized
              </Typography>
              <Typography variant="h5">
                {
                  'Every data exchange transaction is recorded in distributed ledger. '
                }
                {'All transcations are visible.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              /> */}
              <PeopleOutlinedIcon sx={{ margin: "32px 0 32px 0", fontSize: 50 }}/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Anonymity
              </Typography>
              <Typography variant="h5">
                {'User identiy remains anonymous.'}
                {'Buisness will never know your origninal identity'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
