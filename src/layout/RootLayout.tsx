// import { Outlet } from "react-router-dom";
import Header from "../components/feature/Header";
import Footer from "../components/feature/Footer";
import HomePage from "../pages/HomePage";
import { useRef } from "react";

/* 
    1. Use `Outlet` for cross-page navigation. Currently it's infra-page. 
    2. Here, I am just passing the refs down and using the Element.scrollIntoView().
    3. I could create a small context and skip the `drilling`.
    4. OR I could actually make use of the Data API from the react-router.
      - "the key objective of using routers and the data loading API is to handle different views
         and data requirements based on different URL paths and not specifically 
         designed for sharing refs or functions, as in your initial problem."  
  */

const RootLayout = () => {
  const navRefs = {
    about: useRef<HTMLHeadingElement>(null),
    projects: useRef<HTMLHeadingElement>(null),
    contact: useRef<HTMLHeadingElement>(null),
  };

  return (
    <>
      <Header navRefs={navRefs} />

      <HomePage navRefs={navRefs} />
      <Footer />
    </>
  );
};

export default RootLayout;
