import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Installation from "./images/hero-section.png";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";
// import WhychooseUs from "./images/codeing.png";
// import more from "../../icons/Right-Arrow.svg";

import "./home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // Programming Language for infinite scroll ( name and logo )
  const Languages = [
    {
      language: "Python",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    },
    {
      language: "Java",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919854.png",
    },
    {
      language: "C",
      logo: "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
    },
    {
      language: "C++",
      logo: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
    },
    {
      language: "JavaScript",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      language: "Ruby",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919842.png",
    },
    {
      language: "PHP",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
    },
    {
      language: "Swift",
      logo: "https://cdn-icons-png.flaticon.com/128/3670/3670396.png",
    },
    {
      language: "Kotlin",
      logo: "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
    },
    {
      language: "R",
      logo: "https://cdn-icons-png.flaticon.com/128/2103/2103665.png",
    },
    {
      language: "Go",
      logo: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
    },
    {
      language: "Rust",
      logo: "https://cdn-icons-png.flaticon.com/128/5670/5670725.png",
    },
    {
      language: "TypeScript",
      logo: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    },
    {
      language: "Node.js",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
    },
    {
      language: "React.js",
      logo: "https://cdn-icons-png.flaticon.com/128/10828/10828578.png",
    },
    {
      language: "Angular",
      logo: "https://cdn-icons-png.flaticon.com/128/16511/16511234.png",
    },
    {
      language: "Vue.js",
      logo: "https://cdn-icons-png.flaticon.com/128/15484/15484278.png",
    },
    {
      language: "Django",
      logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-logo-icon.png",
    },
    {
      language: "Laravel",
      logo: "https://mazer.dev/en/laravel/b1-course/laravel-framework-what-is/featured-laravel-logo_hu6ee09849caf06057f022172ece25199d_8776_0x480_resize_box_3.png",
    },
    {
      language: "ASP.NET",
      logo: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63064f1fedf422395124660e_e7d03466.png",
    },
  ];

  // Most popular tools for infinite scroll ( name and logo )
  const Software = [
    {
      name: "Visual Studio Code",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    },
    {
      name: "PyCharm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/PyCharm_Edu_Icon.svg/2048px-PyCharm_Edu_Icon.svg.png",
    },
    {
      name: "IntelliJ IDEA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/2048px-IntelliJ_IDEA_Icon.svg.png",
    },
    {
      name: "Eclipse",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-eclipse-14-282371.png",
    },
    {
      name: "NetBeans",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSArZvia5wKM5gaODI9WMad3MaM68d16NqAw&s",
    },
    {
      name: "Sublime Text",
      logo: "https://static-00.iconduck.com/assets.00/sublime-text-icon-2048x2048-cliibsen.png",
    },
    {
      name: "Atom",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNSA7hneLbm9wkJvB7HOZTO0CUma70SlOJg&s",
    },
    {
      name: "Xcode",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yRUh1zBJ2hnMjNc9FG-oxu-fgzfZanUo4w&s",
    },
    {
      name: "Android Studio",
      logo: "https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png",
    },
    {
      name: "RStudio",
      logo: "https://rstudio.com/wp-content/uploads/2018/10/RStudio-Logo-flat.png",
    },
    {
      name: "Git",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEj_V6_aIHeHJk9LAEq1kk5Bs7bjAzb82qw&s",
    },
    {
      name: "GitHub Desktop",
      logo: "https://cdn-icons-png.flaticon.com/128/25/25231.png",
    },
    {
      name: "GitKraken",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20yNbXDPVoRcthXbdMUsidQBeVY5ZnnCKZw&s",
    },
    {
      name: "Sourcetree",
      logo: "https://static-00.iconduck.com/assets.00/sourcetree-icon-407x512-cnpohnjl.png",
    },
    {
      name: "Docker",
      logo: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
    },
    {
      name: "Kubernetes",
      logo: "https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png",
    },
    {
      name: "VirtualBox",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWbUV7GA-STBEapSvNHmJtRmIYcelbodmXg&s",
    },
    {
      name: "Vagrant",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQedkNcePH_6fMqMxymEbL1hb-NoS_cxqhqw&s",
    },
    {
      name: "Anaconda",
      logo: "https://avatars.githubusercontent.com/u/497012?s=280&v=4",
    },
    {
      name: "Jupyter Notebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
    },
    {
      name: "Tableau",
      logo: "https://img.icons8.com/?size=512&id=9Kvi1p1F0tUo&format=png",
    },
    {
      name: "Power BI",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGd1wOySFXHq1l9Juu4m6qGNxaiz865nYMA&s",
    },
    {
      name: "Apache Spark",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w2DHbCXBDCxiB-LAvTol4HShmwjG0riH_w&s",
    },
    {
      name: "Flutter",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgp1jDyk2-tMtUnAjiJyUrd_jRDnaxXIWgvA&s",
    },
  ];

  return (
    <>
      {/* FIRST SECTION START TO BE HERE */}
      <div className="background_image" >
        <section className="hero_section" >
          {/* left side data  */}
          <div
            className="left_section"
            // data-aos="fade-up"
            // data-aos-anchor="#example-anchor"
            // data-aos-offset="500"
            // data-aos-duration="500"
            data-aos="fade-right"
          >
            <div className="Text_area">
              <h1 className="tag_line">
                Simple & Easy <span className="Installation">Installation</span>{" "}
                Steps.
              </h1>

              {/* <div className="search_menu">
                <form>
                  <input
                    type="search"
                    placeholder="Python, Java, VS Code ....."
                    required
                  />
                  <button>Search</button>
                </form>
              </div> */}

              <article className="welcome_text">
                {/* <h1> Welcome to Installify! </h1> */}
                <h4> Your ultimate guide to effortless installations.</h4>
                <p>
                  Whether you're just starting or you're a seasoned pro,
                  Installify simplifies the process of setting up
                  <span className="changable_text " >
                    <Typewriter
                      words={[
                        "Web Development !",
                        "Databases !",
                        "Programming Languages !",
                        "App Development !",
                        "DevOps !",
                        "Cyber security !",
                        "Version Control !",
                        "Code Editors/IDEs !",
                        "Design and Prototyping !",
                        "Package Managers !",
                        "Data Analysis !",
                        "Virtualization !",
                        "API Development !",
                        "Backend Frameworks !",
                      ]}
                      loop={13}
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                  <br />
                  No more headaches — just clear, step-by-step instructions that
                  make installations a breeze.
                </p>
              </article>

              <div className="navigate_buttons">
                <button className="Get_Start">
                  <span>Get Started</span>
                  {/* <img src={more} alt="" /> */}
                </button>
                <button className=" contact">
                  <span>Request </span>
                  {/* <img src={more} alt="" /> */}
                </button>
              </div>
            </div>
          </div>

          {/* right side data  */}
          <div className="right_section" data-aos="fade-left">
            <div
              className="Img_division"
              // data-aos="fade-up"
              // data-aos-offset="500"
              // data-aos-duration="500"
            >
              <img src={Installation} alt="" />
            </div>
          </div>
        </section>
      </div>

      {/* SECOND SECTION START TO BE HERE */}
      <section className="second_section" >
        <h1 className="Section_2_heading" data-aos="zoom-in"  data-aos-duration="500">
          Programming <span>Languages</span>
        </h1>

        <div className="Marquee" >
          <Marquee
            direction="right"
            pauseOnHover="true"
            autoFill="true"
            speed={100}
            // gradient
            // gradientColor="lightgray"
            // gradientWidth={"50px"}
          >
            <div className="Tech_name">
              {Languages.map((item, index) => (
                <div key={index} className="Individual_container">
                  <img src={item.logo} alt={item.language} />
                  <p>{item.language}</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <h1 className="Section_2_heading" data-aos="zoom-in"  data-aos-duration="500" >
          Most <span>Popular</span> Tools
        </h1>
        <div className="Marquee">
          <Marquee
            direction="left"
            pauseOnHover="true"
            autoFill="true"
            speed={100}
            // gradient
            // gradientColor="lightgray"
            // gradientWidth={"50px"}
          >
            <div className="Tech_name">
              {Software.map((item, index) => (
                <div key={index} className="Individual_container">
                  <img src={item.logo} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* THIRD SECTION START TO BE HERE */}
      <section className="Third_section">
        <div className="Section_third_heading">
          <h1>
            Why <span>Choose</span> Us
          </h1>
          <p className="Section_third_description">
            Some description related to that context
          </p>
        </div>

        <div className="Section_third_guidence">
          <div className="Guidence_left_part" data-aos="fade-down">
            <div className="left_part_content">
              <div className="left_content">
                <h1>Comprehensive Methods</h1>
                <p>
                  Explore every installation method, from standard to advanced,
                  tailored to your needs.
                </p>
              </div>
              {/* <div className="icon_section">
                <img
                  src="https://img.freepik.com/free-vector/cross-platform-software-concept-illustration_114360-7433.jpg?t=st=1721585160~exp=1721588760~hmac=daa03ae4f69c7915874637a2cda073454edc9e75d0c300bf19d94fc58491363d&w=740"
                  alt=""
                />
              </div> */}
            </div>
            <div className="left_part_content">
              <div className="left_content">
                <h1>Open Source Access</h1>
                <p>
                  Access our website's code freely on GitHub for complete
                  transparency and customization.
                </p>
              </div>
              {/* <div className="icon_section">
                <img
                  src="https://img.freepik.com/free-vector/operating-system-concept-illustration_114360-2195.jpg?t=st=1721585310~exp=1721588910~hmac=782ae45d58d93613629fb35d68a56d38e319c64782a8d76af71ab70efdc12d3c&w=740"
                  alt=""
                />
              </div> */}
            </div>
          </div>

          <div className="Guidence_middle_part">
            <div className="middle_part_image">
              {/* <img src={why_choose_us} alt="" /> */}
              <img
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1721135860~exp=1721139460~hmac=dc250b263e48e21474c177c7f73723253e822594587b13a5b3010938a92dd4da&w=740"
                // src={WhychooseUs}
                // src="https://img.freepik.com/free-vector/gradient-step-illustration_23-2150126725.jpg?t=st=1721585509~exp=1721589109~hmac=15c3f3222d58626b86552e00864eefa84c74cd4790f268d1c67c0cc2b1e231e9&w=740"
                alt=""
              />
            </div>
          </div>

          <div className="Guidence_right_part" data-aos="fade-down">
            <div className="right_part_content">
              <div className="right_content">
                <h1>Easy Navigation</h1>
                <p>
                  Effortlessly find what you need with our simple and intuitive
                  layout.
                </p>
              </div>
              {/* <div className="icon_section">
                <img
                  src="https://img.freepik.com/free-vector/speech-text-concept-illustration_114360-4235.jpg?t=st=1721585468~exp=1721589068~hmac=b6725939b1bd3d1a8d61773855597295542947d60ca2c87815b59626221d2207&w=740"
                  alt=""
                />
              </div> */}
            </div>

            <div className="right_part_content">
              <div className="right_content">
                <h1>Straightforward Guidance</h1>
                <p>
                  Follow detailed steps for each topic to ensure a smooth
                  installation process.
                </p>
              </div>
              {/* <div className="icon_section">
                <img
                  src="https://img.freepik.com/free-vector/gradient-step-illustration_23-2150126725.jpg?t=st=1721585509~exp=1721589109~hmac=15c3f3222d58626b86552e00864eefa84c74cd4790f268d1c67c0cc2b1e231e9&w=740"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Add more section ... */}
    </>
  );
};

export default Home;
