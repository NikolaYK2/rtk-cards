import React from "react";
import s from "./Header.module.scss";
import { SVGIcons } from "assets/img/iconSVG/SVGIcons";
import { useAppSelector } from "app/hooks";
import avatar from "assets/img/prof/avatar.jpg";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const nameRes = useAppSelector((state) => state.auth.profile?.name);
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  return (
    <div className={s.head}>

      <div className={s.container}>
        <div className={s.logo}>
          <SVGIcons id={"Logo"} />
        </div>

        {isLogged ? (
          <div className={s.info}>
            <div className={s.name}>
              {nameRes}
            </div>
            <div className={s.avatar}>
              <img src={avatar} alt="" />
            </div>
          </div>
        ) : (
          <NavLink to={"/sign-in"}>
            <span>Sign In</span>
          </NavLink>
        )}
      </div>

    </div>
  );
};
