import React from 'react';
import {
	StyleSheet,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from 'react-native';
import { useThemeColor } from '../assets/theme/ThemeContext';
import { forwardRef } from 'react';
import { ErrorText } from './ErrorText';
import { CustomIcon } from './CustomIcon';

interface SecureTextInputFieldProps extends TextInputProps {
	errorMessage?: string;
	isPasswordVisible: boolean;
	togglePasswordVisibility: () => void;
}

const SecureTextInputField = forwardRef<TextInput, SecureTextInputFieldProps>(
	(
		{
			errorMessage,
			isPasswordVisible,
			togglePasswordVisibility,
			...props
		}: SecureTextInputFieldProps,
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
			iconColor: theme('icon_primary'),
		};

		return (
			<View>
				<View style={[styles.inputFieldContainer, dynamicStyle.border]}>
					<TextInput
						{...props}
						ref={ref}
						placeholderTextColor={dynamicStyle.palaceHolder}
						style={[styles.inputField, dynamicStyle.text]}
						secureTextEntry={isPasswordVisible}
					/>
					<TouchableOpacity
						activeOpacity={1}
						onPress={togglePasswordVisibility}>
						<CustomIcon
							name={isPasswordVisible ? 'eye-slash' : 'eye'}
							size={24}
							color={dynamicStyle.iconColor}
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>
				{errorMessage && (
					<ErrorText isVisible={true} errorText={errorMessage} />
				)}
			</View>
		);
	},
);

const styles = StyleSheet.create({
	inputFieldContainer: {
		color: '#000000',
		borderWidth: 1,
		borderColor: '#393939',
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 3,
		paddingBottom: 3,
		borderRadius: 5,
		width: '100%',
		fontWeight: 'normal',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputField: {
		fontSize: 17,
		width: '90%',
	},
	icon: {
		paddingLeft: 10,
	},
});

SecureTextInputField.displayName = 'SecureTextInputField';

export { SecureTextInputField };
