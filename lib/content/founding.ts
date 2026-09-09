// Founding Member page content.
// Source: Founding Member Sheet (approved, Aug 25) + the live site's How a Session Works steps.
// Kept in its own file so it can ship without touching site.ts.

export const foundingCheckoutUrl =
  "https://app.acuityscheduling.com/catalog.php?owner=40283262&action=addCart&clear=1&id=2274723";

export const foundingPage = {
  meta: {
    title: "Founding Member",
    description:
      "Reserve one of seven founding seats at Immersive Studio CDA. Three immersive sessions a month, a founding discount for life, and your firm on the studio wall.",
  },
  hero: {
    eyebrow: "Founding Member",
    headline: "Step inside your building before it exists.",
    sub: "1:1 projection of floor plans & elevations in downtown Coeur d’Alene",
    cta: { label: "Reserve your founding seat", href: foundingCheckoutUrl },
    note: "Seven founding firms only.",
    media: {
      src: "/assets/founding/founding-hero.jpg",
      alt: "The projection floor at Immersive Studio CDA, a floor plan on the floor and elevations on the walls, seen from the mezzanine",
    },
  },
  offer: {
    eyebrow: "The founding offer",
    price: "$1,500",
    per: "/mo",
    compare: "Standard membership: $1,800/mo",
    seatsLabel: "7 founding firms only",
    seats: 7,
    terms:
      "12-month founding term, renewing in 12-month terms. Rates may adjust at renewal, but your founding discount always applies for as long as your membership stays active.",
  },
  narrative:
    "Even good drawings are hard to picture. Clients sign off on spaces they haven’t truly experienced, then change them mid-build. At Immersive Studio, they step inside their future space at true 1:1 scale, projected across 2,800± sq ft of floor. Design questions get answered while they’re still erasable, and clients say yes with confidence.",
  stats: [
    { value: "1:1", label: "True-scale floor & elevation projection" },
    { value: "$5K to $25K", label: "Typical cost of one field change order" },
    { value: "$900", label: "À la carte session: the cheapest insurance in construction" },
  ],
  benefitsHeading: "Founding member benefits",
  benefits: [
    {
      number: "01",
      title: "3 immersive sessions monthly",
      body: "$2,700 in session value, refreshed every month. Use them across any of your active projects.",
    },
    {
      number: "02",
      title: "Founding discount for life",
      body: "Your per-session rate is guaranteed at least 20% below à la carte pricing for life. Today’s founding rate is 44% below.",
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
      title: "Founding partner recognition",
      body: "Your firm featured as a founding partner on the Immersive Studio website, with your logo and a link to your practice.",
    },
    {
      number: "06",
      title: "Extra sessions at your rate",
      body: "Busy month? Add sessions anytime at $500 each. That is your founding rate, not the $900 à la carte price.",
    },
  ],
  hosting: {
    src: "/assets/founding/founding-hosting.jpg",
    alt: "A client walking a full-scale floor plan on the studio floor with elevations lit on the wall",
  },
  flow: {
    heading: "How a session works",
    steps: [
      { number: "01", title: "Upload", body: "Send your drawings. We handle the projection-ready prep.", src: "/assets/founding/flow-01-upload.png" },
      { number: "02", title: "Project", body: "The plan is projected on the floor. Elevations take the wall.", src: "/assets/founding/flow-02-project.png" },
      { number: "03", title: "Walk", body: "Your client stands in the space and feels the design.", src: "/assets/founding/flow-03-walk.png" },
      { number: "04", title: "Refine", body: "Changes marked in the room, while they’re still inexpensive.", src: "/assets/founding/flow-04-refine.png" },
      { number: "05", title: "Confirm", body: "Decisions made before construction, not during.", src: "/assets/founding/flow-05-confirm.png" },
    ],
  },
  room: {
    heading: "The room",
    zones: ["Projection floor", "West wall", "East wall", "Decision zone, lower", "Decision zone, loft", "Vendor showroom"],
    media: {
      src: "/assets/founding/space-hero.jpg",
      alt: "Axonometric drawing of the studio: the projection floor and walls lit, the decision lounge, the loft, and the vendor showroom",
    },
  },
  close: {
    headline: "Reserve your founding seat.",
    body: "Checkout takes about two minutes. Your seat, your booking code, and your first three sessions are live the moment it completes.",
    cta: { label: "Reserve your founding seat", href: foundingCheckoutUrl },
    talk: {
      lead: "Prefer to talk it through first?",
      label: "Ask a question",
      href: "/contact?category=Studio%20Membership",
    },
    footnote:
      "All founding member benefits, rates, and website recognition apply only while the founding membership remains active.",
    termsLabel: "Session terms",
    termsHref: "/terms",
  },
} as const;
