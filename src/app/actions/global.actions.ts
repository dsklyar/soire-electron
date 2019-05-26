import { createAction } from "typesafe-actions";
import { actionTypes } from "./action-types";

export const errorOccuredAction = createAction(
	actionTypes.GLOBAL.ERROR_OCCURED,
	resolve => (payload: { message: string }) => resolve(payload)
);
