import { TIME_ZONE } from '../constants';

export const readableDate = (dateText: string) =>
	new Date(dateText).toLocaleDateString('sv', {
		timeZone: TIME_ZONE,
		month: '2-digit',
		day: '2-digit',
		year: 'numeric'
	});
