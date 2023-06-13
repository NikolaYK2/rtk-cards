import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import sAuth from "assets/SCSS/styleContinerAuth.module.scss";
import avatar from "assets/img/prof/img.png";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";
import { authThunks } from "features/auth/auth.slice";
import { field } from "common/utils/validate";

export const Profile = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const emailRes = useAppSelector((state) => state.auth.profile?.email);
  const nameRes = useAppSelector((state) => state.auth.profile?.name);
  const dispatch = useAppDispatch();

  console.log(nameRes);
  const [changeName, setChangeName] = useState(true);
  const [name, setName] = useState(nameRes);

  const changeNameHandle = () => {
    setChangeName(false);
  };
  const newNameHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const changeNameBlurHandle = () => {
    if (name !== "") {
      setChangeName(true);
    }
    dispatch(authThunks.authUpdateUser({name: name ?? name}))
  };
  const nameDownHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeNameBlurHandle();
    }
  };
  const saveName = () => {
    changeNameBlurHandle();
  };

  const logoutHandle = () => {
    dispatch(authThunks.logout());
  };

  console.log(isLogged);
  if (!isLogged) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <div className={sAuth.container}>
      <h1>Personal Information</h1>
      <div>
        <img src={avatar} alt="" />
      </div>

      {changeName ? (
        <h2 onDoubleClick={changeNameHandle} className={sAuth.name}>
          {nameRes}
        </h2>
      ) : (
        <form className={sAuth.form}>
          <div className={sAuth.blockInput}>
            <input
              type="text"
              autoFocus
              onBlur={changeNameBlurHandle}
              onChange={newNameHandle}
              onKeyDown={nameDownHandle}
              value={name ?? nameRes}
            />
            <label className={nameRes ? sAuth.modLabel : ""}>Nickname</label>
            <p>{nameRes === "" ?? field}</p>
            <button className={sAuth.save} onClick={saveName}>
              SAVE
            </button>
          </div>
        </form>
      )}

      <span className={sAuth.email}>{emailRes}</span>
      <button onClick={logoutHandle}>Log out</button>
    </div>
  );
};
