export const variantColors = {
  primary: '#facc15',
  accent: '#c084fc',
  info: '#38bdf8',
  success: '#34d399',
  warning: '#fb923c',
  danger: '#f87171',
  neutral: '#ffffff',
} as const;

export const colors = Object.values(variantColors);

export const brutalTokens = {
  variants: variantColors,
  borderWidth: {
    regular: '2px',
    strong: '3px',
  },
  radius: {
    sm: '0.5rem',
    pill: '9999px',
  },
  shadow: {
    sm: '3px 3px 0 rgb(0 0 0 / 1)',
    md: '5px 5px 0 rgb(0 0 0 / 1)',
    lg: '7px 7px 0 rgb(0 0 0 / 1)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
  },
  font: {
    family: "var(--brutal-font-family, 'Sanchez', ui-serif, Georgia, serif)",
  },
  motion: {
    fast: '150ms',
    normal: '220ms',
  },
} as const;

export type BrutalVariant = keyof typeof variantColors;
export type BrutalSize = 'sm' | 'md' | 'lg';
export type BrutalConfig = typeof brutalTokens & {
  colors: string[];
};
