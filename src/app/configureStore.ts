import createRootReducer, { DEFAULT_ROOT_STATE, IStoreState } from "./reducers";
import { routerMiddleware } from "connected-react-router";
import {
	applyMiddleware,
	createStore,
	Middleware,
	Store,
	StoreEnhancer
} from "redux";
import { logger } from "redux-logger";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";
import rootEpic from "./epics";
import { IAction } from "./actions";

export default (history: History): Store<IStoreState> => {
	const epicMiddleware: EpicMiddleware<
		IAction,
		IAction,
		IStoreState
	> = createEpicMiddleware();
	const customRouterMiddleware: Middleware = routerMiddleware(history);

	const middleware: Middleware[] =
		process.env.NODE_ENV === "production"
			? [epicMiddleware, customRouterMiddleware]
			: [epicMiddleware, logger, customRouterMiddleware];

	const enhancer: StoreEnhancer = composeWithDevTools(
		applyMiddleware(...middleware)
	);
	const store = createStore(
		createRootReducer(history),
		DEFAULT_ROOT_STATE,
		enhancer
	);

	epicMiddleware.run(rootEpic);

	return store;
};
