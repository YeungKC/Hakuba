export const readableDate = (dateText: string) => {
	const date = new Date(dateText);
	const year = date.getFullYear();
	let month: string | number = date.getMonth() + 1;
	let strDate: string | number = date.getDate();
	if (month >= 1 && month <= 9) {
		month = '0' + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = '0' + strDate;
	}
	return year + '-' + month + '-' + strDate;
};
