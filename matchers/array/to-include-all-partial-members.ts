import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { containsEntryIn, printNot } from '~/utils';

function predicate(value: unknown, members: readonly unknown[]): boolean {
	if (!Array.isArray(value) || !Array.isArray(members)) return false;

	return members.every((member) => {
		const entries = Object.entries(member);
		return value.some((val) => entries.every(containsEntryIn(val)));
	});
}

export function toIncludeAllPartialMembers(
	{ value }: MatcherContext,
	members: readonly unknown[],
): ExtendMatchResult {
	const pass = predicate(value, members);

	return {
		pass,
		message: () =>
			`Expected list to ${printNot(pass)}have all of the following partial members:\n${format(members)}\n` +
			`Received:\n${format(value)}`,
	};
}
