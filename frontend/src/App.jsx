import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import routes from "./routes/route";

// Context
import { AuthProvider } from "./context/authContext.js";
import { TransactionsProvider } from "./context/TransactionContext.jsx";

// Stylesheet
import "./App.css";

const router = createBrowserRouter(routes);

function App() {
  return (
    <TransactionsProvider>
      <AuthProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </AuthProvider>
    </TransactionsProvider>
  );
}

export default App;
