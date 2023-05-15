/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

const initialState = {
  login: () => false,
  logout: () => {},
  userName: "",
  accessLevel: 2,
  isLoggedIn: false,
};

const AuthContext = createContext<AuthProviderType>(initialState);

export default AuthContext;
