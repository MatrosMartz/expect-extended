export interface ExtendedObjectMatchers {
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
