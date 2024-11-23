import { equal } from '@std/assert';

export function printNot(pass: boolean): string {
	return pass ? 'not ' : '';
}

export function containsIn(list: readonly unknown[]): (value: unknown) => boolean {
	return (value: unknown) => list.some((item) => equal(item, value));
}

export function containsEntryIn(obj: object): (entry: readonly [PropertyKey, unknown]) => boolean {
	return ([key, value]: readonly [PropertyKey, unknown]) =>
		Object.hasOwn(obj, key) && equal(Reflect.get(obj, key), value);
}
