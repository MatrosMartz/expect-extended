import { describe, test } from '@std/testing/bdd';
import { expect as e } from '@std/expect';

import type { ExpectedExtended } from '../../expected-extended.ts';
import * as Matchers from './to-include-all-members.ts';

e.extend(Matchers);

const expect = e<ExpectedExtended>;

describe('.toIncludeAllMembers', () => {
	const array1 = [1, 2, 3];
	const array2 = [1, 2, 2];

	test('passes when array values matches the members of the set', () => {
		expect(array1).toIncludeAllMembers([2, 1, 3]);
		expect(array2).toIncludeAllMembers([2, 1]);
		expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeAllMembers([{ foo: 'bar' }]);
	});

	test('fails when array values do not contain any of the members of the set', () => {
		expect(() => expect([4, 5, 6]).toIncludeAllMembers([1, 2, 3])).toThrow(
			/^Expected list to have all of the following members:\n/,
		);
	});

	test('fails when given object is not an array', () => {
		expect(() => expect(2).toIncludeAllMembers([1, 2, 3])).toThrow(
			/^Expected list to have all of the following members:\n/,
		);
	});

	test('fails when expected object is not an array', () => {
		// @ts-expect-error: the value passed to matcher is not a array.
		expect(() => expect(array1).toIncludeAllMembers(2)).toThrow(
			/^Expected list to have all of the following members:\n/,
		);
	});
});

describe('.not.toIncludeAllMembers', () => {
	const array1 = [1, 2, 3];

	test('passes when array values does not contain any members of the set', () => {
		expect(array1).not.toIncludeAllMembers([4, 5, 6]);
		expect([{ foo: 'bar' }, { baz: 'qux' }]).not.toIncludeAllMembers([{ hello: 'world' }]);
	});

	test('passes when given object is not an array', () => {
		expect(4).not.toIncludeAllMembers([4, 5, 6]);
	});

	test('fails when array values matches the members of the set', () => {
		expect(() => expect(array1).not.toIncludeAllMembers([2, 1, 3])).toThrow(
			/^Expected list to not have all of the following members:\n/,
		);
	});
});
