import { expect as e } from '@std/expect';
import { describe, test } from '@std/testing/bdd';

import type { ExtendedExpected } from '~/extended-types';
import * as matchers from './pass.ts';

e.extend(matchers);

const expect = e<ExtendedExpected>;

describe('.pass', () => {
	test('passes without message', () => {
		expect(undefined).pass();
	});

	test('passes with message', () => {
		expect(undefined).pass('this should pass!');
	});
});

describe('.not.pass', () => {
	test('does not pass, has no message', () => {
		expect(() => expect(undefined).not.pass()).toThrow();
	});

	test('does not.pass, has no message', () => {
		expect(() => expect(undefined).not.pass('This should not pass!')).toThrow();
	});
});
