// Central content for Kiwi Detail Co.
// Pricing & service structure adapted from the reference detailing business,
// rebranded for Kiwi Detail Co. (Kerikeri, Northland NZ).

export const BUSINESS = {
  name: 'Kiwi Detail Co.',
  tagline: "Northland's premium car detailing",
  location: 'Kerikeri, Bay of Islands',
  blurb:
    "Local Kerikeri detailers obsessed with making your car shine like new. From a quick refresh to a full showroom grade detail, inside and out, we treat every vehicle like our own.",
  email: 'kiwidetail.co@gmail.com',
  phone: '028 4211 713',
  phoneHref: 'tel:+64284211713',
  facebook: 'https://www.facebook.com/share/17qrRBsTyj/',
  instagram:
    'https://www.instagram.com/kiwidetail.co?igsh=MXEyc2V2OG14Y24ydQ==',
}

export const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic Detail',
    from: '$90',
    tagline: 'Perfect for a quick refresh & regular upkeep.',
    tiers: [
      { size: 'Small car', price: '$90' },
      { size: 'Medium', price: '$110' },
      { size: 'Large', price: '$130' },
      { size: 'Extra large', price: '$150' },
    ],
    features: [
      'Full interior vacuum',
      'Surface wipe down',
      'Exterior wash & dry',
      'Wheel clean',
      'Window clean (in & out)',
    ],
    featured: false,
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    from: '$160',
    tagline: 'Our most popular deep clean, inside & out.',
    tiers: [
      { size: 'Small car', price: '$160' },
      { size: 'Medium', price: '$190' },
      { size: 'Large', price: '$230' },
      { size: 'Extra large', price: '$270' },
    ],
    features: [
      'Full interior vacuum',
      'Surface wipe down',
      'Carpet & seat deep clean',
      'Plastic & trim protection',
      'Exterior wash & dry',
      'Wheel clean',
      'Window clean (in & out)',
    ],
    featured: true,
  },
]

export const ADDONS = [
  {
    name: '1-Step Paint Correction',
    price: '$150 to $180',
    desc: 'Wash, dry, decontaminate and a 1-step machine polish to cut swirls and restore gloss.',
  },
  {
    name: 'Headlight Restoration',
    price: '$30 each',
    desc: 'Sand, correct and seal cloudy, yellowed headlights back to clear.',
  },
  {
    name: 'Engine Bay Detail',
    price: '$50',
    desc: 'Degrease, clean and dress the engine bay for a tidy, factory-fresh look.',
  },
  {
    name: 'Dog Hair Removal',
    price: '+$40',
    desc: 'Thorough removal of dog and pet hair from seats, carpets and boot.',
  },
]

export const SERVICES = [
  {
    id: 'exterior',
    title: 'Exterior Detailing',
    icon: 'spray',
    desc: "Restore your car's exterior to showroom glory with expert wash, decontamination, polishing and protection.",
  },
  {
    id: 'interior',
    title: 'Interior Detailing',
    icon: 'seat',
    desc: 'A fresh, sanitised cabin, from vacuuming and upholstery deep cleaning to dashboard and trim conditioning.',
  },
  {
    id: 'correction',
    title: 'Paint Correction',
    icon: 'shine',
    desc: 'Eliminate swirl marks, scratches and imperfections for a flawless, mirror-like finish.',
  },
  {
    id: 'wheels',
    title: 'Wheels & Tyres',
    icon: 'wheel',
    desc: 'Deep wheel cleaning, barrel work and tyre dressing so your rims look as sharp as the paint.',
  },
]

export const WHY = [
  {
    title: 'We treat every vehicle like our own',
    desc: 'Meticulous attention to every nook and cranny. Your car gets the same care we give ours.',
  },
  {
    title: 'Quality, vehicle-safe products',
    desc: 'High-grade products that are safe for your paint, leather and interior surfaces.',
  },
  {
    title: 'Upfront, honest pricing',
    desc: 'Transparent and affordable, with no hidden costs. You know exactly what you’re paying for.',
  },
  {
    title: 'Local & convenient',
    desc: 'Proudly based in Kerikeri. Friendly advice on keeping your car looking its best, long-term.',
  },
]

export const FAQS = [
  {
    q: 'What is car detailing?',
    a: 'Car detailing is an in-depth, thorough clean of a car, both inside and out. It goes well beyond a basic wash to restore your vehicle to its best possible condition.',
  },
  {
    q: 'Why would I want my car detailed?',
    a: 'Selling your car? Heading to an important event or a first date? Or just tired of seeing your car in a mess? Give us a quick call and your car will look brand new in no time.',
  },
  {
    q: "What's the difference between detailing and cleaning?",
    a: 'Detailing is far more meticulous than a regular clean, a much more precise job. We focus on every nook and cranny to achieve a true showroom finish.',
  },
  {
    q: 'How are you different from an automatic car wash?',
    a: 'A car wash gives you a basic exterior clean and mediocre results. Our detailing is thorough, leaves your car in pristine condition, and it does not cost an arm and a leg more.',
  },
  {
    q: 'Does the price ever change?',
    a: 'Prices may vary depending on the size and condition of your vehicle. We will always confirm the price with you upfront before we start.',
  },
]

// Curated before/after pairs — same area on the same vehicle, genuinely
// dirty (before) -> clean (after). These shots have no number plates.
export const PAIRS = [
  {
    title: 'Toyota Hilux · Driver Footwell',
    before: '/gallery/hilux-foot-before.jpg',
    after: '/gallery/hilux-foot-after.jpg',
  },
  {
    title: 'Mitsubishi Outlander · Rear Seats',
    before: '/gallery/outlander-rear-before.jpg',
    after: '/gallery/outlander-rear-after.jpg',
  },
  {
    title: 'Mitsubishi Outlander · Front Cabin',
    before: '/gallery/outlander-cabin-before.jpg',
    after: '/gallery/outlander-cabin-after.jpg',
  },
  {
    title: 'Toyota Hilux · Door Card',
    before: '/gallery/hilux-door-before.jpg',
    after: '/gallery/hilux-door-after.jpg',
  },
]

// Finished results (number plates blurred where visible).
export const SHOWCASE = [
  { src: '/gallery/audi-rear-after.jpg', label: 'Audi A5 · gloss restored paint' },
  { src: '/gallery/audi-side-after.jpg', label: 'Audi A5 · mirror finish' },
  { src: '/gallery/outlander-front-after.jpg', label: 'Outlander · fresh exterior' },
  { src: '/gallery/outlander-wheel-after.jpg', label: 'Gloss black wheel detail' },
  { src: '/gallery/audi-wheel-after.jpg', label: 'Wheels & arches detailed' },
  { src: '/gallery/outlander-side-after.jpg', label: 'Outlander · boot cleaned & reset' },
  { src: '/gallery/nissan-side-after.jpg', label: 'Nissan Fuga · foam bath' },
  { src: '/gallery/nissan-interior-after.jpg', label: 'Leather cleaned & conditioned' },
  { src: '/gallery/audi-front-after.jpg', label: 'Audi A5 · ready to roll' },
]
