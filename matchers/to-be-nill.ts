import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeNil({ value }: MatcherContext): ExtendMatchResult {
	const pass = value == null;

	return {
		pass,
		message: () => `Expected value ${printNot(pass)}to be null or undefined, received:\n${format(value)}`,
	};
}
