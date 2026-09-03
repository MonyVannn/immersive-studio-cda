import type { Metadata } from "next";
import { MembershipPageSection } from "@/components/sections/membership-page";

export const metadata: Metadata = {
  title: "Studio Membership",
};

export default function MembershipPage() {
  return <MembershipPageSection />;
}
