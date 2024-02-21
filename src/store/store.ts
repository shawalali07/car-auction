import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import auth from "./slices/auth";

// const persistConfig = {
//   key: "root",
//   storage,.
// };
// const authPersist = persistReducer(persistConfig, auth);

const store = configureStore({
  reducer: {
    // auth: authPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
