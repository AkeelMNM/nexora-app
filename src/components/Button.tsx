import React from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';
import { Text } from './Text';
import { COLORS } from '../assets/theme/colors';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	color?: string;
	isLoading?: boolean;
	icon?: React.ReactNode;
}

function Button({ title, color, isLoading, icon, ...props }: ButtonProps) {
	const getButtonColor = () => {
		switch (color) {
			case 'main':
				return { backgroundColor: COLORS.main };
			case 'white':
				return { backgroundColor: '#FFFFFF' };
			case 'black':
				return { backgroundColor: '#292A2E' };
		}
	};

	const getTextColor = () => {
		switch (color) {
			case 'green':
				return { color: '#000000' };
			case 'white':
				return { color: '#000000' };
			case 'black':
				return { color: '#FFFFFF' };
		}
	};
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={[styles.button, getButtonColor(), props.style]}>
			<View style={styles.iconStyle}>{icon}</View>
			<Text
				variant="none"
				color="none"
				style={[styles.text, getTextColor()]}>
				{title}
			</Text>
			{isLoading && (
				<ActivityIndicator style={styles.activityIndicator} />
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.main,
		borderRadius: 25,
		flexDirection: 'row',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 17,
		color: '#FFFFFF',
		textAlign: 'center',
	},
	activityIndicator: {
		marginTop: -3,
		paddingLeft: 5,
	},
	iconStyle: {
		marginRight: 5,
	},
});

export { Button };
