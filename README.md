# expect-extended

[![jsr version][jsr-version-src]][jsr-version-href]

A implementation of [jest-extended](npmjs.com/package/jest-extended) for [jsr:@std/expect](jsr.io/@std/expect)

## 📄 License

Published under [MIT License](./LICENSE).

## ⬇️ Installation

To install the package, run the following command:

```bash
deno add jsr:@martz/expect-extended
```

## 🚀 Usage and Setup

### Option 1: Creating a Custom `expect` Instance

This setup allows you to define a custom `expect` instance with extended matchers:

```typescript
// custom-expect.ts
import { expect } from '@std/expect';
import { type ExtendedExpected } from '@martz/expect-extended';
import * as matchers from '@martz/expect-extended';

// Extend the default matchers with the new ones
expect.extend(matchers);

// Export your custom expect instance
export const customExpect = expect<ExtendedExpected>;
```

In your test files:

```typescript
import { customExpect } from './custom-expect.ts';

customExpect('').toBeEmpty();
```

### Option 2: Extending the Global `expect`

This setup modifies the global `expect` instance directly, which is useful for projects with many test files:

```typescript
// setup.ts
import { expect } from '@std/expect';
import { type ExtendedMatchers } from '@martz/expect-extended';
import * as matchers from '@martz/expect-extended';

// Extend the global expect instance
expect.extend(matchers);

// Extend the Typescript definition for `expect`
declare module '@std/expect' {
	interface Expected extends ExtendedMatchers {}
}
```

In your tests files:

```typescript
import './setup.ts';
import { expect } from '@std/expect';

expect(2).not.toBeOdd();
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve this project.

<!-- Badges -->

[jsr-version-src]: https://jsr.io/badges/@martz/expect-extended?style=flat&labelColor=18181B&logoColor=4169E1
[jsr-version-href]: https://jsr.io/@martz/expect-extended
