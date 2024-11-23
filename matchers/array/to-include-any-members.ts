import { expect } from '@std/expect';
import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { containsIn, printNot } from '~/utils';

function predicate(value: unknown, members: readonly unknown[]): boolean {
	if (!Array.isArray(value) || !Array.isArray(members)) return false;

	return members.some(containsIn(value));
}

export function toIncludeAnyMembers({ value }: MatcherContext, members: readonly unknown[]): ExtendMatchResult {
	const pass = predicate(value, members);

	return {
		pass,
		message: () =>
			`Expected list to ${printNot(pass)}include any of the following members:\n${format(expect)}\n` +
			`Received:\n${format(value)}`,
	};
}
