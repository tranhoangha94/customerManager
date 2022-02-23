import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/root.reducer";

export const store = configureStore({
  reducer: {
    system: rootReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
