/*
 * Company content — sourced from magnaprocessing.com and rewritten for clarity.
 * Do not add figures, certifications or claims that are not documented there.
 */
import { images, type SiteImage } from "./images";

export const company = {
  name: "Magna Processing Industries (Pvt.) Ltd.",
  shortName: "Magna Processing",
  tagline: "Commitment With Accomplishment",
  established: 1965,
  exportsSince: 1990,
  address: ["2.6-K.M., Khurrianwala,", "Jaranwala Road,", "Faisalabad, Pakistan"],
  addressLine: "2.6-K.M., Khurrianwala, Jaranwala Road, Faisalabad, Pakistan",
  phones: ["+92 41 2424070", "+92 41 2424071", "+92 41 2424072", "+92 41 2424074"],
  phonePrimary: "+92 41 2424070",
  phoneHref: "tel:+92412424070",
  email: "info@magnaprocessing.com",
  emailHref: "mailto:info@magnaprocessing.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Magna+Processing+Industries+Jaranwala+Road+Khurrianwala+Faisalabad",
  mapsEmbed:
    "https://www.google.com/maps?q=Magna+Processing+Industries,+Jaranwala+Road,+Khurrianwala,+Faisalabad,+Pakistan&output=embed",
};

export const leadership = [
  { name: "Mr. Saeed Ullah Sheikh", role: "Chairman" },
  { name: "Mr. Farhat Sheikh", role: "Chief Executive" },
  { name: "Mr. Zeshan Saeed", role: "Director" },
];

export const timeline = [
  {
    year: "1965",
    title: "Founded in Faisalabad",
    text: "Magna Processing is established as a textile printing and fabric processing company — one of the pioneers of the trade.",
  },
  {
    year: "1990",
    title: "Entry into export markets",
    text: "Magna begins supplying international buyers, building a reputation for steady commitment to its customers.",
  },
  {
    year: "2000",
    title: "A new phase of growth",
    text: "Mr. Farhat Sheikh joins the company, bringing education and experience from England. Investment in talent drives substantial growth in assets and revenue.",
  },
  {
    year: "Today",
    title: "Vertically integrated",
    text: "Two vertically integrated plants spanning sizing, warping, weaving, processing and stitching, processing over five million meters of fabric each month.",
  },
];

export type Division = {
  slug: "spinning" | "weaving" | "processing" | "stitching";
  number: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  hero: SiteImage;
  gallery: SiteImage[];
  capabilities: { title: string; text: string }[];
  specs: { value: string; label: string }[];
  process: string[];
  quote?: string;
  related: Product["slug"][];
};

