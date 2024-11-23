import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { containsIn, printNot } from '~/utils';

export function toIncludeAllMembers({ value }: MatcherContext, members: readonly unknown[]): ExtendMatchResult {
	const pass = Array.isArray(value) && Array.isArray(members) &&
		members.every(containsIn(value));

	return {
		pass,
		message: () =>
			`Expected list to ${printNot(pass)}have all of the following members:\n${format(members)}\n` +
			`Received:\n${format(value)}`,
	};
}
