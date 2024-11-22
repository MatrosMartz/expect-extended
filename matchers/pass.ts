import type { ExtendMatchResult, MatcherContext } from '../_types.ts';

export function pass(_: MatcherContext, message = 'passes by .pass() assertion'): ExtendMatchResult {
	return {
		pass: true,
		message: () => message,
	};
}
