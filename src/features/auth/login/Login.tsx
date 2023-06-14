import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import sLog from "assets/SCSS/styleContinerAuth.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";
import { authThunks } from "features/auth/auth.slice";
import { field, validEmail } from "common/utils/validate";
import { useShowPasswordInput } from "common/utils/showPassword";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";

export const Login = () => {
  const { type, toggle } = useShowPasswordInput();
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const dispatch = useAppDispatch();

  // const change = (e: ChangeEvent<HTMLInputElement>) => {
  //   setVal(e.currentTarget.value);
  // };
  // const loginHandle = () => {
  //   dispatch(authThunks.login({ email: "illidan@mail.ru", password: "12335illidan35", rememberMe: false }));
  // };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<ArgLoginType>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<ArgLoginType> = (data) => {
    dispatch(authThunks.login(data));
    reset();
  };

  if (isLogged) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className={sLog.container}>
      <h1>Login</h1>
      <form className={sLog.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={sLog.blockInput}>
          <input
            type="email"
            {...register("email", {
              required: field,
              pattern: {
                value: validEmail,
                message: "Enter a valid e-mail address",
              },
            })}
          />
          <label className={watch().email ? sLog.modLabel : ""}>Email</label>
          <p>{errors.email?.message}</p>
        </div>
        <div className={sLog.blockInput}>
          <input
            type={type}
            autoComplete={"on"}
            {...register("password", {
              minLength: { value: 7, message: "min length is 7" },
              required: field,
            })}
          />
          <label className={watch().password ? sLog.modLabel : ""}>Password</label>
          <p>{errors.password?.message}</p>
          <div className={sLog.showInput} onClick={toggle}>
            <SVGIcons id={type === "text" ? "inputShowOff" : "inputShowOn"} />
          </div>
        </div>
        <div className={sLog.blockCheckbox}>
          <input type="checkbox" {...register("rememberMe")} />
          Remember me
        </div>
        <NavLink to={"/forgot-password"}>
          <span>Forgot Password?</span>
        </NavLink>
        <button type={"submit"}>send</button>
      </form>
      <span>Don't have an account?</span>
      <NavLink to={"/sign-up"}>
        <span>Sign Up</span>
      </NavLink>
    </div>
  );
};
