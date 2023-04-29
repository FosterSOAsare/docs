import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../lib/axios";
import createRequestErrorMessage from "../utils/createErrorMessage";
import { httpLoginUser, httpFetchUser } from "../utils/requests";
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
    }
  },
  extraReducers(builder) {
    builder.addCase(logInUser.fulfilled, (state, action) => {
      // Set token
      localStorage.setItem('docs:auth', action.payload.token)
      return { loading: false, user: action.payload.user, error: null }
    }).addCase(logInUser.rejected, (state, action) => {
      if (action.error.message) {
        return { ...initialState, error: action.error.message }
      }
    }).addCase(logInUser.pending, () => {
      return { ...initialState, loading: true, }
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return { loading: false, user: action.payload, error: null }
    }).addCase(fetchUser.rejected, (state, action) => {
      if (action.error.message) {
        return { ...initialState, error: action.error.message }
      }
    }).addCase(fetchUser.pending, () => {
      return { ...initialState, loading: true, }
    });
  }
})

export const useUserSlice = (state: any) => state.user;
export const { login, logout, setLoading } = userSlice.actions
export default userSlice.reducer