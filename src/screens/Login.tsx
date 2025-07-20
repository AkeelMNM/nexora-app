import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	Button,
	CustomIcon,
	SecureTextInputField,
	Text,
	TextInputField,
} from '../components';
import { ErrorText } from '../components/ErrorText';
import { COLORS } from '../assets/theme/colors';
import { useThemeColor } from '../assets/theme/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

type LoginScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'Login'
>;

function Login() {
	const theme = useThemeColor();
	const navigation = useNavigation<LoginScreenNavigationProp>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	const [hidePassword, setHidePassword] = useState(true);

	const dynamicStyle = {
		mainContainer: {
			backgroundColor: theme('container_primary'),
		},
		border: {
			borderColor: theme('border_primary'),
		},
		iconColor: theme('icon_primary'),
		buttonColor: theme('container_primary'),
	};

	function validateInput() {
		if (email === '' && password === '') {
			setErrorMsg('Please enter email and password');
			return false;
		}

		if (!email || email === '') {
			setErrorMsg('Please enter email');
			return false;
		}

		if (!password || password === '') {
			setErrorMsg('Please enter password');
			return false;
		}

		return true;
	}

	function onLogin() {
		const isInputValidated = validateInput();
		if (!isInputValidated) {
			return;
		}

		navigation.navigate('NewsFeed');
	}

	return (
		<SafeAreaView
			style={[styles.safeAreaContainer, dynamicStyle.mainContainer]}>
			<KeyboardAvoidingView
				keyboardVerticalOffset={0}
				style={styles.safeAreaContainer}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<View style={styles.mainContainer}>
					<ScrollView style={styles.scrollContainer}>
						<Text
							variant="title"
							color="themeColor"
							style={styles.appText}>
							NEXORA
						</Text>
						<View style={styles.signInTextContainer}>
							<Text variant="headerOne" color="primary">
								Sign In
							</Text>
							<Text variant="body" color="primary">
								Stay connected with the people
							</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInputField
								placeholder={'Email or Phone'}
								inputFieldType={'full'}
								onChangeText={text => setEmail(text)}
							/>
							<SecureTextInputField
								placeholder={'Password'}
								secureTextEntry={true}
								onChangeText={text => setPassword(text)}
								isPasswordVisible={hidePassword}
								togglePasswordVisibility={() => {
									console.log('ss');

									setHidePassword(!hidePassword);
								}}
							/>
						</View>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.forgotPassword}>
							<Text variant="label" color="black">
								Forgot Password?
							</Text>
						</TouchableOpacity>
						<Button title={'Login'} onPress={onLogin} />
						{errorMsg && (
							<View style={styles.errorContainer}>
								<ErrorText
									isVisible={!errorMsg}
									errorText={errorMsg}
								/>
							</View>
						)}
						<View style={styles.orContainer}>
							<View style={styles.line} />
							<Text variant="body" color="primary">
								or
							</Text>
							<View style={styles.line} />
						</View>
						<View style={styles.signInOptionContainer}>
							<Button
								title={'Continue with Google'}
								style={{
									...styles.signInOptionButton,
									...dynamicStyle.border,
								}}
								color={'themed'}
								icon={
									<CustomIcon
										name={'google'}
										color={dynamicStyle.iconColor}
									/>
								}
							/>
							<Button
								title={'Sign in with Apple'}
								color={'themed'}
								style={{
									...styles.signInOptionButton,
									...dynamicStyle.border,
								}}
								icon={
									<CustomIcon
										name={'apple'}
										color={dynamicStyle.iconColor}
									/>
								}
							/>
						</View>
						<View style={styles.bottomContainer}>
							<Text variant="label" color="primary">
								New to Nexora?
							</Text>
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() =>
									navigation.navigate('CreateAccount')
								}
								style={styles.joinText}>
								<Text variant="label" color="themeColor">
									Join now
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
	},
	scrollContainer: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		padding: 16,
	},
	appText: {
		paddingVertical: 20,
		color: COLORS.main,
	},
	forgotPassword: {
		marginBottom: 10,
	},
	orContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
	},
	line: {
		height: 1,
		backgroundColor: COLORS.main,
		width: '35%',
		marginHorizontal: 10,
	},
	errorContainer: {
		justifyContent: 'center',
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 15,
	},
	joinText: {
		marginLeft: 5,
	},
	signInTextContainer: {
		marginVertical: 10,
	},
	inputContainer: {
		marginVertical: 10,
		rowGap: 10,
	},
	signInOptionContainer: {
		rowGap: 10,
	},
	signInOptionButton: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		flexDirection: 'row',
		borderWidth: 0.5,
	},
});

export default Login;
