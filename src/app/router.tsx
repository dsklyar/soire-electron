import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { LandingPageComponent } from "./components/landing-page.component";
import { HomePageComponent } from "./components/home-page.component";
import { HeaderComponent } from "./components/header.component";

interface IProps {}

class ApplicationRouter extends React.Component<IProps> {
	public render(): React.ReactNode {
		return (
			<MemoryRouter>
				<HeaderComponent />
				<Switch>
					<Route exact path="/" component={LandingPageComponent} key={1} />
					<Route path="/home" component={HomePageComponent} key={2} />
				</Switch>
			</MemoryRouter>
		);
	}
}

export { ApplicationRouter };
