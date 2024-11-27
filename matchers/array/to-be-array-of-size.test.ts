import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as Matchers from './to-be-array-of-size.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

describe('.toBeArrayOfSize', () => {
	{
		const size = 1;
		test(`passes when given an array of size 1, where size === ${size}`, () => {
			expect([size]).toBeArrayOfSize(size);
		});
	}
	{
		const size = 134;
		test(`passes when given an array of size 134, where size === ${size}`, () => {
			expect(Array(size)).toBeArrayOfSize(size);
		});
	}

	test('fails when given type which is not an array', () => {
		expect(() => expect(false).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	[false, true, 0, {}, () => {}, undefined, null, NaN].forEach((given) => {
		test(`fails when given type of ${given} which is not an array`, () => {
			expect(() => expect(false).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
		});
	});

	test('fails when not given a parameter', () => {
		// @ts-expect-error: matcher parameter should not be correct.
		expect(() => expect([1]).toBeArrayOfSize()).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given neither a parameter nor an array', () => {
		// @ts-expect-error: matcher parameter should not be correct.
		expect(() => expect([]).toBeArrayOfSize()).toThrow(/^Expected value to be an array of size:\n/);
	});
});

describe('.not.toBeArrayOfSize', () => {
	[false, true, 0, {}, () => {}, undefined, null, NaN].forEach((given) => {
		test(`passes when not given an array: ${given}`, () => {
			expect(false).not.toBeArrayOfSize(2);
		});
	});

	{
		const size = 0;
		test(`fails when given an array of size ${size}`, () => {
			expect(() => expect([]).not.toBeArrayOfSize(size)).toThrow(/^Expected value to not be an array of size:\n/);
		});
	}
});
