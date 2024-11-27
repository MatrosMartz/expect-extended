import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as matchers from './to-be-boolean.ts';

e.extend(matchers);
const expect = e<ExpectedExtended>;

describe('.toBeBoolean', () => {
	test('passes when given false', () => {
		expect(false).toBeBoolean();
	});

	test('passes when given true', () => {
		expect(true).toBeBoolean();
	});

	test('passes when given something that evaluates to a boolean', () => {
		expect(1 === 1).toBeBoolean();
	});

	test('passes when given an object of type Boolean', () => {
		expect(new Boolean()).toBeBoolean();
	});

	test('fails when not given a boolean', () => {
		expect(() => expect(1).toBeBoolean()).toThrow(/^Expected value to be of type boolean, received:\n/);
	});
});

describe('.not.toBeBoolean', () => {
	['true', 0, {}, [], () => {}, undefined, null, NaN].forEach((given) => {
		test(`passes when item is not of type boolean: ${given}`, () => {
			expect(given).not.toBeBoolean();
		});
	});

	test('fails when given a boolean', () => {
		expect(() => expect(true).not.toBeBoolean()).toThrow(/^Expected value to not be of type boolean, received:\n/);
	});

	test('fails when given an object of type boolean', () => {
		expect(() => expect(new Boolean()).not.toBeBoolean()).toThrow(
			/^Expected value to not be of type boolean, received:\n/,
		);
	});
});
