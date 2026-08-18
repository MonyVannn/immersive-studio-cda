export type NavLink = {
  label: string;
  href: string;
};

export type NavSubsection = {
  label: string;
  links: NavLink[];
};

export type NavGroup = {
  id: string;
  /** Accessible name for the group; not rendered visually on desktop. */
  label: string;
  links: NavLink[];
  subsections?: NavSubsection[];
};

export const navGroups: NavGroup[] = [
  {
    id: "experience",
    label: "The Experience",
    links: [
      { label: "The Experience", href: "#the-experience" },
      { label: "Private Events", href: "#private-events" },
    ],
    subsections: [
      {
        label: "Who It's For",
        links: [
          { label: "Builders", href: "#builders" },
          { label: "Architects", href: "#architects" },
          {
            label: "Real Estate Professionals",
            href: "#real-estate-professionals",
          },
          { label: "Experience Creators", href: "#experience-creators" },
          { label: "Homeowners", href: "#homeowners" },
        ],
      },
    ],
  },
  {
    id: "studio",
    label: "The Studio",
    links: [
      { label: "The Studio", href: "#the-studio" },
      { label: "Vendor Showcase", href: "#vendor-showcase" },
      { label: "Membership", href: "#membership" },
    ],
  },
];

export const pageLinks: NavLink[] = [
  { label: "Founder Story", href: "/founder-story" },
  { label: "Contact Us", href: "/contact" },
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
  problem: {
    heading:
      "A Simple Change Order Can Cost Thousands—and Delay Your Project by Months.",
    body: "Visualize your plans at an immersive scale and catch mistakes before they ever happen.",
  },
  solution: {
    heading: "Walk through your plans at full scale.",
    body: "CDA Immersive Studio is a private visualization and creative experience space in Coeur d'Alene, designed for builders, architects, and creators to share their vision at full scale before it meets the real world. Walk through your plans at full scale. Gather your clients or team inside the vision. Explore space, proportion, material, movement, and possibility in an environment designed to make ideas feel real.",
  },
  media: {
    label: "Studio walkthrough",
    detail: "Video showing multiple studio use cases",
  },
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

export const ourLocation = {
  eyebrow: "For Design + Build Professionals",
  headline: "Add Immersive Visualization to Your Client Experience.",
  body: "A Private Environment for Ideas in Motion. Located in downtown Coeur d'Alene, Idaho, CDA Immersive Studio is a centrally located environment for architectural visualization, creative presentations, collaborative sessions, and intimate immersive gatherings. The studio is designed as a place to experience your design, impress your clients, and make important decisions with greater confidence. Membership experiences may include access to the studio bar, conference spaces, and a curated vendor showcase where elevated materials, textures, fixtures, lighting, and finishes can be evaluated in context. This space was designed as a landing place for teams to get on the same page and make consequential decisions feel easier.",
  stats: [
    { value: "Steps", label: "from Sherman Avenue" },
    { value: "4 blocks", label: "to Lake Coeur d'Alene" },
    { value: "40 min", label: "from Spokane International" },
  ],
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
