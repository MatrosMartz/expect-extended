import { format } from '@std/internal/format';

import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeFalse({ value }: MatcherContext): ExtendMatchResult {
	const pass = value === false;

	return {
		pass,
		message: () => `Expected value to ${printNot(pass)}be false received:\n${format(value)}`,
	};
}
