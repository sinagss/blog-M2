import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import DrawerAppBar from "./components/DrawerAppBar";
import About from "./pages/About";
import Users from "./pages/Users";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import { usePersistedState } from "./hooks/usePersistedState";
import { keys } from "./constants/storageKeys";
import Container from "@mui/material/Container";

function App() {
  const [isLoggedIn] = usePersistedState(keys.isLoggedIn, false);
  const [accessLevel] = usePersistedState(keys.accessLevel, 2);

  //todo: states are not getting updated so pathing is not working
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <DrawerAppBar />
          <Container>
            <Outlet />
          </Container>
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "posts", element: <Home /> },
        {
          path: "users",
          element:
            isLoggedIn && accessLevel === 0 ? (
              <Users />
            ) : (
              <Navigate to="/" replace />
            ),
        },
        { path: "about", element: <About /> },
        {
          path: "login",
          element: isLoggedIn ? <Navigate to="/" replace /> : <Login />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
