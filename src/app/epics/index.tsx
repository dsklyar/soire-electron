import { combineEpics, Epic } from "redux-observable";
import { IStoreState } from "../reducers";
import { IAction } from "../actions";

const rootEpic: Epic<IAction, IAction, IStoreState> = combineEpics();

export default rootEpic;
