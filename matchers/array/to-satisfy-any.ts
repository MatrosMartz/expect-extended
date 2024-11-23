import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toSatisfyAny({ value }: MatcherContext, predicate: (item: unknown) => boolean): ExtendMatchResult {
	const pass = Array.isArray(value) && value.some(predicate);

	return {
		pass,
		message: () =>
			`Expected array to ${printNot(pass)}satisfy predicate for any values:\n${format(predicate)}\n` +
			`Received:\n${format(value)}`,
	};
}
