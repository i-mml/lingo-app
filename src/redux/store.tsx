// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { companiesApi } from './services/apiService';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [companiesApi.reducerPath]: companiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            companiesApi.middleware,
        ),
});

setupListeners(store.dispatch);