import { AuthInstance } from "features/auth/auth.instance";

export type RegisterResponseType<T = {}> = {
  addedUser: T,
  errors?:string,
};


export type UpdResponseType<T = {}> = {
  updatedUser: T,
  errors?:string,
};
export type ProfileType = {
  _id: string,
  __v: number,

  email: string,
  avatar?: string,
  rememberMe?: boolean,
  isAdmin: boolean,
  name: string,
  verified: boolean,
  publicCardPacksCount: number,
  created: string,
  updated: string,
  token?: string,
  tokenDeathTime?: number,
}
// export type reg = {
//   addedUser: RegAddedUser;
// }
// export type RegAddedUser = {
//   _id: string;
//   __v: number;
//
//   email: string;
//   rememberMe: boolean;
//   isAdmin: boolean;
//   name: string;
//   verified: boolean;
//   publicCardPacksCount: number;
//   created: string;
//   updated: string;
// }

type PasswordToPick={
  password:string,
}
type AvatarToPick={
  avatar?:string,
}
type ForgotTypeToPick={
  // email: string; // кому восстанавливать пароль
  from?: string; //"test-front-admin <ai73a@yandex.by>", // можно указать разработчика фронта)
  message: string; //`<div style="background-color: lime; padding: 15px">
  //password recovery link:
  //<a href='http://localhost:3000/#/set-new-password/$token$'>
  //link</a>
  //</div>` // хтмп-письмо, вместо $token$ бэк вставит токен
}
type NewPasswordPickType ={
  resetPasswordToken: string;
}
//Res ----
export type ForgotResType = {
  info: string; //"sent —ฅ/ᐠ.̫ .ᐟ\ฅ—"
  error?: string;
};

// export type AddedUser = Omit<ProfileType, 'token'>//Принимает два параметра, первый это тот тип которым мы хотим манипулировать
//второй параметр это то поле которое хотим исключить из первого обьекта в
//А если нужно достать два параметра то:
export type RegisterUserType = Omit<ProfileType, 'token' | 'tokenDeathTime' | 'avatar'>//Принимает два параметра, первый это тот тип которым мы хотим манипулировать
export type ArgRegisterType = Pick<ProfileType, 'email'> & PasswordToPick
export type ArgLoginType = Pick<ProfileType, 'email' | 'rememberMe'> & PasswordToPick
export type UpdUserType = Pick<ProfileType, 'name'> & AvatarToPick
//Востановление пароля ------------
export type ForgotType = Pick<ProfileType, 'email'> & ForgotTypeToPick
//New password ---
export type NewPasswordType = Pick<PasswordToPick, 'password'> & NewPasswordPickType
export type PartialProfileType = Partial<ProfileType>

// export type ArgRegisterType = {
//   email: string;
//   password: string;
// };

// export type ArgLoginType = {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// };

// export type UpdUser = {
//   name?: string;
//   avatar?: string;
// };

// export type ForgotType = {
//   email: string; // кому восстанавливать пароль
//   from?: string; //"test-front-admin <ai73a@yandex.by>", // можно указать разработчика фронта)
//   message: string; //`<div style="background-color: lime; padding: 15px">
//   //password recovery link:
//   //<a href='http://localhost:3000/#/set-new-password/$token$'>
//   //link</a>
//   //</div>` // хтмп-письмо, вместо $token$ бэк вставит токен
// };
//New password ---
// export type NewPasswordType = {
//   password: string;
//   resetPasswordToken: string;
// };

export const authApi = {
  register: (data: ArgRegisterType) => {
    return AuthInstance.post<RegisterResponseType<RegisterUserType>>("register", data);
  },
  authForgotPassword: (data: ForgotType) => {
    return AuthInstance.post<ForgotResType>("forgot", data);
  },
  authNewPassword: (data: NewPasswordType) => {
    return AuthInstance.post<ForgotResType>("set-new-password", data);
  },
  login: (data: ArgLoginType) => {
    return AuthInstance.post<ProfileType>("login", data);
  },
  me: () => {
    return AuthInstance.post<ProfileType>("me");
  },
  logout: () => {
    return AuthInstance.delete("me");
  },
  updUser: (data: UpdUserType) => {
    return AuthInstance.put<UpdResponseType<ProfileType>>("me", data);
  },
};
