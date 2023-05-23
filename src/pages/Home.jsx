import React, { useRef } from "react";
import { stagger } from "../animation/TextAnimation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import { useIsomorphicLayoutEffect } from "../utils/effect";

const Home = () => {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 40,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 250,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="relative">
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />

        <section className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          {/* <Socials className="mt-2 laptop:mt-5" /> */}
        </section>

        {/* Work */}
        <section className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects.</h1>

          <div className="mt-5 laptop:mt-5 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-2xl text-bold">Skills.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.skills.map((skills, index) => (
              <SkillCard
                key={index}
                name={skills.title}
                description={skills.description}
              />
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl text-justify laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </section>

        {/* Footer */}
        <Footer contactRef={contactRef} />
      </div>
    </div>
  );
};

export default Home;
