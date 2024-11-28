import type { Async, Expected } from '@std/expect';
import type { ExtendedMatchers } from './matchers/types.ts';

export interface ExtendedExpected<IsAsync = false> extends Expected<IsAsync>, ExtendedMatchers {
	not: IsAsync extends true ? Async<ExtendedExpected<true>> : ExtendedExpected<false>;
	resolves: Async<ExtendedExpected<true>>;
	rejects: Async<ExtendedExpected<true>>;
}
