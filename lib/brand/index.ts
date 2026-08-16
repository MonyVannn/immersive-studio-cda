export {
  brandColors,
  primaryColors,
  secondaryColors,
  type BrandColorName,
} from "./colors";
export { brandTypography, typeScale } from "./typography";

export const brand = {
  name: "CDA Immersive Studio",
  location: "CDA",
  logo: {
    src: "/logo/logo-off-white.png",
    alt: "CDA Immersive Studio",
    width: 3000,
    height: 2000,
  },
  tagline:
    "Step inside future homes, properties, spaces, and original ideas at a 1:1 immersive scale — where architects, builders, real estate professionals, and creators can explore the vision before it exists anywhere else.",
} as const;
