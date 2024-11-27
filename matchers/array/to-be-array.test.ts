import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../../expected-extended.ts';
import * as Matchers from './to-be-array.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

describe('.toBeArray', () => {
	test('passes when given an array', () => {
		expect([]).toBeArray();
	});

	test('fails when not given an array', () => {
		expect(() => expect(false).toBeArray()).toThrow(/^Expected value to be an array received:\n/);
	});
});

describe('.not.toBeArray', () => {
	[false, true, 0, {}, () => {}, undefined, null, NaN].forEach((given) => {
		test(`passes when not given an array: ${String(given)}`, () => {
			expect(given).not.toBeArray();
		});
	});

	test('fails when given an array', () => {
		expect(() => expect([]).not.toBeArray()).toThrow(/^Expected value to not be an array received:\n/);
	});
});
