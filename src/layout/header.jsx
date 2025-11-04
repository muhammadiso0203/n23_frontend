import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Location from "../assets/location";
import SearchIcon from "../assets/search-icon";
import UserIcon from "../assets/user-icon";
import LikeIcon from "../assets/like-icon";
import CartIcon from "../assets/cart-icon";

import { CustomButton, CustomIconButton, Searchinput } from "./style";

const Header = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <Stack py={"31px"} direction={"row"} gap={"60px"}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <Box alignItems={"center"} display={"inline-flex"}>
            <IconButton>
              <Location />
            </IconButton>
            <Typography fontSize={18} variant="subtitle1">
              Алматы
            </Typography>
          </Box>
          <Box flexGrow={1} position={"relative"}>
            <Searchinput placeholder="Поиск по товарам" />
            <CustomIconButton>
              <SearchIcon />
            </CustomIconButton>
          </Box>
          <Stack direction={"row"} alignItems={"center"}>
            <CustomButton>
              <UserIcon />
            </CustomButton>

            <CustomButton>
              <LikeIcon />
            </CustomButton>
            <CustomButton>
              <Badge badgeContent={4} color="error">
                <CartIcon />
              </Badge>
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
