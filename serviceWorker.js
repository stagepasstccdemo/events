if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(
      (registration) => {
        console.log("Service worker registered:", registration);
      },
      (error) => {
        console.error("Service worker registration failed:", error);
      }
    );
  });
}
