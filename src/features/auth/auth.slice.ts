import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, AuthApiType, LoginResponseType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";

//THUNK -------------------------------------------------------------
const register = createAsyncThunk(
  // 1 - prefix
  "auth/register",
  // 2 - callback (условно наша старая санка), в которую:
  // - первым параметром (arg) мы передаем аргументы необходимые для санки
  // (если параметров больше чем один упаковываем их в объект)
  // - вторым параметром thunkAPI, обратившись к которому получим dispatch и др. свойства
  // https://redux-toolkit.js.org/usage/usage-with-typescript#typing-the-thunkapi-object
  (arg: AuthApiType, thunkAPI) => {
    const { dispatch } = thunkAPI;
    authApi.register(arg).then((res) => {
      dispatch(authActions.setProfile({ profile: res.data }));
      dispatch(authActions.isLogged({ isLogged: true }));
    });
  }
);
// const login = createAsyncThunk("auth/login", (arg: AuthApiType, thunkAPI) => {
//   // const { dispatch } = thunkAPI;
//   return authApi.login(arg).then((res) => {
//     //return Из санки необходимо возвращать данные. Эти данные будут попадать в extraReducers
//     // dispatch(authActions.setProfile({profile:res.data}));
//     return { profile: res.data };
//   });
// });
//async login ----------------------------------------------------------------------
//extraReducer -
// const login = createAppAsyncThunk<
//   // 1. То, что возвращает Thunk
//   { profile: AuthApiType },
//   // 2. ThunkArg - аргументы санки (тип, который санка принимает)
//   AuthApiType
//   // 3. AsyncThunkConfig. Какие есть поля смотрим в доке / исходном коде.
//   // state - используем для типизации App. Когда используем getState
//   // dispatch - типизация диспатча
//   // rejectValue - используем для типизации возвращаемой ошибки
//   // {//Теперь протепизировано отдельно ----
//   //   state: RootState;
//   //   dispatch: AppDispatch;
//   //   rejectValue: unknown;
//   // }
// >("auth/login", async (arg: AuthApiType) => {
//   const res = await authApi.login(arg);
//   // return { profile: res.data };
// });
//Просто Reducer ------------------------------------------------------
const login = createAppAsyncThunk("auth/login", async (arg: AuthApiType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.login(arg);
  dispatch(authThunks.authMe())
  dispatch(authActions.isLogged({ isLogged: true }));
  // dispatch(authActions.setProfile({ profile: res.data }));
  // return { profile: res.data };
});

const authMe = createAppAsyncThunk("auth/me", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.me();
  dispatch(authActions.isLogged({ isLogged: true }));
  dispatch(authActions.setProfile({ profile: res.data}));
  // return { profile: res.data };
});

const logout = createAppAsyncThunk("auth/me", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.logout();
  dispatch(authActions.clearProfile());//Очищаем на профайл
  dispatch(authActions.isLogged({ isLogged: false }));
  // return { profile: res.data };
});

//STATE --------------------------------------------------------------
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as LoginResponseType | null,
    isLogged: false, //Вход в систему
  },
  reducers: {
    setProfile: (state, action: PayloadAction<{ profile: LoginResponseType }>) => {
      state.profile = action.payload.profile;
    },
    clearProfile: (state) => {
      state.profile = null;
    },
    isLogged: (state, action: PayloadAction<{ isLogged: boolean }>) => {
      state.isLogged = action.payload.isLogged;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(login.fulfilled, (state, action) => {
  //     state.profile = action.payload.profile;
  //   });
  // },
});

export const authReducer = slice.reducer;
export const authActions = slice.actions; //заходим в наши actions
// Санки давайте упакуем в объект, нам это пригодится в дальнейшем
export const authThunks = { register, login, logout, authMe };
