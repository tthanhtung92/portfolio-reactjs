import React from "react";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import { UseTheme } from "../contexts/ThemeContext";
import data from "../data/portfolio.json";

const Resume = () => {
  const { theme } = UseTheme();
  return (
    <div className="container mx-auto mb-10">
      <Header isResume />
      <div className="mt-10 w-full flex flex-col items-center">
        <div
          className={`w-full ${
            theme === "dark" ? "bg-slate-800" : "bg-gray-100"
          } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
        >
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <h2 className="text-xl mt-5">{data.resume.tagline}</h2>
          <h2 className="w-full text-xl mt-5 opacity-50 text-justify">
            {data.resume.description}
          </h2>
          <div className="mt-2">
            <Socials />
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold">Projects</h1>

            {data.resume.experiences.map(
              ({ id, dates, type, position, bullets }) => (
                <ProjectResume
                  key={id}
                  dates={dates}
                  type={type}
                  position={position}
                  bullets={bullets}
                ></ProjectResume>
              )
            )}
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="mt-2">
              <span className="text-xl">
                {data.resume.education.universityName}
              </span>
              <span className="ml-4 text-sm opacity-75">
                {data.resume.education.universityDate}
              </span>
              <p className="text-md mt-2 opacity-50">
                {data.resume.education.universityPara}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex mob:flex-col desktop:flex-row justify-between">
              {data.resume.languages && (
                <div className="mt-2 mob:mt-5">
                  <h2 className="text-lg">Languages</h2>
                  <ul className="list-disc">
                    {data.resume.languages.map((language, index) => (
                      <li key={index} className="ml-5 py-2">
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.resume.frameworks && (
                <div className="mt-2 mob:mt-5">
                  <h2 className="text-lg">Frameworks</h2>
                  <ul className="list-disc">
                    {data.resume.frameworks.map((framework, index) => (
                      <li key={index} className="ml-5 py-2">
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.resume.others && (
                <div className="mt-2 mob:mt-5">
                  <h2 className="text-lg">Others</h2>
                  <ul className="list-disc">
                    {data.resume.others.map((other, index) => (
                      <li key={index} className="ml-5 py-2">
                        {other}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
