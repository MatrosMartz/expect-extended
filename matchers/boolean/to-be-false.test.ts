import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as matchers from './to-be-false.ts';

e.extend(matchers);
const expect = e<ExpectedExtended>;

describe('.toBeFalse', () => {
	test('passes when given false', () => {
		expect(false).toBeFalse();
	});

	test('fails when not given false', () => {
		expect(() => expect(true).toBeFalse()).toThrow(/^Expected value to be false received:\n/);
	});
});

describe('.not.toBeFalse', () => {
	[true, '', 0, {}, [], () => {}, undefined, null, NaN].forEach((given) => {
		test(`passes when not given false: ${given}`, () => {
			expect(given).not.toBeFalse();
		});
	});

	test('fails when given false', () => {
		expect(() => expect(false).not.toBeFalse()).toThrow(/^Expected value to not be false received:\n/);
	});
});
