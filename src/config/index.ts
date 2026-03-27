import { brutalTokens, colors, variantColors, type BrutalConfig } from './palette';

const Config: BrutalConfig = {
  ...brutalTokens,
  colors,
  variants: variantColors,
};

export default Config;
export { brutalTokens, colors, variantColors };
export type { BrutalConfig, BrutalSize, BrutalVariant } from './palette';
