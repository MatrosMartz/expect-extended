export interface ExtendedPromiseMatchers {
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
