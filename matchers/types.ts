import type { ExtendedArrayMatchers } from './array/types.ts';
import type { ExtendedBooleanMatchers } from './boolean/types.ts';
import type { ExtendedDateMatchers } from './date/types.ts';
import type { ExtendedFunctionMatchers } from './function/types.ts';
import type { ExtendedMockMethcers } from './mock/types.ts';
import type { ExtendedNumberMatchers } from './number/types.ts';
import type { ExtendedObjectMatchers } from './object/types.ts';
import type { ExtendedPromiseMatchers } from './promise/types.ts';
import type { ExtendedStringMathcers } from './string/types.ts';
import type { ExtendedSymbolMatchers } from './symbol/types.ts';

export interface ExtendedMatchers
	extends
		ExtendedArrayMatchers,
		ExtendedBooleanMatchers,
		ExtendedDateMatchers,
		ExtendedFunctionMatchers,
		ExtendedMockMethcers,
		ExtendedNumberMatchers,
		ExtendedObjectMatchers,
		ExtendedPromiseMatchers,
		ExtendedStringMathcers,
		ExtendedSymbolMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/pass)
	 * Passing assertion
	 *
	 * @param message
	 */
	pass(message?: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/fail)
	 * Failing assertion
	 *
	 * @param message
	 */
	fail(message?: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/toBeEmpty)
	 * Use .toBeEmpty when checking if a String '', Array [] or Object {} is empty.
	 */
	toBeEmpty(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/toBeOneOf)
	 * Use .toBeOneOf when checking if a value is a member of a given Array.
	 * @param members
	 */
	toBeOneOf<E = unknown>(members: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/toBeNill)
	 * Use `.toBeNil` when checking a value is `null` or `undefined`.
	 */
	toBeNil(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/toSatify)
	 * Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`.
	 * @param predicate
	 */
	// deno-lint-ignore no-explicit-any
	toSatisfy<E = any>(predicate: (x: E) => boolean): void;
}
