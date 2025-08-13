> Share terminal sessions via SVG and CSS

# svg-term

> This is a fork of [marionebl/svg-term](https://github.com/marionebl/svg-term)

* Render [asciinema][asciinema] asciicast to animated SVG
* Use custom themes
* Share asciicast everywhere

```sh
bun add @okhsunrog/svg-term
# or
npm i @okhsunrog/svg-term
```

## Differences from the original project

- **ESM-only**: Package is pure ES modules (`"type": "module"`). Use `import` only. CommonJS `require()` is not supported.
- **Bun tooling**: Uses Bun as the package manager and script runner. Lockfile is `bun.lockb`. Scripts run with `bun run ...`.
- **Modernized dependencies**:
  - **React/ReactDOM**: 19.x
  - **Emotion**: 11.x (`@emotion/react` and `@emotion/styled`), no `@emotion/core`
  - **TypeScript**: 5.x; **@types/node**: 24.x
  - **rimraf**: 6.x; **object-hash**: 3.x
  - Switched lodash imports to ESM-friendly per-path imports
- **TypeScript config**: `moduleResolution: NodeNext`, `module: NodeNext`, `jsx: react-jsx`, target/lib ES2020.
- **Removed legacy tooling**: Jest config and Webpack example config removed.
- **Usage examples**: README now shows ESM imports; install via Bun Git URL until a package is published.
- **Internal fixes**: Typed `children` props where missing; adjusted `ansi-to-rgb` typings for ESM; fixed interop with `load-asciicast`.
- **API status**: Public API stays the same (`render(input, options)` and `SvgTerm` component).

### Breaking change for CommonJS users

Old (original project):

```js
const { render } = require('svg-term');
```

New (this fork, ESM-only):

```js
import { render } from '@okhsunrog/svg-term';
```

## Usage

```js
import { readFile } from 'node:fs/promises';
import { render } from 'svg-term';

(async () => {
  const data = String(await readFile('./asciicast.json'));
  const svg = render(data);
  // => <svg>...</svg>
})();
```

## API

```ts
// `input` can be string/object of v1 or v2:
// https://github.com/asciinema/asciinema/blob/develop/doc
// or an already loaded cast:
// https://github.com/marionebl/load-asciicast
//
// `options` won't take effect if `input` is an already loaded cast.
render(input: string, options?: Options): string

interface Options {
  /**
   * ANSI theme to use
   * - has to contain all keys if specified
   * - defaults to Atom One theme if omitted
   **/
  theme?: Theme;
  /** Render with a framing window, defaults to false */
  window?: boolean;
  /** Idle time limit in milliseconds */
  idle?: number,
  /** Frames per second limit, see https://github.com/marionebl/svg-term/issues/13 */
  fps?: number,
  /** Lower bound of timeline to render in milliseconds */
  from?: number;
  /** Upper bound of timeline to render in milliseconds */
  to?: number;
  /** Timestamp of single frame to render in milliseconds **/
  at?: number;
}

interface Theme {
  /** ANSI Black */
  0: RGBColor;
  /** ANSI Red */
  1: RGBColor;
  /** ANSI Green */
  2: RGBColor;
  /** ANSI Yellow */
  3: RGBColor;
  /** ANSI Blue */
  4: RGBColor;
  /** ANSI Magenta */
  5: RGBColor;
  /** ANSI Cyan */
  6: RGBColor;
  /** ANSI White */
  7: RGBColor;
  /** ANSI Light Black */
  8: RGBColor;
  /** ANSI Light Red */
  9: RGBColor;
  /** ANSI Light Green */
  10: RGBColor;
  /** ANSI Light Yellow */
  11: RGBColor;
  /** ANSI Light Blue */
  12: RGBColor;
  /** ANSI Light Magenta */
  13: RGBColor;
  /** ANSI Light Cyan */
  14: RGBColor;
  /** ANSI Light White */
  15: RGBColor;
  /** Default background color */
  background: RGBColor;
  /** Default color for bold text */
  bold: RGBColor;
  /** Cursor color */
  cursor: RGBColor;
  /** Default text color */
  text: RGBColor
  /** Default font size */
  fontSize: number;
  /** Default line height */
  lineHeight: number;
  /** Default font family */
  fontFamily: string;
}

type RGBColor = [number, number, number];
```

---

[asciinema]: https://asciinema.org/

---

> This project is a fork of [marionebl/svg-term](https://github.com/marionebl/svg-term) maintained at [okhsunrog/svg-term](https://github.com/okhsunrog/svg-term)
