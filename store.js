import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    TaskData: taskReducer,
  },
});

export default store;