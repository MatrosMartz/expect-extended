import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as Matchers from './to-be-in-range.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

describe('.toBeInRange', () => {
	test('passes when given array is in range', () => {
		expect([4, 5, 7, 9]).toBeInRange(4, 10);
	});

	test('fails when given array is not in a given range', () => {
		expect(() => expect([4, 5, 7, 9]).toBeInRange(4, 8)).toThrow();
	});
});

describe('.not.toBeInRange', () => {
	test('passes when given array is not in the given range', () => {
		expect([12, 13, 15, 17]).not.toBeInRange(4, 9);
	});

	test('fails when given array is in the given range', () => {
		expect(() => expect([4, 5, 7, 9]).not.toBeInRange(4, 10)).toThrow();
	});
});
