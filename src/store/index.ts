import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { robotReducer } from "./features/robotsSlice";

export const store = configureStore({
  reducer: { robotState: robotReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
