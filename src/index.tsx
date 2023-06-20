import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import reportWebVitals from "./reportWebVitals";
import "index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "components/router/errorPage";
import { Profile } from "features/auth/profile/Profile";
import App from "app/App";
import { Register } from "features/auth/register/Register";
import { Login } from "features/auth/login/Login";
import { CheckEmail } from "features/auth/checkEmail/ChekEmail";
import { ForgotPassword } from "features/auth/1-forgotPassword/ForgotPassword";
import { CreatePassword } from "features/auth/2-newPas/CreaatePassword";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        errorElement:<ErrorPage/>,
        children: [
          // { index: true, element: <Profile /> },
          {
            path: "sign-up",
            element: <Register />,
          },
          {
            path: "sign-in",
            element: <Login />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "check-email",
            element: <CheckEmail />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "set-new-password/:token",
            element: <CreatePassword />,
          },
        ],
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  <Provider store={store}>
    {/*<App />*/}
    <RouterProvider router={router} />
  </Provider>
  // </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
