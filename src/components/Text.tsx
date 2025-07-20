import React from 'react';
import { StyleSheet, TextProps, Text as Txt } from 'react-native';
import { useThemeColor } from '../assets/theme/ThemeContext';
import { COLORS } from '../assets/theme/colors';

interface CustomTextProps extends TextProps {
	children: React.ReactNode;
	variant: 'title' | 'headerOne' | 'inputLabel' | 'body' | 'label' | 'none';
	color: string;
}

function Text({ children, variant, color, ...props }: CustomTextProps) {
	const theme = useThemeColor();

	function getTextType(textType: string) {
		switch (textType) {
			case 'title':
				return [styles.titleText];
			case 'headerOne':
				return [styles.headerOneText];
			case 'body':
				return [styles.body];
			case 'inputLabel':
				return [styles.inputLabel];
			case 'label':
				return [styles.label];
			default:
				return [];
		}
	}

	function getColor(propColor: string) {
		switch (propColor) {
			case 'primary':
				return { color: theme('text_primary') };
			case 'themeColor':
				return { color: COLORS.main };
			case 'black':
				return { color: '#000000' };
			case 'white':
				return { color: '#FFFFFF' };
			case 'red':
				return { color: 'red' };
			default:
				return {};
		}
	}

	return (
		<Txt
			{...props}
			allowFontScaling={true}
			style={[
				styles.text,
				getTextType(variant),
				getColor(color),
				props.style,
			]}>
			{children}
		</Txt>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Mukta',
	},
	titleText: {
		fontSize: 45,
		fontFamily: 'BebasNeue-Regular',
	},
	headerOneText: {
		fontSize: 30,
		fontWeight: '700',
	},
	inputLabel: {
		fontSize: 20,
	},
	body: {
		fontSize: 20,
	},
	label: {
		fontSize: 17,
	},
});

export { Text };
