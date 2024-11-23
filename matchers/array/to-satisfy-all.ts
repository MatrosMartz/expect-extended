import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toSatisfyAll({ value }: MatcherContext, predicate: (item: unknown) => boolean): ExtendMatchResult {
	const pass = Array.isArray(value) && value.every(predicate);

	return {
		pass,
		message: () =>
			`Expected array to ${printNot(pass)}satisfy predicate for all values:\n${format(predicate)}\n` +
			`Received:\n${format(value)}`,
	};
}
