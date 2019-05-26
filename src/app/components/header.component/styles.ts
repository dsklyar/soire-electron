
import { IApplicationTheme } from "../../themes";

export const styles = (theme: IApplicationTheme) => ({
	wrapper: {
		width: "100vw",
		backgroundColor: theme.colorRegular,
		position: "fixed",
		"-webkit-app-region": "drag"
	},
	tabsWrapper: {
		display: "flex",
		float: "left"
	},
	tabItem: {
		height: 25,
		cursor: "pointer",
		"-webkit-app-region": "no-drag",
		"&:hover": {
			backgroundColor: theme.colorDark,
			transition: "background-color 1s linear"
		},
	},
	tab: {
		extend: "tabItem",
		padding: "2px 7px",
		display: "table",
		"& span": {
			display: "table-cell",
			verticalAlign: "middle",
			textAlign: "center",
			fontFamily: theme.fontRegular,
			fontSize: 13,
			color: theme.colorWhite
		}
	},
	controls: {
		float: "right",
		display: "flex"
	},
	control: {
		extend: "tabItem",
		height: 29,
		width: 29,
		backgroundColor: theme.colorSupport,
		borderRight: `1px solid ${theme.colorRegular}`,
		boxSizing: "border-box"
	},
	minimizeControl: {
		extend: "control"
	},
	maximizeControl: {
		extend: "control"
	},
	closeControl: {
		extend: "control",
		borderRight: 0,
		backgroundColor: theme.colorAccent
	}
});
