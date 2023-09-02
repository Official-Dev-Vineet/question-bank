import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const RootLayout = () => {
  return (
    <>
      <Header
        tag="h1"
        title="Welcome to Question Bank"
        subtitle="Give yourself a chance to score higher than others"
      />
      <Outlet />
      <Footer />
    </>
  );
};
