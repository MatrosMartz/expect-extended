import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../expected-extended.ts';
import * as Matchers from './to-be-nill.ts';

e.extend(Matchers);
const expect = e<ExpectedExtended>;

describe('.toBeNil', () => {
	test('passes when null is given', () => {
		expect(null).toBeNil();
	});

	test('passes when undefined is given', () => {
		expect(undefined).toBeNil();
	});
	test('fails when the value is not null or undefined', () => {
		expect(() => expect('value').toBeNil()).toThrow(/^Expected value to be null or undefined, received:/);
	});
});

describe('.not.toBeNil', () => {
	test('passes when value is not null or undefined : "true"', () => {
		expect('true').not.toBeNil();
	});

	test('passes when value is not null or undefined : true', () => {
		expect(true).not.toBeNil();
	});

	test('fails when null is given', () => {
		expect(() => expect(null).not.toBeNil()).toThrow(/^Expected value not to be null or undefined, received:/);
	});
});
