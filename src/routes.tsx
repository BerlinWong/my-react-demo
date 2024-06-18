import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const LazyLogin = lazy(() => import("@/pages/Login"));
const LazyGenerateImage = lazy(() => import("@/pages/GenerateImage"));
const LazyLayout = lazy(() => import("@/pages/Layout"));
const LazyHome = lazy(() => import("@/pages/Home"));
// const LazyTestPage = lazy(() => import("@/pages/TestPage"));
const LoadingPage = () => <div>Loading...</div>;
const routesList = [
  {
    path: "/login",
    element: (
      <Suspense fallback={LoadingPage()}>
        <LazyLogin />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={LoadingPage()}>
        <LazyLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingPage />}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "generate-image",
        name: "generate-image",
        element: (
          <Suspense fallback={LoadingPage()}>
            <LazyGenerateImage />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];

const WrapperRoutes = () => {
  const element = useRoutes(routesList);
  return element;
};

export default WrapperRoutes;
