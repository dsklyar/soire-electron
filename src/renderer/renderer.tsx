import React from "react";
import ReactDOM from "react-dom";
import jss from "jss";
import preset from "jss-preset-default";
import { Provider } from "react-redux";
import { App } from "../app/app";
import { AppStore as store, BrowserHistory } from "../app/stores";

// Import the styles here to process them with webpack
import "./style.scss";

jss.setup(preset());

ReactDOM.render(
	<Provider store={store}>
		<App history={BrowserHistory}/>
	</Provider>,
	document.getElementById("app")
);
