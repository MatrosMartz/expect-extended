import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExtendedExpected } from '~/extended-types';
import * as Matchers from './to-include-all-partial-members.ts';

e.extend(Matchers);

const expect = e<ExtendedExpected>;

describe('.toIncludeAllPartialMembers', () => {
	test('passes when array values matches the partial members of the set', () => {
		expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers([{ foo: 'bar' }]);
	});

	test('fails when array values do not contain any of the members of the set', () => {
		expect(() => expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers([{ foo: 'qux' }]))
			.toThrow();
	});

	test('fails when given object is not an array', () => {
		expect(() => expect(1).toIncludeAllPartialMembers([{ foo: 'bar' }]))
			.toThrow(/^Expected list to have all of the following partial members:\n/);
	});

	test('fails when expected object is not an array', () => {
		// @ts-expect-error: matcher parameter should not be correct.
		expect(() => expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers(1))
			.toThrow(/^Expected list to have all of the following partial members:\n/);
	});
});

describe('.not.toIncludeAllPartialMembers', () => {
	test('passes when array values does not contain any members of the set', () => {
		expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeAllPartialMembers([{ foo: 'qux' }]);
	});

	test('passes when given object is not an array', () => {
		expect(1).not.toIncludeAllPartialMembers([{ foo: 'bar' }]);
	});

	test('fails when array values matches the members of the set', () => {
		expect(() =>
			expect([{ hello: 'world' }, { foo: 'bar', baz: 'qux' }]).not.toIncludeAllPartialMembers([{ foo: 'bar' }])
		).toThrow(/^Expected list to not have all of the following partial members:\n/);
	});
});
