export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  id: string;
  /** Accessible name for the group; not rendered visually. */
  label: string;
  links: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    id: "experience",
    label: "The experience",
    links: [
      { label: "What Happens Here", href: "#what-happens-here" },
      { label: "Our Location", href: "#our-location" },
      { label: "Private Events", href: "#private-events" },
    ],
  },
  {
    id: "studio",
    label: "The studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const primaryAction: NavLink = {
  label: "Book a Visit",
  href: "#contact",
};

export const hero = {
  eyebrow: "Downtown Coeur d'Alene, Idaho",
  headline: "Immersive Studio",
  subhead:
    "An immersive design experience for architects, builders, designers, and creatives.",
  scrollCue: "What happens here",
} as const;

export const whatHappensHere = {
  eyebrow: "What Happens Here",
  headline: "Step into your project before it exists.",
  problem: {
    heading: "The problem",
    body: "Drawings, renderings, and flyovers all ask the same thing of a room full of people: imagine this, and imagine it the same way. Nobody does. Clients sign off on plans they can't fully read, contractors price what they think they see, and the expensive misunderstandings surface on site, months later, when changing anything means changing everything.",
  },
  solution: {
    heading: "What we do about it",
    body: "We build your project at full scale and let you walk it. Judge a sightline from where someone will actually stand. Feel whether the ceiling carries the room. Move a wall and watch the light change while the whole team is standing in it with you. Decisions that used to take three review cycles get made once, in the room, with nothing left to interpretation.",
  },
  media: {
    label: "Studio walkthrough",
    detail: "Moving imagery of the space — drop in the loop when footage lands",
  },
} as const;

export const ourLocation = {
  eyebrow: "Our Location",
  headline: "In the heart of Downtown Coeur d'Alene.",
  body: "We sit on the ground floor in the middle of one of the Northwest's best small downtowns — a walkable grid of restaurants, galleries, and bars that runs straight into the water. Fly into Spokane, drive forty minutes east, and spend the day making decisions on your project without ever getting back in the car. Clients tend to build the trip into something bigger. We recommend it.",
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
  headline: "Host your next event at Immersive Studio.",
  body: "The studio doesn't only run project reviews. Outside of working hours it becomes one of the more unusual rooms in town — a space you can fill with whatever you want people standing inside of. Client dinners, product launches, firm socials, board offsites, and the occasional thing we didn't see coming.",
  slides: [
    {
      id: "reception",
      label: "Evening reception",
      detail: "Cocktail-hour setup across the main floor",
    },
    {
      id: "launch",
      label: "Product launch",
      detail: "Brand environment built for a launch night",
    },
    {
      id: "offsite",
      label: "Board offsite",
      detail: "Daytime working session with the room reconfigured",
    },
    {
      id: "dinner",
      label: "Private dinner",
      detail: "Long-table dinner inside a built environment",
    },
  ],
} as const;

export const about = {
  eyebrow: "About",
  headline: "A room built for deciding.",
  body: "Immersive Studio is a purpose-built visualization space in Coeur d'Alene, Idaho, made for the people who design and build things: architects, builders, designers, and the clients who have to say yes to their work.",
} as const;

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: "hello@immersivestudio.com",
    href: "mailto:hello@immersivestudio.com",
  },
  { label: "Phone", value: "(208) 555-0142", href: "tel:+12085550142" },
  { label: "Studio", value: "Downtown Coeur d'Alene, Idaho" },
];

export const contact = {
  eyebrow: "Contact",
  headline: "Come see it.",
  body: "Bring a project, or bring an event. Either way, the fastest way to understand the studio is to stand in it.",
  details: contactDetails,
} as const;
