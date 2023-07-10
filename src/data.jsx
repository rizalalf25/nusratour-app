import tour1 from "./assets/tour1.jpg";
import tour2 from "./assets/tour2.jpg";
import tour3 from "./assets/tour3.jpg";
import tour4 from "./assets/tour4.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 12nd, 2023",
    title: "Rinjani Landscape",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore oluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "rinjani mountain",
    duration: 6,
    cost: 2500,
  },
  {
    id: 2,
    image: tour2,
    date: "october 9th, 2023",
    title: "Labuan Bajo Upside Down",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore oluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "labuan bajo",
    duration: 7,
    cost: 4000,
  },
  {
    id: 3,
    image: tour3,
    date: "december 24th, 2023",
    title: "Bali The Island of God",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore oluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Bali",
    duration: 7,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "march 18th, 2023",
    title: "Lombok Secrets",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore oluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "gili trawangan island",
    duration: 3,
    cost: 2200,
  },
];
