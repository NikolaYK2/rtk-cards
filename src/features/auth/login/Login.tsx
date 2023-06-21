import React from "react";
import { useAppDispatch } from "app/hooks";
import { NavLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";
import { authThunks } from "features/auth/auth.slice";
import { field, validEmail } from "common/utils/validate";
import { useShowPasswordInput } from "common/utils/showPassword";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";
import sAuth from "assets/SCSS/styleContinerAuth.module.scss";

export const Login = () => {
  const { type, toggle } = useShowPasswordInput();
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
    formState: { errors, isSubmitting },
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
    // navigate('/profile')
  };

  // if (isLogged) {
  //   return <Navigate to={"/profile"} />;
  // }
  return (
    <div className={sAuth.container}>
      <h1>Login</h1>
      <form className={sAuth.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={sAuth.blockInput}>
          <input
            type="email"
            className={errors.email ? sAuth.error : ""}
            {...register("email", {
              required: field,
              pattern: {
                value: validEmail,
                message: "Enter a valid e-mail address",
              },
            })}
          />
          <label className={watch().email ? sAuth.modLabel : ""}>Email</label>
          <p>{errors.email?.message}</p>
        </div>
        <div className={sAuth.blockInput}>
          <input
            type={type}
            className={errors.password ? sAuth.error : ""}
            autoComplete={"off"}
            {...register("password", {
              minLength: { value: 7, message: "min length is 7" },
              required: field,
            })}
          />
          <label className={watch().password ? sAuth.modLabel : ""}>Password</label>
          <p>{errors.password?.message}</p>
          <div className={sAuth.showInput} onClick={toggle}>
            <SVGIcons id={type === "text" ? "inputShowOff" : "inputShowOn"} />
          </div>
        </div>
        <label className={sAuth.blockCheckbox}>
          <input type="checkbox" {...register("rememberMe")} />
          Remember me
          <span className={sAuth.checkmark}></span>
        </label>
        <NavLink to={"/forgot-password"}>
          <span>Forgot Password?</span>
        </NavLink>
        <button type={"submit"} disabled={isSubmitting}>
          send
        </button>
      </form>
      <span>Don't have an account?</span>
      <NavLink to={"/sign-up"}>
        <span>Sign Up</span>
      </NavLink>
    </div>
  );
};
