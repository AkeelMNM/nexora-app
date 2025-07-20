import React, { RefObject, useRef, useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { useThemeColor } from '../assets/theme/ThemeContext';
import useSafeAreaStyle from '../utils/SafeAreaViewUtil';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../assets/theme/colors';
import { Button, Text } from '../components';

type OtpScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'OtpScreen'
>;

interface OtpInputProps {
	codes: string[];
	refs: RefObject<TextInput | null>[];
	errorMessage: string | undefined;
	onChangeCode: (text: string, index: number) => void;
}

function OtpInput({ codes, refs, errorMessage, onChangeCode }: OtpInputProps) {
	const theme = useThemeColor();
	const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

	const dynamicStyle = {
		mainContainer: {
			backgroundColor: theme('container_secondary'),
			color: theme('text_primary'),
		},
		focusedInput: {
			borderColor: theme('border_secondary'),
			borderWidth: 1,
		},
	};

	function handleFocus(index: number) {
		setFocusedIndex(index);
	}

	function handleBlur() {
		setFocusedIndex(null);
	}

	return (
		<>
			<View style={styles.otpInputContainer}>
				{codes.map((code, index) => {
					return (
						<TextInput
							key={index}
							enterKeyHint="next"
							inputMode="numeric"
							style={[
								styles.input,
								dynamicStyle.mainContainer,
								focusedIndex === index &&
									dynamicStyle.focusedInput,
								errorMessage && styles.errorInput,
							]}
							onChangeText={text => onChangeCode(text, index)}
							value={code}
							onFocus={() => handleFocus(index)}
							onBlur={handleBlur}
							maxLength={1}
							ref={refs[index]}
							onKeyPress={({ nativeEvent: { key } }) => {
								if (key === 'Backspace' && index > 0) {
									onChangeCode('', index - 1);
									refs[index - 1]!.current!.focus();
								}
							}}
						/>
					);
				})}
			</View>
			{errorMessage && (
				<Text variant={'label'} color={'red'} style={styles.errorMsg}>
					{errorMessage}
				</Text>
			)}
		</>
	);
}

function OtpScreen() {
	const theme = useThemeColor();
	const safeAreaStyle = useSafeAreaStyle(true);
	const navigation = useNavigation<OtpScreenNavigationProp>();
	const [codes, setCodes] = useState<string[]>(Array(6).fill(''));
	const refs: RefObject<TextInput | null>[] = [
		useRef<TextInput>(null),
		useRef<TextInput>(null),
		useRef<TextInput>(null),
		useRef<TextInput>(null),
		useRef<TextInput>(null),
		useRef<TextInput>(null),
	];
	const [errorMessage, setErrorMessage] = useState<string>('');

	const dynamicStyle = {
		mainContainer: {
			backgroundColor: theme('container_primary'),
			...safeAreaStyle,
		},
		text: {
			color: theme('text_primary'),
		},
	};

	function onChangeCode(text: string, index: number) {
		if (text.length > 1) {
			setErrorMessage('');
			return;
		}

		setErrorMessage('');
		const newCodes = [...codes!];
		newCodes[index] = text;
		setCodes(newCodes);
		if (text !== '' && index < 5) {
			refs[index + 1]!.current?.focus();
		}
	}

	function onConfirmOTP() {}

	function onResendOTP() {}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={[styles.keyboardAvoiding, dynamicStyle.mainContainer]}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.mainContainer}>
					<Text variant="headerOne" color="primary">
						Verify phone number
					</Text>
					<View style={styles.textContainer}>
						<Text variant="inputLabel" color="primary">
							Enter verification code
						</Text>
						<Text variant="label" color="primary">
							We just texted the code to your phone number
						</Text>
					</View>
					<OtpInput
						codes={codes}
						onChangeCode={onChangeCode}
						refs={refs}
						errorMessage={errorMessage}
					/>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={onResendOTP}
						style={styles.resendText}>
						<Text variant="label" color="themeColor">
							Resend Code
						</Text>
					</TouchableOpacity>
				</View>
				<Button title={'Confirm'} onPress={onConfirmOTP} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	keyboardAvoiding: {
		flex: 1,
	},
	scrollContainer: {
		flex: 1,
		padding: 16,
	},
	mainContainer: {
		flex: 1,
	},
	otpInputContainer: {
		padding: 16,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
	},
	input: {
		fontSize: 17,
		height: 50,
		width: 50,
		marginHorizontal: 4,
		borderRadius: 8,
		textAlign: 'center',
	},
	errorInput: {
		borderColor: COLORS.errorRed,
		color: COLORS.errorRed,
		borderWidth: 2,
	},
	errorMsg: {
		textAlign: 'center',
	},
	textContainer: {
		marginVertical: 16,
		marginTop: 64,
	},
	resendText: {
		alignItems: 'center',
		marginLeft: 5,
		marginVertical: 16,
	},
});

export default OtpScreen;
