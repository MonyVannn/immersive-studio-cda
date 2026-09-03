import type { Metadata } from "next";
import { PrivateEventsPageSection } from "@/components/sections/private-events-page";

export const metadata: Metadata = {
  title: "Private Events",
};

export default function PrivateEventsPage() {
  return <PrivateEventsPageSection />;
}
