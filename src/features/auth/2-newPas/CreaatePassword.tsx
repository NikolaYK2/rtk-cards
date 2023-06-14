import React from "react";
import sLog from "assets/SCSS/styleContinerAuth.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewPasswordType } from "features/auth/auth.api";
import { authThunks } from "features/auth/auth.slice";
import { field } from "common/utils/validate";
import { Navigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";
import { useShowPasswordInput } from "common/utils/showPassword";
import sAuth from "assets/SCSS/styleContinerAuth.module.scss";

export const CreatePassword = () => {
  const { type, toggle } = useShowPasswordInput();
  const dispatch = useAppDispatch();
  const newPass = useAppSelector((state) => state.auth.newPass);
  const { token } = useParams();
  console.log(token);
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
      resetPasswordToken: `${token}`,
    },
  });
  const onSubmit: SubmitHandler<NewPasswordType> = (data) => {
    console.log(data);
    dispatch(authThunks.setNewPassword(data));
    reset();
  };

  if (newPass) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <div className={sLog.container}>
      <h1>Create new password</h1>
      <form className={sLog.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={sLog.blockInput}>
          <input
            type={type}
            className={errors.password ? sAuth.error : ""}
            {...register("password", {
              minLength: { value: 7, message: "min length is 7" },
              required: field,
            })}
            autoComplete={"off"}
          />
          <label className={watch().password ? sLog.modLabel : ""}>Password</label>
          <p>{errors.password?.message}</p>
          <div className={sLog.showInput} onClick={toggle}>
            <SVGIcons id={type === "text" ? "inputShowOff" : "inputShowOn"} />
          </div>
        </div>
        <span>Create new password and we will send you further instructions to email</span>
        <button disabled={isSubmitting}>Create new password</button>
      </form>
    </div>
  );
};
