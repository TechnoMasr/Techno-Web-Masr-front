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
const Blog = React.lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = React.lazy(
  () => import("../pages/BlogDetails/BlogDetails"),
);
const AiTools = React.lazy(() => import("../pages/AiTools/AiTools"));
const AiToolsDetails = React.lazy(
  () => import("../pages/AiToolsDetails/AiToolsDetails"),
);
const AiToolsCategories = React.lazy(
  () => import("../pages/AiToolsCategories/AiToolsCategories"),
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
      { path: "contact/:slug", element: <ContactUsBranch /> },
      { path: "partners", element: <Partners /> },
      { path: "previous-work", element: <PreviousWork /> },
      { path: "previous-work/:slug", element: <PreviousWorkDetails /> },
      { path: "services", element: <Services /> },
      { path: "services/:slug", element: <ServicesDetails /> },
      { path: "products", element: <Products /> },
      { path: "products/:slug", element: <ProductsDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetails /> },
      { path: "ai-tools", element: <AiTools /> },
      { path: "ai-tools/:slug", element: <AiToolsDetails /> },
      { path: "ai-tools-categories", element: <AiToolsCategories /> },

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