export const divisions: Division[] = [
  {
    slug: "spinning",
    number: "01",
    name: "Spinning",
    short: "Automated ring spinning of carded and combed cotton yarns for weaving and knitting.",
    headline: "Where every textile begins: consistent, engineered yarn.",
    intro:
      "Magna's automated spinning facility produces ring-spun yarn for knitting and weaving, supplying both the group's own looms and external customers across denim, apparel, shirting and home textiles.",
    hero: images.spinningFrames,
    gallery: [images.yarnCones, images.warping],
    capabilities: [
      {
        title: "Ring-spun yarn",
        text: "Carded and combed cotton yarns for weaving and knitting applications.",
      },
      {
        title: "Wide count range",
        text: "Yarn counts from NE 7 to NE 120, in single and double constructions.",
      },
      {
        title: "Blends & specialty yarns",
        text: "Poly-cotton, CVC, modal, Tencel, linen/cotton, melange, slub, siro, compact and more.",
      },
      {
        title: "Responsible fibres",
        text: "Organic, recycled and BCI cotton yarns available to programme requirements.",
      },
    ],
    specs: [
      { value: "NE 7–120", label: "Yarn count range" },
      { value: "Carded & combed", label: "Cotton systems" },
      { value: "Organic · BCI", label: "Responsible fibre options" },
    ],
    process: ["Fibre selection", "Carding & combing", "Ring spinning", "Winding & dye cones"],
    related: ["yarn", "fabrics"],
  },
  {
    slug: "weaving",
    number: "02",
    name: "Weaving",
    short: "Cotton and poly-cotton fabrics, from 1/1 plain weaves to jacquard damask.",
    headline: "A diverse loom park built for range and volume.",
    intro:
      "Magna's weaving facilities produce cotton and poly-cotton fabrics on automatic, power, shuttle-less, water-jet and air-jet looms. Secondary and auxiliary equipment allows dobby, jacquard and seersucker constructions alongside high-volume plain weaves.",
    hero: images.airjet,
    gallery: [images.warpThreads, images.warping],
    capabilities: [
      {
        title: "Plain to jacquard",
        text: "A wide fabric range from 1/1 plain weaves through dobbies to jacquard damask.",
      },
      {
        title: "High thread counts",
        text: "Constructions up to a maximum thread count of 600.",
      },
      {
        title: "Extra-wide widths",
        text: "Fabric widths up to 153 inches for bedding and home textile programmes.",
      },
      {
        title: "Stock-backed delivery",
        text: "A greige stock level in excess of two million meters supports timely deliveries worldwide.",
      },
    ],
    specs: [
      { value: "600", label: "Maximum thread count" },
      { value: '153"', label: "Maximum fabric width" },
      { value: "2M+ m", label: "Fabric stock maintained" },
    ],
    process: ["Sizing", "Warping", "Weaving", "Greige inspection"],
    quote:
      "The weaving facility enables us to maintain a stock level in excess of two million meters of fabric, ensuring timely deliveries to customers across the globe.",
    related: ["fabrics", "home-textiles"],
  },
  {
    slug: "processing",
    number: "03",
    name: "Processing",
    short: "Singeing, bleaching, dyeing, printing and finishing on European machinery.",
    headline: "The heart of Magna since 1965.",
    intro:
      "Fabric processing is where Magna began, and it remains the core of the business. Wide-width preparation, continuous dyeing, multi-colour printing and precision finishing are carried out on machinery from Germany, with over five million meters processed each month.",
    hero: images.printedFabric,
    gallery: [images.rotary, images.digitalPrint, images.finishing, images.processingMachinery],
    capabilities: [
      {
        title: "Singeing & bleaching",
        text: "A new singeing machine achieves pilling grade 5 where required, followed by a wide-width continuous bleaching range from Germany with computerised PLC chemical dosing.",
      },
      {
        title: "Continuous dyeing",
        text: "A wide-width Monforts Thermosol range and a pad-steam/wash range for consistent shade reproduction.",
      },
      {
        title: "Printing",
        text: "Up to 21 colours on fabric widths of 3,200 mm, with repeat sizes from 641 mm to 1,200 mm, alongside digital printing.",
      },
      {
        title: "Finishing",
        text: "Monforts stenters with Mahlo weft straighteners to prevent bowing and skew, calendering, Sanforising and Xetma peaching and raising.",
      },
    ],
    specs: [
      { value: "5M+ m", label: "Fabric processed monthly" },
      { value: "21", label: "Printing colours" },
      { value: "3,200 mm", label: "Maximum print width" },
    ],
    process: ["Singeing", "Bleaching", "Dyeing", "Printing", "Finishing"],
    quote:
      "We are capable of printing 21 colours on fabric up to a width of 3,200 mm, with repeat sizes ranging from 641 mm to 1,200 mm.",
    related: ["fabrics", "home-textiles", "health-safety"],
  },
  {
    slug: "stitching",
    number: "04",
    name: "Stitching",
    short: "High-speed made-up production — up to 15,000 sheet sets a day.",
    headline: "Finished products, made to your specification.",
    intro:
      "Magna's stitching facility converts processed fabric into finished made-ups for retail and mail-order customers. More than 500 high-speed machines are organised into units dedicated to specific products, balancing production efficiency with consistent quality.",
    hero: images.stitchUnits,
    gallery: [images.stitchCloseup, images.stitchFloor, images.displayRoom],
    capabilities: [
      {
        title: "Product-dedicated units",
        text: "Each stitching unit is designed around specified products for optimum efficiency and quality.",
      },
      {
        title: "Customised specifications",
        text: "Sheet sets, duvet covers, curtains, garments and healthcare items made to buyer requirements.",
      },
      {
        title: "Embellishment",
        text: "Fully embellished and customised bed linen articles, including hem, z-fold and bratto-stitch finishes.",
      },
      {
        title: "Operation tracking",
        text: "An Eton production system and reverse production tracking are being implemented to trace every operation on every product.",
      },
    ],
    specs: [
      { value: "15,000", label: "Sheet sets per day" },
      { value: "500+", label: "Stitching machines" },
      { value: "100%", label: "Products inspected before dispatch" },
    ],
    process: ["Cutting", "Stitching", "Inspection", "Packing"],
    quote:
      "Each stitching unit is designed for specified products, to achieve optimum production efficiency and the highest quality standards.",
    related: ["home-textiles", "garments", "health-safety"],
  },
];

