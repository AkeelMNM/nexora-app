export const COLORS = {
	main: '#2F3C7E',
	errorRed: '',
	white: '#FFFFFF',
	black: '#000000',
};

interface color {
	[key: string]: string;
}

export const lightTheme: color = {
	main_app_text: COLORS.main,
	text_primary: '#000000',
	button_primary: '',
	button_secondary: '',
	border_primary: '#000000',
	border_secondary: COLORS.main,
	container_primary: '#FFFFFF',
	container_secondary: '#F5F5F5',
	textInput_primary: '',
	icon_primary: '#000000',
	header_primary: '#FFFFFF',
};

export const darkTheme: color = {
	main_app_text: COLORS.main,
	text_primary: '#FFFFFF',
	button_primary: '',
	button_secondary: '',
	border_primary: '#FFFFFF',
	border_secondary: '#FFFFFF',
	container_primary: '#000000',
	container_secondary: '#28282B',
	textInput_primary: '',
	icon_primary: '#FFFFFF',
	header_primary: '#000000',
};
