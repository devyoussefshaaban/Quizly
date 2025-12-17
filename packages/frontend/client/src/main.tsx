import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import ComminSoonLayout from "./components/Layout/ComminSoonLayout/index.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // Data is fresh for only 1 minute
      retry: 1, // Refetch once if the initial fetch return error
      refetchOnWindowFocus: false, // Do not refetch if user went and return back to the page
    },
    mutations: {
      retry: 1,
    },
  },
})

const Root = () => {
  const isDev = import.meta.env.DEV

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          {isDev ? <App /> :
            <ComminSoonLayout>
              <App />
            </ComminSoonLayout>
          }
        </HelmetProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
};


createRoot(document.getElementById("root")!).render(
  <Root />
);