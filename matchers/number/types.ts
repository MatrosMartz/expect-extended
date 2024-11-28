export interface ExtendedNumberMatchers {
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
