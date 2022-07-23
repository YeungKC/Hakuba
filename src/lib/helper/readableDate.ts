import { TIMEZONE } from '../constants';

// Date format in Swedish is the same as ISO
export const readableDate = (dateText: string, timezone?: string) =>
	new Date(dateText).toLocaleDateString('sv', {
		timeZone: timezone ?? TIMEZONE,
		month: '2-digit',
		day: '2-digit',
		year: 'numeric'
	});
