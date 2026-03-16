import { createRoot } from "react-dom/client";
import AppRouter from "./routes/AppRouter.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";
import { DirectionProvider } from "./components/ui/direction.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <DirectionProvider direction="rtl">
        <AppRouter />
      </DirectionProvider>
    </Provider>
  </QueryClientProvider>,
);
