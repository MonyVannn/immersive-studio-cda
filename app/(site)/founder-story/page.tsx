import type { Metadata } from "next";
import { FounderIntroduction } from "@/components/sections/founder-introduction";

export const metadata: Metadata = {
  title: "Founder Story",
};

export default function FounderStoryPage() {
  return (
    <div className="pt-16 md:pt-20">
      <FounderIntroduction />
    </div>
  );
}
