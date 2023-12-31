import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

const pendingReducer = (state: any, action: any) => {
    state.loading = true;
}
const rejectedReducer = (state: any, action: any) => {
    state.loading = false;
}
const fulFilledReducer = (state: any, action: any) => {
    state.loading = false;
}

export const loaderSlice = createSlice({
    name: "loader",  
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher((action)=>action.type.endsWith('/pending'), pendingReducer),
        builder.addMatcher((action)=>action.type.endsWith('/rejected'), rejectedReducer),
        builder.addMatcher((action)=>action.type.endsWith('/fulfilled'), fulFilledReducer)
    }
});

export default loaderSlice.reducer