export type SideMenuToolsTypes = {
  name: string,
  image: string,
  link: string
}

export type stateType = { slide: null | string; show: boolean };
export type actionType = { type: string; payload: string | null };