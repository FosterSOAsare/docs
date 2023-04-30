import axiosInstance from "../lib/axios";
import createRequestErrorMessage from "./createErrorMessage";
export const httpLoginUser = async (data: { email: string, password: string }) => {
  try {
    let response = await axiosInstance({
      method: "POST",
      url: "/auth/local/login",
      data: { ...data, provider: "local" },
    });
    return response.data
  } catch (e: any) {
    const error = createRequestErrorMessage(e)
    throw new Error(error)
  }
}
export const httpFetchUser = async () => {
  try {
    let response = await axiosInstance({
      method: "GET",
      url: "/user",
    });
    return response?.data
  } catch (e: any) {
    const error = createRequestErrorMessage(e)
    throw new Error(error)
  }
}
export const httpVerifyGoogleOauth = async (token: string) => {

  try {
    let response = await axiosInstance({
      method: "GET",
      url: "/auth/google/verify",
      headers: { authorization: `Bearer ${token}` }
    });
    return response?.data
  } catch (e: any) {
    console.log(e)
    const error = createRequestErrorMessage(e)
    throw new Error(error)
  }
}

