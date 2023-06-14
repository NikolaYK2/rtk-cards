import React, { useState } from "react";
import sAuth from "assets/SCSS/styleContinerAuth.module.scss";
import avatar from "assets/img/prof/img.png";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Navigate } from "react-router-dom";
import { authThunks } from "features/auth/auth.slice";
import { field } from "common/utils/validate";
import { SubmitHandler, useForm } from "react-hook-form";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";

export const Profile = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const emailRes = useAppSelector((state) => state.auth.profile?.email);
  const nameRes = useAppSelector((state) => state.auth.profile?.name);
  const dispatch = useAppDispatch();

  console.log(nameRes);
  const [changeName, setChangeName] = useState(true);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<{ name: string }>({
    mode: "onBlur",
    defaultValues: {
      name: nameRes,
    },
  });

  const onSubmit: SubmitHandler<{ name: string }> = (data) => {
    dispatch(authThunks.authUpdateUser({ name: data.name }));
    setChangeName(true);
  };

  const changeNameHandle = () => {
    setChangeName(false);
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
      <div className={sAuth.avatar}>
        <img src={avatar} alt="" />
        <div>
          <SVGIcons id={"avatar"} />
        </div>
      </div>

      {changeName ? (
        <h2 className={sAuth.name} onDoubleClick={changeNameHandle}>
          {nameRes}
        </h2>
      ) : (
        <form className={sAuth.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={sAuth.blockInput}>
            <input
              type="text"
              autoFocus
              {...register("name", {
                required: field,
                minLength: { value: 3, message: "min length is 3" },
              })}
            />
            <label className={watch().name ? sAuth.modLabel : ""}>Nickname</label>
            <p>{errors.name?.message}</p>
            <button className={sAuth.save}>SAVE</button>
          </div>
        </form>
      )}

      <span className={sAuth.email}>{emailRes}</span>
      <button onClick={logoutHandle}>Log out</button>
    </div>
  );
};
