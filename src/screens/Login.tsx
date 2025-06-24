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
	// const [hidePassword, setHidePassword] = useState(true);

	function onLogin() {
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
			{/* <View>
				<ErrorText isVisible={} />
			</View> */}
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
	bottomContainer: {
		flexDirection: 'column',
	},
});

export default Login;
