import { stateType, actionType } from "../types/side-menu.types";
import { slideCallback } from "../types/slider.types";

export const initialState: stateType = { slide: null, show: false };

function toggleFunc(state: stateType, action: actionType): stateType {
  switch (action.type) {
    case "setSlide":
      return { ...state, slide: action.payload };
    case "show":
      return { ...state, show: true };
    case "hide": {
      return { ...state, show: false };
    }
    default:
      return state;
  }
}

export function slideIn(callback: slideCallback) {
  callback({ type: "show", payload: null });
  setTimeout(() => {
    callback({ type: "setSlide", payload: "in" });
  }, 10);
}

export function slideOut(callback: slideCallback) {
  callback({ type: "setSlide", payload: "out" });
  setTimeout(() => {
    callback({ type: "hide", payload: null });
  }, 500);
}
export default toggleFunc