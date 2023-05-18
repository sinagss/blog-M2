import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DrawerAppBar from "./components/DrawerAppBar";
import About from "./pages/About";
import Users from "./pages/Users";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import Container from "@mui/material/Container";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Posts from "./pages/Posts";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <DrawerAppBar />
          <Container>
            <Outlet />
            <ScrollToTop />
          </Container>
        </>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "posts", element: <Posts /> },
        {
          path: "users",
          element: (
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          ),
        },
        { path: "about", element: <About /> },
      ],
    },
    {
      path: "login",
      element: (
        <PublicRoute>
          <Login />,
        </PublicRoute>
      ),
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
