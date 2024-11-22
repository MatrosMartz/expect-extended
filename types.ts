// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// deno-lint-ignore-file no-explicit-any

export interface MatcherContext {
	value: unknown;
	isNot: boolean;
	equal: (a: unknown, b: unknown, options?: EqualOptions) => boolean;
	customTesters: Tester[];
	customMessage: string | undefined;
}

export type Matcher = (
	context: MatcherContext,
	...args: any[]
) => MatchResult | ExtendMatchResult;

export type Matchers = {
	[key: string]: Matcher;
};

export type MatchResult = void | Promise<void> | boolean;

export type ExtendMatchResult = {
	message: () => string;
	pass: boolean;
};

export type EqualOptions = {
	customTesters?: Tester[];
	msg?: string;
	formatter?: (value: unknown) => string;
	strictCheck?: boolean;
};

export type Tester = (a: any, b: any, customTesters: Tester[]) => void;
