# Changelog

## 1.0.0

### Major Changes

- 188d76b: Refactor the component library into a more intentional design-system base.

  Breaking changes:
  - replace random default colors with semantic `variant` tokens
  - add new shared sizing and layout props like `size` and `fullWidth`
  - change exported config to token-based `Config`, `brutalTokens`, and `variantColors`
  - remove the old `src/config/colors.json` palette file from the published package

  Improvements:
  - forward native HTML attributes consistently across components
  - add better focus, disabled, active, and reduced-motion behavior
  - expand the README with installation, usage, theming, and accessibility guidance

### Minor Changes

- 4144b66: Replace filter-based shadows with box-shadow for better cross-browser animation support.

## 0.2.6

### Patch Changes

- button props

## 0.2.5

### Patch Changes

- add ActualButton component

## 0.2.4

### Patch Changes

- make button extend HTMLButton
- c6d3ff6: Change the use of utility css classes to vanilla css for the Button component.

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.3](https://github.com/ElianCodes/brutal-ui/compare/v0.2.2...v0.2.3) (2023-12-19)

### Features

- add undefined to color prop of components ([7a23e4e](https://github.com/ElianCodes/brutal-ui/commit/7a23e4e3f9c137c5a13888dd04aec725b7d39acf))
- move unocss/tailwind classes to vanilla css ([1ce0400](https://github.com/ElianCodes/brutal-ui/commit/1ce0400a1001dbc8deaad9a287dd94e2a8885511))
