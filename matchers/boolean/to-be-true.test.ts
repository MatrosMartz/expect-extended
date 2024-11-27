import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as matchers from './to-be-true.ts';

e.extend(matchers);
const expect = e<ExpectedExtended>;

describe('.toBeTrue', () => {
	test('passes when given true', () => {
		expect(true).toBeTrue();
	});

	test('fails when not given true', () => {
		expect(() => expect(false).toBeTrue()).toThrow(/^Expected value to be true received:\n/);
	});
});

describe('.not.toBeTrue', () => {
	[false, '', 0, {}, [], () => {}, undefined, null, NaN].forEach((given) => {
		test(`passes when not given true: ${given}`, () => {
			expect(given).not.toBeTrue();
		});
	});

	test('fails when given true', () => {
		expect(() => expect(true).not.toBeTrue()).toThrow(/^Expected value to not be true received:\n/);
	});
});
