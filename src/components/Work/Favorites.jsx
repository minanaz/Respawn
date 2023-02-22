import { IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useFavorite } from "../../contexts/FavoritesContextProvider";
import { useNavigate } from "react-router";

const Favorites = () => {
  const {
    getFavorites,
    addToFavorites,
    deleteFromFavorites,
    checkInFavorites,
  } = useFavorite();

  const [checker, setChecker] = useState(false);

  const navigate = useNavigate();
  let vacancy = getFavorites();
  useEffect(() => {
    vacancy = getFavorites();
  }, [checker]);


  return (
    <div>
      <Box sx={{ background: "#e7e6e3", padding: "50px 0" }}>
        <Container>
          <Typography
            sx={{
              fontSize: { xs: "26px", sm: "36px" },
              lineHeight: "1",
              width: "40vw",
              fontWeight: "bold",
            }}
          >
            Favorites
          </Typography>
          {vacancy.map((item, index) => (
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="small"
                onClick={() => {
                  if (checkInFavorites(item.id)) {
                    // setIsFavorite(true)
                    deleteFromFavorites(item.id);
                    setChecker(!checker);
                  } else {
                    // setIsFavorite(false);
                    setChecker(!checker);
                    addToFavorites(item);
                  }
                }}
                color={checkInFavorites(item.id) ? "error" : ""}
              >
                <StarIcon sx={{ zIndex: 0 }} />
              </IconButton>
              <Box
                onClick={() => navigate("/work/1")}
                className="work-list-content"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  padding: "20px",
                  background: `${index % 2 == 0 ? "" : "#e2e1de"}`,
                  minHeight: "50px",
                  width: "100%",
                }}
              >
                <Typography
                  className="work-list-title"
                  sx={{
                    width: { md: "41%", xs: "100%" },
                    textAlign: "start",
                    fontWeight: "bold",
                  }}
                >
                  {item.role}
                </Typography>
                <Box
                  sx={{
                    width: { xs: "100%", md: "59%" },
                    display: "flex",
                    justifyContent: { md: "space-between", xs: "none" },
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      borderRight: { xs: "1px solid grey", md: "none" },
                      marginRight: { xs: "10px", md: "0px" },
                      paddingRight: { xs: "10px", md: "0px" },
                      width: { md: "30%", xs: "100xp" },
                      fontSize: "13px",
                      textAlign: "start",
                    }}
                  >
                    {item.group}
                  </Typography>
                  <Typography
                    sx={{
                      borderRight: { xs: "1px solid grey", md: "none" },
                      marginRight: { xs: "10px", md: "0px" },
                      paddingRight: { xs: "10px", md: "0px" },
                      width: { md: "30%", xs: "100xp" },
                      fontSize: "13px",
                      textAlign: "start",
                    }}
                  >
                    {item.team}
                  </Typography>
                  <Typography
                    sx={{
                      marginRight: { xs: "10px", md: "0px" },
                      paddingRight: { xs: "10px", md: "0px" },
                      width: { md: "30%", xs: "100xp" },
                      fontSize: "13px",
                      textAlign: "start",
                    }}
                  >
                    {item.location}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </div>
  );
};

export default Favorites;
