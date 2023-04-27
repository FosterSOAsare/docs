export type slideType = {
  type: string,
  payload: null | string

}
export type slideCallback = ({ type, payload }: slideType) => void