import React, { ChangeEvent, useState } from "react";
import sLog from "assets/SCSS/styleContinerAuth.module.scss";

export const CreatePassword = () => {
  const [val, setVal] = useState("");


  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };

  return (
    <div className={sLog.container}>
      <h1>Create new password</h1>
      <form action="" className={sLog.form}>
        <div className={sLog.blockInput}>
          <input type="password" value={val} onChange={change} />
          <label className={val ? sLog.modLabel : ""}>Password</label>
        </div>
        <span>Create new password and we will send you further instructions to email</span>
        <button>Create new password</button>
      </form>
    </div>
  );
};
