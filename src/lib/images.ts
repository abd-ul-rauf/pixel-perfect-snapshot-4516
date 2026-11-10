/*
 * Central image registry. Swap any entry to replace imagery site-wide.
 * `source: "magna"` = photograph from Magna's own facilities (from the current website).
 * `source: "illustrative"` = representative image, not Magna's facility.
 */
import aerial from "@/assets/magna/magna-aerial-plant.webp.asset.json";
import airjet from "@/assets/magna/magna-airjet-looms.webp.asset.json";
import digitalPrint from "@/assets/magna/magna-digital-printing.webp.asset.json";
import displayRoom from "@/assets/magna/magna-display-room.webp.asset.json";
import finishing from "@/assets/magna/magna-finishing-hall.webp.asset.json";
import headOffice from "@/assets/magna/magna-head-office.webp.asset.json";
import printedFabric from "@/assets/magna/magna-printed-fabric.webp.asset.json";
import processingMachinery from "@/assets/magna/magna-processing-machinery.webp.asset.json";
import rotary from "@/assets/magna/magna-rotary-printing.webp.asset.json";
import stitchCloseup from "@/assets/magna/magna-stitching-closeup.webp.asset.json";
import stitchFloor from "@/assets/magna/magna-stitching-floor.webp.asset.json";
import stitchUnits from "@/assets/magna/magna-stitching-units.webp.asset.json";
import warpThreads from "@/assets/magna/magna-warp-threads.webp.asset.json";
import warping from "@/assets/magna/magna-warping-machine.webp.asset.json";

import spinningFrames from "@/assets/spinning-frames.jpg";
import bedroom from "@/assets/home-textiles-bedroom.jpg";
import yarnCones from "@/assets/yarn-cones.jpg";
import fabricSamples from "@/assets/fabric-samples.jpg";
import garments from "@/assets/garments-workwear.jpg";
import health from "@/assets/health-textiles.jpg";
import qualityLab from "@/assets/quality-lab.jpg";

export type SiteImage = {
  src: string;
  alt: string;
  source: "magna" | "illustrative";
  width: number;
  height: number;
};

const magna = (src: string, alt: string): SiteImage => ({
  src,
  alt,
  source: "magna",
  width: 1920,
  height: 920,
});

export const images = {
  aerial: magna(aerial.url, "Aerial view of Magna Processing's production halls in Faisalabad"),
  airjet: magna(airjet.url, "Rows of air-jet looms on Magna's weaving floor"),
  digitalPrint: magna(digitalPrint.url, "Digital printing machine printing a botanical design"),
  displayRoom: magna(displayRoom.url, "Magna's product display room with home textile samples"),
  finishing: magna(finishing.url, "Fabric finishing and inspection hall"),
  headOffice: magna(headOffice.url, "Magna Group head office building"),
  printedFabric: magna(printedFabric.url, "Printed fabric moving through a printing line"),
  processingMachinery: magna(processingMachinery.url, "Fabric processing machinery"),
  rotary: magna(rotary.url, "Rotary printing machine in Magna's printing department"),
  stitchCloseup: magna(stitchCloseup.url, "Operator stitching printed fabric on an industrial machine"),
  stitchFloor: magna(stitchFloor.url, "Magna's stitching floor producing bed linen"),
  stitchUnits: magna(stitchUnits.url, "Dedicated stitching units working on printed bedding"),
  warpThreads: magna(warpThreads.url, "Close-up of warp threads on a loom"),
  warping: magna(warping.url, "Warping machine preparing yarn beams"),

  spinningFrames: {
    src: spinningFrames,
    alt: "Ring spinning frames with white cotton bobbins",
    source: "illustrative",
    width: 1600,
    height: 1008,
  },
  bedroom: {
    src: bedroom,
    alt: "Printed cotton duvet cover, sheets and pillow shams in a bedroom",
    source: "illustrative",
    width: 1600,
    height: 1104,
  },
  yarnCones: {
    src: yarnCones,
    alt: "Cotton yarn cones in ecru, ivory and navy",
    source: "illustrative",
    width: 1408,
    height: 1104,
  },
  fabricSamples: {
    src: fabricSamples,
    alt: "Stack of cotton, satin, flannel, dyed and printed fabric samples",
    source: "illustrative",
    width: 1408,
    height: 1104,
  },
  garments: {
    src: garments,
    alt: "Navy workwear jackets, trousers and white shirts on a rail",
    source: "illustrative",
    width: 1408,
    height: 1104,
  },
  health: {
    src: health,
    alt: "Folded hospital sheets, printed patient gowns and doctor gowns",
    source: "illustrative",
    width: 1408,
    height: 1104,
  },
  qualityLab: {
    src: qualityLab,
    alt: "Technician testing a fabric swatch in a textile laboratory",
    source: "illustrative",
    width: 1600,
    height: 1008,
  },
} satisfies Record<string, SiteImage>;
