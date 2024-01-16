import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RootLayout from "./layout/RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Index route
      {
        index: true,
        element: <HomePage />,
      },
      // Ready for future routes
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
