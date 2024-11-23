import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { containsIn } from '~/utils';

function predicate(value: unknown, members: readonly unknown[]): boolean {
	if (!Array.isArray(value) || !Array.isArray(members) || value.length !== members.length) return false;

	return members.every(containsIn(value));
}

function mesaggeStart(pass: boolean): string {
	return pass
		? 'Expected list to not exactly match the members of:\n'
		: 'Expected list to have the following members and no more:\n';
}

export function toIncludeSameMembers({ value }: MatcherContext, members: readonly unknown[]): ExtendMatchResult {
	const pass = predicate(value, members);

	return {
		pass,
		message: () => `${mesaggeStart(pass)}${format(members)}\nReceived:\n${format(value)}`,
	};
}
