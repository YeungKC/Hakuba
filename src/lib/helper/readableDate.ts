import dayjs from 'dayjs';

export const readableDate = (date: string) => {
	return dayjs(date).format('YYYY-MM-DD');
};
