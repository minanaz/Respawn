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
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../contexts/AuthContextProvider";
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "2px solid rgba(126, 126, 126, 0.1)",
    },
  },
  "& label.Mui-focused": {
    color: "#666",
  },
});

const AuthLogin = () => {
  const { forgotPasswordComplete } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !code.trim()
    ) {
      alert("Fill in the fields");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    formData.append("code", code);
    forgotPasswordComplete(formData);
    alert("Changed password successfully!");
    navigate("/login");
  };

  return (
    <div className="authPage">
      <Container
        component="main"
        maxWidth="xs"
        sx={{ width: "100%", height: "100%" }}
      >
        <CssBaseline />
        <Link to="/">
          <div className="logo">
            <div className="logo-img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABfCAMAAABWUID5AAAAMFBMVEVHcEz///////////////////////////////////////////////////////////9EPuwCAAAAEHRSTlMAI085DWfH//aigdiRs+frRWbgBgAAActJREFUeNrtmd2SgyAMRg0/MRDA93/bnc66UmC9weSi1e+y0zmTEjyhuDx5ct+AEYuFju08roKhYJvKcZVOfKPzKp904POqEbPT7aoS3vFh1cneXtZg1+4WDXZt7vbdeMrR+4RK+LArxKAG3lczZUF8pddkaXxurU3CeLs0SbJ4di3eyOJzP9Nk8aHH0ydVX3TXfjUtPijve82n1qGucxSN6Qwr+R6j94GfYfjg74UnRiz/ChWR6SK+RHg9tDYMujMvXYPnK/gMh+ybb5I/XBRm8KOR7fZGN0tNmsWzOxlWcXkPTuL90mJOTihmDr+5Fu9r8U0cT+FxaWPrDG4TZM85dmkTdfFJd3HyFJ7gZA1S19ptbmPGkw2yQbej5vBkx+LHrkCZlQJDX+P4uxzOK62YP0jsdpX76zdf8n32AGDjACnJAoDJdHlaEZ19TneftQ/+W/EcjbUmbCp48m73VlDAb7YR5llEhJyk8akdJ0X3uijK4rkf5dr3OZ+Ez6qLMx5hda+Lsih+/Psghx+bCyyvtHDUb1lDyPirTIikNE5KDhnplsOw6OJRCe+rwxVCUC0on2rDqFW8yjvP0YWRhOHcmtYmLGLh7KtnfwBM1sMEK6SVHgAAAABJRU5ErkJggg=="
                alt=""
              />
            </div>
            <div className="logo-name">
              <span>Respawn</span>
            </div>
          </div>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
            padding: "10%",
            height: "87%",
            borderRadius: "3px",
            width: "90%",
            margin: "0 auto",
            marginTop: 10,
            // width: "25.437677689660333rem",
            // maxHeight: "31.021558158122353rem",
          }}
        >
          <h5 className="auth-title">Reset password</h5>

          <div className="login-wrapper">
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="email"
              autoFocus
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
              required
              fullWidth
              name="code"
              label="code"
              type="code"
              id="code"
              // helperText={codeError}
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              sx={{
                borderRadius: " 4px",
                fontFamily: "'FF Mark W05', sans-serif",
                textAlign: "center",
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              sx={{
                borderRadius: " 4px",
                fontFamily: "'FF Mark W05', sans-serif",
                textAlign: "center",
              }}
            />
            <CssTextField
              className="form-animate"
              margin="normal"
              size="small"
              required
              fullWidth
              name="passwordConfirm"
              label="confirm password"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
              // helperText={passwordError}
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
              sx={{
                borderRadius: " 4px",
                fontFamily: "'FF Mark W05', sans-serif",
                textAlign: "center",
              }}
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
                }}
              />
            }
            label="Stay signed in"
          />

          <button className="signIn-btn" onClick={handleSubmit}></button>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item sx={{ width: "50%" }}>
              <Link
                href="#"
                to="/register"
                variant="body2"
                // onClick={() => setHasAccount(!hasAccount)}
                sx={{
                  textDecoration: " none",
                  cursor: "pointer",
                  color: "#7f858a",
                  fontSize: "1rem",
                }}
              >
                create account
              </Link>
            </Grid>
          </Grid>
        </Box>
        {/* </Box> */}
      </Container>
    </div>
  );
};

export default AuthLogin;
