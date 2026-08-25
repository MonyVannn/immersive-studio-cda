export type NavLink = {
  label: string;
  href: string;
};

export type NavSubsection = {
  label: string;
  href?: string;
  links: NavLink[];
};

export type NavGroup = {
  id: string;
  /** Accessible name for the group; not rendered visually on desktop. */
  label: string;
  links: NavLink[];
  subsections?: NavSubsection[];
};

export type DesktopNavItem =
  | { label: string; href: string; links?: never }
  | { label: string; href?: never; links: NavLink[] };

export type Audience = {
  slug: string;
  label: string;
  headline: string;
  body: string;
};

export const whoItsForPath = "/who-its-for";

export const whoItsForPage = {
  eyebrow: "Who It's For",
  headline: "The studio is built for the people who shape space.",
  body: "Architects, builders, real estate professionals, experience creators, and homeowners come here to walk through a vision at full scale — before it exists anywhere else.",
} as const;

export const audiences: Audience[] = [
  {
    slug: "builders",
    label: "Builders",
    headline: "Walk the job before the crew arrives.",
    body: "A set of drawings can still leave a client guessing. In the studio, builders walk clients through the plan at 1:1 — rooms, circulation, ceiling heights, and finish relationships — so decisions happen before they become change orders. It's a clearer way to present, align, and protect the build.",
  },
  {
    slug: "architects",
    label: "Architects",
    headline: "Let the space speak at full scale.",
    body: "Drawings and renderings describe intent. Walking the plan confirms it. Architects use the studio to put clients, consultants, and collaborators inside the design — proportion, sequence, light, and material — so the conversation happens in the space itself, not around a table.",
  },
  {
    slug: "real-estate-professionals",
    label: "Real Estate Professionals",
    headline: "Sell what isn't standing yet.",
    body: "Pre-construction listings, developments, and renovations are hard to feel from a brochure. Real estate professionals bring clients into the property at full scale — to understand layout, volume, and possibility — before a wall is framed or a showing is staged.",
  },
  {
    slug: "experience-creators",
    label: "Experience Creators",
    headline: "Stage an idea the room can hold.",
    body: "The studio can transform around a purpose: a launch, a presentation, a dinner, a performance. Experience creators use the space to put an audience inside an idea — image, sound, and atmosphere — in a setting that is intentionally selective and shaped with each host.",
  },
  {
    slug: "homeowners",
    label: "Homeowners",
    headline: "Stand in the home before it exists.",
    body: "Choosing a layout from paper is an act of imagination. Homeowners come to the studio with their architect or builder to walk the rooms, feel the proportions, and make the decisions that are inexpensive now and expensive later. Clarity here becomes confidence throughout the process.",
  },
];

export function audiencePath(slug: string) {
  return `${whoItsForPath}/${slug}`;
}

export function getAudience(slug: string) {
  return audiences.find((audience) => audience.slug === slug);
}

export const pageLinks: NavLink[] = [
  { label: "Founder Story", href: "/founder-story" },
  { label: "Contact Us", href: "/contact" },
];

export const desktopNav: DesktopNavItem[] = [
  {
    label: "The Experience",
    links: [
      { label: "Who It's For", href: whoItsForPath },
      { label: "Private Events", href: "/#private-events" },
    ],
  },
  {
    label: "The Studio",
    links: [
      { label: "Vendor Showcase", href: "/#vendor-showcase" },
      { label: "Membership", href: "/#studio-memberships" },
    ],
  },
  { label: "Information", links: pageLinks },
];

export const navGroups: NavGroup[] = [
  {
    id: "experience",
    label: "The Experience",
    links: [
      { label: "The Experience", href: "/#the-experience" },
      { label: "Private Events", href: "/#private-events" },
    ],
    subsections: [
      {
        label: "Who It's For",
        href: whoItsForPath,
        links: audiences.map((audience) => ({
          label: audience.label,
          href: audiencePath(audience.slug),
        })),
      },
    ],
  },
  {
    id: "studio",
    label: "The Studio",
    links: [
      { label: "The Studio", href: "/#the-studio" },
      { label: "Vendor Showcase", href: "/#vendor-showcase" },
      { label: "Membership", href: "/#studio-memberships" },
    ],
  },
];

export const primaryAction: NavLink = {
  label: "Book a Session",
  href: "/contact",
};

export const hero = {
  eyebrow: "The New Dimension of Design",
  headline: "Full Scale. Full Clarity.",
  subhead:
    "Step inside future homes, properties, spaces, and original ideas at a 1:1 immersive scale — where architects, builders, real estate professionals, and creators can explore the vision before it exists anywhere else.",
  scrollCue: "The Experience",
  media: {
    src: "/assets/hero/hero-image.png",
    alt: "Visitors walking through architectural plans projected across the walls and floor of CDA Immersive Studio",
  },
} as const;

export const whatHappensHere = {
  eyebrow: "The Experience",
  headline:
    "Clarity Before Construction Creates Confidence Throughout the Process.",
  subheading: "Walk through your plans at full scale.",
  body: "CDA Immersive Studio is a private visualization and creative experience space in Coeur d'Alene, designed for builders, architects, and creators to share their vision at full scale before it meets the real world. Walk through your plans at full scale. Gather your clients or team inside the vision. Explore space, proportion, material, movement, and possibility in an environment designed to make ideas feel real.",
  media: {
    label: "Studio walkthrough",
    detail: "Video showing multiple studio use cases",
  },
} as const;

