import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type Props = { children?: React.ReactNode };

const PrivateRoute: React.FC<Props> = (props) => {
  const authContext = useContext(AuthContext);
  console.log(authContext.accessLevel);
  console.log(authContext.isLoggedIn);

  if (!authContext.isLoggedIn || authContext.accessLevel !== 0) {
    return <Navigate to="/" replace={false} />;
  }
  return <>{props.children}</>;
};

export default PrivateRoute;
