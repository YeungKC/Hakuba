import { TIME_ZONE } from '../constants';

// Date format in Swedish is the same as ISO
export const readableDate = (dateText: string) =>
	new Date(dateText).toLocaleDateString('sv', {
		timeZone: TIME_ZONE,
		month: '2-digit',
		day: '2-digit',
		year: 'numeric'
	});
