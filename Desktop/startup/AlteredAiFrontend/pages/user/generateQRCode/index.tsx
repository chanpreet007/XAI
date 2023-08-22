"use client";
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserMenus from "../../../src/components/UserMenus";
import { MainListItems } from "../../../src/components/ListItems";
import { useAppContext } from "../../../src/context/state";
import DownloadKeys from "../../../src/components/DownloadKeys/DownloadKeys";
import Orders from "../../../src/components/Transcations/Transcations";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LogoutIcon from "@mui/icons-material/Logout";
import { userLogout } from "@/hooks/auth/userLogout";
import Loader from "@/components/shared/Loader/Loader";
import { Button } from "@mui/material";
import QRCode from "react-qr-code";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        AlteredAi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [userData, setUserData] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const [qrCodeValue, setQRCodeValue] = React.useState(null)
  const { logOut } = userLogout();

  React.useEffect(() => {
    return setUserData(JSON.parse(Cookies.get("currentUser")));
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const changeLoaderStatus = (status: boolean) => {
    setLoader(status);
  };

  const logOutUser = () => {
    changeLoaderStatus(true);
    logOut(changeLoaderStatus);
  };

  const handleGenerateQRCode = () => {
    const scanPayload = {
        awsUrl: 'https://mwjprx9cei.execute-api.ap-south-1.amazonaws.com/api',
        userId: userData.user.id,
    }
    setQRCodeValue(scanPayload)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={123} color="secondary" max={9999}> */}
            {/* <AccountBalanceWalletIcon /> */}
            <Box
              component="div"
              sx={{
                fontSize: "18px",
                marginRight: "40px",
              }}
            >
              <span>Account Balance : 23</span>
              <span>
                <CurrencyRupeeIcon sx={{ fontSize: 16 }} />
              </span>
            </Box>
            {/* </Badge> */}
          </IconButton>
          <Box
            component="div"
            sx={{
              fontSize: "18px",
              marginRight: "40px",
              border: "solid 1px white",
              padding: "2px 16px 2px 16px",
            }}
            onClick={logOutUser}
          >
            Log Out
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {<MainListItems userType="user" />}
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Button
              color="primary"
              size="large"
              variant="contained"
              sx={{ mt: 8 }}
              onClick={handleGenerateQRCode}
            >
              Generate QR Code
            </Button>
          </Grid>
          {qrCodeValue && (
            <Grid container spacing={3} style={{marginTop: '40px'}}>
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "250" }}
                value={JSON.stringify(qrCodeValue)}
                viewBox={`0 0 156 256`}
              />
            </Grid>
          )}
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