export type Product = {
  slug: "yarn" | "fabrics" | "home-textiles" | "garments" | "health-safety";
  name: string;
  short: string;
  headline: string;
  intro: string;
  hero: SiteImage;
  gallery: SiteImage[];
  groups: { title: string; items: string[] }[];
  capabilities: string[];
  divisions: Division["slug"][];
};

export const products: Product[] = [
  {
    slug: "home-textiles",
    name: "Home Textiles",
    short: "Bed linen, curtains, quilted products and furnishings for retail and mail order.",
    headline: "Bed linen and furnishings, fully made in-house.",
    intro:
      "Magna specialises in fully embellished and customised bed linen for retail and mail-order customers — printed, dyed and white — produced from weaving through to finished, packed product.",
    hero: images.bedroom,
    gallery: [images.displayRoom, images.stitchFloor, images.printedFabric],
    groups: [
      {
        title: "Bed linen",
        items: [
          "Sheet sets — simple hem, z-fold, bratto stitch",
          "Fitted sheet sets",
          "Duvet & duvet cover sets",
          "Quilt cover sets",
          "Pillow shams & pillows",
          "Bed skirts, bed covers & bed spreads",
          "Comforters & comforter shells",
        ],
      },
      {
        title: "Window treatments",
        items: [
          "Tab top & pole top curtains",
          "Pinch pleat curtains",
          "Priscilla & balloon curtains",
          "Curtains with mitred corners",
        ],
      },
      {
        title: "Furnishings & kitchen linen",
        items: [
          "Sofa & slip covers",
          "Garden chair covers & chair pad shells",
          "Table cloths, runners & place mats",
          "Napkins & aprons",
          "Terry towels",
        ],
      },
    ],
    capabilities: [
      "Printed, dyed and white programmes",
      "Wide widths up to 153 inches",
      "Up to 15,000 sheet sets stitched per day",
      "Customised embellishment and packaging",
    ],
    divisions: ["weaving", "processing", "stitching"],
  },
  {
    slug: "fabrics",
    name: "Fabrics",
    short: "Bleached, dyed and printed cotton and poly-cotton fabrics.",
    headline: "Woven, dyed and printed to specification.",
    intro:
      "Magna brings decades of experience in bleaching, dyeing and printing fabric, supplying finished fabrics for bedding, apparel and institutional end uses.",
    hero: images.printedFabric,
    gallery: [images.fabricSamples, images.rotary, images.digitalPrint],
    groups: [
      {
        title: "Qualities",
        items: ["100% Cotton", "Polyester / Cotton", "Percale", "Cotton Satin", "Flannel"],
      },
      {
        title: "Finishes",
        items: [
          "Bleached & optical white",
          "Continuous dyed",
          "Rotary printed",
          "Digitally printed",
          "Peached, raised & Sanforised",
        ],
      },
      {
        title: "Constructions",
        items: ["1/1 plain weaves", "Dobby", "Jacquard & damask", "Seersucker"],
      },
    ],
    capabilities: [
      "Over five million meters processed monthly",
      "Printing in up to 21 colours",
      "Print widths up to 3,200 mm",
      "Pilling grade 5 achievable where required",
    ],
    divisions: ["weaving", "processing"],
  },
  {
    slug: "yarn",
    name: "Yarn",
    short: "Ring-spun carded and combed yarns from NE 7 to NE 120.",
    headline: "Yarn engineered for denim, apparel, shirting and home textiles.",
    intro:
      "Magna's cotton-based mills produce ring-spun yarn for knitting and weaving, supplying multiple end users with a broad range of counts, blends and specialty constructions.",
    hero: images.yarnCones,
    gallery: [images.spinningFrames, images.warpThreads],
    groups: [
      {
        title: "Core yarns",
        items: [
          "Carded & combed, NE 7–NE 120",
          "Single & double yarn",
          "Compact yarn",
          "Multi count",
          "Zero twist",
        ],
      },
      {
        title: "Blends",
        items: ["Poly Cotton", "CVC", "Modal", "Tencel", "Linen / cotton", "Nylon"],
      },
      {
        title: "Fancy & specialty",
        items: ["Lycra", "Slub", "Siro", "Melange", "MVS", "Yarn on dye cone"],
      },
      {
        title: "Responsible fibres",
        items: ["Organic cotton", "Recycled", "BCI cotton"],
      },
    ],
    capabilities: [
      "Ring-spun for knitting and weaving",
      "End uses: denim, apparel, shirting, home textiles",
      "Supplied on cones or dye cones",
    ],
    divisions: ["spinning"],
  },
  {
    slug: "garments",
    name: "Garments",
    short: "Workwear, safety wear, corporate, casual and sportswear.",
    headline: "Reliable apparel for every industry and job function.",
    intro:
      "Magna's apparel manufacturing supplies comfortable, reliable garments for men and women across industries — from durable workwear to corporate uniforms and casualwear.",
    hero: images.garments,
    gallery: [images.stitchCloseup, images.fabricSamples],
    groups: [
      { title: "Work & safety", items: ["Work wear", "Safety wear", "Overalls"] },
      { title: "Corporate", items: ["Corporate wear", "Uniform programmes"] },
      { title: "Lifestyle", items: ["Casual wear", "Sports wear"] },
    ],
    capabilities: [
      "Men's and women's ranges",
      "Fabrics woven and processed in-house",
      "Made to customer specification",
    ],
    divisions: ["weaving", "processing", "stitching"],
  },
  {
    slug: "health-safety",
    name: "Health & Safety",
    short: "Hospital linen, patient and doctor gowns, theatre wear and masks.",
    headline: "Healthcare textiles made to institutional standards.",
    intro:
      "Magna produces healthcare and institutional textiles in 100% cotton and poly-cotton, including hospital linen and gowns covered under its OEKO-TEX® STANDARD 100 certification.",
    hero: images.health,
    gallery: [images.finishing, images.stitchFloor],
    groups: [
      {
        title: "Hospital linen",
        items: [
          "White & dyed sheets",
          "Pillows & pillow cases",
          "Throws",
          "Hospital bed linen",
        ],
      },
      {
        title: "Gowns & apparel",
        items: [
          "Patient gowns — printed snowflake",
          "Doctor gowns",
          "Theatre gowns",
          "Scrub suits & lab coats",
          "Overalls",
        ],
      },
      { title: "Protective", items: ["Masks", "Aprons"] },
    ],
    capabilities: [
      "100% cotton and poly-cotton constructions",
      "OEKO-TEX® STANDARD 100 certified articles",
      "Consistent shades for institutional reorders",
    ],
    divisions: ["processing", "stitching"],
  },
];

