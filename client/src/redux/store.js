import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage,
  verison: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaltMiddleware) =>
    getDefaltMiddleware({
      seriazableCheck: false,
    }),
});

export const persistor = persistStore(store);
