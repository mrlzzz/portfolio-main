import { Outlet } from "react-router-dom";
import Header from "../components/feature/Header";
import Footer from "../components/feature/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
