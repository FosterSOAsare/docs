function createRequestErrorMessage(error: any) {
  if (error?.response?.data?.error) {
    return error.response.data.error
  }
}
export default createRequestErrorMessage