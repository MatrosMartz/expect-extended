import type { ExtendMatchResult, MatcherContext } from '~/types';

export function fail(_: MatcherContext, message = 'fails by .fail() assertion'): ExtendMatchResult {
	return {
		pass: false,
		message: () => message,
	};
}
