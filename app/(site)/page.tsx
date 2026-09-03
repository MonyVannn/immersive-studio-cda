import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurLocation } from "@/components/sections/our-location";
import { PrivateEvents } from "@/components/sections/private-events";
import { FoundingStudioPartners } from "@/components/sections/founding-studio-partners";
import { WhatHappensHere } from "@/components/sections/what-happens-here";
import { Preloader } from "@/components/ui/preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <WhatHappensHere />
      <HowItWorks />
      <FoundingStudioPartners />
      <OurLocation />
      <PrivateEvents />
    </>
  );
}
