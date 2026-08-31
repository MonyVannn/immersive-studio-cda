import type { Metadata } from "next";
import { FounderIntroduction } from "@/components/sections/founder-introduction";

export const metadata: Metadata = {
  title: "Founder Story",
};

export default function FounderStoryPage() {
  return <FounderIntroduction />;
}
