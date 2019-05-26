import React from "react";
import injectSheet from "react-jss";
import { styles } from "./styles";

interface IProps {
	classes: { [key:string]: string };
}

class LandingPageComponent extends React.Component<IProps> {
	constructor(props) {
		super(props);
	}

	public render(): React.ReactNode {
		const { classes } = this.props;

		return <div className={classes.wrapper}>Landing Page</div>
	}
}

const styledComponent = injectSheet(styles)(LandingPageComponent);

export { styledComponent as LandingPageComponent };
