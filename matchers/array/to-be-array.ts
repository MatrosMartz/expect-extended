import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeArray({ value }: MatcherContext): ExtendMatchResult {
	const pass = Array.isArray(value);

	return {
		pass,
		message: () => `Expected value to ${printNot(pass)}be an array received:\n${format(value)}`,
	};
}
