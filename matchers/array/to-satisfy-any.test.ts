import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../../expected-extended.ts';
import * as Matchers from './to-satisfy-any.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

const isEven = (el: number) => el % 2 === 0;
const isOdd = (el: number) => el % 2 === 1;

describe('.toSatisfyAny', () => {
	test('passes when any values satisfy predicate', () => {
		expect([2, 3, 6, 8]).toSatisfyAny(isOdd);
		expect([1, 4, 7, 9]).toSatisfyAny(isEven);
		expect([11]).toSatisfyAny(isOdd);
		expect([10]).toSatisfyAny(isEven);
	});

	test('fails when no value satisfies the predicate', () => {
		expect(() => expect([2, 4, 6, 8]).toSatisfyAny(isOdd))
			.toThrow(/^Expected array to satisfy predicate for any values:\n/);
	});
});

describe('.not.toSatisfyAll', () => {
	test('passes when all values does not satisfy the predicate', () => {
		expect([2, 4, 6, 8]).not.toSatisfyAny(isOdd);
		expect([1, 3, 5, 7]).not.toSatisfyAny(isEven);
	});

	test('fails when any value satisfies predicate', () => {
		expect(() => expect([2, 3, 6, 8]).not.toSatisfyAny(isOdd))
			.toThrow(/^Expected array to not satisfy predicate for any values:\n/);
	});
});
