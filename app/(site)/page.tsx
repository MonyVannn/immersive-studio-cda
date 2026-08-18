import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { OurLocation } from "@/components/sections/our-location";
import { PrivateEvents } from "@/components/sections/private-events";
import { WhatHappensHere } from "@/components/sections/what-happens-here";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatHappensHere />
      <HowItWorks />
      <OurLocation />
      <PrivateEvents />
    </>
  );
}
