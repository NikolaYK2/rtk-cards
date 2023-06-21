import React, { useEffect } from "react";
import "app/App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appThunk } from "app/app.slice";
import { Header } from "features/1-header/Header";

export function App() {
  const initApp = useAppSelector((state) => state.app.isAppInitialized);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(appThunk.isInitializedApp());

    if (isLogged) {
      navigate("profile");
    } else {
      navigate("sign-in");
    }
  }, [navigate, isLogged, dispatch]);

  console.log(initApp, "init app");

  if (!initApp) {
    return <div>{/*<h1 style={{ fontSize: "100px" }}>Loading</h1>*/}</div>;
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      {/*{isLoading && <h1>Loader...</h1>}*/}

      <main>
        <Outlet />
        {/*<Routes>*/}
        {/*  <Route path={"/"} element={<Navigate to={"/profile"} />} />*/}
        {/*  /!*AUTH --------------------------------------------------------*!/*/}
        {/*  <Route path={"/sign-up"} element={<Register />} />*/}
        {/*  <Route path={"/sign-in"} element={<Login />} />*/}
        {/*  <Route path={"/check-email"} element={<CheckEmail />} />*/}
        {/*  <Route path={"/forgot-password"} element={<ForgotPassword />} />*/}
        {/*  <Route path={"/set-new-password"} element={<CreatePassword />} />*/}
        {/*  <Route path={"/set-new-password/:token"} element={<CreatePassword />} />*/}
        {/*  <Route path={"/profile"} element={<Profile />} />*/}
        {/*  /!*--------------------------------------------------------*!/*/}

        {/*  <Route path={"/packs"} />*/}
        {/*  <Route path={"/cards"} />*/}
        {/*  <Route path={"/learn"} />*/}
        {/*  <Route path={"*"} element={<ErrorPage />} />*/}
        {/*</Routes>*/}
      </main>
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
