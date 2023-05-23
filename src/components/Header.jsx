import { Popover } from "@headlessui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { UseTheme } from "../contexts/ThemeContext";
import data from "../data/portfolio.json";
import Button from "./Button";

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
  isResume,
}) => {
  const { name, showResume } = data;
  const { theme, handleThemeSwitch } = UseTheme();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToResume = () => {
    navigate("/resume");
  };

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 onClick className="font-medium p-2 laptop:p-0 link">
                {name}.
              </h1>
              <div className="flex items-center">
                {data.darkMode && (
                  <Button onClick={handleThemeSwitch}>
                    <img
                      className="h-6"
                      src={`/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {/* {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )} */}
                <Button onClick={handleContactScroll}>Contact</Button>
                {showResume && <Button onClick>Resume</Button>}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky dark:text-white top-0 z-10 tablet:flex backdrop-blur-sm`}
      >
        <h1
          onClick={navigateToHome}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isResume ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Projects</Button>
            <Button onClick={handleAboutScroll}>Skills</Button>
            <Button onClick={handleContactScroll}>Contact</Button>
            {showResume && (
              <Button onClick={navigateToResume} classes="first:ml-1">
                Resume
              </Button>
            )}
            <Button onClick={handleThemeSwitch}>
              <img
                src={`/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="darkMode"
                className="h-6"
              />
            </Button>
          </div>
        ) : (
          <div className="flex">
            {/* <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleContactScroll}>Contact</Button>
            {showResume && (
              <Button onClick={navigateToResume} classes="first:ml-1">
                Resume
              </Button>
            )} */}
            <Button onClick={handleThemeSwitch}>
              <img
                src={`/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt="darkMode"
                className="h-6"
              />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
