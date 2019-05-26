import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import {
	IGlobalState,
	DEFAULT_GLOBAL_STATE,
	globalReducer
} from "./global.reducer";
import { combineReducers } from "redux";

export interface IRootState {
	global: IGlobalState;
}

export interface IStoreState extends IRootState {
	router: RouterState;
}

export const DEFAULT_ROOT_STATE = {
	global: DEFAULT_GLOBAL_STATE
};

const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		global: globalReducer
	});

export default createRootReducer;
