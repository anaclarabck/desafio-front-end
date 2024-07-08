import { configureStore, Reducer } from "@reduxjs/toolkit";
import { RootState } from "@/types";
import rootReducer from "./reducers";

const store = configureStore<RootState>({
  reducer: rootReducer as Reducer<RootState>,
});

export default store;
