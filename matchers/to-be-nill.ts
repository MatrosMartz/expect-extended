import { format } from '@std/internal/format';
import type { Matcher } from '../_types.ts';

export const toBeNil: Matcher = ({ value }) => {
	const pass = value == null;

	return {
		pass,
		message: () => `Expected value ${pass ? 'not ' : ''}to be null or undefined, received:\n${format(value)}`,
	};
};
