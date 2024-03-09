export function randomDate(from: number = 2020, to: number = 2024): string {
	// Create a date object for the start year and end year
	const startDate = new Date(from, 0, 1); // January 1st of the 'from' year
	const endDate = new Date(to, 11, 31); // December 31st of the 'to' year

	// Calculate time difference between start and end dates
	const timeDifference = endDate.getTime() - startDate.getTime();

	// Calculate a random number of milliseconds between the start and end dates
	const randomTime = startDate.getTime() + Math.random() * timeDifference;

	// Create a new date with the random time
	const randomDate = new Date(randomTime);

	// Convert the date to a string in "YYYY-MM-DD" format
	return randomDate.toISOString().split('T')[0];
}
