import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '../_types.ts';

export function toBeOneOf({ equal, value }: MatcherContext, members: readonly unknown[]): ExtendMatchResult {
	const pass = members.some((expected) => equal(value, expected));

	return {
		pass,
		message: () =>
			`Expected value to ${pass ? 'not ' : ''}be in list:\n${format(members)}\nReceived:\n${format(value)}`,
	};
}
