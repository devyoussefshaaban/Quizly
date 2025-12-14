import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./context/index.ts";
import { HelmetProvider } from "react-helmet-async";
import ComminSoonLayout from "./components/Layout/ComminSoonLayout/index.tsx";


const Root = () => {
  const isDev = import.meta.env.DEV

  return (
    <StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          {isDev ? <App /> :
            <ComminSoonLayout>
              <App />
            </ComminSoonLayout>
          }
        </HelmetProvider>
      </Provider>
    </StrictMode>
  );
};


createRoot(document.getElementById("root")!).render(
  <Root />
);