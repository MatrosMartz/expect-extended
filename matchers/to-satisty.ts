import { format } from '@std/internal/format';
import type { Matcher } from '../_types.ts';

export const toSatisfy: Matcher = ({ value }, predicate: (value: unknown) => boolean) => {
	const pass = predicate(value);
	return {
		pass,
		message: () => `Expected value to ${pass ? 'not ' : ''}satisfy:\n${format(value)}`,
	};
};
