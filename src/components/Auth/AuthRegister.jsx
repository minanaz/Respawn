import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContextProvider";
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "2px solid rgba(126,126,126,0.1)",
    },
  },
  "& label.Mui-focused": {
    color: "#666",
  },
});

const AuthRegister = () => {
  const { register, error } = useAuth();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (
      // !name.trim() ||
      // !surname.trim() ||
      // !country.trim() ||
      // !number.trim() ||
      // !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Fill in the fields");
      return;
    }

    let formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("country", country);
    formData.append("number", number);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", confirmPassword);
    console.log(formData);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    register(formData);
  };

  return (
    <div className="authPage">
      <div className="container">
        <CssBaseline />

        <div className="register-wrapper">
          <div className="register-title">
            <h3>Create an account</h3>
          </div>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "white",
              padding: "5%",
              height: "50%",
              borderRadius: "3px",
              width: "40%",
              marginTop: 8,
            }}
          >
            <h5 className="auth-title">Let's start now</h5>
            {/* <Box
              component="form"
              noValidate
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            > */}
            <div className="form-wrapper">
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                // helperText={emailError}
                // value={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                autoComplete="name"
                disableUnderline={true}
                sx={{
                  borderRadius: "4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                id="surname"
                label="surname"
                name="surname"
                // helperText={emailError}
                autoComplete="surname"
                disableUnderline={true}
                sx={{
                  borderRadius: "4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                }}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                id="country"
                label="country"
                name="country"
                // helperText={emailError}
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                autoComplete="country"
                disableUnderline={true}
                sx={{
                  borderRadius: "4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                }}
              />
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                type="number"
                required
                fullWidth
                id="phone number"
                label="phone number"
                name="phone number"
                // helperText={emailError}
                autoComplete="phone number"
                disableUnderline={true}
                sx={{
                  borderRadius: "4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {/* </div> */}

              {/* <div className="form-wrapper-bottom"> */}
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                // helperText={emailError}
                // value={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                autoComplete="username"
                disableUnderline={true}
                sx={{
                  borderRadius: "4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                }}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                // helperText={emailError}
                // value={email}
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                autoComplete="email"
                disableUnderline={true}
                sx={{
                  borderRadius: "4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                // helperText={passwordError}
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                sx={{
                  // border: "2px solid rgba(126,126,126,0.1)",
                  borderRadius: " 4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                  textAlign: "center",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CssTextField
                className="form-animate"
                margin="normal"
                size="small"
                required
                fullWidth
                name="confirmPassword"
                label="confirm password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                // helperText={passwordError}
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                sx={{
                  // border: "2px solid rgba(126,126,126,0.1)",
                  borderRadius: " 4px",
                  fontFamily: "'FF Mark W05', sans-serif",
                  textAlign: "center",
                }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <FormControlLabel
              sx={{
                display: "flex",
                justifyContent: " flex-start",
                width: "100%",
              }}
              control={
                <Checkbox
                  value="remember"
                  color="error"
                  sx={{
                    // border: "2px solid rgba(126,126,126,0.1)",
                    color: "#666",
                    fontSize: "0.798044790263854rem",
                  }}
                />
              }
              label="Receive news, special offers, feedback surveys, and playtest invitations from Riot Games"
            />

            <div className="auth-social-wrapper">
              <p>YOU CAN ALSO CREATE AN ACCOUNT WITH</p>

              <div className="auth-social">
                <button id="auth-facebook"></button>
                <button id="auth-google"></button>
                <button id="auth-apple"></button>
                <button id="auth-xbox"></button>
              </div>
            </div>

            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "8%",
              }}
            >
              <button className="signIn-btn" onClick={handleSubmit}></button>

              <Grid item sx={{ width: "100%", mt: "3%" }}>
                <Link
                  to="/login"
                  variant="body2"
                  // onClick={() => setHasAccount(!hasAccount)}
                  sx={{
                    textDecoration: " none",
                    cursor: "pointer",
                    color: "#7f858a",
                    fontSize: "1rem",
                  }}
                >
                  Already have an account?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
        {/* </Box> */}
      </div>
    </div>
  );
};

export default AuthRegister;
