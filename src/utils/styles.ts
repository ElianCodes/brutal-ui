import { variantColors, type BrutalVariant } from '../config/palette';

type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(' ');
}

export function resolveColor(
  color: string | undefined,
  variant: BrutalVariant | undefined,
  fallbackVariant: BrutalVariant,
) {
  if (color) {
    return color;
  }

  return variantColors[variant ?? fallbackVariant];
}
