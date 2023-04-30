import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../lib/axios";
import createRequestErrorMessage from "../utils/createErrorMessage";
import { httpLoginUser, httpFetchUser, httpVerifyGoogleOauth } from "../utils/requests";
export type userTypes = {
  loading: boolean,
  error: null | string,
  user: {
    email: String,
    _id: String,
    image: String
  }
}


const initialState: userTypes = {
  loading: false, error: null, user: { email: '', image: '', _id: '' }
}

export const logInUser = createAsyncThunk('user/login', (data: { email: string, password: string }) => httpLoginUser(data))
export const fetchUser = createAsyncThunk('user/fetch', httpFetchUser)
export const verifyGoogleOauth = createAsyncThunk('verify/token', (token: string) => httpVerifyGoogleOauth(token))


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state: userTypes, action: any) {
      state.user = action.payload
    },
    logout(state: userTypes) {
      return initialState
    },
    setImage(state: userTypes) {

    },
    setLoading(state: userTypes, action: { payload: boolean }) {
      state.loading = action.payload
    },
    setError(state: userTypes, action: { payload: string | null }) {
      state.error = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
    }).addCase(logInUser.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message
      }
    }).addCase(logInUser.pending, (state) => {
      return { ...state, loading: true }
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    }).addCase(fetchUser.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message
      }
    }).addCase(fetchUser.pending, (state) => {
      state.loading = true
    });
    builder.addCase(verifyGoogleOauth.fulfilled, (state, action) => {
      state.user = action.payload;
    }).addCase(verifyGoogleOauth.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message
      }
    }).addCase(verifyGoogleOauth.pending, (state) => {
      state.loading = true
    });

  }
})

export const useUserSlice = (state: any) => state.user;
export const { login, logout, setLoading, setError, } = userSlice.actions
export default userSlice.reducer