import { format } from '@std/internal/format';

import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

function isIterable(value: object): value is Iterable<unknown> {
	return Symbol.iterator in value && typeof value[Symbol.iterator] === 'function';
}

function isEmptyIterable(value: unknown): boolean {
	if (value == null || !isIterable(value)) return false;
	const firstIteration = value[Symbol.iterator]().next();
	return firstIteration.done ?? false;
}

export function toBeEmpty({ equal, value }: MatcherContext): ExtendMatchResult {
	const pass = '' === value || equal({}, value) || isEmptyIterable(value);

	return {
		pass,
		message: () => `Expected value to ${printNot(pass)}be empty received:\n${format(value)}`,
	};
}
