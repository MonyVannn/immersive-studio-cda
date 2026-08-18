export const brandColors = {
  onyx: "#000000",
  offWhite: "#F7F7F3",
  beige: "#D4CFC5",
  dove: "#A5A194",
  blackOlive: "#868269",
} as const;

export type BrandColorName = keyof typeof brandColors;

export const primaryColors = {
  onyx: brandColors.onyx,
  offWhite: brandColors.offWhite,
  dove: brandColors.dove,
} as const;

export const secondaryColors = {
  beige: brandColors.beige,
  blackOlive: brandColors.blackOlive,
} as const;
