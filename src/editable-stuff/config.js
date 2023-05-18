// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2c83ed, #4c9bf2, #6cb4f6, #ffad7b, #fa9364, #f47a4e",
  firstName: "Vinicius",
  middleName: "",
  lastName: "Lima",
  message: "Integrations Technical Specialist",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/VinnyLima",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/vinicius-lima-dev/",
    },
    {
      image: "fa-twitter",
      url: "https://www.linkedin.com/in/vinicius-lima-dev/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://avatars.githubusercontent.com/u/24688302?v=4",
  imageSize: 375,
  message: ` I'm a Full Stack developer passionate about technology and nature, always looking for updates on new technological trends. I have experience in developing web applications, using languages ​​such as JavaScript, TypeScript and databases such as Oracle, MySQL, Postgres and MongoDB, as well as Rest API with Node.js, and messaging with RabbitMQ. I also have HTML5, CSS3 and ReactJS skills, and am constantly improving my skills to reach the next level both professionally and personally.`,
  resume: process.env.PUBLIC_URL+"/Resume.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "VinnyLima", 
  reposLength: 0,
  specificRepos: ["appGoClima", "PL-SQL", "node-oracledb", "types-ddd"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "",
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you need help in a project, or maybe have something interesting to say, please contact me at",
  email: "pedrotashima@protonmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Integrations Technical Specialist - Toolbox TVE',// Here Add Company Name
      companylogo: require('../assets/img/toolbox.png'),
      imgSize: 170,
      date: 'January 2022 – Present',
    },
    {
      role: 'Integration Engineer - Linkapi/Semantix',// Here Add Company Name
      imgSize: 170,
      companylogo: require('../assets/img/linkapi.png'),
      date: 'June 2021 – January 2022',
    },
    {
      role: 'Full Stack Developer - Guenka Software',// Here Add Company Name
      imgSize: 170,
      companylogo: require('../assets/img/guenka.jpeg'),
      date: 'August 2020 – May 2021',
    },
    {
      role: 'Project Manager - Solucaut',// Here Add Company Name
      imgSize: 170,
      companylogo: require('../assets/img/solucaut.png'),
      date: 'July 2019 – August 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
