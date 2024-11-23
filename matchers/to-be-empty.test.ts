import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../expected-extended.ts';
import * as matchers from './to-be-empty.ts';

e.extend(matchers);
const expect = e<ExpectedExtended>;

describe('.toBeEmpty', () => {
	test('passes when given empty string', () => {
		expect('').toBeEmpty();
	});

	test('passes when given empty string object', () => {
		expect(new String('')).toBeEmpty();
	});

	test('passes when given empty array', () => {
		expect([]).toBeEmpty();
	});

	test('passes when given empty object', () => {
		expect({}).toBeEmpty();
	});

	test('When empty Set is passed', () => {
		expect(new Set()).toBeEmpty();
	});

	test('When empty Map is passed', () => {
		expect(new Map([])).toBeEmpty();
	});

	test('When empty generator is passed', () => {
		function* yieldsNothing() {}

		expect(yieldsNothing()).toBeEmpty();
	});

	test('fails when given non-empty string', () => {
		expect(() => expect('string').toBeEmpty()).toThrow('Expected value to be empty received:\n"string"');
	});
});

describe('.not.toBeEmpty', () => {
	test('passes when given a non-empty string', () => {
		expect('string').not.toBeEmpty();
	});

	test('passes when given a non-empty string object', () => {
		expect(new String('string')).not.toBeEmpty();
	});

	test('passes when given a non-empty array', () => {
		expect([1, 2]).not.toBeEmpty();
	});

	test('passes when given a non-empty object', () => {
		expect({ foo: 'bar' }).not.toBeEmpty();
	});

	test('When empty Set is passed', () => {
		expect(new Set(['value'])).not.toBeEmpty();
	});

	test('When empty Map is passed', () => {
		expect(new Map([['k', 'v']])).not.toBeEmpty();
	});

	test('When empty generator is passed', () => {
		function* yieldsNothing() {
			yield 'a thing';
		}

		expect(yieldsNothing()).not.toBeEmpty();
	});

	test('fails when given empty string', () => {
		expect(() => expect('').not.toBeEmpty()).toThrow('Expected value to not be empty received:\n""');
	});
});
