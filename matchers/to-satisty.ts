import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '../_types.ts';

export function toSatisfy({ value }: MatcherContext, predicate: (value: unknown) => boolean): ExtendMatchResult {
	const pass = predicate(value);
	return {
		pass,
		message: () => `Expected value to ${pass ? 'not ' : ''}satisfy:\n${format(value)}`,
	};
}
