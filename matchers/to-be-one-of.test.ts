import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../expected-extended.ts';
import * as matchers from './to-be-one-of.ts';

e.extend(matchers);
const expect = e<ExpectedExtended>;

describe('.toBeOneOf', () => {
	test('passes when value is in given array', () => {
		expect(1).toBeOneOf([1, 2, 3]);
	});

	test('fails when value is not in given array', () => {
		expect(() => expect(4).toBeOneOf([1, 2, 3]))
			.toThrow(/^Expected value to be in list:/);
	});
});

describe('.not.toBeOneOf', () => {
	test('passes when value is not in given array', () => {
		expect(4).not.toBeOneOf([1, 2, 3]);
	});

	test('fails when value is in given array', () => {
		expect(() => expect(1).not.toBeOneOf([1, 2, 3]))
			.toThrow(/^Expected value to not be in list:/);
	});
});
