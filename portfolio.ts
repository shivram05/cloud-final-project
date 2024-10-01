import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Shivram Shrestha',
  title: "Hi all, I'm Shivram",
  description:
    `I am a Full Stack Developer with more than 6 years of experience in backend technologies like NodeJS, ExpressJS, GraphQL, Typescript,
    and frontend technologies like JavaScript, ReactJS, Redux, etc. Proven track record of delivering scalable and efficient
    software solutions to meet business requirements in the domains of Financial Services, Real Estate, and e-commerce.
    Strong analytical and problem-solving abilities, with a focus on delivering code that is robust, maintainable, and optimized.
    Excellent communication and collaboration skills, with a dedication to continuous learning and professional development.`,
  resumeLink:
    'https://docs.google.com/document/d/10u6k07flWFPxXqSJfldLPFUlAD5gnRqh/edit?usp=sharing&ouid=114405220516293956083&rtpof=true&sd=true',
};

export const openSource = {
  githubUserName: 'shivram05',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/shivram05',
  linkedin: 'https://www.linkedin.com/in/shivramshrestha49/',
  github: 'https://github.com/shivram05',
  instagram: 'https://www.instagram.com/shrestha_shivram/',
  facebook: 'https://www.facebook.com/shivram.shrestha.1/',
  twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle:
    "I'M A FULL STACK DEVELOPER WHO HAS A STRONG DESIRE TO EXPLORE AND MASTER A WIDE RANGE OF TECHNOLOGY STACKS.",
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡  Creating and implementing efficient, scalable, and robust server-side software using NodeJS and ExpressJS'
        ),
        emoji(
          '⚡ Designing and building APIs to facilitate data exchange between the frontend and backend systems'
        ),
        emoji(
          '⚡ Building and maintaining Angular and React components that make up the user interface.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'logos:angular-icon',
        },
        {
          skillName: 'Node',
          iconifyTag: 'vscode-icons:file-type-node',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Professional Highlights',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ I have experience working with both relational databases like Oracle and non-relational databases like MongoDB in various projects.'
        ),
        emoji(
          '⚡ Automating testing and deployment of NodeJS and Angular projects with Jest and RTL for React that enhances development efficiency and reliability.'
        ),
        emoji(
          '⚡ Creating a responsive and reactive web application with both Angular and React.js enables the development of user-friendly, adaptable, and real-time interactive experiences across diverse screen sizes and devices.'
        ),
        emoji(
          '⚡ Participated in and well-versed with all Scrum/Agile ceremonies, such as Daily Standups, Sprint Planning, Sprint Review, and Sprint Retrospectives, ensuring effective project management and collaboration.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Scrum Agile',
          iconifyTag: 'feather:users', // Using a team or users icon to symbolize the collaborative aspect of Scrum Agile.
        },
        {
          skillName: 'Oracle Database',
          iconifyTag: 'logos:oracle',
        },
        {
          skillName: 'Automation',
          iconifyTag: 'logos:python', // Using the Python logo to symbolize automation, as Python is commonly used for automation tasks.
        },
        {
          skillName: 'D3js',
          iconifyTag: 'logos:d3',
        },
        {
          skillName: 'Problem Solving',
          iconifyTag: 'bi:check2-circle', // This icon represents successful problem solving
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'NodeJS, ExpressJS, TypeORM, TypeScript', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Javascript, Angular, React, Redux, AJAX',
    progressPercentage: '90',
  },
  {
    Stack: 'MySQL, PostgreSQL, MongoDB, DynamoDB',
    progressPercentage: '90',
  },
  {
    Stack: 'BitBucket, Jira, Cloud Computing, Docker, Jenkins',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Mahrishi International University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'AUG 2022 - APRIL 2025',
    desc: '', //'I am pursuing a Master of Science in Computer Science at Maharishi International University, with an anticipated completion date in Oct 2025.',
    descBullets: [
      // 'Completed on-campus course.',
      // 'Done two course project using front-end and back-end technology',
    ],
  },
  {
    schoolName: 'Himalaya college of Engineering',
    subHeader: 'Bachelor in Engineering',
    duration: 'Jan 2013 - Aug 2017',
    desc: '',
    descBullets: [
      // 'Completed on-campus course.',
      // 'Done two course project using front-end and back-end technology',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Software Developer',
    company: 'Hub Group',
    companyLogo: 'https://cdn-hubgroup.pressidium.com/wp-content/themes/HUBG-23/logo_light.svg',
    date: 'OCT 2023 – Present',
    desc: "Innovative end-to-end supply chain solutions provider.\n ✅ Managed and resolved critical issues within project lifecycles, ensuring optimal performance and minimal downtime.\n ✅ Played a key role in software development and enhancements, focusing on improving operational efficiency and user experience.\n ✅ Led the development and implementation of database scripts, enhancing data management and system reliability.\n ✅ Spearheaded the design and development of user interfaces, focusing on usability and functionality to meet end-user needs.\n ✅ Collaborated across teams to drive project success, employing agile methodologies to ensure timely delivery of project milestones.\n✅ Contributed to the optimization of system configurations and service code management, resulting in improved system accuracy and performance.\nTechnologies Used: NodeJS, Angular, MongoDB, TypeScript, Azure, etc",
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Animal Kingdom Explorer',
    desc: 'The Animal Kingdom Explorer is the android app that build during the Distance Education, this app really helps us to explore the animal in andorid, we can see the list and details. In this app it has used lastest technology',
    github: 'https://github.com/shivram05',
    link: 'https://github.com/shivram05/animal-kingdom-explorer-',
  },
  {
    name: 'Library-Management-System ',
    desc: 'Created application based on RESTful services where members with membership in specified plans can use a badge to enter a location. Developed a web application as member of 5-person team with features including log-in, customer dashboard for maintaining members, faculty, member addition/update for memberships',
    github: 'https://github.com/shivram05',
    link: 'https://github.com/shivram05/Library-Management-System',
  },
  {
    name: 'Role Authorization',
    desc: 'The "Role Authorization" is a web application built using React for the frontend and java for the backend. It has the entitlment that helps to restrict the user which dont have access',
    github: 'https://github.com/shivram05',
    link: 'https://github.com/shivram05/spring-role-authorization',
  },
  {
    name: 'Group Chat App',
    desc: 'The "Real-Time Group Chat Application" is a modern and feature-rich chat platform that allows users to create groups and communicate in real time. It provides a seamless and interactive way for users to exchange messages, files, and multimedia content within groups.',
    github: 'https://github.com/shivram05',
    link: 'https://github.com/shivram/node-chat-app',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Four Pillars of OOP',
    feedback:
      'Four Pillars of OOP',
    imageUrl:
      'https://miro.medium.com/v2/resize:fit:640/format:webp/1*0N7ao7lN_Vr_w6CJ1xh5EA.png',
    blogLink: 'https://medium.com/@shivram.shrestha49/exploring-the-four-pillars-of-object-oriented-programming-e15956bb399',
  },
  {
    name: 'Java 17 LTS',
    feedback:
      'Java 17 will be supported for a longer time than other versions of Java. This means that it will get security and bug fixes for a longer time, which is important for keeping your applications safe and reliable.',
    imageUrl:
      'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211004004324/JDK-17-%E2%80%93-New-Features-in-Java-17.png',
    blogLink: 'https://dev.to/manishbasnet/java-17-lts-l0h',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Shivram Shrestha',
  description:
    'An full stack developer proficient in NodeJS, Angular, and React, with expertise in Full Stack Web Development and Cloud Computing.',
  author: 'Shivram Shrestha',
  image:
    'https://lh3.googleusercontent.com/a/ACg8ocJ68z3Aw5dgRtyS3vi5sPo5jtegXo9Y3oLnvsFmjKBoxyhq4gZ1=s360-c-no',
  url: 'https://github.com/shivram05',
  keywords: [
    'Shivram',
    'Shivram Shrestha',
    '@shivramshrestha',
    'Shivram',
    'Portfolio',
    'Shivram Portfolio',
    'Shivram Shrestha Portfolio',
  ],
};
