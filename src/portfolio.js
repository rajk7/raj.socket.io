/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Raj's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Raj Kumar Portfolio",
    type: "website",
    url:
      "https://drive.google.com/file/d/1XgLAtx0gnQRZNcnKxJ9dg2YMSxbDfVwq/view",
  },
};

//Home Page
const greeting = {
  title: "Raj Kumar",
  logo_name: "Raj",
  //nickname: "layman_brother",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and technical systems to create impact and dedicated to learn, grow and excel as a individual",
  resumeLink:
    "https://drive.google.com/file/d/1sKZ6a7AxxtVjLGShdq0KvtSITTIoK9Zp/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1sKZ6a7AxxtVjLGShdq0KvtSITTIoK9Zp/view?usp=sharing",
  githubProfile: "https://github.com/rajk7",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rajk7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajkr01",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mahatoraj8",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Gmail",
    link: "mailto:mahatoraj8@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  /*
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  {
    name: "Instagram",
    link: "https://www.instagram.com/raj.kumar7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/rajkr01",
    fontAwesomeIcon: "simple-icons:hackerrank", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#2EC866", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Unity Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for Complex and Dynamic Game Logic.",
        "⚡ Experience of working with 2D, 3D Games and Hyper Casual Games",
        "⚡ Experience of working with Multiplayer Games using Photon And Socket.io",
        "⚡ Made project on AR, VR to experience & interaction with extended reality(XR) environments",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos-c-sharp",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "logos:visual-studio-code",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "VR",
          fontAwesomeClassname: "bi:badge-vr",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "AR",
          fontAwesomeClassname: "bi:badge-ar-fill",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building resposive website frontend using HTML, JavaScript and React",
    //     "⚡ Creating application backend in Node, Express & NPM",
    //     "⚡ Developing mobile applications using Flutter solo android apps using Dart",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     // {
    //     //   skillName: "CSS",
    //     //   fontAwesomeClassname: "vscode-icons:file-type-css",
    //     //   style: {
    //     //     color: "#1572B6",
    //     //   },
    //     // },
    //     {
    //       skillName: "Java Script",
    //       fontAwesomeClassname: "vscode-icons:file-type-js-official",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "React",
    //       fontAwesomeClassname: "logos:react",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     // {
    //     //   skillName: "Flutter",
    //     //   fontAwesomeClassname: "simple-icons:flutter",
    //     //   style: {
    //     //     color: "#02569B",
    //     //   },
    //     // },
    //   ],
    // },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying game logic on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "vscode-icons:file-type-photoshop",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "logos:blender",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   website_link: "https://www.hackerrank.com/rajkr01",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Christ University",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "Christ.png",
      alt_name: "CUFE",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Java, C#, Deep learning and Full Stack Development.",
        "⚡ I have received award from respected director for My Project Exhibition.",
      ],
      website_link: "https://christuniversity.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "C# Intermediate",
      subtitle: "- Andrew Ng",
      logo_path: "Udemy_logo1.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4cd70a8e-6fd9-4cd0-9b63-ee357ba5c344/",
      alt_name: "C# Intermediate",
      color_code: "#00000099",
    },
    {
      title: " Complete Guide to 2D and 3D Game Development",
      subtitle: "-  Pablo Farias Navarro",
      logo_path: "zenva-academy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7c661259-a875-406a-b374-4e75cb0a4495/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: " RPG Core Combat",
      subtitle: "- Rick Davidson",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8a779d0c-64c5-441f-9767-3a4f8c0dd587/",
      alt_name: "udemy",
      color_code: "#8C151599",
    },
    {
      title: "C#",
      subtitle: "- Yeva Hyusyan",
      logo_path: "sololearn.png",
      certificate_link:
        "https://www.sololearn.com/certificates/course/en/5295127/1080/landscape/png",
      alt_name: "Solo Learn",
      color_code: "#1F70C199",
    },
    {
      title: "Amazon EC2",
      subtitle: "- Juho Jantunen",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1B3TmQzQrS5LCF9Ga0AuQ6fSWDH1bpUFW/view?usp=sharing",
      alt_name: "Amazon Web Services",
      color_code: "#D83B0199",
    },
    {
      title: "Unity 2D: Develop 2D android game",
      subtitle: "- Raja Haris",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-87725ec4-820a-4b1a-b04e-e7771f38fca8/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Amazon S3",
      subtitle: "- Andrew",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/113U3lQq9o5bxtC7JW06XQ1QOkFdGy7Zv/view?usp=sharing",
      alt_name: "AWS S3",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as Unity Developer, Designer and Software Architect. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Unity Developer",
          company: "Techflinch Infotech Private Limited",
          company_url: "https://www.techflinch.com/",
          logo_path: "techflinch.png",
          duration: "Fab 2020 - Feb 2022",
          location: "Bengaluru, Karnataka",
          description:
            "I work here as unity Developer. I have been part several games such as Chess, Ludo, 2048, Stack, Pong, Color Switch etc.",
          color: "#3C065E",
        },
        {
          title: "Unity Developer",
          company: "NMS Games Private Limited",
          company_url: "https://www.nmsgames.com/",
          logo_path: "Nms.png",
          duration: "June 2022 - Oct 2022",
          location: "Varanasi UP",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#3C065E",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Flutter App Development Intern",
          company: "Titan Company",
          company_url: "https://www.titancompany.in/",
          logo_path: "titan co.png",
          duration: "March 2019 - April 2019",
          location: "Hosur, Tamil Nadu",
          description:
            "Near Field Communication android application development as an industry project for TITAN company. NFC app is developed which can transfer and retrieve information in order to perform various tasks  such as make payments storing information, passwords.",
          color: "#ee3c26",
        },
        /*{
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Unity projects and dotNet to make it multiplayer using Node infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Raj portpholio.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Unity, C#, NodeJS, SQL, dotNet and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to create impact on game world with my knowledge and talent to help other developers to grow and make their own games.",
    link: "https://github.com/rajk7",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Thirumala PG for gents, No 164, 6th cross, Bannerghatta Main Rd, Omkar Nagar, Arekere, Bengaluru, Karnataka 560076",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://g.page/thirumala-pg-for-gents?share",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7992314911",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
