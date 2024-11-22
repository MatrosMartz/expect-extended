import type { Async, Expected } from '@std/expect';

interface ExtendedArrayMatchers {
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

interface ExtendedBooleanMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Boolean#tobeboolean)
	 * Use `.toBeBoolean` when checking if a value is a `Boolean`.
	 */
	toBeBoolean(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Boolean#tobetrue)
	 * Use `.toBeTrue` when checking a value is equal (===) to `true`.
	 */
	toBeTrue(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Boolean#tobefalse)
	 * Use `.toBeFalse` when checking a value is equal (===) to `false`.
	 */
	toBeFalse(): void;
}

interface ExtendedDateMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobedate)
	 * Use `.toBeDate` when checking if a value is a `Date`.
	 */
	toBeDate(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobevaliddate)
	 * Use `.toBeValidDate` when checking if a value is a `valid Date`.
	 */
	toBeValidDate(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobeafterdate)
	 * Use `.toBeAfter` when checking if a date occurs after `date`.
	 * @param date
	 */
	toBeAfter(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobebeforedate)
	 * Use `.toBeBefore` when checking if a date occurs before `date`.
	 * @param date
	 */
	toBeBefore(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobeafterorequaltodate)
	 * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
	 * @param date
	 */
	toBeAfterOrEqualTo(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobebeforeorequaltodate)
	 * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
	 * @param date
	 */
	toBeBeforeOrEqualTo(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobebetweenstartdate-enddate)
	 * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
	 * @param startDate
	 * @param endDate
	 */
	toBeBetween(startDate: Date, endDate: Date): void;
}

interface ExtendedFunctionMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Function#tobefunction)
	 * Use `.toBeFunction` when checking if a value is a `Function`.
	 */
	toBeFunction(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Function#tothrowwithmessagetype-message)
	 * Use `.toThrowWithMessage` when checking if a callback function throws an error of a given type with a given error message.
	 *
	 * @param type
	 * @param message
	 */
	// deno-lint-ignore no-explicit-any
	toThrowWithMessage(type: (...args: any[]) => any, message: string | RegExp): void;
}

