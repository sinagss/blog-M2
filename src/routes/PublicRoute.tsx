import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type Props = { children?: React.ReactNode };

const PublicRoute: React.FC<Props> = (props) => {
  const authContext = useContext(AuthContext);
  if (authContext.isLoggedIn) {
    return <Navigate to="/" replace={false} />;
  }
  return <>{props.children}</>;
};

export default PublicRoute;
