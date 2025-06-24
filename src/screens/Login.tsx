import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInputField } from '../components';
import { ErrorText } from '../components/ErrorText';

type LoginScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'Login'
>;

function Login() {
	//TODO: Left on Error handling part how to show the error message
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
		<View style={styles.mainContainer}>
			<Text variant="title" color="main" style={styles.appText}>
				NEXORA
			</Text>
			<Text variant="headerOne" color="black">
				Sign In
			</Text>
			<Text variant="body" color="black">
				Stay connected with the people
			</Text>
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
			<TouchableOpacity activeOpacity={0.7} style={styles.forgotPassword}>
				<Text variant="body" color="black">
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
				<Text variant="body" color="black">
					New to Nexora?
				</Text>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.forgotPassword}>
					<Text variant="body" color="black">
						Join now
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 16,
	},
	appText: {
		paddingHorizontal: 20,
	},
	forgotPassword: {
		marginHorizontal: 5,
	},
	orContainer: {
		flexDirection: 'column',
	},
	line: {
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	errorContainer: {
		justifyContent: 'center',
	},
	bottomContainer: {
		flexDirection: 'column',
	},
});

export default Login;
