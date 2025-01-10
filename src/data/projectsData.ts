export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce platform built with Bootstrap CSS.",
    image: "/ecommerce.png", 
  },
  {
    id: 2,
    title: "Travel Agency",
    description:
      "A travel agency website that makes travelling easy and fun.",
    image: "/travel.png",
  },
  {
    id: 3,
    title: "Video Conferencing App",
    description: "A video conferencing platform with markdown support and CMS integration.",
    image: "/video.png",
  },
];
