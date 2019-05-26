export const theme: IApplicationTheme = {
	colorLight: "#CFCFCF",
	colorRegular: "#50514F",
	colorDark: "#333333",

	colorWhite: "#FFFFFF",
	colorAccent: "#F25F5C",
	colorSupport: "#4B93B1",

	fontLight: "Asap Light, sans-serif",
	fontRegular: "Asap Regular, sans-serif",
	fontBold: "Asap Bold, sans-serif"
};

export interface IApplicationTheme {
	colorLight: string,
	colorRegular: string,
	colorDark: string,

	colorWhite: string,
	colorAccent: string,
	colorSupport: string,

	fontLight: string,
	fontRegular: string,
	fontBold: string
}