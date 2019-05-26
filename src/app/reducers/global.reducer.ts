import { Reducer } from "react";
import { IAction } from "../actions";

export interface IGlobalState {
	applicationActive: boolean;
}

export const DEFAULT_GLOBAL_STATE: IGlobalState = {
	applicationActive: false
};

export const globalReducer: Reducer<IGlobalState, IAction> = (
	state = DEFAULT_GLOBAL_STATE,
	action
) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};
