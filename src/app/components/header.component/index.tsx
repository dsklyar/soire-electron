import React, { SyntheticEvent } from "react";
import injeactSheet from "react-jss";
import { styles } from "./styles";
import { boundMethod } from "autobind-decorator";
import { remote } from "electron";

interface IProps {
	classes: { [key: string]: string };
}

class HeaderComponent extends React.Component<IProps> {
	public render(): React.ReactNode {
		const { classes } = this.props;

		const tabs = ["File", "View", "Go", "Help"];
		const generateTabs = (data: string[]): React.ReactNode =>
			data.map((datum, i) => (
				<div className={classes.tab} key={i}>
					<span>{datum}</span>
				</div>
			));

		return (
			<div className={classes.wrapper}>
				<div className={classes.tabsWrapper}>
					{generateTabs(tabs)}
				</div>
				<div className={classes.controls}>
					<div className={classes.minimizeControl} onClick={this.onMinimizeClick}/>
					<div className={classes.maximizeControl} onClick={this.onMaximizeClick}/>
					<div className={classes.closeControl} onClick={this.onCloseClick}/>
				</div>
			</div>
		);
	}

	@boundMethod
	public onCloseClick(e: SyntheticEvent): void {
		const window = remote.getCurrentWindow();
		window.close();
	}

	@boundMethod
	public onMinimizeClick(e: SyntheticEvent): void {
		const window = remote.getCurrentWindow();
		window.minimize();
	}

	@boundMethod
	public onMaximizeClick(e: SyntheticEvent): void {
		const window = remote.getCurrentWindow();
		window.maximize();
	}
}

const styledComponent = injeactSheet(styles)(HeaderComponent);

export { styledComponent as HeaderComponent };
