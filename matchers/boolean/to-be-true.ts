import { format } from '@std/internal/format';

import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeTrue({ value }: MatcherContext): ExtendMatchResult {
	const pass = value === true;

	return {
		pass,
		message: () => `Expected value to ${printNot(pass)}be true received:\n${format(value)}`,
	};
}
