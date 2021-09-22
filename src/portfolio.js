/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Điên'z List",
  title: "Điên'z List",
  subTitle: "By xếp Tân, shếp Thành, và nhân viên Hân",
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
      role: "Xếp Tân",
      profilePicture: require("./assets/images/xep-tan.png"),
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Co-Host",
      desc: `\tHelo xin chào, mình là Tân. Mình đang trong thời gian gap year trước khi vào đại học. Mình thích chụp chó, đi chợ và thích ăn bánh tiêu.
      Hồi nhỏ mình tập cười nhếch mép trước gương vì nghĩ thế là ngầu. Hồi lớn mình phải tập cười nhếch mép bên còn lại để cân bằng. Nhưng mà có vẻ là nó không cân bằng được. 
          
      \n “Chết có một lần nên hãy sống động lên hê hê" 
      `
    },
    {
      role: "Sếp Hân",
      company: "Quora",
      profilePicture: require("./assets/images/sep-han.png"),
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Co-Host",
      desc: `\tHelo xin chào, mình là Hân. Mình đang gap year aka thất học. Năm sau sẽ nhập học tại Đại Học Stanford, chuyên ngành Computer Science.
      Mình rất thích những món ăn dẻo dẻo, như là xôi và mochi.
      Một điều điên rồ mà mình từng làm đó là cạo chân mày hồi năm lớp 4. Bây giờ nó đã mọc lại nhưng không được đều cho lắm.      
      \n“Đừng cảm ơn. Hãy mắc nợ.” 
      `
    },
    {
      role: "Shếp Thành",
      company: "Airbnb",
      profilePicture: require("./assets/images/shep-thanh.png"),
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Helo xin chào, tên mình là Thành. Hiện tại mình đang học kiến trúc ở UT Austin. Đúng là mình học năm thứ hai "
    },
    // {
    //   role: "Shếp Thành",
    //   company: "Airbnb",
    //   profilePicture: require("./assets/images/shep-thanh.png"),
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Helo xin chào, tên mình là Thành. Hiện tại mình đang học kiến trúc ở UT Austin. Đúng là mình học năm thứ hai "
    // }
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
