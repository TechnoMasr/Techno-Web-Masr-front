import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { useDispatch } from "react-redux";
import { fetchSetting } from "./store/setting/setting";
import ScrollToTopBtn from "./components/behaviors/ScrollToTopBtn";
import ScrollToHash from "./components/behaviors/ScrollToHash";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchSetting());
  }, [dispatch]);

  return (
    <main>
      <ScrollToHash />

      <Header />

      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>

      <Footer />

      <ScrollToTopBtn />
    </main>
  );
}

export default App;
