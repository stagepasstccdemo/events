import { queryClient } from "@services/queryClient";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

// if (process.env.NODE_ENV === "development") {
//   require("./services/mock/server").makeServer();
// }

require("./services/mock/server").makeServer();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
