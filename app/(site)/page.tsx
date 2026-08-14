import { Hero } from "@/components/sections/hero";
import { OurLocation } from "@/components/sections/our-location";
import { PrivateEvents } from "@/components/sections/private-events";
import { WhatHappensHere } from "@/components/sections/what-happens-here";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatHappensHere />
      <OurLocation />
      <PrivateEvents />
    </>
  );
}
