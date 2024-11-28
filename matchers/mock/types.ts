export interface ExtendedMockMethcers {
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
