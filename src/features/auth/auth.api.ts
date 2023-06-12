import { instance } from "common/api/common.api";

export const validEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const field = "Fill in the field";

export type RegisterResponseType<T={}> = {
  addedUser: T
};
export type UpdResponseType<T={}> = {
  updatedUser: T
};

export type ProfileType ={
  avatar?: string,
  email?: string,
  rememberMe?: boolean,
  isAdmin?: boolean,
  name?: string,
  publicCardPacksCount?: number,
  created?: Date,
  token?:string
  tokenDeathTime?:number,
  updated?: Date,
  verified?: boolean,

  __v?: number,
  _id?: string,
}
export type ArgRegisterType = {
  email: string,
  password: string,
};

export type ArgLoginType = {
  email: string,
  password: string,
  rememberMe: boolean,
};

export type UpdUser={
  name?:string,
  avatar?:string,
}
export const authApi = {
  register: (data: ArgRegisterType) => {
    return instance.post<{addedUser:ProfileType, error?:string}>("/auth/register", data);
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
    return instance.put<{updatedUser:ProfileType, error?:string}>("/auth/me", data);
  },
};
