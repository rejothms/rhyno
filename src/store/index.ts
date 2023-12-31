import { configureStore, getDefaultMiddleware } from  '@reduxjs/toolkit';
import  authSlice  from './reducers/auth/authSlice';
import verificationSlice from './reducers/verification/verificationSlice';
import loaderSlice from './reducers/loader/loaderSlice';
export const store = configureStore({
    reducer : {
        auth: authSlice,
        verify: verificationSlice,
        loader: loaderSlice
        
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;