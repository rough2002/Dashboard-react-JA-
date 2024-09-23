import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import AppLayout from "./ui/AppLayout";
// import TransactionHistory from "./pages/TransactionHistory";
// import ShortListedCV from "./pages/ShortListedCV";
import ErrorFallback from "./ui/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<AppLayout />}>
//       <Route index element={<TransactionHistory />} />
//       <Route path="transactionHistory" element={<TransactionHistory />} />
//       <Route path="shortlistedCvs" element={<ShortListedCV />} />
//     </Route>,
//   ),
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
