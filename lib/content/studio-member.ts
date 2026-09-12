// Studio Membership page content (the non-founding tier).
// Source: Studio Member Sheet (approved, Aug 25). Shares the flow, room, stats
// and photos with the founding page.

import { foundingPage, type OfferPageContent } from "./founding";

export const studioMemberCheckoutUrl =
  "https://app.acuityscheduling.com/catalog.php?owner=40283262&action=addCart&clear=1&id=2274724";

export const studioMemberPage: OfferPageContent = {
  meta: {
    title: "Studio Membership",
    description:
      "Become a studio member at Immersive Studio CDA. Three immersive sessions a month, plan prep included, and your clients hosted as if it were your own studio.",
  },
  hero: {
    eyebrow: "Studio Membership",
    headline: "Step inside your building before it exists.",
    sub: "1:1 projection of floor plans & elevations in downtown Coeur d\u2019Alene",
    cta: { label: "Become a member", href: studioMemberCheckoutUrl },
    media: foundingPage.hero.media,
  },
  offer: {
    eyebrow: "Studio membership",
    price: "$1,800",
    per: "/mo",
    compare: "Three sessions every month. Additional sessions at $600 each.",
    terms:
      "12-month membership, renewing in 12-month terms. Three private sessions every month with additional sessions at $600 each. Plan prep and projection programming included.",
  },
  narrative: foundingPage.narrative,
  stats: foundingPage.stats,
  benefitsHeading: "Studio member benefits",
  benefits: [
    {
      number: "01",
      title: "3 immersive sessions monthly",
      body: "$2,700 in session value every month. Unused sessions carry over and must be used within your membership year. Use them across any of your active projects.",
    },
    {
      number: "02",
      title: "Member rate on extras",
      body: "Busy month? Add sessions anytime at $600 each instead of the $900 \u00e0 la carte price.",
    },
    {
      number: "03",
      title: "Co-branded client hosting",
      body: "Your clients experience it as your studio, with a private lounge for design change review meetings after each session.",
    },
    {
      number: "04",
      title: "Plan prep included",
      body: "Send us your drawings and we handle the projection-ready conversion for every session. No extra fees.",
    },
    {
      number: "05",
      title: "Simple scheduling",
      body: "Book your sessions online, seven days a week. Send drawings ahead and the floor is ready when you arrive.",
    },
    {
      number: "06",
      title: "Any project, any phase",
      body: "New builds, remodels, and commercial spaces. Floor plans and elevations, from concept review to final client sign-off.",
    },
  ],
  hosting: foundingPage.hosting,
  flow: foundingPage.flow,
  room: foundingPage.room,
  close: {
    headline: "Become a member.",
    body: "Checkout takes about two minutes. Your membership, your booking code, and your first three sessions are live the moment it completes.",
    cta: { label: "Become a member", href: studioMemberCheckoutUrl },
    talk: foundingPage.close.talk,
    footnote: "Membership benefits and rates apply while the membership remains active.",
    termsLabel: "Session terms",
    termsHref: "/terms",
  },
};
