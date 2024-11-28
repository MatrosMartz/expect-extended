export interface ExtendedArrayMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#tobearray)
	 * Use `.toBeArray` when checking if a value is an `Array`.
	 */
	toBeArray(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#tobearrayofsize)
	 * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
	 *
	 * @param x
	 */
	toBeArrayOfSize(x: number): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#toincludeallmembersmembers)
	 * Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set.
	 *
	 * @param members
	 */
	toIncludeAllMembers<E = unknown>(members: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#toincludeallpartialmembersmembers)
	 * Use `.toIncludeAllPartialMembers` when checking if an `Array` contains all of the same partial members of a given set.
	 *
	 * @param members
	 */
	toIncludeAllPartialMembers<E = unknown>(members: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#toincludeanymembersmembers)
	 * Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set.
	 *
	 * @param members
	 */
	toIncludeAnyMembers<E = unknown>(members: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#toincludesamemembersmembers)
	 * Use `.toIncludeSameMembers` when checking if two arrays contain equal values, in any order.
	 *
	 * @param members
	 */
	toIncludeSameMembers<E = unknown>(members: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#topartiallycontainmembers)
	 * Use `.toPartiallyContain` when checking if any array value matches the partial member.
	 *
	 * @param member
	 */
	toPartiallyContain<E = unknown>(member: E): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#tosatisfyallpredicate)
	 * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
	 *
	 * @param predicate
	 */
	// deno-lint-ignore no-explicit-any
	toSatisfyAll<E = any>(predicate: (x: E) => boolean): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#tosatisfyanypredicate)
	 * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
	 *
	 * @param predicate
	 */
	// deno-lint-ignore no-explicit-any
	toSatisfyAny(predicate: (x: any) => boolean): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Array#toberangemin-max)
	 * Use `.toBeInRange` when checking if an array has elements in range min (inclusive) and max (inclusive).
	 *
	 * @param min
	 * @param max
	 */
	toBeInRange(min: number, max: number): void;
}
