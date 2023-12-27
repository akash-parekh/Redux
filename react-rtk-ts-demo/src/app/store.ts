import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamRedcer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

// const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamRedcer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
