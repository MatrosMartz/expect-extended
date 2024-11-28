export interface ExtendedDateMatchers {
	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobedate)
	 * Use `.toBeDate` when checking if a value is a `Date`.
	 */
	toBeDate(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobevaliddate)
	 * Use `.toBeValidDate` when checking if a value is a `valid Date`.
	 */
	toBeValidDate(): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobeafterdate)
	 * Use `.toBeAfter` when checking if a date occurs after `date`.
	 * @param date
	 */
	toBeAfter(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobebeforedate)
	 * Use `.toBeBefore` when checking if a date occurs before `date`.
	 * @param date
	 */
	toBeBefore(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobeafterorequaltodate)
	 * Use `.toBeAfterOrEqualTo` when checking if a date equals to or occurs after `date`.
	 * @param date
	 */
	toBeAfterOrEqualTo(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobebeforeorequaltodate)
	 * Use `.toBeBeforeOrEqualTo` when checking if a date equals to or occurs before `date`.
	 * @param date
	 */
	toBeBeforeOrEqualTo(date: Date): void;

	/**
	 * **Note**: the documention for this matcher is taken for [jest-extended](jest-extended.jestcommunity.dev/docs/matchers/Date#tobebetweenstartdate-enddate)
	 * Use `.toBeBetween` when checking if a date occurs between `startDate` and `endDate`.
	 * @param startDate
	 * @param endDate
	 */
	toBeBetween(startDate: Date, endDate: Date): void;
}
