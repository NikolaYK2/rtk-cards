import sLog from "assets/SCSS/styleContinerAuth.module.scss";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";
import { NavLink } from "react-router-dom";

export const CheckEmail = () => {
  return (
    <div className={sLog.container}>
      <h1>Check Email</h1>
      <div>
        <SVGIcons id={"Email"} />
      </div>
      <span>We’ve sent an Email with instructions to example@mail.com</span>
      <NavLink className={sLog.buttonNav} to={"/sign-in"}>
        <button>Back to login</button>
      </NavLink>
    </div>
  );
};