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

export type AudienceMedia = {
  label: string;
  detail?: string;
  src?: string;
  alt?: string;
};

export type Audience = {
  slug: string;
  label: string;
  headline: string;
  body: string;
  // Rich page fields (optional):
  pageEyebrow?: string;
  pageHeadline?: string;
  subheading?: string;
  paragraphs?: string[];
  details?: {
    title: string;
    items: string[];
  };
  cta?: { label: string; href: string };
  media?: {
    hero: AudienceMedia;
    inline: AudienceMedia;
  };
};

export const whoItsForPath = "/who-its-for";
export const showcasePath = "/showcase";

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
    pageEyebrow: "FOR BUILDERS",
    subheading: "Give your clients a clear, tangible way to understand the project before construction begins.",
    paragraphs: [
      "Offer your clients a pre-construction experience unlike anything they have seen before. Walk through the project at full scale, evaluate important details, and make confident decisions before construction begins.",
      "Identify potential issues early, reduce costly change orders and delays, and ensure everyone is aligned before a shovel ever hits the ground.",
    ],
    details: {
      title: "Our space allows for:",
      items: [
        "Exact studio dimensions",
        "Projection area",
        "Supported plan sizes",
        "Wall projection capabilities",
        "Meeting and presentation features",
        "Hospitality amenities",
      ],
    },
    cta: { label: "Book a Session", href: "/contact?category=Booking%20a%20Session" },
    media: {
      hero: { label: "Pre-construction walkthrough" },
      inline: { label: "Studio details and projection" },
    },
  },
  {
    slug: "architects",
    label: "Architects",
    headline: "Let the space speak at full scale.",
    body: "Drawings and renderings describe intent. Walking the plan confirms it. Architects use the studio to put clients, consultants, and collaborators inside the design — proportion, sequence, light, and material — so the conversation happens in the space itself, not around a table.",
    pageEyebrow: "FOR ARCHITECTS",
    subheading: "Allow your clients to experience room sizes, transitions, circulation, and furnishings in real space before anything is built.",
    paragraphs: [
      "Architectural decisions feel different when they can be experienced at full scale.",
      "CDA Immersive Studio’s 1:1 floor plan projection environment allows architecture teams to walk through life-size layouts in real space, making it easier to evaluate circulation, sightlines, clearances, proportions, and overall flow before documentation is finalized.",
      "The studio is designed for collaborative review, bringing together architects, consultants, clients, and selected project partners. A curated vendor showcase also allows materials, fixtures, finishes, and lighting to be evaluated in context.",
      "The result is a more engaging and productive decision-making process—one that can accelerate approvals, reduce late-stage revisions, and support a smoother transition from design development to construction-ready plans.",
    ],
    cta: { label: "Book a Session", href: "/contact?category=Booking%20a%20Session" },
    media: {
      hero: { label: "1:1 architectural projection" },
      inline: { label: "Collaborative design review" },
    },
  },
  {
    slug: "real-estate-professionals",
    label: "Real Estate Professionals",
    headline: "Sell what isn't standing yet.",
    body: "Pre-construction listings, developments, and renovations are hard to feel from a brochure. Real estate professionals bring clients into the property at full scale — to understand layout, volume, and possibility — before a wall is framed or a showing is staged.",
    pageEyebrow: "FOR REAL ESTATE PROFESSIONALS",
    subheading: "Give your clients—and yourself—the opportunity to compare multiple properties from one central location.",
    paragraphs: [
      "Property searches can require significant time from both real estate professionals and their clients. Touring multiple locations adds travel, scheduling, and expense, while photos and listings often fail to communicate the true scale, flow, and feel of a space.",
      "CDA Immersive Studio creates a more efficient way to evaluate prospective properties. Bring multiple floor plans into the studio, experience each one at 1:1 scale, and compare layouts before scheduling in-person visits.",
      "By helping clients understand which spaces are most likely to fit their needs, the studio makes it easier to narrow the search, eliminate poor-fit properties earlier, and reserve valuable time for the locations worth seeing in person.",
    ],
    cta: { label: "Book a Session", href: "/contact?category=Booking%20a%20Session" },
    media: {
      hero: { label: "Property comparison at 1:1 scale" },
      inline: { label: "Multi-plan studio session" },
    },
  },
  {
    slug: "experience-creators",
    label: "Experience Creators",
    headline: "Stage an idea the room can hold.",
    body: "The studio can transform around a purpose: a launch, a presentation, a dinner, a performance. Experience creators use the space to put an audience inside an idea — image, sound, and atmosphere — in a setting that is intentionally selective and shaped with each host.",
    pageEyebrow: "FOR EXPERIENCE CREATORS",
    subheading: "For designers, filmmakers, artists, strategists, educators, and experience-makers working beyond the limits of traditional media.",
    paragraphs: [
      "CDA Immersive Studio gives creative work a new dimension. Films can become environments. Ideas can unfold across an entire room. Installations, launches, performances, educational experiences, and gatherings can move beyond presentation and become something audiences actively experience.",
      "Bring finished work into the studio, or collaborate with the team to expand an early concept into a fully immersive expression. Explore how image, sound, scale, movement, and atmosphere can work together to transport an audience somewhere new.",
      "This space invites people to become part of the experience rather than simply observe it.",
    ],
    cta: { label: "Propose a Creative Experience", href: "/contact?category=Private%20Events" },
    media: {
      hero: { label: "Immersive creative environment" },
      inline: { label: "Audience inside the experience" },
    },
  },
  {
    slug: "homeowners",
    label: "Homeowners",
    headline: "Stand in the home before it exists.",
    body: "Choosing a layout from paper is an act of imagination. Homeowners come to the studio with their architect or builder to walk the rooms, feel the proportions, and make the decisions that are inexpensive now and expensive later. Clarity here becomes confidence throughout the process.",
    pageEyebrow: "FOR THE PEOPLE BEHIND THE PROJECT",
    pageHeadline: "See More Than Plans.\nRecognize Your Future.",
    subheading: "An invitation to experience the spaces you are creating before construction begins.",
    paragraphs: [
      "You should love your custom home before you ever move in.",
      "At CDA Immersive Studio, homeowners can experience their future home at full scale before construction begins. Walk through each room, understand the flow between spaces, and evaluate how the layout will support the way your family actually lives.",
      "This immersive review creates an opportunity to refine important decisions early, reduce the risk of costly change orders and delays, and move into construction with greater clarity and confidence.",
      "Ensure the plans you approve become a home you will love living in for years to come.",
    ],
    cta: { label: "Book a Session", href: "/contact?category=Booking%20a%20Session" },
    media: {
      hero: { label: "Future home at full scale" },
      inline: { label: "Room flow and layout review" },
    },
  },
];

