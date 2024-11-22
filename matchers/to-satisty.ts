import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toSatisfy({ value }: MatcherContext, predicate: (value: unknown) => boolean): ExtendMatchResult {
	const pass = predicate(value);
	return {
		pass,
		message: () => `Expected value to ${printNot(pass)}satisfy:\n${format(value)}`,
	};
}
