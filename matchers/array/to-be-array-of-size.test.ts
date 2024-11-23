import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../../expected-extended.ts';
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

	test('fails when given type of false which is not an array', () => {
		expect(() => expect(false).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of true which is not an array', () => {
		expect(() => expect(true).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of 0 which is not an array', () => {
		expect(() => expect(0).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of {} which is not an array', () => {
		expect(() => expect({}).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of () => {} which is not an array', () => {
		expect(() => expect(() => {}).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of undefined which is not an array', () => {
		expect(() => expect(undefined).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of null which is not an array', () => {
		expect(() => expect(null).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
	});

	test('fails when given type of NaN which is not an array', () => {
		expect(() => expect(NaN).toBeArrayOfSize(1)).toThrow(/^Expected value to be an array of size:\n/);
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
	test('passes when not given an array: false', () => {
		expect(false).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: true', () => {
		expect(true).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: 0', () => {
		expect(0).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: {}', () => {
		expect({}).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: () => {}', () => {
		expect(() => {}).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: undefined', () => {
		expect(undefined).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: null', () => {
		expect(null).not.toBeArrayOfSize(2);
	});

	test('passes when not given an array: NaN', () => {
		expect(NaN).not.toBeArrayOfSize(2);
	});

	{
		const size = 0;
		test(`fails when given an array of size ${size}`, () => {
			expect(() => expect([]).not.toBeArrayOfSize(size)).toThrow(/^Expected value to not be an array of size:\n/);
		});
	}
});
