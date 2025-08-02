import axios from 'axios';
import { Account } from './../types/index';

const BASE_URL = '';

export async function LoginUserAccount(email: string, password: string) {
	const body = {
		email,
		password,
	};
	try {
		const response = await axios.post(`${BASE_URL}/`, body, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		return response;
	} catch (error) {
		console.error(error);
	}
}

export async function CreateUserAccount(account: Account) {
	try {
		const response = await axios.post(`${BASE_URL}/`, account, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		return response;
	} catch (error) {
		console.error(error);
	}
}
