import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { useNavigation } from '@react-navigation/native';
import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	Button,
	SecureTextInputField,
	Text,
	TextInputField,
} from '../components';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { formateDate } from '../utils/Helpers';
import { useThemeColor } from '../assets/theme/ThemeContext';
import useSafeAreaStyle from '../utils/SafeAreaViewUtil';
import { IPhoneInputStyles } from 'react-native-international-phone-number/lib/interfaces/phoneInputStyles';
import { IModalStyles } from 'react-native-international-phone-number/lib/interfaces/modalStyles';

type CreateAccountScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'CreateAccount'
>;

function CreateAccount() {
	const navigation = useNavigation<CreateAccountScreenNavigationProp>();
	const theme = useThemeColor();
	const safeAreaStyle = useSafeAreaStyle(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [dob, setDob] = useState(new Date());
	const [password, setPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(
		null,
	);
	const [showDatePicker, setShowDatePicker] = useState(false);

	const dynamicStyle = {
		mainContainer: {
			backgroundColor: theme('container_primary'),
			...safeAreaStyle,
		},
		text: {
			color: theme('text_primary'),
		},
		border: {
			borderColor: theme('border_primary'),
		},
		palaceHolder: theme('text_primary'),
	};

	const phoneInputStyle: IPhoneInputStyles = {
		container: {
			backgroundColor: theme('container_primary'),
			borderColor: theme('border_primary'),
			height: 55,
			borderRadius: 5,
		},
		flagContainer: {
			backgroundColor: theme('container_primary'),
			...dynamicStyle.text,
		},
		flag: { ...dynamicStyle.text },
		callingCode: { ...dynamicStyle.text },
		caret: { ...dynamicStyle.text },
	};

	const modalStyle: IModalStyles = {
		modal: {
			backgroundColor: theme('container_primary'),
		},
		searchInput: {
			backgroundColor: theme('container_primary'),
			...dynamicStyle.text,
		},
		countryButton: {
			backgroundColor: theme('container_primary'),
			...dynamicStyle.text,
		},
	};

	function onChangeDate(
		event: DateTimePickerEvent,
		selectedDate: Date | undefined,
	) {
		const currentDate = selectedDate || dob;
		setShowDatePicker(Platform.OS === 'ios'); // Hide picker on Android after selection
		setDob(currentDate);
	}

	function onRegisterUser() {
		//Step 1: after click register store user details (current screen)
		//Step 2: navigate otp screen ask otp from phone (otp screen)
		//Step 3: ask to add password to account from the user (password screen)
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={[styles.keyboardAvoiding, dynamicStyle.mainContainer]}>
			<ScrollView
				contentContainerStyle={styles.scrollContainer}
				keyboardShouldPersistTaps="handled">
				<View style={[styles.mainContainer]}>
					<View style={styles.topContainer}>
						<Text variant="headerOne" color="primary">
							Sign Up
						</Text>
						<View style={styles.signInTextContainer}>
							<Text variant="label" color="primary">
								Already have an account?
							</Text>
							<TouchableOpacity
								activeOpacity={0.7}
								style={styles.signInText}>
								<Text variant="label" color="primary">
									Sign In
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<TextInputField
							placeholder={'Name'}
							inputFieldType={'full'}
							onChangeText={text => setName(text)}
						/>
						<TextInputField
							placeholder={'Email'}
							inputFieldType={'full'}
							onChangeText={text => setEmail(text)}
						/>
						<PhoneInput
							value={phone}
							onChangePhoneNumber={text => setPhone(text)}
							selectedCountry={selectedCountry}
							onChangeSelectedCountry={country =>
								setSelectedCountry(country)
							}
							placeholder="Phone number"
							phoneInputStyles={phoneInputStyle}
							placeholderTextColor={dynamicStyle.palaceHolder}
							modalStyles={modalStyle}
						/>
						<TextInputField
							placeholder={'Date of Birth'}
							inputFieldType={'full'}
							value={formateDate(dob)}
							onPressIn={() => setShowDatePicker(true)}
						/>
						<SecureTextInputField
							placeholder={'Password'}
							secureTextEntry={true}
							onChangeText={text => setPassword(text)}
							isPasswordVisible={hidePassword}
							togglePasswordVisibility={() =>
								setHidePassword(!hidePassword)
							}
						/>
					</View>
					<Button title={'Register'} onPress={onRegisterUser} />
				</View>
			</ScrollView>
			{showDatePicker && (
				<DateTimePicker
					testID="dateTimePicker"
					value={dob}
					mode="date"
					display="default"
					onChange={onChangeDate}
				/>
			)}
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	keyboardAvoiding: {
		flex: 1,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	mainContainer: {
		flex: 1,
		padding: 16,
	},
	topContainer: {
		marginVertical: 10,
	},
	signInTextContainer: {
		flexDirection: 'row',
		marginTop: 5,
	},
	signInText: {
		marginLeft: 5,
	},
	inputContainer: {
		marginTop: 10,
		marginBottom: 25,
		rowGap: 20,
	},
});

export default CreateAccount;
