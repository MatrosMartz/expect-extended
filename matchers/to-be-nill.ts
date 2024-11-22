import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '../_types.ts';

export function toBeNil({ value }: MatcherContext): ExtendMatchResult {
	const pass = value == null;

	return {
		pass,
		message: () => `Expected value ${pass ? 'not ' : ''}to be null or undefined, received:\n${format(value)}`,
	};
}
