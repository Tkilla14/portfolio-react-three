import {
  mobile,
  ape,
  signup,
  Giftify,
  backend,
  blender,
  creator,
  web,
  javascript,
  cLogo,
  html,
  css,
  chakra,
  chatGPT,
  reactjs,
  mysql,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  unity,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  UofM,
  N2,
  bootstrap
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Wordpress/Wix Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Game/Asset Designer",
    icon: mobile,
  },
  {
    title: "AI Prompt Engineer",
    icon: creator,
  },
  {
    title: "Graphic Designer/ Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C#",
    icon: cLogo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Chakra UI",
    icon: chakra,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Chat GPT",
    icon: chatGPT,
  }, 
];

const experiences = [
  {
    title: "Wordpress Developer/ Entrepreneur",
    company_name: "Njör Analytics",
    icon: N2,
    iconBg: "#E6DEDD",
    date: "October 2021 - August 2022",
    points: [
      "Strategically engineered an innovative system integrating diverse plugins to pioneer the industry's first premier digital reverse auction marketplace.",
      "Crafted a sophisticated and intuitive user interface for a challenging novel concept, requiring inventive realization in unprecedented fashion.",
      "Directed, orchestrated, and curated content for comprehensive marketing campaigns.",
    ],
  },
  {
    title: "Prompt engineering & LLM training - Certificate",
    company_name: "Open AI",
    icon: chatGPT,
    iconBg: "#E6DEDD",
    date: "August 2023",
    points: [
      "I specialize in elucidating the workings of Large Language Models (LLMs), detailing their functionality and providing insights into best practices for prompt engineering. My expertise extends to showcasing the utilization of LLM APIs within applications across diverse tasks, facilitating the development of complex applications that leverage the capabilities of LLMs beyond simple prompting. This involves decomposing intricate tasks into multiple API calls to effectively harness the power of LLMs. Moreover, I meticulously evaluate the inputs and outputs of LLMs, ensuring considerations for safety, relevance, and accuracy are paramount."
    ],
  },
  {
    title: "Full Stack Development - Certificate",
    company_name: "University of Minnesota",
    icon: UofM,
    iconBg: "#E6DEDD",
    date: "September 2023 - January 2024",
    points: [
      "I successfully graduated from a rigorous bootcamp program specializing in full stack web development. Demonstrating proficiency in both front-end and back-end coding, I comprehensively grasp the intricacies of web development, spanning from database management to deployment strategies. Throughout the program, I have gained hands-on experience with a variety of technologies including HTML5, CSS3, JavaScript, Bootstrap, SQL, Git, and other essential tools vital for modern full stack web development."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ape Island",
    description:
      "An online multiplayer mobile app, where players compete against eachother in a game similar to king of the hill. Each player submits an admission fee and the final three contrstants each win a prize of money or experience. - Built in unity, link is to my github profile -",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: ape
  },
  {
    name: "Giftify",
    description:
      "Web application that enables users to search/ create gift wish lists, It shows members of the group what presents have been purchased or not while hiding it from the creator of the wishlist.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "chakra",
        color: "pink-text-gradient",
      },
    ],
    image: Giftify,
    source_code_link: "https://github.com/GrantMitchell24/gift-guide",
  },
  {
    name: "My Place",
    description:
      "Social media web app highlighting favorite locations on a map and why you love them. Friends can comment and share where it is on the map & create detailed posts. Also providing great exposure for local businesses.",
    tags: [
      {
        name: "expressJS",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "Handlebars",
        color: "pink-text-gradient",
      },
    ],
    image: signup,
    source_code_link: "https://github.com/Jasony95/myPlace",
  },
];

export { services, technologies, experiences, testimonials, projects };
