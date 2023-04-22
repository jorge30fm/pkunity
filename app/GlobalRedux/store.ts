'use client';
import {configureStore} from '@reduxjs/toolkit';
import signupReducer from './Features/signup/signupSlice';

export const store = configureStore({
    reducer: {
        signup: signupReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
