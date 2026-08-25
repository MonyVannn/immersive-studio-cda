import type { Metadata } from "next";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { whoItsForPage } from "@/lib/content/site";

export const metadata: Metadata = {
  title: whoItsForPage.eyebrow,
};

export default function WhoItsForPage() {
  return <WhoItsFor />;
}
