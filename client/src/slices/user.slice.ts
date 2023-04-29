import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../lib/axios";
import createRequestErrorMessage from "../utils/createErrorMessage";
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

export const logInUser = createAsyncThunk<any, { email: string, password: string }>('user/login', async (data: any) => {
  try {

    let response = await axiosInstance({
      method: "POST",
      url: "/auth/local/login",
      data: { ...data, provider: "local" },
    });
    return response.data
  } catch (e: any) {

    throw new Error(createRequestErrorMessage(e))
  }
})
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
    })
  }
})

export const useUserSlice = (state: any) => state.user;
export const { login, logout } = userSlice.actions
export default userSlice.reducer