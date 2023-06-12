import { instance } from "common/api/instance.api";

export type RegisterResponseType<T = {}> = {
  addedUser: T;
};
export type UpdResponseType<T = {}> = {
  updatedUser: T;
};

export type ProfileType = {
  // avatar?: string,
  email?: string;
  rememberMe?: boolean;
  isAdmin?: boolean;
  name?: string;
  publicCardPacksCount?: number;
  created?: Date;
  // token?:string
  // tokenDeathTime?:number,
  updated?: Date;
  verified?: boolean;

  __v?: number;
  _id?: string;
};
export type ArgRegisterType = {
  email: string;
  password: string;
};

export type ArgLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type UpdUser = {
  name?: string;
  avatar?: string;
};

//Востановление пароля ------------
export type ForgotType = {
  email: string; // кому восстанавливать пароль
  from?: string; //"test-front-admin <ai73a@yandex.by>", // можно указать разработчика фронта)
  message: string; //`<div style="background-color: lime; padding: 15px">
  //password recovery link:
  //<a href='http://localhost:3000/#/set-new-password/$token$'>
  //link</a>
  //</div>` // хтмп-письмо, вместо $token$ бэк вставит токен
};
//Res ----
export type ForgotResType = {
  info: string; //"sent —ฅ/ᐠ.̫ .ᐟ\ฅ—"
  error: string;
};
//New password ---
export type NewPasswordType = {
  password: string;
  resetPasswordToken: string;
};

export const authApi = {
  register: (data: ArgRegisterType) => {
    return instance.post<{ addedUser: ProfileType; error?: string }>("/auth/register", data);
  },
  authForgotPassword: (data: ForgotType) => {
    return instance.post<{ info: string; error?: string }>("/auth/forgot", data);
  },
  authNewPassword: (data: NewPasswordType) => {
    return instance.post<{ info: string; error?: string }>("/auth/set-new-password", data);
  },
  login: (data: ArgLoginType) => {
    return instance.post<ProfileType>("/auth/login", data);
  },
  me: () => {
    return instance.post<ProfileType>("/auth/me");
  },
  logout: () => {
    return instance.delete("/auth/me");
  },
  updUser: (data: UpdUser) => {
    return instance.put<{ updatedUser: ProfileType; error?: string }>("/auth/me", data);
  },
};
