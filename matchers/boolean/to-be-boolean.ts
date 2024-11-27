import { format } from '@std/internal/format';

import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeBoolean({ value }: MatcherContext): ExtendMatchResult {
	const pass = typeof value === 'boolean' || value instanceof Boolean;

	return {
		pass,
		message: () => `Expected value to ${printNot(pass)}be of type boolean, received:\n${format(value)}`,
	};
}
