import { createBrowserHistory } from "history";
import { Store } from "redux";
import configureStore from "../configureStore";
import { IRootState } from "../reducers";
import { IAction } from "../actions";

const history = createBrowserHistory();
const store: Store<IRootState, IAction> = configureStore(history);

export { store as AppStore, history as BrowserHistory };
