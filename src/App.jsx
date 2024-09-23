import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import TransactionHistory from "./pages/TransactionHistory";
import ShortListedCV from "./pages/ShortListedCV";
import NotFound from "./ui/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<TransactionHistory />} />
      <Route path="transactionHistory" element={<TransactionHistory />} />
      <Route path="shortlistedCvs" element={<ShortListedCV />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
