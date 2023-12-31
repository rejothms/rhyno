import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { api } from '../../../services/config';

interface signUpDetails {
  emailId: string,
  clubName: string,
  password: string
}

interface signInDetails {
  emailId: string,
  password: string
}

interface ApiPostResponse {
  message: string,
  status: string;
}

interface userProfile {
  fullName: string,
  founded: string,
  state: string,
  district: string,
  emailId: string,
  phoneNumber: string,
  tagLine: string,
  type: string,
  modal: string,
  description: string,
  regulations: string,
  address: string
}

export const signUp = createAsyncThunk<ApiPostResponse, signUpDetails, {
  rejectValue: {
    error: string;
  };
}>(
  "signup",
  async (data: signUpDetails, { rejectWithValue }) => {
    const url = `/account/signup`;
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);

export const signIn = createAsyncThunk<ApiPostResponse, signInDetails, {
  rejectValue: {
    error: string;
  };
}>(
  "signin",
  async (data: signInDetails, { rejectWithValue }) => {
    const url = `/account/login`;
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);

export const forgotPassword = createAsyncThunk<ApiPostResponse, signInDetails, {
  rejectValue: {
    error: string;
  };
}>(
  "fpassword",
  async (data: signInDetails, { rejectWithValue }) => {
    const url = `/account/pwd/reset`;
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);

export const profileUpdate = createAsyncThunk<ApiPostResponse, userProfile, {
  rejectValue: {
    error: string;
  };
}>(
  "profile",
  async (data: userProfile, { rejectWithValue }) => {
    const url = `/profile/save`;
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);


export const getProfile = createAsyncThunk<userProfile, any, {
  rejectValue: {
    error: string;
  };
}>(
  "getprofile",
  async (email: any, { rejectWithValue }) => {
    const url = `/profile/emailId/${email}`;
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: 'error' });
    }
  }
);

const initialState = {
  email: "",
  loading: "",
  profile: {
    fullName: '',
    founded: '',
    state: '',
    district: '',
    emailId: '',
    phoneNumber: '',
    tagLine: '',
    type: '',
    modal: '',
    description: '',
    regulations: '',
    address: ''
  }
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state, action) => {
      if (state.loading === 'idle') {
        //state.loading = "pending"
      }
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {

    });
  }
})
export const { setEmail } = authSlice.actions;
export default authSlice.reducer;