export const productOrder: Product["slug"][] = [
  "yarn",
  "fabrics",
  "home-textiles",
  "garments",
  "health-safety",
];

export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const orderedProducts = () => productOrder.map((s) => getProduct(s)!);

/* Certifications documented on Magna's current website (certificate scans). No logos reproduced. */
export const certifications = [
  {
    code: "ISO 9001:2015",
    name: "Quality Management System",
    body: "Bureau Veritas Certification",
    scope: "Manufacturing and export of textile fabrics and made-ups.",
  },
  {
    code: "ISO 14001:2015",
    name: "Environmental Management System",
    body: "ACS Registrars",
    scope: "Manufacturing and export of textile fabrics and made-ups.",
  },
  {
    code: "OEKO-TEX® STANDARD 100",
    name: "Tested for harmful substances",
    body: "Issued through AITEX",
    scope:
      "Bleached, dyed and printed woven fabrics and garments in cotton and polyester/cotton, including patient and doctor gowns, scrub suits, lab coats and aprons.",
  },
  {
    code: "amfori BSCI",
    name: "Social compliance audit",
    body: "amfori Business Social Compliance Initiative",
    scope: "Assessment of labour conditions and responsible workplace practices.",
  },
  {
    code: "OCS",
    name: "Organic Content Standard",
    body: "Accredited third-party certification",
    scope: "Home textiles and fabrics — weaving, cutting, sewing, packaging and trading.",
  },
];

export const qualityTests = [
  { name: "Pilling", text: "Resistance of the fabric surface to fibre balling." },
  { name: "Rubbing", text: "Abrasion behaviour under repeated friction." },
  { name: "Crocking", text: "Colour transfer from dyed and printed fabric." },
  { name: "Shrinkage", text: "Dimensional stability after washing." },
];

export const navigation = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  {
    label: "Divisions",
    to: "/divisions" as const,
    children: divisions.map((d) => ({ label: d.name, slug: d.slug, kind: "division" as const })),
  },
  {
    label: "Products",
    to: "/products" as const,
    children: orderedProducts().map((p) => ({
      label: p.name,
      slug: p.slug,
      kind: "product" as const,
    })),
  },
  { label: "Sustainability", to: "/sustainability" as const },
  { label: "Quality", to: "/quality" as const },
  { label: "Contact", to: "/contact" as const },
];
