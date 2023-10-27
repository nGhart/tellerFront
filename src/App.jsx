import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  SignupPage,
  AccountsPage,
  ErrorPage,
  SummaryPage,
  TransactionPage,
  AddDeposit,
  Dashboard,
  AddWithdrawal,
  Layout,
  DailyReport,
} from "./pages";

//import BASE_URL from "./utilities/apiUrl";

////axios.get(`${BASE_URL}/owner`)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <SignupPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <SummaryPage />,
          },
          {
            path: "adddeposit",
            element: <AddDeposit />,
          },

          {
            path: "addwithdrawal",
            element: <AddWithdrawal />,
          },
          {
            path: "accounts",
            element: <AccountsPage />,
          },
          {
            path: "transactions",
            element: <TransactionPage />,
          },
          {
            path: "report",
            element: <DailyReport />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
