import React, { useEffect } from "react";
import "app/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "components/router/errorPage";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appActions, appThunk } from "app/app.slice";
import { Register } from "features/auth/register/Register";
import { Login } from "features/auth/login/Login";
import { ForgotPassword } from "features/auth/1-forgotPassword/ForgotPassword";
import { CreatePassword } from "features/auth/2-newPas/CreaatePassword";
import { CheckEmail } from "features/auth/checkEmail/ChekEmail";
import { Profile } from "features/auth/profile/Profile";

export function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  }, []);

  useEffect(() => {
    //при старте приложения проверяем мы ли это
    dispatch(appThunk.isInitializedApp());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      <Routes>
        <Route path={"/"} element={<Navigate to={"/profile"} />} />
        {/*AUTH --------------------------------------------------------*/}
        <Route path={"/sign-up"} element={<Register />} />
        <Route path={"/sign-in"} element={<Login />} />
        <Route path={"/check-email"} element={<CheckEmail />} />
        <Route path={"/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/set-new-password"} element={<CreatePassword />} />
        <Route path={"/profile"} element={<Profile />} />
        {/*--------------------------------------------------------*/}

        <Route path={"/packs"} />
        <Route path={"/cards"} />
        <Route path={"/learn"} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

// export function App() {
//   return (
//     <div className="App">
//       {/*<header className="App-header">*/}
//       {/*  <img src={logo} className="App-logo" alt="logo" />*/}
//       {/*  <Counter />*/}
//       {/*  <p>*/}
//       {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
//       {/*  </p>*/}
//       {/*  <span>*/}
//       {/*    <span>Learn </span>*/}
//       {/*    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">*/}
//       {/*      React*/}
//       {/*    </a>*/}
//       {/*    <span>, </span>*/}
//       {/*    <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">*/}
//       {/*      Redux*/}
//       {/*    </a>*/}
//       {/*    <span>, </span>*/}
//       {/*    <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">*/}
//       {/*      Redux Toolkit*/}
//       {/*    </a>*/}
//       {/*    ,<span> and </span>*/}
//       {/*    <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">*/}
//       {/*      React Redux*/}
//       {/*    </a>*/}
//       {/*  </span>*/}
//       {/*</header>*/}
//     </div>
//   );
// }
//
// export default App;
