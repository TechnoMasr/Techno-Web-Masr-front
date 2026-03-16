import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import App from "../App";
import LoadingPage from "../components/Loading/LoadingPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const ContactUS = React.lazy(() => import("../pages/ContactUS/ContactUS"));
const ContactUsBranch = React.lazy(
  () => import("../pages/ContactUsBranch/ContactUsBranch"),
);
const Partners = React.lazy(() => import("../pages/Partners/Partners"));
const PreviousWork = React.lazy(
  () => import("../pages/PreviousWork/PreviousWork"),
);
const PreviousWorkDetails = React.lazy(
  () => import("../pages/PreviousWorkDetails/PreviousWorkDetails"),
);
const Services = React.lazy(() => import("../pages/Services/Services"));
const ServicesDetails = React.lazy(
  () => import("../pages/ServicesDetails/ServicesDetails"),
);
const Products = React.lazy(() => import("../pages/Products/Products"));
const ProductsDetails = React.lazy(
  () => import("../pages/ProductsDetails/ProductsDetails"),
);

const SitePages = React.lazy(() => import("../pages/SitePages/SitePages"));

const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/ar" replace />,
  },
  {
    path: "/:lang",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUS /> },
      { path: "contact/:id", element: <ContactUsBranch /> },
      { path: "partners", element: <Partners /> },
      { path: "previous-work", element: <PreviousWork /> },
      { path: "previous-work/:id", element: <PreviousWorkDetails /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServicesDetails /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductsDetails /> },

      { path: "pages/:slug", element: <SitePages /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
