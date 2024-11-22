import type { ExtendMatchResult, MatcherContext } from '../_types.ts';

export function fail(_: MatcherContext, message = 'fails by .fail() assertion'): ExtendMatchResult {
	return {
		pass: false,
		message: () => message,
	};
}
