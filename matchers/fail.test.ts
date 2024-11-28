import { expect as e } from '@std/expect';
import { describe, test } from '@std/testing/bdd';

import * as matchers from './fail.ts';
import type { ExtendedExpected } from '~/extended-types';

e.extend(matchers);
const expect = e<ExtendedExpected>;

describe('.fail', () => {
	test('fails without message', () => {
		expect(() => expect(undefined).fail()).toThrow('fails by .fail() assertion');
	});

	test('fails with message', () => {
		expect(() => expect(undefined).fail("This shouldn't fail!"))
			.toThrow("This shouldn't fail!");
	});
});

describe('.not.fail', () => {
	test('does not fail without message', () => {
		expect(undefined).not.fail();
	});

	test('does not fail with message', () => {
		expect(undefined).not.fail('this should fail!');
	});
});
