export interface ExtendedStringMathcers {
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
