import React, { Fragment } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { Text } from '.';
import { COLORS } from '../assets/theme/colors';

interface ErrorTextProps {
	isVisible: boolean;
	errorText: string;
	style?: StyleProp<TextStyle>;
}

export const ErrorText = ({ isVisible, errorText, style }: ErrorTextProps) => {
	if (isVisible) {
		return (
			<Text variant="label" color="none" style={[styles.error, style]}>
				{errorText}
			</Text>
		);
	} else {
		return <Fragment />;
	}
};

const styles = StyleSheet.create({
	error: {
		color: COLORS.errorRed,
		marginBottom: 10,
	},
});
