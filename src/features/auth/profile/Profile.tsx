import React, { useState } from "react";
import sAuth from "assets/SCSS/styleContinerAuth.module.scss";
import avatar from "assets/img/prof/avatar.jpg";
import { useAppDispatch, useAppSelector } from "app/hooks";
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

  // const {onBlur}= register('name');

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
  // if (!isLogged) {
  //   return <Navigate to={"/sign-in"} />;
  // }

  return (
    <div className={sAuth.container}>
      <h1>Personal Information</h1>
      <div className={sAuth.avatar}>
        <img src={avatar} alt="" />
        <div>
          <SVGIcons id={"change"} />
        </div>
      </div>

      {changeName ? (
        <h2 className={sAuth.name} onDoubleClick={changeNameHandle}>
          {nameRes}
          <div>
            <SVGIcons id={"change"} />
          </div>
        </h2>
      ) : (
        //CHANGE NAME INPUT ---------------------------------------------------------
        <form className={sAuth.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={sAuth.blockInput}>
            <input
              type="text"
              autoFocus
              {...register("name", {
                required: field,
                minLength: { value: 3, message: "min length is 3" },
              })}
              onBlur={handleSubmit(onSubmit)}
            />
            <label className={watch().name ? sAuth.modLabel : ""}>Nickname</label>
            <p>{errors.name?.message}</p>
            <button className={sAuth.save}>SAVE</button>
          </div>
        </form>
      )}

      <span className={sAuth.email}>{emailRes}</span>
      <button onClick={logoutHandle}>
        <div>
          <SVGIcons id={"changeB"} />
        </div>
        Log out
      </button>
    </div>
  );
};
