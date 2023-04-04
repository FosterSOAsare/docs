import { stateType, actionType } from "../types/side-menu.types";

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

export default toggleFunc