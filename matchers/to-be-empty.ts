import { format } from '@std/internal/format';

import type { Matcher } from '../_types.ts';

function isIterable(value: object): value is Iterable<unknown> {
	return Symbol.iterator in value && typeof value[Symbol.iterator] === 'function';
}

function isEmptyIterable(value: unknown): boolean {
	if (typeof value !== 'object' || value == null) return false;
	if (!isIterable(value)) return false;
	const firstIteration = value[Symbol.iterator]().next();
	return firstIteration.done ?? false;
}

export const toBeEmpty: Matcher = ({ equal, value }) => {
	const pass = '' === value || equal({}, value) || isEmptyIterable(value);

	return ({
		pass,
		message: () => `Expected value to ${pass ? 'not ' : ''}be empty received:\n${format(value)}`,
	});
};
