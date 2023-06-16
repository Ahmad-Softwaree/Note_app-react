import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Fragment, Suspense, lazy } from "react";
import GoogleSuccess from "./pages/GoogleSuccess";
import GoogleFailed from "./pages/GoogleFailed";
const Register = lazy(() => import("./pages/Register"));
const PrivateRoutes = lazy(() => import("./routes/PrivateRoutes"));
const Universe = lazy(() => import("./components/Universe"));
const Login = lazy(() => import("./pages/Login"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Profile = lazy(() => import("./pages/Profile"));
const Fallback = lazy(() => import("./components/Fallback"));
const Home = lazy(() => import("./pages/Home.jsx"));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route element={<Universe />}>
        <Route element={<Layout />}>
          <Route path="/" element={<PrivateRoutes component={Home} />} />

          <Route path="/profile" element={<PrivateRoutes component={Profile} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
      <Route path="/google/success" element={<GoogleSuccess />} />
      <Route path="/google/failed" element={<GoogleFailed />} />
    </Fragment>
  )
);

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
