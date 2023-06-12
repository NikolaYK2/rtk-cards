import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import sAuth from "assets/SCSS/styleContinerAuth.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArgRegisterType } from "features/auth/auth.api";
import { authThunks } from "features/auth/auth.slice";
import { field, validEmail } from "common/utils/validate";

type RepeatRasType = ArgRegisterType & {
  repeatPassword: string;
};
export const Register = () => {
  const [val, setVal] = useState("");
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, },
  } = useForm<RepeatRasType>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ArgRegisterType> = (data) => {
    dispatch(authThunks.register(data));
    reset();
  };
  // const registerHandler = () => {
  //   dispatch(authThunks.register({ email: "illidan@mail.ru", password: "12335illidan35" }));
  // };


  // if (isLogged) {
  //   return <Navigate to={'/profile'}/>
  // }

  return (
    <div className={sAuth.container}>
      <h1>Register</h1>
      <form className={sAuth.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={sAuth.blockInput}>
          <input
            className={errors.email ? sAuth.error : ""}
            type="email"
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
            className={errors.password ? sAuth.error : ""}
            type="password"
            {...register("password", {
              minLength: { value: 7, message: "min length is 7" },
              required: field,
            })}
          />
          <label className={watch().password ? sAuth.modLabel : ""}>Password</label>
          <p>{errors.password?.message}</p>
        </div>
        <div className={sAuth.blockInput}>
          <input
            className={errors.repeatPassword ? sAuth.error : ""}
            type="password"
            autoComplete={"off"}
            {...register("repeatPassword", {
              required: field,
              validate: (value: string) => value === watch("password") || "Passwords do not match",
            })}
          />
          <label className={watch().repeatPassword ? sAuth.modLabel : ""}>Confirm password</label>
          <p>{errors.repeatPassword?.message}</p>
        </div>
        <button disabled={!isValid} className={!isValid ? sAuth.disabl : ""}>
          register
        </button>
      </form>
      <span>Already have an account?</span>
      <NavLink to={"/sign-in"}>
        <span>Sign In</span>
      </NavLink>
    </div>
  );
};
