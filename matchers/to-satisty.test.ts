import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as Matchers from './to-satisty.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

describe('.toSatisfy', () => {
	const is2 = (n: unknown) => n === 2;

	test('passes when given a function that returns true', () => {
		expect(2).toSatisfy(is2);
	});

	test('fails when given function that returns false', () => {
		expect(() => expect(3).toSatisfy(is2)).toThrow();
	});
});

describe('.not.toSatisfy', () => {
	const isTrue = (a: unknown) => a === true;

	test('passes when given a function that returns false', () => {
		expect(false).not.toSatisfy(isTrue);
	});

	test('fails when given a function that returns true', () => {
		expect(() => expect(true).not.toSatisfy(isTrue)).toThrow();
	});
});
