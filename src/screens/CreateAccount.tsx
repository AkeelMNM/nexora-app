import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { useNavigation } from '@react-navigation/native';
import {
	Platform,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { Button, Text, TextInputField } from '../components';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { formateDate } from '../utils/Helpers';

type CreateAccountScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'CreateAccount'
>;

function CreateAccount() {
	const navigation = useNavigation<CreateAccountScreenNavigationProp>();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [dob, setDob] = useState(new Date());
	const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(
		null,
	);
	const [showDatePicker, setShowDatePicker] = useState(false);

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
		<SafeAreaView style={styles.safeAreaContainer}>
			<View style={styles.mainContainer}>
				<View style={styles.topContainer}>
					<Text variant="headerOne" color="black">
						Sign Up
					</Text>
					<View style={styles.signInTextContainer}>
						<Text variant="label" color="black">
							Already have an account?
						</Text>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.signInText}>
							<Text variant="label" color="black">
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
						// style={{ backgroundColor: 'transparent' }}
					/>
					<TextInputField
						placeholder={'Date of Birth'}
						inputFieldType={'full'}
						value={formateDate(dob)}
						onPressIn={() => setShowDatePicker(true)}
					/>
				</View>
				<Button title={'Register'} onPress={onRegisterUser} />
			</View>
			{showDatePicker && (
				<DateTimePicker
					testID="dateTimePicker"
					value={dob}
					mode="date"
					display="default"
					onChange={onChangeDate}
				/>
			)}
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
