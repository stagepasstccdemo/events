import { Server } from "miragejs";
import factories from "./factories";
import models from "./models";
import routes from "./routes";
import seeds from "./seeds";

const config = (environment: string) => {
  const config = {
    environment,
    factories,
    models,
    routes,
    seeds,
  };

  return config;
};

export function makeServer({
  environment = "development",
}: { environment?: string } = {}) {
  return new Server(config(environment));
}
