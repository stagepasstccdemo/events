import { queryClient } from "@services/queryClient";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
