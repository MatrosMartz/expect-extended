import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '~/ee';
import * as Matchers from './to-partially-contain.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

describe('.toPartiallyContain', () => {
	const item = { foo: 'bar', baz: 'qux' };

	test('passes when a string has a given substring', () => {
		expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain(item);
	});

	test('fails when a string does not have a given substring', () => {
		expect(() => expect([{ a: 1, b: 2 }]).toPartiallyContain(item)).toThrow(/^Expected array to partially contain:\n/);
	});

	describe('.not.toPartiallyContain', () => {
		test('passes when a string does not have a given substring', () => {
			expect([{ a: 1, b: 2 }]).not.toPartiallyContain(item);
		});

		test('fails when a string does have a given substring', () => {
			expect(() => expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).not.toPartiallyContain(item))
				.toThrow(/^Expected array not to partially contain:\n/);
		});
	});
});
