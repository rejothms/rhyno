import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { api } from '../../../services/config';

interface EmailVerifData {
  email: string;
}

interface otpData {
  emailId: string,
  otp: string
}

interface ApiPostResponse {
  message: string,
  status: string;
}

export const verifyEmail = createAsyncThunk<ApiPostResponse, EmailVerifData, {
  rejectValue: {
    error: string;
  };
}>(
  "verifyEmail",
  async (data: EmailVerifData, { rejectWithValue }) => {
    const url = `/account/email/verify/${data.email}`; 
    try {
      const response = await api.get(url);
      return response.data; 
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);

export const verifyFpEmail = createAsyncThunk<ApiPostResponse, EmailVerifData, {
  rejectValue: {
    error: string;
  };
}>(
  "verifyFpEmail",
  async (data: EmailVerifData, { rejectWithValue }) => {
    const url = `/account/reset/email/verify/${data.email}`; 
    try {
      const response = await api.get(url);
      console.log(response.data);
      return response.data; 
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);

export const verifyOTP = createAsyncThunk<boolean, otpData, {
  rejectValue: {
    error: string;
  };
}>(
  "verifyotp",
  async (data: otpData, { rejectWithValue }) => {
    const url = `/account/otp/validate`; 
    try {
      const response = await api.post(url, data);
      return response.data; 
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);



const initialState = {
    email: "",
    fpEmail: "",
    loading: ""
  };
export const authSlice = createSlice({
name: "verification",
initialState,
reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      setFpEmail: (state, action: PayloadAction<string>) => {
        state.fpEmail = action.payload;
      }
},

extraReducers: (builder) => {
  builder.addCase(verifyOTP.pending,(state,action) => {
    if(state.loading === 'idle') {
      //state.loading = "pending"
    }
  });
  builder.addCase(verifyOTP.fulfilled,(state,action) => {
    
  });
  builder.addCase(verifyOTP.rejected,(state,action) => {
   
  });


}


})
export const {  setEmail, setFpEmail } = authSlice.actions;
export default authSlice.reducer;
