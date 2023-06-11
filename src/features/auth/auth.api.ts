import { instance } from "common/api/common.api";

export const validEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const field = "Fill in the field";

// export type RegisterResponseType = {
//   email: string;
//   password: string;
// };
//
// export type ArgLoginType = {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// };

export type AuthApiType = {
  email: string;
  password: string;
  // repeatPassword?: string,
  rememberMe?: boolean;
};

export type RegisterResponseType = {
  addedUser: {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    __v: number;
  };
};

export type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};

export const authApi = {
  register: (data: AuthApiType) => {
    return instance.post<Awaited<Promise<LoginResponseType>>>("/auth/register", data);
  },
  login: (data: AuthApiType) => {
    return instance.post<Awaited<Promise<AuthApiType>>>("/auth/login", data);
  },
  me: () => {
    return instance.post<Awaited<Promise<LoginResponseType>>>("/auth/me");
  },
  logout: () => {
    return instance.delete<Awaited<Promise<AuthApiType>>>("/auth/me");
  },
};
