import React, { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Text } from './Text';
import { ErrorText } from './ErrorText';
import { useThemeColor } from '../assets/theme/ThemeContext';

interface CustomTextInputProps extends TextInputProps {
	inputFieldType: 'underline' | 'full';
	title?: string;
	errorMessage?: string;
}

const TextInputField = forwardRef<TextInput, CustomTextInputProps>(
	(
		{ inputFieldType, title, errorMessage, ...props }: CustomTextInputProps,
		ref,
	) => {
		const theme = useThemeColor();

		const dynamicStyle = {
			text: {
				color: theme('text_primary'),
			},
			border: {
				borderColor: theme('border_primary'),
			},
			palaceHolder: theme('text_primary'),
		};

		const getInputFieldTypeStyle = () => {
			switch (inputFieldType) {
				case 'underline':
					return styles.underlineInputField;
				case 'full':
					return styles.inputField;
			}
		};

		return (
			<View>
				{title && (
					<Text variant={'inputLabel'} color={'black'}>
						{title}
					</Text>
				)}
				<TextInput
					ref={ref}
					placeholderTextColor={dynamicStyle.palaceHolder}
					{...props}
					style={[
						getInputFieldTypeStyle(),
						dynamicStyle.text,
						dynamicStyle.border,
						props.style,
					]}
				/>
				{errorMessage && (
					<ErrorText isVisible={true} errorText={errorMessage} />
				)}
			</View>
		);
	},
);

const styles = StyleSheet.create({
	inputField: {
		color: '#000000',
		borderWidth: 1,
		borderColor: '#393939',
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 14,
		paddingBottom: 14,
		borderRadius: 5,
		width: '100%',
		fontSize: 17,
		fontWeight: 'normal',
	},
	underlineInputField: {
		minHeight: 5,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#666666',
		fontSize: 15,
		paddingHorizontal: 0,
		color: '#000000',
	},
});

TextInputField.displayName = 'TextInputField';
export { TextInputField };
