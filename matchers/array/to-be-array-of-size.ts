import { format } from '@std/internal/format';
import type { ExtendMatchResult, MatcherContext } from '~/types';
import { printNot } from '~/utils';

function determinePropertyMessage(actual: unknown, property: PropertyKey, message: string = 'Not accessible'): unknown {
	return actual != null && Object.hasOwn(actual, property) ? Reflect.get(actual, property) : message;
}

export function toBeArrayOfSize({ value }: MatcherContext, expected: number): ExtendMatchResult {
	const pass = Array.isArray(value) && value.length === expected;

	return {
		pass,
		message: () =>
			`Expected value to ${printNot(pass)}be an array of size:\n${format(expected)}\n` +
			`Recieved:\n  value: ${format(value)}\n  length: ${format(determinePropertyMessage(value, expected))}`,
	};
}
