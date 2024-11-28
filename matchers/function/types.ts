export interface ExtendedFunctionMatchers {
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
