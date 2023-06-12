import React, { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import sLog from "assets/SCSS/styleContinerAuth.module.scss";
import { field } from "common/utils/validate";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotType } from "features/auth/auth.api";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

export const ForgotPassword = () => {
  const [val, setVal] = useState("");
  const email = useAppSelector(state => state.auth)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const message = `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href="http://localhost:3000/set-new-password/$token$">
link</a>
</div>`; // хтмп-письмо, вместо $token$ бэк вставит токен

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      from: "", //"test-front-admin <ai73a@yandex.by>", // можно указать разработчика фронта)
      message: message,
    },
  });
  const onSubmit: SubmitHandler<ForgotType> = (data) => {
    console.log(data);
    dispatch(authThunks.forgotNewPassword(data));
    reset();
    navigate('/set-new-password')
  };
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };

  return (
    <div className={sLog.container}>
      <h1>Forgot your password?</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={sLog.form}>
        <div className={sLog.blockInput}>
          <input
            type="email"
            {...register("email", {
              required: field,
            })}
          />
          {/*<input type="email" value={val} onChange={change} />*/}
          <label className={watch().email ? sLog.modLabel : ""}>Email</label>
          <p>{errors.email?.message}</p>
        </div>
        <span>Enter your email address and we will send you further instructions </span>
        {/*<NavLink to={'/check-email'}>*/}
        <button>Send Instructions</button>
        {/*</NavLink>*/}
      </form>
      <span>Did you remember your password?</span>
      <NavLink to={"/sign-in"}>
        <span>Try logging in</span>
      </NavLink>
    </div>
  );
};
