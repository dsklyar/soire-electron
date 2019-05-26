
import * as Global from "./global.actions";

export interface IAction {
	type: string;
	payload?: any;
	meta?: any;
}
export default {
	Global
};
