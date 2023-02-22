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
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Auth/Auth.css";
import { styled } from "@mui/material/styles";
import { useNews } from "../../contexts/NewsContextProvider";

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

const AddNews = () => {
  const { addNews } = useNews();

  const [newNews, setNewNews] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewNews({ ...newNews, [e.target.name]: [e.target.value] });
  };

  const handleSave = () => {
    addNews(newNews);
    navigate("/news");
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
          }}
        >
          <h5 className="auth-title">What's new?</h5>

          <div className="login-wrapper">
            <CssTextField
              className="form-animate"
              margin="normal"
              size="small"
              required
              fullWidth
              name="title"
              // helperText={emailError}
              value={newNews.title}
              label="your title goes here"
              onChange={handleChange}
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
              name="description"
              label="your description goes here"
              value={newNews.description}
              onChange={handleChange}
              sx={{
                // border: "2px solid rgba(126,126,126,0.1)",
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
              name="date"
              label="your date goes here"
              value={newNews.date}
              onChange={handleChange}
              sx={{
                // border: "2px solid rgba(126,126,126,0.1)",
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
              name="image"
              label="your image url goes here"
              value={newNews.image}
              onChange={handleChange}
              sx={{
                // border: "2px solid rgba(126,126,126,0.1)",
                borderRadius: " 4px",
                fontFamily: "'FF Mark W05', sans-serif",
                textAlign: "center",
              }}
            />
          </div>

          <button className="signIn-btn" onClick={handleSave}></button>
        </Box>
        {/* </Box> */}
      </Container>
    </div>
  );
};

export default AddNews;
