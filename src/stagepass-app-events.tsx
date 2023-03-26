import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import Root from "./root.component";

// Change to env variable later on

Sentry.init({
  dsn: "https://af23a7def5a74172a8d87d2e0e78c053@o4504899977936896.ingest.sentry.io/4504904055324672",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    Sentry.withScope((scope) => {
      scope.setExtra("props", props);
      scope.setExtra("info", info);
      Sentry.captureException(err);
    });

    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
