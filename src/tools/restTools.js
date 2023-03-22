export const declensionWord = (number, words) => {
	let cases = [2, 0, 1, 1, 1, 2];
	return words[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
};

export const getClasses = (...arg) => {
	return arg.join(' ');
};

export const getLocalStorage = key => {
	const string = localStorage.getItem(key);
	return JSON.parse(string);
};

export const writeLocalStorage = (key, data) => {
	const string = JSON.stringify(data);
	localStorage.setItem(key, string);
	return string;
};
