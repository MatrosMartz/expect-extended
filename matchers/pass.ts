import type { Matcher } from '../_types.ts';

export const pass: Matcher = (_, message = 'passes by .pass() assertion') => ({
	pass: true,
	message: () => message,
});
