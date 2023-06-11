import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";
import { authApi } from "features/auth/auth.api";
import { authActions, authThunks } from "features/auth/auth.slice";

const isInitializedApp = createAppAsyncThunk("auth/me", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const res = await authApi.me();
  dispatch(authThunks.authMe());
  dispatch(appActions.initializedApp({ isAppInitialized: true }));
  dispatch(authActions.isLogged({ isLogged: true }));
});

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
});

// Создаем reducer с помощью slice
export const appReducer = slice.reducer;
// Action creators создаются автоматически для каждого подредьюсера
// Все экшены упаковываем в объект. В дальнейшем пригодится
export const appActions = slice.actions;
export const appThunk = { isInitializedApp };
