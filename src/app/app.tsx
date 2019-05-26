import React from "react";
import injectSheet from "react-jss";
import { styles } from "./styles";
import { ApplicationRouter } from "./router";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "react-jss"
import { theme } from "./themes";

interface IProps {
	history: History
}

class App extends React.Component<IProps> {

	public render(): React.ReactNode {
		return (
			<ConnectedRouter history={this.props.history}>
				<ThemeProvider theme={theme}>
					<ApplicationRouter />
				</ThemeProvider>
			</ConnectedRouter>
		);
	}
}

const styledComponent = injectSheet(styles)(App);

export { styledComponent as App };
