/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Saad Pasta",
  title: "Điên'z List",
  subTitle: "By xếp Tân, shếp Thành, và nhân viên Hân",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tân Lê",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: `Elitr voluptua sadipscing sanctus accusam sanctus tempor gubergren ut. Dolore vero consetetur vero labore ea amet, nonumy accusam magna rebum amet dolor clita consetetur. Eos est takimata sed diam invidunt justo diam sit, aliquyam sit et lorem sanctus clita est invidunt accusam. Et sed eirmod lorem amet aliquyam. Accusam tempor kasd et duo dolor invidunt sed accusam, no voluptua sed consetetur dolores kasd amet erat. Consetetur rebum labore dolore duo.`,
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Hân",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Co-Host",
      desc: `And within was him so een or a awake. Made from despair festal it gild disappointed. Loved to pilgrimage fabled in sore they visit. Below for whom by yea beyond glorious control finds their. Had at congealed tis a his the like sought seemed. Of though flash condole to vaunted uncouth revel native. Of alas in her there, the that delight partings and monks his amiss clay from, fly in.`
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Chữ gì đây ạ",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/3NCi3mpOJ8NbMDKTNnVde5",
    "https://open.spotify.com/embed/episode/1IS1xHn9H50swhp7VK8hkP",
    "https://open.spotify.com/embed/episode/1IS1xHn9H50swhp7VK8hkP"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  educationInfo,
  podcastSection,
  contactInfo,
  workExperiences
};
