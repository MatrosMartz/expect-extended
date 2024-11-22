import { format } from '@std/internal/format';
import type { Matcher } from '../_types.ts';

export const toBeOneOf: Matcher = ({ equal, value }, members: readonly unknown[]) => {
	const pass = members.some((expected) => equal(value, expected));

	return {
		pass,
		message: () =>
			pass
				? `Expected value to not be in list:\n${format(members)}\nReceived:\n${format(value)}`
				: `Expected value to be in list:\n${format(members)}\nReceived:\n${format(value)}`,
	};
};
