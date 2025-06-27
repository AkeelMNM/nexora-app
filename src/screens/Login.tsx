import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInputField } from '../components';
import { ErrorText } from '../components/ErrorText';
import { COLORS } from '../assets/theme/colors';

type LoginScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'Login'
>;

function Login() {
	const navigation = useNavigation<LoginScreenNavigationProp>();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	// const [hidePassword, setHidePassword] = useState(true);

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
		<SafeAreaView style={styles.safeAreaContainer}>
			<View style={styles.mainContainer}>
				<Text variant="title" color="main" style={styles.appText}>
					NEXORA
				</Text>
				<View style={styles.signInTextContainer}>
					<Text variant="headerOne" color="black">
						Sign In
					</Text>
					<Text variant="body" color="black">
						Stay connected with the people
					</Text>
				</View>
				<View style={styles.inputContainer}>
					<TextInputField
						placeholder={'Email or Phone'}
						inputFieldType={'full'}
						onChangeText={text => setEmail(text)}
					/>
					<TextInputField
						placeholder={'Password'}
						inputFieldType={'full'}
						secureTextEntry={true}
						onChangeText={text => setPassword(text)}
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
						<ErrorText isVisible={!errorMsg} errorText={errorMsg} />
					</View>
				)}
				<View style={styles.orContainer}>
					<View style={styles.line} />
					<Text variant="body" color="black">
						or
					</Text>
					<View style={styles.line} />
				</View>
				<View style={styles.bottomContainer}>
					<Text variant="label" color="black">
						New to Nexora?
					</Text>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.joinText}>
						<Text variant="label" color="black">
							Join now
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeAreaContainer: {
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
});

export default Login;
