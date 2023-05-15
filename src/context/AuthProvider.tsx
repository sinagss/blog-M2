import AuthContext from "./AuthContext";
import { usePersistedState } from "../hooks/usePersistedState";
import { keys } from "../constants/storageKeys";
import { systemUsers } from "../data/systemUsers";

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userName, setUserName] = usePersistedState(keys.userName, "");
  const [accessLevel, setAccessLevel] = usePersistedState(keys.accessLevel, 2);
  const [isLoggedIn, setIsLoggedIn] = usePersistedState(keys.isLoggedIn, false);

  const login = (userName: string, password: string): boolean => {
    for (const user of systemUsers) {
      if (user.username === userName && user.password === password) {
        setIsLoggedIn(true);
        setUserName(userName);
        setAccessLevel(user.accessLevel);
        return true;
      }
    }
    return false;
  };

  const logout = (): void => {
    setAccessLevel(2);
    setIsLoggedIn(false);
    setUserName("");
  };

  const providerValues = {
    login: login,
    logout: logout,
    userName: userName,
    accessLevel: accessLevel,
    isLoggedIn: isLoggedIn,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
