export function calculateDaysTogether(startDate: string) {
	const start = new Date(startDate);
	const now = new Date();

	if (Number.isNaN(start.getTime())) {
		return 0;
	}

	const diff = now.getTime() - start.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

	return Math.max(days, 1);
}

export function formatDisplayDate(dateInput: Date | string) {
	const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

	return new Intl.DateTimeFormat('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}