export const howItWorks = {
  eyebrow: "How a Session Works",
  steps: [
    {
      number: "01",
      title: "Upload",
      body: "Send your drawings. We handle the projection-ready prep.",
    },
    {
      number: "02",
      title: "Project",
      body: "The plan is projected on the floor. Elevations take the wall.",
    },
    {
      number: "03",
      title: "Walk",
      body: "Your client stands in the space and feels the design.",
    },
    {
      number: "04",
      title: "Refine",
      body: "Changes marked in the room, while they're still inexpensive.",
    },
    {
      number: "05",
      title: "Confirm",
      body: "Decisions made before construction, not during.",
    },
  ],
  highlights: [
    {
      value: "1:1",
      label: "True-scale floor and elevation projection",
    },
    {
      value: "Any size",
      label: "Your plan panned across 2,800± sq ft of floor",
    },
    {
      value: "$5K to $25K",
      label: "Typical cost of one field change order",
    },
  ],
} as const;

export const founder = {
  eyebrow: "Built by Experience",
  headline: "Meet Our Founder, Jeremy.",
  name: "Jeremy",
  title: "Founder",
  subhead:
    "After years in construction, it was designing a home with his wife that changed the way Jeremy understood the building process.",
  media: {
    label: "Jeremy",
    detail: "Founder portrait",
  },
} as const;

export const studioMemberships = {
  eyebrow: "Studio Memberships",
  headline: "Add Immersive Visualization to Your Client Experience.",
  paragraphs: [
    "Studio Memberships give architects, builders, designers, and creative professionals an ongoing way to integrate Immersive Studio CDA into their process—and their client experience.",
    "Beyond full-scale visualization sessions, membership experiences may include access to the studio bar, conference spaces, and a curated vendor showcase where materials, textures, fixtures, lighting, and finishes can be evaluated in context.",
    "It's a professional home base for bringing clients together, presenting ideas with impact, and making consequential decisions easier.",
  ],
  cta: {
    label: "Become a Founding Member",
    href: "/contact",
  },
} as const;

export const ourLocation = {
  eyebrow: "Our Location",
  headline: "Historic Character. Downtown Coeur d'Alene.",
  body: "Immersive Studio CDA is located at 216 E. Coeur d'Alene Ave, inside a historic railroad building in the heart of downtown Coeur d'Alene. Rich with original character and architectural presence, the building offers a distinctive setting for the studio - just steps from Sherman Avenue and four blocks from Lake Coeur d'Alene. Surrounded by downtown's restaurants, hotels, galleries, and shops, it's a natural place to meet with clients, gather a project team, and make a day of the experience.",
  stats: [
    { value: "Steps", label: "from Sherman Avenue" },
    { value: "4 blocks", label: "to Lake Coeur d'Alene" },
    { value: "40 min", label: "to Downtown Spokane" },
  ],
  cta: {
    label: "Get Directions",
    href: "https://www.google.com/maps/dir/?api=1&destination=216+E+Coeur+d'Alene+Ave,+Coeur+d'Alene,+ID+83814",
  },
  media: {
    label: "Studio exterior",
    detail: "Street-level photograph of the building",
  },
} as const;

export const privateEvents = {
  eyebrow: "Private Events",
  headline: "Gather Inside Something Unforgettable.",
  body: "A private immersive setting for presentations, launches, dinners, creative gatherings, and intimate events. CDA Immersive Studio can transform around the purpose of the gathering. Host a private presentation surrounded by the work. Introduce a new idea through image, sound, and atmosphere. Bring a team together inside a shared visual environment. Create a dinner, conversation, performance, or celebration that could not happen in a conventional venue. Our event experiences are intentionally selective and developed in collaboration with each host.",
  slides: [
    {
      id: "presentation",
      label: "Private presentation",
      detail: "Presentation surrounded by the work at full scale",
    },
    {
      id: "launch",
      label: "Product launch",
      detail: "New idea introduced through image, sound, and atmosphere",
    },
    {
      id: "dinner",
      label: "Private dinner",
      detail: "Dinner and conversation inside a shared visual environment",
    },
    {
      id: "gathering",
      label: "Creative gathering",
      detail: "Performance or celebration in an unconventional venue",
    },
  ],
} as const;

export const about = {
  eyebrow: "Founding Studio Partners",
  headline: "Make Immersion Part of Your Signature Process.",
  body: "A limited professional relationship for builders, architects, designers, and creative firms seeking ongoing access to the studio. CDA Immersive Studio is being built in relationship with the professionals shaping what comes next in North Idaho and the surrounding region. Studio partnerships are intended for firms that see immersive presentation as more than an occasional tool. Founding partnerships are intentionally limited to preserve the quality and availability of the experience.",
} as const;

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "contact@immersivestudiocda.com",
    href: "mailto:contact@immersivestudiocda.com",
  },
  { label: "Phone", value: "208-755-2696", href: "tel:+12087552696" },
  {
    label: "Studio",
    value: "216 E. Coeur d'Alene Ave, Coeur d'Alene, Idaho 83814",
  },
];

export const footer = {
  cta: {
    headline: "Ready to walk the space?",
    action: { label: "Contact us", href: "/contact" },
  },
  newsletter: {
    heading: "Newsletter",
    body: "Occasional notes from the studio — sessions, events, and what’s next.",
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
    successMessage: "You’re on the list.",
  },
  columns: desktopNav,
} as const;

export const contact = {
  eyebrow: "Book a Session",
  headline: "Book a Private Experience",
  body: "Every immersive session begins before you enter the studio. Our team reviews the project, prepares the appropriate plans and visual content, and shapes the room around the purpose of your visit. When you arrive, the experience is ready for you.",
  details: contactDetails,
} as const;

export const contactPage = {
  eyebrow: "Contact Us",
  headline: "Get in Touch",
  body: "Whether you’re interested in booking a private session, learning more about membership, planning an event or photoshoot, or simply want to connect, we’d love to hear from you. Fill out the form below and a member of our team will be in touch.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send Message",
    successMessage: "Thank you — we’ll be in touch soon.",
  },
} as const;
