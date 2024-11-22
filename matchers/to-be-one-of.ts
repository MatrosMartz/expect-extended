import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeOneOf({ equal, value }: MatcherContext, members: readonly unknown[]): ExtendMatchResult {
	const pass = members.some((expected) => equal(value, expected));

	return {
		pass,
		message: () =>
			`Expected value to ${printNot(pass)}be in list:\n${format(members)}\n` +
			`Received:\n${format(value)}`,
	};
}
