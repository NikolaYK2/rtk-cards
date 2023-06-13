import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";
import { authThunks } from "features/auth/auth.slice";

const isInitializedApp = createAppAsyncThunk("auth/me", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    await dispatch(authThunks.authMe());
    await dispatch(appActions.initializedApp({ isAppInitialized: true }));
  } catch (e) {}
});
//хз ==========================================
// const isInitializedApp = createAppAsyncThunk<{ isAppInitialized: boolean}, boolean>("app/init", async (arg) => {
//   const res = await authApi.me();
//   const isLog = await authThunks.isLogged(arg)
//
//   return {isAppInitialized: true,isLog};
// });
// const isLoading = createAppAsyncThunk<{ isLoading: boolean }, boolean>("app/isLoading", async (arg) => {
//   const res = await authApi.me();
//   return { isLoading: arg};
// });

const slice = createSlice({
  // name должен быть уникальным
  // name будет использоваться в качетве приставки (redux ducks)
  name: "app",
  // Инициализационный стейт
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  // reducers состоит из подредьюсеров, каждый из которых эквивалентен одному оператору case в switch, как мы делали раньше (обычный redux)
  reducers: {
    // Подредьюсер.
    // Action - это payload объект. Типизация через PayloadAction
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      // Логику в подредьюсерах пишем мутабельным образом,
      // т.к. иммутабельность достигается благодаря immer.js
      state.isLoading = action.payload.isLoading;
    },
    initializedApp: (state, action: PayloadAction<{ isAppInitialized: boolean }>) => {
      state.isAppInitialized = action.payload.isAppInitialized;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(isInitializedApp.fulfilled, (state, action) => {
  //       state.isAppInitialized = action.payload.isAppInitialized;
  //     })
  //     .addCase(isLoading.fulfilled, (state, action) => {
  //       state.isLoading = action.payload.isLoading;
  //     })
  // },
});

// Создаем reducer с помощью slice
export const appReducer = slice.reducer;
// Action creators создаются автоматически для каждого подредьюсера
// Все экшены упаковываем в объект. В дальнейшем пригодится
export const appActions = slice.actions;
export const appThunk = { isInitializedApp };
