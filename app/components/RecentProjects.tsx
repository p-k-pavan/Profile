"use client";

import { FaLocationArrow } from "react-icons/fa6";

// import { projects } from "@/data/index";
import { PinContainer } from "./ui/PinContainer";
import Link from "next/link"
import { motion } from "framer-motion";

export const projects = [
  {
    id: 1,
    title: "Real Estate Web App (MERN Stack)",
    des: "A full-featured real estate platform built using MERN stack and Tailwind CSS. Enables users to manage property listings and contact landlords seamlessly.",
    img: "/estate.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/redux.svg"],
    link: "https://real-estate-zeta-dusky.vercel.app/",
  },
  {
    id: 2,
    title: "Audio Deepfake Detection System",
    des: "An AI-powered system to detect deepfake audio using TensorFlow, Flask, and Python. Offers a React-based frontend for audio upload and real-time prediction.",
    img: "/add.png",
    iconLists: ["/re.svg", "/flask1.png", "/python_104451.png", "/sound1.png", "/TensorFlow.png"],
    link: "https://audio-deepfake-detection-ui.vercel.app",
  },
  {
    id: 3,
    title: "CI/CD Pipeline with ArgoCD on AWS EKS",
    des: "Implements a robust end-to-end CI/CD pipeline using Jenkins, Docker, Kubernetes (EKS), and ArgoCD, with integrated monitoring through Grafana.",
    img: "/end to end.gif",
    iconLists: ["/jenkins.svg", "/docker.svg", "/kubernetes.svg", "/Argo CD.svg", "/Grafana.png"],
    link: "https://github.com/p-k-pavan/End-to-End-CI-CD-Pipeline-with-ArgoCD-on-AWS-EKS",
  },
  {
    id: 4,
    title: "Blue-Green Deployment with Kubernetes",
    des: "A deployment strategy using Kubernetes, Git, Jenkins, and load balancer to ensure zero-downtime release with seamless traffic switching.",
    img: "/blue greem.webp",
    iconLists: ["/bgd.png", "/lb.png", "/jenkins.svg", "/git.svg", "/lb.png"],
    link: "https://github.com/p-k-pavan/Blue-Green-Deployment-Strategy-with-Kubernetes",
  },
  {
    id: 5,
    title: "3-Tier Architecture on AWS",
    des: "An AWS-based 3-tier architecture demonstrating Route 53, EC2, RDS, IAM, and CloudWatch for a scalable, secure, and observable web application setup.",
    img: "/3-tier aws.png",
    iconLists: ["/Route53.svg", "/aas.svg", "/RDS.svg", "/iam.svg", "/CloudWatch.svg"],
    link: "https://aws.amazon.com/",
  },
  {
    id: 6,
    title: "FusionMeet – Video Conferencing App",
    des: "A modern video conferencing platform powered by ZegoCloud, Firebase, and Redux. Features real-time video, authentication, and responsive UI using Tailwind.",
    img: "/p1.png",
    iconLists: ["/tail.svg", "/redux.svg", "/firebase.svg", "/zegocloud.png", "/elasticui.svg"],
    link: "https://fusion-meet.vercel.app/",
  },
];


const RecentProjects = () => {
  return (
    <div className="py-10 " id="project">


      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 animate-gradient">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          A collection of my recent work and experiments
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="vist" href="https://twitter.com">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 bg-black">
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
