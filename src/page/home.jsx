import {
  Box,
  Button,
  colors,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import rasm from "../assets/image.png";
import rasm1 from "../assets/image copy.png";

const Home = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Typography
          variant="subtitle1"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Ковры
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Коврики
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Для ванной
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Дорожки
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Особенные ковры
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Центр поддержки
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              color: "black",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            to={"/"}
          >
            Контакты
          </Link>
        </Typography>
      </Container>

      <Box
        sx={{
          width: "1900px",
          height: "596px",
          backgroundColor: "#618c78",
        }}
      >
        <Container>
          <Box sx={{ display: "flex"}}>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                fontSize={"50px"}
                color="#fff"
                width={"524px"}
                pt={"175px"}
              >
                Новая коллекция ковров Venetta
              </Typography>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "#cb4a4a",
                  color: "#fff",
                  border: "none",
                  width: "198px",
                  height: "51px",
                  borderRadius: "10px",
                  marginTop: "32px",
                }}
              >
                Смотреть все
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "97px",
                gap: "40px"
              }}
            >
              <Box>
                <img src={rasm} alt="" />
              </Box>
              <Box>
                <img src={rasm1} alt="" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
