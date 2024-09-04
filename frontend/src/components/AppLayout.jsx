import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
}

export default AppLayout;
