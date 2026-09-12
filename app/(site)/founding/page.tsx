import type { Metadata } from "next";
import { FoundingPageSection } from "@/components/sections/founding-page";
import { foundingPage } from "@/lib/content/founding";

export const metadata: Metadata = {
  title: foundingPage.meta.title,
  description: foundingPage.meta.description,
};

export default function FoundingPage() {
  return <FoundingPageSection />;
}
