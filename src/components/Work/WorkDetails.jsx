import {
  Button,
  Container,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import respEntr from "./css/images/resp-entr.jpg";
import work from "./css/work.css";

import { styled } from "@mui/material/styles";
import { useWorkContext } from "../../contexts/WorkContextProvider";
import { useParams } from "react-router-dom";
const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      border: "1px solid #b2b1ae",
    },
  },
  "& label.Mui-focused": {
    color: "#666",
  },
});

const WorkDetails = () => {
  const [isApplyBtnClick, setIsApplyBtnClick] = useState(false);
  const [resume, setResume] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    github: "",
    description: "",
    findOther: "",
  });
  const [fileRes, setFileRes] = useState("");
  const [whereFind, setWhereFind] = useState("");
  const [location, setLocation] = useState("");
  const {
    oneVacancy,
    getOneVacancy,
    addResume,
    groups,
    teams,
    getGroups,
    getTeams,
  } = useWorkContext();
  const [check, setCheck] = useState(true);
  const params = useParams();

  let respons = [];
  let requirs = [];
  useEffect(() => {
    getOneVacancy(params.id);
    getTeams();
    getGroups();
    setCheck(!check);
  }, []);

  // useEffect(() => {
  //   respons = oneVacancy.demands.split(" ");
  //   requirs = oneVacancy.privileges.split("\r\n");

  // }, [check]);

  function handleSubmit() {
    let formData = new FormData();

    formData.append("name", resume.name);
    formData.append("email", resume.email);
    formData.append("last_name", resume.lastName);
    formData.append("git_hub", resume.github);
    formData.append("description", resume.description);
    formData.append("phone", resume.phone);
    formData.append("country", location);
    formData.append("resume", fileRes);
    if (whereFind != "Other") {
      formData.append("about_us", whereFind);
    } else {
      formData.append("about_us", resume.findOther);
    }

    for (const value of formData.values()) {
      console.log(value);
    }

    // let formData = {
    //   "name": resume.name
    // }

    addResume(formData);
  }

  function handleChange(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="work-details-page">
      <Box
        sx={{
          backgroundImage: `url(${respEntr})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          webkitBackgroundSize: "cover",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundColor: "balck",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 20px",
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  background: "red",
                  minWidth: "10px",
                  padding: "0 10px",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {groups[oneVacancy.groupId - 1]?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "50px" },
                  color: "white",
                  fontWeight: "bold",
                  mb: "20px",
                }}
              >
                {oneVacancy.role}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold",
                  background: "red",
                  padding: "0 10px",
                }}
              >
                {teams[oneVacancy.teamId - 1]?.title}
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box sx={{ background: "#e7e6e3", padding: "50px 0" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              maxWidth: "700px",
              fontSize: { sm: "22px", xs: "16px" },
              textAlign: "start",
            }}
          >
            {oneVacancy?.description}
          </Typography>
          <List
            sx={{
              fontSize: { sm: "20px", xs: "14px" },
              maxWidth: "700px",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontWeight: "bold",
                textAlign: "start",
                mt: "20px",
              }}
            >
              Responsibilities
            </Typography>
            {oneVacancy?.responsibilities?.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
          <List
            sx={{
              fontSize: { sm: "20px", xs: "14px" },
              maxWidth: "700px",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "22px", xs: "16px" },
                fontWeight: "bold",
                textAlign: "start",
                mt: "20px",
                maxWidth: "700px",
              }}
            >
              Requirements
            </Typography>
            {oneVacancy?.requirements?.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
          <Box className="apply-wrapper" sx={{ width: "70%" }}>
            <button onClick={() => setIsApplyBtnClick(!isApplyBtnClick)}>
              Apply
            </button>
            <Box
              className={
                isApplyBtnClick ? "show-apply-form apply-form" : "apply-form"
              }
            >
              <TextField
                color="error"
                size="small"
                label="Name"
                name="name"
                value={resume.name}
                onChange={handleChange}
                sx={{ width: "100%" }}
                variant="outlined"
              />
              <TextField
                color="error"
                size="small"
                label="Lastame"
                name="lastName"
                value={resume.lastName}
                onChange={handleChange}
                sx={{ width: "100%" }}
                variant="outlined"
              />
              <TextField
                color="error"
                size="small"
                label="Email"
                name="email"
                value={resume.email}
                onChange={handleChange}
                sx={{ width: "100%" }}
                variant="outlined"
                placeholder="ivan.ivanov@gmail.com"
              />
              <TextField
                color="error"
                size="small"
                label="Github"
                name="github"
                value={resume.github}
                onChange={handleChange}
                sx={{ width: "100%" }}
                variant="outlined"
                placeholder="https://github.com/IvanIvanov"
              />
              <TextField
                color="error"
                size="small"
                label="Phone"
                name="phone"
                value={resume.phone}
                onChange={handleChange}
                sx={{ width: "100%" }}
                variant="outlined"
              />
              <TextField
                multiline
                rows={4}
                color="error"
                size="small"
                label="Description"
                name="description"
                value={resume.description}
                onChange={handleChange}
                sx={{ width: "100%" }}
                variant="outlined"
              />

              <FormControl
                color="error"
                sx={{
                  width: "100%",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small">Location</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={location}
                  // defaultValue={40}
                  label="Location"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <MenuItem value="KG">Kyrgyzstan</MenuItem>
                  <MenuItem value="RU">Russia</MenuItem>
                  <MenuItem value="KZ">Kazakhstan</MenuItem>
                  <MenuItem value="US">USA</MenuItem>
                </Select>
              </FormControl>

              <CssTextField
                // value={fileRes}
                onChange={(e) => setFileRes(e.target.files[0])}
                label="Add resume"
                focused
                type="file"
                id="getFile"
                color="error"
              />

              <FormControl
                color="error"
                sx={{
                  width: "100%",
                }}
                size="small"
              >
                <InputLabel id="demo-select-small">
                  How did you hear about this job?
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={whereFind}
                  label="How did you hear about this job?"
                  onChange={(e) => setWhereFind(e.target.value)}
                >
                  <MenuItem value="from media">Social Media</MenuItem>
                  <MenuItem value="from sanfransico">Linkedin</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              {whereFind == "Other" ? (
                <TextField
                  color="error"
                  size="small"
                  label="Other"
                  name="findOther"
                  value={resume.findOther}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  variant="outlined"
                />
              ) : (
                ""
              )}
              <button onClick={handleSubmit}>Submit</button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default WorkDetails;
