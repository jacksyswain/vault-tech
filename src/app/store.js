import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/tasks/taskSlice";
import { loadState, saveState } from "../utils/localStorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
  preloadedState,
});

// Save to localStorage on every state change
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
