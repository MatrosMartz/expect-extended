import type { Matcher } from '../_types.ts';

export const fail: Matcher = (_, message = 'fails by .fail() assertion') => ({
	pass: false,
	message: () => message,
});