interface ExtendedMockMethcers {
	// TODO:
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Mock#tohavebeencalledbefore)
	 * Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`.
	 *
	 * Note: Required Jest version >=23
	 *
	 * @param mock
	 * @param failIfNoSecondInvocation
	 */
	//toHaveBeenCalledBefore(mock: jest.MockInstance<any, any[]>, failIfNoSecondInvocation?: boolean): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Mock#tohavebeencalledafter)
	 * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
	 *
	 * Note: Required Jest version >=23
	 *
	 * @param mock
	 * @param failIfNoFirstInvocation
	 */
	// toHaveBeenCalledAfter(mock: jest.MockInstance<any, any[]>, failIfNoFirstInvocation?: boolean): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Mock#tohavebeencalledonce)
	 * Use `.toHaveBeenCalledOnce` to check if a `Mock` was called exactly one time.
	 */
	toHaveBeenCalledOnce(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Mock#tohavebeencalledexactlyoncewith)
	 * Use `.toHaveBeenCalledExactlyOnceWith` to check if a `Mock` was called exactly one time with the expected value.
	 */
	toHaveBeenCalledExactlyOnceWith(...args: unknown[]): void;
}

interface ExtendedNumberMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobenumber)
	 * Use `.toBeNumber` when checking if a value is a `Number`.
	 */
	toBeNumber(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobenan)
	 * Use `.toBeNaN` when checking a value is `NaN`.
	 */
	toBeNaN(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobefinite)
	 * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
	 */
	toBeFinite(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobepositive)
	 * Use `.toBePositive` when checking if a value is a positive `Number`.
	 */
	toBePositive(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobenegative)
	 * Use `.toBeNegative` when checking if a value is a negative `Number`.
	 */
	toBeNegative(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobeven)
	 * Use `.toBeEven` when checking if a value is an even `Number`.
	 */
	toBeEven(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobeodd)
	 * Use `.toBeOdd` when checking if a value is an odd `Number`.
	 */
	toBeOdd(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobewithinstart-end)
	 * Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive).
	 *
	 * @param start
	 * @param end
	 */
	toBeWithin(start: number, end: number): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Number#tobeinteger)
	 * Use `.toBeInteger` when checking if a value is an integer.
	 */
	toBeInteger(): void;
}

interface ExtendedObjectMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tobeemptyobject)
	 * Use `.toBeEmptyObject` when checking if a value is an empty `Object`.
	 */
	toBeEmptyObject(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tobeobject)
	 * Use `.toBeObject` when checking if a value is an `Object`.
	 */
	toBeObject(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainkeykey)
	 * Use `.toContainKey` when checking if an object contains the provided key.
	 *
	 * @param key
	 */
	toContainKey(key: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainkeyskeys)
	 * Use `.toContainKeys` when checking if an object has all of the provided keys.
	 *
	 * @param keys
	 */
	toContainKeys<E = unknown>(keys: readonly (keyof E | string)[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainallkeyskeys)
	 * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
	 *
	 * @param keys
	 */
	toContainAllKeys<E = unknown>(keys: readonly (keyof E | string)[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainanykeyskeys)
	 * Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys.
	 *
	 * @param keys
	 */
	toContainAnyKeys<E = unknown>(keys: readonly (keyof E | string)[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainvaluevalue)
	 * Use `.toContainValue` when checking if an object contains the provided value.
	 *
	 * @param value
	 */
	toContainValue<E = unknown>(value: E): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainvaluesvalues)
	 * Use `.toContainValues` when checking if an object contains all of the provided values.
	 *
	 * @param values
	 */
	toContainValues<E = unknown>(values: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainallvaluesvalues)
	 * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
	 *
	 * @param values
	 */
	toContainAllValues<E = unknown>(values: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainanyvaluesvalues)
	 * Use `.toContainAnyValues` when checking if an object contains at least one of the provided values.
	 *
	 * @param values
	 */
	toContainAnyValues<E = unknown>(values: readonly E[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainentrykey-value)
	 * Use `.toContainEntry` when checking if an object contains the provided entry.
	 *
	 * @param entry
	 */
	toContainEntry<E = unknown>(entry: readonly [keyof E, E[keyof E]]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainentrieskey-value)
	 * Use `.toContainEntries` when checking if an object contains all of the provided entries.
	 *
	 * @param entries
	 */
	toContainEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainallentrieskey-value)
	 * Use `.toContainAllEntries` when checking if an object only contains all of the provided entries.
	 *
	 * @param entries
	 */
	toContainAllEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tocontainanyentrieskey-value)
	 * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
	 *
	 * @param entries
	 */
	toContainAnyEntries<E = unknown>(entries: readonly (readonly [keyof E, E[keyof E]])[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tobeextensible)
	 * Use `.toBeExtensible` when checking if an object is extensible.
	 */
	toBeExtensible(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tobefrozen)
	 * Use `.toBeFrozen` when checking if an object is frozen.
	 */
	toBeFrozen(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Object#tobesealed)
	 * Use `.toBeSealed` when checking if an object is sealed.
	 */
	toBeSealed(): void;
}

interface ExtendedPromiseMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Promise#toresolve)
	 * Use `.toResolve` when checking if a promise resolves.
	 */
	toResolve(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Promise#toreject)
	 * Use `.toReject` when checking if a promise rejects.
	 */
	toReject(): void;
}

interface ExtendedStringMathcers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#tobestring)
	 * Use `.toBeString` when checking if a value is a `String`.
	 */
	toBeString(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#tobehexadecimalstring)
	 * Use `.toBeHexadecimal` when checking if a value is a valid HTML hex color.
	 */
	toBeHexadecimal(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#tobedatestringstring)
	 * Use `.toBeDateString` when checking if a value is a valid date string.
	 */
	toBeDateString(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#toequalcaseinsensitivestring)
	 * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
	 *
	 * @param string
	 */
	toEqualCaseInsensitive(string: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#tostartwithprefix)
	 * Use `.toStartWith` when checking if a `String` starts with a given `String` prefix.
	 *
	 * @param prefix
	 */
	toStartWith(prefix: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#toendwithsuffix)
	 * Use `.toEndWith` when checking if a `String` ends with a given `String` suffix.
	 *
	 * @param suffix
	 */
	toEndWith(suffix: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#toincludesubstring)
	 * Use `.toInclude` when checking if a `String` includes the given `String` substring.
	 *
	 * @param substring
	 */
	toInclude(substring: string): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#toincluderepeatedsubstring-times)
	 * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
	 *
	 * @param substring
	 * @param times
	 */
	toIncludeRepeated(substring: string, times: number): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#toincludemultiplesubstring)
	 * Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings.
	 *
	 * @param substring
	 */
	toIncludeMultiple(substring: readonly string[]): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/String#toequalignoringwhitespacestring)
	 * Use `.toEqualIgnoringWhitespace` when checking if a `String` is equal (===) to given `String` ignoring white-space.
	 *
	 * @param string
	 */
	toEqualIgnoringWhitespace(string: string): void;
}

interface ExtendedSymbolMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Symbol#tobesymbol)
	 * Use `.toBeSymbol` when checking if a value is a `Symbol`.
	 */
	toBeSymbol(): void;
}

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

export interface ExpectedExtended<IsAsync = false> extends Expected<IsAsync>, ExtendedMatchers {
	not: IsAsync extends true ? Async<ExpectedExtended<true>> : ExpectedExtended<false>;
	resolves: Async<ExpectedExtended<true>>;
	rejects: Async<ExpectedExtended<true>>;
}
