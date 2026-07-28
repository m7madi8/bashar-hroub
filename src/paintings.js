import img0003 from "./assets/images/bashar_alhroub-20260729-0003.jpg";
import img0004 from "./assets/images/bashar_alhroub-20260729-0004.jpg";
import img0006 from "./assets/images/bashar_alhroub-20260729-0006.jpg";
import img0007 from "./assets/images/bashar_alhroub-20260729-0007.jpg";
import img0008 from "./assets/images/bashar_alhroub-20260729-0008.jpg";
import img0009 from "./assets/images/bashar_alhroub-20260729-0009.jpg";
import img0010 from "./assets/images/bashar_alhroub-20260729-0010.jpg";
import img0011 from "./assets/images/bashar_alhroub-20260729-0011.jpg";
import img0012 from "./assets/images/bashar_alhroub-20260729-0012.jpg";
import img0013 from "./assets/images/bashar_alhroub-20260729-0013.jpg";
import img0014 from "./assets/images/bashar_alhroub-20260729-0014.jpg";
import img0015 from "./assets/images/bashar_alhroub-20260729-0015.jpg";
import img0016 from "./assets/images/bashar_alhroub-20260729-0016.jpg";
import img0017 from "./assets/images/bashar_alhroub-20260729-0017.jpg";
import img0018 from "./assets/images/bashar_alhroub-20260729-0018.jpg";

const paintings = [
  {
    id: "0003",
    slug: "echoes-of-dusk",
    title: "Echoes of Dusk",
    date: "March 14, 2019",
    year: 2019,
    medium: "Oil on canvas",
    dimensions: "80 × 100 cm",
    description:
      "A quiet study of fading light, where layered tones settle into a soft evening atmosphere.",
    image: img0003,
  },
  {
    id: "0004",
    slug: "silent-corridor",
    title: "Silent Corridor",
    date: "July 2, 2021",
    year: 2021,
    medium: "Acrylic on canvas",
    dimensions: "70 × 90 cm",
    description:
      "An interior passage held in stillness, shaped by shadow, memory, and measured space.",
    image: img0004,
  },
  {
    id: "0006",
    slug: "amber-threshold",
    title: "Amber Threshold",
    date: "November 28, 2018",
    year: 2018,
    medium: "Mixed media on canvas",
    dimensions: "90 × 120 cm",
    description:
      "Warm residual light marks the edge between presence and departure.",
    image: img0006,
  },
  {
    id: "0007",
    slug: "folded-horizon",
    title: "Folded Horizon",
    date: "January 9, 2023",
    year: 2023,
    medium: "Oil on linen",
    dimensions: "60 × 80 cm",
    description:
      "A landscape compressed into gesture, where distance becomes texture.",
    image: img0007,
  },
  {
    id: "0008",
    slug: "night-garden",
    title: "Night Garden",
    date: "May 21, 2020",
    year: 2020,
    medium: "Acrylic and oil on canvas",
    dimensions: "100 × 100 cm",
    description:
      "Forms emerge from darkness like plants remembering the day.",
    image: img0008,
  },
  {
    id: "0009",
    slug: "veiled-window",
    title: "Veiled Window",
    date: "September 5, 2022",
    year: 2022,
    medium: "Oil on canvas",
    dimensions: "50 × 70 cm",
    description:
      "Light filtered through fabric and time, catching what remains of a room.",
    image: img0009,
  },
  {
    id: "0010",
    slug: "stone-and-breath",
    title: "Stone and Breath",
    date: "April 17, 2017",
    year: 2017,
    medium: "Acrylic on board",
    dimensions: "45 × 60 cm",
    description:
      "A compact composition balancing weight, pause, and fragile movement.",
    image: img0010,
  },
  {
    id: "0011",
    slug: "after-rain",
    title: "After Rain",
    date: "August 30, 2024",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: "120 × 150 cm",
    description:
      "Surfaces still wet with reflection, holding the moment just after weather clears.",
    image: img0011,
  },
  {
    id: "0012",
    slug: "untitled-sequence-ii",
    title: "Untitled Sequence II",
    date: "December 11, 2016",
    year: 2016,
    medium: "Mixed media",
    dimensions: "65 × 85 cm",
    description:
      "Part of an evolving series exploring rhythm, interruption, and return.",
    image: img0012,
  },
  {
    id: "0013",
    slug: "blue-remainder",
    title: "Blue Remainder",
    date: "February 23, 2025",
    year: 2025,
    medium: "Oil on canvas",
    dimensions: "75 × 95 cm",
    description:
      "Cool residual color left behind by a larger, unfinished gesture.",
    image: img0013,
  },
  {
    id: "0014",
    slug: "inner-court",
    title: "Inner Court",
    date: "June 8, 2019",
    year: 2019,
    medium: "Acrylic on canvas",
    dimensions: "85 × 110 cm",
    description:
      "An enclosed space rendered through planes of quiet architecture and light.",
    image: img0014,
  },
  {
    id: "0015",
    slug: "passing-figure",
    title: "Passing Figure",
    date: "October 19, 2021",
    year: 2021,
    medium: "Oil and charcoal on canvas",
    dimensions: "70 × 100 cm",
    description:
      "A fleeting presence caught mid-motion, almost dissolving into the ground.",
    image: img0015,
  },
  {
    id: "0016",
    slug: "last-light-study",
    title: "Last Light Study",
    date: "March 3, 2023",
    year: 2023,
    medium: "Oil on panel",
    dimensions: "40 × 50 cm",
    description:
      "A small study devoted to the final minutes before night settles in.",
    image: img0016,
  },
  {
    id: "0017",
    slug: "falling-angel-ii",
    title: "Falling Angel II",
    date: "November 14, 2017",
    year: 2017,
    medium: "Print on paper",
    dimensions: "Artist's proof",
    description:
      "A figure descends toward a yellow geometric field, holding the tension between body, fall, and impact.",
    image: img0017,
  },
  {
    id: "0018",
    slug: "spherical-nostalgia",
    title: "Spherical Nostalgia",
    date: "May 12, 2022",
    year: 2022,
    medium: "Assemblage sculpture",
    dimensions: "Sphere",
    description:
      "A dense globe of plastic toys and fragments, gathering childhood surplus into a single saturated form.",
    image: img0018,
  },
];

export function getPaintingBySlug(slug) {
  return paintings.find((painting) => painting.slug === slug);
}

export default paintings;
