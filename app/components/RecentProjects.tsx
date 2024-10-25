"use client";

import { FaLocationArrow } from "react-icons/fa6";

// import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";
import Link from "next/link"

export const projects = [
  {
    id: 1,
    title: "RealEstate using MERN stack",
    des: "Real estate app with MERN, React, Tailwind, allowing listing management and landlord contact",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/redux.svg"],
    link: "https://mern-realestate-eyjg.onrender.com/",
  },
  {
    id: 2,
    title: "CarePlus-care Management System",
    des: "CarePlus - A care management system with user login, appointment booking, and Appwrite-powered backend for seamless functionality.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.svg", "/t1.svg"],
    link: "https://carepulse-sigma-coral.vercel.app/",
  },
  {
    id: 3,
    title: "MINI GIT-HUB",
    des: "Develop a professional GitHub-like platform using React, Tailwind CSS, JavaScript, MongoDB, and Passport for robust authentication and seamless user experience.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/git.svg","/passport.png"],
    link: "https://git-hub-owds.onrender.com/",
  },
  {
    id: 4,
    title: "FUSIONMEET",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends",
    img: "/p1.png",
    iconLists: [ "/tail.svg", "/redux.svg", "/firebase.svg", "/zegocloud.png" ,"/elasticui.svg"],
    link: "https://fusion-meet.vercel.app/",
  },
];

const RecentProjects = () => {
  return (
    <div className="py-20" id="project">
      <h1 className="text-center font-bold text-2xl">
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="vist" href="https://twitter.com">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimh" />
                </div>

                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute button-0"
                />
              </div>
              <h1 className="lg:text-xl lg:font-normal font-light teaxt-sm line-clamp-2">
                {" "}
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link href={item.link}>
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
