---
"@eliancodes/brutal-ui": major
---

Refactor the component library into a more intentional design-system base.

Breaking changes:

- replace random default colors with semantic `variant` tokens
- add new shared sizing and layout props like `size` and `fullWidth`
- change exported config to token-based `Config`, `brutalTokens`, and `variantColors`
- remove the old `src/config/colors.json` palette file from the published package

Improvements:

- forward native HTML attributes consistently across components
- add better focus, disabled, active, and reduced-motion behavior
- expand the README with installation, usage, theming, and accessibility guidance
