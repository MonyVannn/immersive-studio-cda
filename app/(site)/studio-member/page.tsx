import type { Metadata } from "next";
import { FoundingPageSection } from "@/components/sections/founding-page";
import { studioMemberPage } from "@/lib/content/studio-member";

export const metadata: Metadata = {
  title: studioMemberPage.meta.title,
  description: studioMemberPage.meta.description,
};

export default function StudioMemberPage() {
  return <FoundingPageSection copy={studioMemberPage} />;
}
