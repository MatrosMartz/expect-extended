import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../../expected-extended.ts';
import * as Matchers from './to-satisfy-all.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

const isEven = (el: number) => el % 2 === 0;
const isOdd = (el: number) => el % 2 === 1;

describe('.toSatisfyAll', () => {
	test('passes when all values satisfy predicate', () => {
		expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
		expect([2, 4, 6, 8]).toSatisfyAll(isEven);
		expect([11]).toSatisfyAll(isOdd);
		expect([10]).toSatisfyAll(isEven);
	});

	test('fails when any value does not satisfy the predicate', () => {
		expect(() => expect([1, 3, 4, 5]).toSatisfyAll(isOdd))
			.toThrow(/^Expected array to satisfy predicate for all values:\n/);
	});
});

describe('.not.toSatisfyAll', () => {
	test('passes when any value does not satisfy the predicate', () => {
		expect([1, 3, 4, 5]).not.toSatisfyAll(isOdd);
		expect([8, 6, 3, 1, 2]).not.toSatisfyAll(isEven);
	});

	test('fails when all values satisfy predicate', () => {
		expect(() => expect([1, 3, 5, 7]).not.toSatisfyAll(isOdd))
			.toThrow(/^Expected array to not satisfy predicate for all values:\n/);
	});
});
