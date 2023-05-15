import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginButton from "../components/UI/LoginButton";
import LogoutButton from "../components/UI/LogoutButton";
import AuthContext from "../context/AuthContext";

const Home: React.FC = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Welcome to my simple blog</Typography>
      {authCtx.isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </Box>
  );
};

export default Home;
