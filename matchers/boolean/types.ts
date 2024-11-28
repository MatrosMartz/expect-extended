export interface ExtendedBooleanMatchers {
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
