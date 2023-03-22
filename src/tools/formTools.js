import { getLocalStorage } from '@tools/restTools';

export const emailValidation = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let result = { status: true };

	if (!re.test(String(email).toLowerCase())) {
		result.status = false;
		result.errorDesc = 'Email невалидный.';
	}

	return result;
};

export const passwordValidation = pass => {
	// Минимальная длинна строки
	const minLength = 8;
	// Присутствие кириллицы
	const areСyrillic = /[\u0400-\u04FF]/;
	// Строка не должна состоять из одинаковых символов
	const sameSymbols = /^(.)\1*$/;
	// В строке должно быть минимум 3 числа
	const requiredNumber = /^(?!.*\d.*\d.*\d).*$/;
	// В строке должно быть минимум 3 буквы
	const requiredLetter = /^(?!.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z]).*$/;
	// Хотя бы одна большая буква
	const requiredBigLetter = /^[^A-Z]*$/;
	// Хотя бы один спец символ
	const requiredSpecialLetter = /^[A-Za-z0-9\s]+$/;

	let result = { status: true };

	if (areСyrillic.test(pass)) {
		result.status = false;
		result.errorDesc = 'Пароль не должен содержать кириллические символы.';
	} else if (pass.length < minLength) {
		result.status = false;
		result.errorDesc = 'Пароль должен содержать как минимум 8 символов.';
	} else if (sameSymbols.test(pass)) {
		result.status = false;
		result.errorDesc = 'Пароль не должен состоять из одинаковых символов.';
	} else if (requiredNumber.test(pass)) {
		result.status = false;
		result.errorDesc = 'Пароль должен содержать как минимум три цифры.';
	} else if (requiredLetter.test(pass)) {
		result.status = false;
		result.errorDesc = 'Пароль должен содержать как минимум три буквы.';
	} else if (requiredBigLetter.test(pass)) {
		result.status = false;
		result.errorDesc = 'Пароль должен содержать минимум одну большую букву.';
	} else if (requiredSpecialLetter.test(pass)) {
		result.status = false;
		result.errorDesc = 'Пароль должен содержать минимум один спец. символ.';
	}

	return result;
};

export const registration = user => {
	let usersDataBase = getLocalStorage('users');

	if (!usersDataBase) {
		usersDataBase = [];
	}

	console.log(usersDataBase);
	console.log(user);
};
