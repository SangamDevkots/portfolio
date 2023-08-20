import {
  cotivitiscreen,
  myntrascee,
  okscree,
  airscee,
  abromart,
  backend,
  bootstrap,
  codedrops,
  corrtex,
  creator,
  css,
  fib,
  figma,
  git,
  github,
  gitlab,
  gmail,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  reactjs,
  redux,
  restro,
  tailwind,
  twitter,
  typescript,
  web
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: web,
  },
  {
    title: "Frontend Web Development",
    icon: mobile,
  },
  {
    title: "Custom Web Design",
    icon: backend,
  },
  {
    title: "Website Optimization",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Broadway infss",
    icon: codedrops,
    iconBg: "#383E56",
    date: "currently",
    points: [
      "Created responsive and user-friendly websites using HTML, CSS, and JavaScript.",
      "Utilized Bootstrap and jQuery to enhance website functionality and appearance.",
      "Implemented advanced features such as animations and modal windows using CSS and JavaScript.",
      "Streamlined workflow with SASS to improve project efficiency and maintainability.",
    ],
  },
  {
    title: "React Js Developer",
   
    icon: codedrops,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing responsive web apps with React, Redux Toolkit, and TypeScript.",
      "Creating efficient UIs with Tailwind CSS for web apps.",
      "Collaborating with cross-functional teams to deliver quality web apps on time and within budget.",
      "Improving React development practices within the team to boost efficiency and quality.",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: ""
  },
  {
    image: github,
    link: ""
  },
  {
    image: gitlab,
    link: ""
  },
  {
    image: twitter,
    link: ""
  },
  {
    image: instagram,
    link: ""
  },
  {
    image: gmail,
    link: "mailto:sangamdevkota02@gmail.com"
  }
]

const projects = [
  {
    name: "MYNTRA-SH",
    description:
      "myntra sample proect.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image:   myntrascee,
    openSource: false,
    source_code_link: "/",
  },
  {
    name: "Online khabar",
    description:
      "online khabar project ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image:   okscree,
    openSource: false,
    source_code_link: "/",
  },
  {
    name: "Air Travel",
    description:
      "A simple looking Air travel design made for ticket booking and air travel services",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient"
      }
    ],
    image:   airscee,
    openSource: false,
    source_code_link: "/",
  },
  {
    name: "COTIVITI NEPAL",
    description:
      "A simple organisation website suitable to be used for a organisation. Smooth UI  that make the overall site look pleasing.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: cotivitiscreen,
    openSource: true,
    source_code_link: "/",
  },
];

export { services, technologies, experiences, projects, socials };
