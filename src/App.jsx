import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import Register from "./pages/Register";
import PrivateRoutes from "./routes/PrivateRoutes";
import Universe from "./components/Universe";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import Profile from "./pages/Profile";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Universe />}>
      <Route element={<Layout />}>
        <Route path="/" element={<PrivateRoutes component={Home} />} />
        <Route path="/profile" element={<PrivateRoutes component={Profile} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
