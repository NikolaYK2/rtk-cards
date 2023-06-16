import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authApi,
  ForgotType,
  NewPasswordType,
  ProfileType,
  UpdUserType
} from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";

//async login ----------------------------------------------------------------------
//extraReducer -
// const login = createAppAsyncThunk<
//   // 1. То, что возвращает Thunk
//   { profile: ProfileType },
//   // 2. ThunkArg - аргументы санки (тип, который санка принимает)
//   ArgLoginType
//   // 3. AsyncThunkConfig. Какие есть поля смотрим в доке / исходном коде.
//   // state - используем для типизации App. Когда используем getState
//   // dispatch - типизация диспатча
//   // rejectValue - используем для типизации возвращаемой ошибки
//   // {//Теперь протепизировано отдельно ----
//   //   state: RootState;
//   //   dispatch: AppDispatch;
//   //   rejectValue: unknown;
//   // }
// >("auth/login", async (arg) => {
//   const res = await authApi.login(arg);
//   return { profile: res.data };
// });
// const isLogged = createAppAsyncThunk<{ isLogged: boolean }, boolean>("app/isLogged", async (arg) => {
//   const res = await authApi.me();
//   return { isLogged: true };
// });
//
// const authMe = createAppAsyncThunk<{ profile: ProfileType }>("auth/me", async () => {
//   const res = await authApi.me();
//   return { profile: res.data };
// });
// const logout = createAppAsyncThunk<{ profile: ProfileType }>("auth/logout", async () => {
//   const res = await authApi.logout();
//   return { profile: res.data };
// });
// const authUpdateUser = createAppAsyncThunk<{ profile: ProfileType }, UpdUser>("auth/update", async (arg) => {
//   const res = await authApi.updUser(arg);
//   return { profile: res.data.updatedUser };
// });
// const register = createAppAsyncThunk<{ profile: ProfileType }, ArgRegisterType>("auth/register", async (arg) => {
//   const res = await authApi.register(arg);
//   return { profile: res.data.addedUser };
// });

//Просто Reducer ------------------------------------------------------
//THUNK -------------------------------------------------------------
// const register = createAsyncThunk(
//   // 1 - prefix
//   "auth/register",
//   // 2 - callback (условно наша старая санка), в которую:
//   // - первым параметром (arg) мы передаем аргументы необходимые для санки
//   // (если параметров больше чем один упаковываем их в объект)
//   // - вторым параметром thunkAPI, обратившись к которому получим dispatch и др. свойства
//   // https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object
//   (arg: ArgRegisterType, thunkAPI) => {
//     const { dispatch } = thunkAPI;
//     authApi.register(arg).then((res) => {
//       dispatch(authActions.setProfile({ profile: res.data.addedUser }));
//       dispatch(authActions.isLogged({ isLogged: true }));
//     });
//   }
// );
//ASYNC AWAIT ---------------------------
const register = createAsyncThunk(
  // 1 - prefix
  "auth/register",
  // 2 - callback (условно наша старая санка), в которую:
  // - первым параметром (arg) мы передаем аргументы необходимые для санки
  // (если параметров больше чем один упаковываем их в объект)
  // - вторым параметром thunkAPI, обратившись к которому получим dispatch и др. свойства
  // https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object
  async (arg: ArgRegisterType, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const res = await authApi.register(arg);
    const resLog = await authApi.login(arg)
    dispatch(authActions.setProfile({profile: res.data.addedUser}));
    dispatch(authActions.isLogged({ isLogged: true }));
  }
);

const forgotNewPassword = createAppAsyncThunk("auth/forgotPassword", async (arg: ForgotType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.authForgotPassword(arg);
  dispatch(authActions.checkEmail({ email: arg.email }));
});

const setNewPassword = createAppAsyncThunk("auth/newPassword", async (arg: NewPasswordType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.authNewPassword(arg);
  dispatch(authActions.newPassword({ newPass: true }));
});

const login = createAppAsyncThunk("auth/login", async (arg: ArgLoginType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    const res = await authApi.login(arg);
    dispatch(authThunks.authMe());
    // dispatch(authActions.isLogged({ isLogged: true }));
    // dispatch(authActions.setProfile({ profile: res.data }));
  } catch (e) {}
});

const authMe = createAppAsyncThunk("auth/me", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    const res = await authApi.me();
    dispatch(authActions.isLogged({ isLogged: true }));
    dispatch(authActions.setProfile({ profile: res.data }));
    // dispatch(authThunks.login(res.data))
  } catch (e) {
    dispatch(authActions.isLogged({ isLogged: false }));
  }
});

const logout = createAppAsyncThunk("auth/logout", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    const res = await authApi.logout();
    dispatch(authActions.clearProfile()); //Очищаем на профайл
    dispatch(authActions.isLogged({ isLogged: false }));
  } catch (e) {}
  // dispatch(authActions.setProfile({ profile: res.data }));

  // return { profile: res.data };
});

const authUpdateUser = createAppAsyncThunk("auth/updateProfile", async (data: UpdUserType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.updUser(data);
  dispatch(authActions.updateUser({ profile: res.data.updatedUser }));
});

//STATE --------------------------------------------------------------
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    isLogged: false, //Вход в систему
    newPass: false,
    email: "",
  },
  reducers: {
    setProfile: (state, action: PayloadAction<{ profile: ProfileType }>) => {
      state.profile = action.payload.profile;
    },
    clearProfile: (state) => {
      state.profile = null;
    },
    isLogged: (state, action: PayloadAction<{ isLogged: boolean }>) => {
      state.isLogged = action.payload.isLogged;
    },
    updateUser: (state, action: PayloadAction<{ profile: ProfileType }>) => {
      state.profile = action.payload.profile;
    },
    newPassword: (state, action: PayloadAction<{ newPass: boolean }>) => {
      state.newPass = action.payload.newPass;
    },
    checkEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.profile = action.payload.profile;
  //     })
  //     .addCase(isLogged.fulfilled, (state, action) => {
  //       state.isLogged = action.payload.isLogged
  //     })
  //     .addCase(register.fulfilled, (state, action) => {
  //       state.profile = action.payload.profile;
  //     })
  //     .addCase(authMe.fulfilled, (state, action) => {
  //       state.profile = action.payload.profile;
  //     })
  //     .addCase(logout.fulfilled, (state, action) => {
  //       state.profile = action.payload.profile;
  //     })
  //     .addCase(authUpdateUser.fulfilled, (state, action) => {
  //       state.profile = action.payload.profile;
  //     });
  // }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions; //заходим в наши actions
// Санки давайте упакуем в объект, нам это пригодится в дальнейшем
export const authThunks = { register, login, logout, authMe, authUpdateUser, forgotNewPassword, setNewPassword };
