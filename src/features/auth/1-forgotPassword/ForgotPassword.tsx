import React, { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import sLog from "assets/SCSS/styleContinerAuth.module.scss";


export const ForgotPassword = () => {
  const [val, setVal] = useState("");


  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };

  return (
    <div className={sLog.container}>
      <h1>Forgot your password?</h1>
      <form action="" className={sLog.form}>
        <div className={sLog.blockInput}>
          <input type="email" value={val} onChange={change} />
          <label className={val ? sLog.modLabel : ""}>Email</label>
        </div>
        <span>Enter your email address and we will send you further instructions </span>
        <button >Send Instructions</button>
      </form>
      <span>Did you remember your password?</span>
      <NavLink to={'/sign-in'}><span>Try logging in</span></NavLink>
    </div>
  );
};

