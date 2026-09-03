import type { Metadata } from "next";
import { ShowcasePageSection } from "@/components/sections/showcase-page";

export const metadata: Metadata = {
  title: "Vendor Showcase",
};

export default function ShowcasePage() {
  return <ShowcasePageSection />;
}
