import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExtendedExpected } from '~/extended-types';
import * as Matchers from './to-include-same-members.ts';

e.extend(Matchers);

const expect = e<ExtendedExpected>;

describe('.toIncludeSameMembers', () => {
	test('passes when arrays are empty', () => {
		expect([]).toIncludeSameMembers([]);
	});

	test('passes when arrays match', () => {
		expect([1, 2, 3]).toIncludeSameMembers([1, 2, 3]);
		expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ foo: 'bar' }, { baz: 'qux' }]);
	});

	test('passes when arrays match in a different order', () => {
		expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
		expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([{ baz: 'qux' }, { foo: 'bar' }]);
	});

	test('fails when the arrays are not equal in length', () => {
		expect(() => expect([1, 2]).toIncludeSameMembers([1]))
			.toThrow(/^Expected list to have the following members and no more:\n/);
	});
});

describe('.not.toIncludeSameMembers', () => {
	test('fails when array contents match', () => {
		expect(() => expect([1]).not.toIncludeSameMembers([1]))
			.toThrow(/^Expected list to not exactly match the members of:\n/);
	});

	test('passes when the arrays are different in length', () => {
		expect([1, 2, 3]).not.toIncludeSameMembers([1, 2]);
		expect([{ foo: 'bar' }, { baz: 'qux' }]).not.toIncludeSameMembers([{ hello: 'world' }]);
	});

	test('passes when given object is not an array', () => {
		expect(4).not.toIncludeSameMembers([4, 5, 6]);
	});

	test('passes when arrays do not match', () => {
		expect([]).not.toIncludeSameMembers([1]);
		expect([1]).not.toIncludeSameMembers([1, 1]);
		expect([1, 2]).not.toIncludeSameMembers([1, 2, 2]);
		expect([1, 2, 3]).not.toIncludeSameMembers([2, 3, 4]);
	});

	test('passes when no elements match', () => {
		expect([1, 2]).not.toIncludeSameMembers([3, 4]);
	});

	test('passes when only one element matches', () => {
		expect([1, 2, 3]).not.toIncludeSameMembers([3, 4, 5]);
	});
});
