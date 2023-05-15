import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const LoginButton: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const nav = useNavigate();
  const onLoginHandler = () => {
    authCtx.logout();
    nav("/");
  };

  return (
    <Button variant="contained" onClick={onLoginHandler}>
      Logout
    </Button>
  );
};

export default LoginButton;
