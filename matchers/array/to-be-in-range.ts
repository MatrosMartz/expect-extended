import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

export function toBeInRange({ value }: MatcherContext, min: number, max: number): ExtendMatchResult {
	const pass = Array.isArray(value) && value.every((member) => min <= member && member <= max);

	return {
		pass,
		message: () =>
			`Expected Array to ${printNot(pass)}be in range ${format(min)}, ${format(max)}\nReceived:\n${format(value)}`,
	};
}
