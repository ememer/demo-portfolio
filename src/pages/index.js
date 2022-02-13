import React, { useState } from "react";

import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import sal from "sal.js";

import AkcentBox from "../components/AkcentBox";
import Content from "../components/Content";
import DesignSkillBox from "../components/DesignSkillBox";
import DevelopingSkillBox from "../components/DevelopingSkillBox";
import InterestingFacts from "../components/InterestingFacts";
import Layout from "../components/Layout";
import ProjectGallery from "../components/ProjectsGallery";
import { designList } from "../shared/utils/design";
import { developingList, stylingList } from "../shared/utils/developing";
import { galleryProjects } from "../shared/utils/galleryData";
import { interestingFacts } from "../shared/utils/interestingFacts";

const interestingFactsClassName =
  "absolute top-0 lg:top-1/3 right-0 lg:right-2/2 w-full lg:w-3/4 bg-mainDark-200 scale-75 lg:scale-none cursor-pointer";

const Index = () => {
  const [currentSelectedAkcentIndex, setCurrentSelectedAkcentIndex] =
    useState(null);
  const [isDribbbleInviteVisible, setIsDribbbleInviteVisible] = useState(false);

  sal();
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <section className="flex flex-col items-center md:items-start w-full min-h-70-screen py-10 px-4 md:px-10 text-2xl lg:text-5xl font-light">
            <div className="h-full space-y-2 lg:space-y-2">
              <h1 className="text-5xl lg:text-8xl font-bold ">
                Hi<span className="font-medium">!</span>
              </h1>
              <h2>My name is Michał.</h2>
              <p>
                {" "}
                I'm interesting in{" "}
                <span className="font-medium">JS Developing</span>
                <span className="text-blue-300"> &</span>{" "}
                <span className="font-medium">UI Designing.</span>
              </p>
            </div>
          </section>
          <section className="py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <AkcentBox className="relative w-full min-h-50-screen">
                {interestingFacts.map((box, index) => (
                  <InterestingFacts
                    onSelect={setCurrentSelectedAkcentIndex}
                    image={box.imageSrc}
                    boxId={index}
                    key={box.id}
                    paragraph={box.paragraph}
                    title={box.title}
                    className={clsx(
                      interestingFactsClassName,
                      currentSelectedAkcentIndex === index
                        ? box.shuffle
                        : box.className
                    )}
                  />
                ))}
              </AkcentBox>
              <h2
                data-sal="flip-up"
                data-sal-duration="1000"
                data-sal-easing="ease-in-out-quad"
                className="inline-block w-full px-2 my-5 text-3xl lg:text-4xl"
              >
                Additionally I like motion design too
                <span className="inline-block w-full text-sm font-light text-blue-300 animate-pulse">
                  {" "}
                  Click on each boxes 🤤
                </span>
              </h2>
            </div>
          </section>
          <section className="py-20">
            <div className="w-full">
              <h2
                id="design"
                className="py-6 my-5 text-5xl font-bold text-center"
              >
                DESIGN
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-10">
                <div className="grid order-2 grid-cols-1 md:grid-cols-2 gap-2 w-full">
                  {designList.map((design) => (
                    <DesignSkillBox
                      key={design.design}
                      image={design.icon}
                      title={design.design}
                      skill={design.level}
                      className={design.colors}
                    />
                  ))}
                </div>
                <Content
                  titleClassName="text-left"
                  conteinerCalssName="flex order-1 justify-around items-center"
                  title="Started with MS Paint"
                >
                  {" "}
                  Couple years ago like a kid i was started creating things in
                  MS Paint and some guy said "Hey this is PhotoShop try it!".
                  Then i jon to world of design
                  <span className="font-semibold">
                    {" "}
                    and now working with...
                  </span>
                </Content>
              </div>
            </div>
            <div className="relative w-full md:w-3/4 mx-auto">
              {isDribbbleInviteVisible && (
                <div className="flex absolute right-1/2 lg:right-1/4 bottom-4 items-center font-light animate-pulse">
                  {" "}
                  You are invited!
                  <FontAwesomeIcon
                    className="ml-5 animate-ping"
                    icon={faArrowRight}
                  />
                </div>
              )}
              <h2
                id="design-projects"
                className="w-full py-6 text-4xl font-semibold text-center"
              >
                PROJECTS
              </h2>
              <ProjectGallery
                onClick={setIsDribbbleInviteVisible}
                data={galleryProjects}
                isClicked={isDribbbleInviteVisible}
              />
              <div className="flex flex-col w-full p-4 text-right">
                Checkout my Dribble site 😏{" "}
                <a
                  className=" text-blue-300"
                  href="https://www.dribbble.com/ememer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="mr-2" icon={faDribbble} />
                  Dribble.com
                </a>
              </div>
            </div>
          </section>
          <section>
            <h2
              id="developing"
              className="py-6 my-5 text-5xl font-bold text-center"
            >
              DEVELOPING
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items">
              <div
                data-sal="fade"
                data-sal-easing="ease-out-cubic"
                data-sal-delay="600"
                data-sal-duration="1300"
              >
                {developingList.map((devItem) => (
                  <DevelopingSkillBox
                    key={devItem.envy}
                    title={devItem.envy}
                    image={devItem.img}
                    tech={devItem.technology}
                    feauture={devItem.planed}
                    imgAlt={devItem.imgAlt}
                    imgClassName={"bg-yellow-200"}
                  />
                ))}
                {stylingList.map((stylingItem) => (
                  <DevelopingSkillBox
                    key={stylingItem.envy}
                    title={stylingItem.envy}
                    image={stylingItem.img}
                    tech={stylingItem.technology}
                    imgAlt={stylingItem.imgAlt}
                    imgClassName={"bg-blue-500"}
                  />
                ))}
              </div>
              <div
                data-sal="zoom-in"
                data-sal-easing="ease-out-cubic"
                data-sal-delay="400"
                data-sal-duration="1500"
                className="py-4"
              >
                <Content
                  titleClassName="text-left"
                  title="Wages, I require? 🤨"
                  conteinerCalssName="flex justify-around items-center"
                >
                  I decided to start learning programming, not only for
                  financial reasons ...
                  <span className="block w-full font-semibold">
                    Some time ago I realized that the current work does't give
                    me satisfaction, and the level of advancement over time has
                    stopped, instead of increasing.
                  </span>
                </Content>
                <Content
                  titleClassName="text-left"
                  title="Long way, silent mentors 😶"
                  conteinerCalssName="flex justify-around items-center"
                >
                  I started my adventure with Front-End with a course at
                  <span className="font-semibold"> Coderslab.</span> in
                  twenty-twenty.
                  <span className="block w-full my-10">
                    Days passed, motivation waned and knowledge wasted. If,
                    while reading this, you think that he is another fool who
                    spent the money because the paper will make him a programmer
                    - you are wrong. The course was supposed to shorten learning
                    and understanding the basics - it fulfilled its purpose.
                  </span>
                  <span className="my-20 font-bold">
                    At this point, I would like to thank all those who helped me
                    with my studies.
                  </span>
                  <span className="block w-full text-2xl font-bold">
                    Thanks a lot!✌
                  </span>
                </Content>
              </div>
            </div>
            <h2
              id="developing-projects"
              className="w-full py-6 text-4xl font-semibold text-center"
            >
              PROJECTS
            </h2>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
