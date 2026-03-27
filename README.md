# brutal-ui

`@eliancodes/brutal-ui` is a small Astro-first design system for loud, tactile interfaces: thick borders, hard shadows, bright surfaces, and simple composition.

## What improved in this version

- deterministic semantic variants instead of random colors
- shared design tokens for color, spacing, shadow, radius, and motion
- consistent component APIs with native HTML attribute passthrough
- better accessibility states for focus, active, disabled, and reduced motion
- exported configuration and types for easier theming

## Installation

```bash
npm install @eliancodes/brutal-ui
```

Peer dependency:

- `astro@^6`

## Quick Start

```astro
---
import { ActualButton, Button, Card, Pill } from '@eliancodes/brutal-ui';
---

<Card variant="accent" interactive>
  <h2>Brutal UI</h2>
  <p>Opinionated components for loud interfaces.</p>

  <div style="display:flex; gap: 0.75rem; flex-wrap: wrap;">
    <Button href="/docs" variant="primary">Read docs</Button>
    <ActualButton variant="danger" size="sm">Delete</ActualButton>
    <Pill variant="info">Astro</Pill>
  </div>
</Card>
```

## Components

### `Button`

Anchor-styled button for navigation.

Props:

- native anchor attributes like `href`, `target`, `rel`, `class`, and `aria-*`
- `variant?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'`
- `size?: 'sm' | 'md' | 'lg'`
- `color?: string` to override the resolved variant color
- `fullWidth?: boolean`

### `ActualButton`

Real `<button>` element for actions and forms.

Props:

- native button attributes like `type`, `disabled`, `name`, `value`, `class`, and `aria-*`
- `variant?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'`
- `size?: 'sm' | 'md' | 'lg'`
- `color?: string`
- `fullWidth?: boolean`

### `Card`

Surface container for grouped content.

Props:

- native div attributes like `class`, `id`, `style`, `data-*`, and `aria-*`
- `variant?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'`
- `color?: string`
- `padded?: boolean`
- `interactive?: boolean`

### `Pill`

Compact label or status marker.

Props:

- native span attributes like `class`, `id`, and `aria-*`
- `variant?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'`
- `size?: 'sm' | 'md' | 'lg'`
- `color?: string`

## Theming

The package exports a configuration object and named tokens:

```ts
import { Config, brutalTokens, variantColors } from '@eliancodes/brutal-ui';
```

Available semantic variants:

- `primary`
- `accent`
- `info`
- `success`
- `warning`
- `danger`
- `neutral`

You can also override the font family globally:

```css
:root {
  --brutal-font-family: "Sanchez", Georgia, serif;
}
```

And you can bypass variants entirely with a custom color:

```astro
<Card color="#d9f99d">Custom green card</Card>
```

## Accessibility Notes

- Buttons include visible keyboard focus styles.
- Motion is reduced automatically when `prefers-reduced-motion` is enabled.
- Disabled buttons are styled distinctly.
- `Button` supports `aria-disabled="true"` for non-interactive link states.

## Package Exports

```ts
import {
  Button,
  ActualButton,
  Card,
  Pill,
  Config,
  brutalTokens,
  variantColors,
} from '@eliancodes/brutal-ui';
```

## Development

```bash
npm run check
npm run pack:check
```
