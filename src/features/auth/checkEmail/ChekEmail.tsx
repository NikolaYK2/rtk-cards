import sAuth from "assets/SCSS/styleContinerAuth.module.scss";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "app/hooks";

export const CheckEmail = () => {
  const email = useAppSelector(state => state.auth.email);
  console.log(email);
  return (
    <div className={sAuth.container}>
      <h1>Check Email</h1>
      <div>
        <SVGIcons id={"Email"} />
      </div>
      <span>We’ve sent an Email with instructions to {email}</span>
      <NavLink className={sAuth.buttonNav} to={"/sign-in"}>
        <button>Back to login</button>
      </NavLink>
    </div>
  );
};