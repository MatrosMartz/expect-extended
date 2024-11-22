import type { ExtendMatchResult, MatcherContext } from '~/types';

export function pass(_: MatcherContext, message = 'passes by .pass() assertion'): ExtendMatchResult {
	return {
		pass: true,
		message: () => message,
	};
}
