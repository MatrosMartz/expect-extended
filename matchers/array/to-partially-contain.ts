import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { containsEntryIn, printNot } from '~/utils';

function predicate(value: unknown, member: unknown): boolean {
	if (!Array.isArray(value) || member == null) return false;

	const entries = Object.entries(member);

	return value.some((val) => entries.every(containsEntryIn(val)));
}

export function toPartiallyContain({ value }: MatcherContext, member: unknown): ExtendMatchResult {
	const pass = predicate(value, member);

	return {
		pass,
		message: () =>
			`Expected array ${printNot(pass)}to partially contain:\n${format(member)}\n` +
			`Received:\n${format(value)}`,
	};
}
