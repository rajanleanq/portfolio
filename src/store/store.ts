import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./features/projects/projects.api";

export const store = configureStore({
    reducer: {
        [projectApi.reducerPath]: projectApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat(
            projectApi.middleware
        ),
});

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
// Store Dispatch Type
export type AppDispatch = typeof store.dispatch;
