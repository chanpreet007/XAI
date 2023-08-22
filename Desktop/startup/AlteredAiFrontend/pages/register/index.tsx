"use client";
import * as React from "react";
import Cookies from "js-cookie";
import queryString from "query-string";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { postData } from "../../src/services/apiClient";
import DescriptionAlerts from "@/components/shared/Alert/Alert";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        AlteredAI
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  // const passwordValid = (password: string) => {
  //   const passwordRegEx =
  //     '^(?=.*\\p{L})(?=.*\\d)(?=.*[@$!^%*#?&])[\\p{L}\\d@$!%*^#?&]{8,20}$';
  //   return RegExp(passwordRegEx).test(password);
  // };
 
  const [error, setError] = React.useState('')
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = queryString.parse(location.search);
    const data = new FormData(event.currentTarget);
    if (!(data.get("email") && data.get("password"))) {
      alert("Fill complete required details");
      return;
    }
    const payload = {
      email: data.get("email"),
      password: data.get("password"),
      role: parsed.userType,
    };
    if (data.get("name")) {
      payload.name = data.get("name");
    }

    postData("/v1/auth/register", payload).then((data) => {
      if(data.code=="400"){
        throw new Error(data.message)
      }
      if (data.user) {
        Cookies.set("currentUser", JSON.stringify(data));
      }
      if (data.user.role == "business") {
        router.push("/business/dashboard");
      } else if(data.user.role == "clinic"){
        router.push("/clinic/dashboard");
      }
      else {
        router.push("/user/dashboard");
      }
    }).catch(err => {
      console.log(err)
      setError(err.message)
    })
  };

  const userType = () => router.query.userType;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography component="h1" variant="h5">
          {`${userType() == "business" ? "Business Account" : ""}`}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {userType() == "business" && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Enter your organisation name"
                  type="text"
                  id="name"
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box component="div" sx={{margin: '40px 0 0px 0'}}>
      {error && <DescriptionAlerts message={error} onClose={() => setError('')}/>}
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
