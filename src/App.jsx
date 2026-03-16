import { Outlet, useLocation } from "react-router";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTopBtn from "./components/behaviors/ScrollToTopBtn";
import ModalManager from "./components/modals/ModalManager";
import LanguageHandler from "./components/behaviors/LanguageHandler";
// import { fetchSettings } from "./store/settings/settingsActions";

function App() {
  const { pathname } = useLocation();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchSettings());
  // }, [dispatch]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <LanguageHandler />

      <Header />

      <div className="min-h-dvh">
        <Outlet />
      </div>

      <Footer />

      <Toaster position="top-center" />

      <ScrollToTopBtn />

      {/* modals */}
      <ModalManager />
    </main>
  );
}

export default App;