export function audiencePath(slug: string) {
  return `${whoItsForPath}/${slug}`;
}

export function getAudience(slug: string) {
  return audiences.find((audience) => audience.slug === slug);
}

export const pageLinks: NavLink[] = [
  { label: "FAQ", href: "/faq" },
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
      { label: "Membership", href: "/membership" },
      { label: "Vendor Showcase", href: showcasePath },
    ],
  },
  { label: "Information", links: pageLinks.filter((link) => link.label !== "FAQ") },
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
      { label: "Membership", href: "/membership" },
      { label: "Vendor Showcase", href: showcasePath },
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
    src: "/assets/hero/hero-image2.jpeg",
    alt: "Visitors walking through architectural plans projected across the walls and floor of CDA Immersive Studio",
  },
} as const;

export const whatHappensHere = {
  eyebrow: "The Experience",
  headline:
    "Clarity before construction creates confidence throughout the process.",
  subheading: "Walk through your plans at full scale.",
  body: "CDA Immersive Studio is a private visualization and creative experience space in Coeur d'Alene, designed for builders, architects, and creators to share their vision at full scale before it meets the real world. Walk through your plans at full scale. Gather your clients or team inside the vision. Explore space, proportion, material, movement, and possibility in an environment designed to make ideas feel real.",
  media: {
    src: "/assets/homepage/hero-placeholder.jpeg",
    alt: "Studio walkthrough placeholder",
    label: "Studio walkthrough",
    detail: "Placeholder image until final video is ready",
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
  headline: "Meet our Founder",
  name: "Jeremy Decker",
  title: "Founder",
  experience: "25+ years in construction and design across North Idaho",
  paragraphs: [
    "Immersive Studio CDA was founded by Jeremy Decker, a construction and design professional with more than 25 years of experience bringing projects from concept to completion.",
    "Jeremy began his career in the field, working his way from labor and finish carpentry into project management, home design, and eventually business ownership. For 13 years, he owned and operated his own construction company, developing a firsthand understanding of every stage of the building process.",
    "Over the past decade, his work has focused primarily on luxury residential construction, including multi-million-dollar custom homes where thoughtful planning, clear communication, and confident decision-making are essential.",
    "But the idea for Immersive Studio became personal when Jeremy began designing and building a home for his own family. Even with decades of experience, he found himself wishing for a better way to truly understand the plans, experience the scale of each space, and work through important decisions before construction began.",
    "That experience became the catalyst for Immersive Studio CDA - a place designed to bring greater clarity and ease to the building process by allowing architects, builders, designers, and their clients to experience plans together at full scale before they're built.",
  ],
  media: {
    src: "/assets/founder/headshot.jpeg",
    alt: "Jeremy Decker, Founder of Immersive Studio CDA",
    label: "Jeremy",
    detail: "Founder portrait",
  },
} as const;

export const studioMemberships = {
  eyebrow: "Full Scale. Full Clarity.",
  headline: "Step inside your building before it exists.",
  paragraphs: [
    "Even good drawings are hard to picture. Clients sign off on spaces they haven't truly experienced, then change them mid-build.",
  ],
  cta: {
    label: "Learn more",
    href: "/membership",
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
    src: "/assets/homepage/location.png",
    alt: "Street-level photograph of the building",
    label: "Studio exterior",
    detail: "Street-level photograph of the building",
  },
} as const;

export const privateEvents = {
  eyebrow: "Private Events",
  headline: "Gather Inside Something Unforgettable.",
  body: "A private immersive setting for presentations, launches, dinners, creative gatherings, and intimate events. CDA Immersive Studio can transform around the purpose of the gathering. Host a private presentation surrounded by the work. Introduce a new idea through image, sound, and atmosphere. Bring a team together inside a shared visual environment. Create a dinner, conversation, performance, or celebration that could not happen in a conventional venue. Our event experiences are intentionally selective and developed in collaboration with each host.",
  cta: {
    label: "Reach Out to Explore Event Opportunities",
    href: "/contact",
  },
  slides: [
    {
      id: "presentation",
      label: "Private presentation",
      detail: "Presentation surrounded by the work at full scale",
      src: "/assets/homepage/private-event.jpeg",
      alt: "Private presentation",
    },
    {
      id: "launch",
      label: "Product launch",
      detail: "New idea introduced through image, sound, and atmosphere",
      src: "/assets/homepage/private-event2.jpeg",
      alt: "Product launch",
    },
    {
      id: "dinner",
      label: "Private dinner",
      detail: "Dinner and conversation inside a shared visual environment",
      src: "/assets/homepage/private-event3.jpeg",
      alt: "Private dinner",
    },
    {
      id: "gathering",
      label: "Creative gathering",
      detail: "Performance or celebration in an unconventional venue",
      src: "/assets/homepage/private-event4.jpeg",
      alt: "Creative gathering",
    },
  ],
} as const;

export const showcasePage = {
  eyebrow: "CURATED FOR THE BUILT ENVIRONMENT",
  headline: "Experience Design Selections in Context.",
  subheading: "A curated showcase of premium materials, fixtures, finishes, lighting, furnishings, and building products.",
  paragraphs: [
    "Immersive Studio CDA's vendor showcase allows clients and project teams to compare design selections within the context of the full-scale environment they are intended for.",
    "Rather than choosing from isolated samples alone, guests can experience how materials, textures, lighting, and finishes relate to the broader design vision.",
  ],
  vendorCta: {
    label: "Join the Vendor Waitlist",
    href: "/contact?category=Vendor%20Opportunities",
  },
  clientCta: {
    label: "Explore the Showcase",
    href: "/contact?category=Booking%20a%20Session",
  },
  media: {
    hero: { label: "Vendor showcase", detail: "Materials and finishes in full-scale context" },
    inline: { label: "Design selections", detail: "Fixtures, lighting, and building products on display" },
  },
} as const;

export const membershipPage = {
  hero: {
    eyebrow: "FOUNDING STUDIO PARTNERS",
    tagline: "Full Scale. Full Clarity.",
    headline: "Make Immersion Part of Your Signature Process.",
    sub: "A limited professional relationship for builders, architects, designers, and creative firms seeking ongoing access to the studio.",
  },
  stats: [
    { value: "1:1", label: "True-Scale Floor & Elevation Projection" },
    { value: "$5K to $25K", label: "Typical cost of one field change order" },
    { value: "$900", label: "À la carte session: The cheapest insurance in construction" },
  ],
  narrative: "CDA Immersive Studio is being built in relationship with the professionals shaping what comes next in North Idaho and the surrounding region. Studio partnerships are intended for firms that see immersive presentation as more than an occasional tool. Partners can integrate the studio into client onboarding, design review, project development, team collaboration, and special presentations throughout the year. The result is a differentiated experience that becomes part of how your firm works—and how your clients remember working with you.",
  pricing: {
    primary: {
      price: "$1,800/mo",
      title: "Three sessions every month",
      details: [
        "12-month membership, renewing in 12-month terms.",
        "Three private sessions every month",
        "Additional sessions at $600 each",
        "Plan prep and projection programming included",
      ],
    },
    secondary: {
      price: "$600",
      title: "Per Session",
      details: [
        "Vs $900 à la carte",
        "Plan prep and projection programming included with every session",
      ],
    },
  },
  benefits: [
    {
      number: "01",
      title: "3 immersive sessions monthly",
      body: "$2,700 in session value, refreshed every month. Use them across any of your active projects.",
    },
    {
      number: "02",
      title: "Member rate on extras",
      body: "Busy month? Add sessions anytime at $600 each instead of the $900 à la carte price.",
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
  cta: {
    label: "Request Founding Partner Details",
    href: "/contact?category=Studio%20Membership",
    supportingLine: "Founding partnerships are intentionally limited to preserve the quality and availability of the experience.",
  },
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
    label: "Instagram",
    value: "@immersivestudiocda",
    href: "https://www.instagram.com/immersivestudiocda/",
  },
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
    nameLabel: "First and Last Name",
    emailLabel: "Email",
    categoryLabel: "Why you're reaching out about",
    categoryPlaceholder: "Select an inquiry type",
    categoryOptions: [
      "Booking a Session",
      "Studio Membership",
      "Private Events",
      "Vendor Opportunities",
      "Press & Media",
      "General Inquiry",
    ],
    messageLabel: "Message",
    submitLabel: "Send Message",
    successMessage:
      "Thank you for your message. Someone from our team will be in touch with you soon",
  },
} as const;

export type FaqItem = { question: string; answer: string };
export type FaqCategory = { title: string; items: FaqItem[] };

export const faqPage = {
  eyebrow: "FAQ",
  headline: "Frequently Asked Questions",
  body: "Answers to common questions about the studio, sessions, memberships, and events.",
  categories: [
    {
      title: "The Studio",
      items: [
        {
          question: "What can be experienced in the studio?",
          answer: "The studio can present architectural floor plans, elevations, renderings, imagery, film, presentations, branded environments, and original immersive content across the floor and surrounding walls. The exact experience depends on the project and available source material."
        },
        {
          question: "Can plans be displayed at full scale?",
          answer: "Yes. Architectural floor plans can be prepared and projected at a true 1:1 scale, allowing guests to move through the layout and experience spatial relationships directly."
        },
        {
          question: "Is CDA Immersive Studio only for architecture?",
          answer: "No. Architecture is a primary use of the studio, but the environment can also support creative presentations, visual storytelling, installations, launches, team experiences, educational programming, and select private events."
        }
      ],
    },
    {
      title: "Planning a Session",
      items: [
        {
          question: "Do I need specially prepared files?",
          answer: "Not necessarily. Begin by sending us what you currently have. Depending on the experience, this may include PDF plans, CAD exports, elevations, renderings, images, video, or presentation files. Our team will review the material and explain what is needed next."
        },
        {
          question: "Who should attend an architectural session?",
          answer: "The most valuable sessions often include the people making or influencing key decisions: the client, builder, architect, designer, and selected project partners. We will help you choose the appropriate group for the purpose of your session."
        },
        {
          question: "When should we visit during the design process?",
          answer: "The studio can support multiple stages, from early concept exploration through detailed design review. The ideal timing depends on the decisions you want to make and the maturity of the project files."
        }
      ],
    },
    {
      title: "Membership & Events",
      items: [
        {
          question: "Can the studio host private or professional events?",
          answer: "Yes. Private event opportunities are considered individually to ensure the room, content, and experience are well matched to the gathering."
        },
        {
          question: "Do you offer professional memberships?",
          answer: "CDA Immersive Studio is developing a limited founding partner program for builders, architects, designers, and creative firms seeking recurring studio access. Partnership details are available by request."
        }
      ],
    },
  ],
  cta: {
    label: "Contact us",
    href: "/contact",
    supportingLine: "Still have questions? We'd love to hear from you.",
  },
} as const;
