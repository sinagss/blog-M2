import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginButton: React.FC = () => {
  const nav = useNavigate();
  const onLoginHandler = () => {
    nav("login");
  };

  return (
    <Button variant="contained" onClick={onLoginHandler}>
      Login
    </Button>
  );
};

export default LoginButton;
