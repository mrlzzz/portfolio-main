import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../utils/Icon";
import { NavRefType } from "../types/NavRefType";

/*
  At the moment, I have switched from NavLink into regular spans
  for infra-page navigation using Element.scrollIntoView(). Thus, commented blocks.
  I can go back it for cross-page navigation.
*/

// type NavLinkRenderProps = {
//   isActive: boolean;
//   isPending: boolean;
//   isTransitioning: boolean;
// };

type HeaderProps = {
  navRefs: NavRefType;
};

const Header = ({ navRefs }: HeaderProps) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("about");
  const [parentAnimate] = useAutoAnimate();

  const handleMobileMenuClick = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  const handleSetIsActive = (nav: string) => {
    setIsActive(nav);
  };

  const handleScrollIntoView = useCallback(
    (ref: React.RefObject<HTMLElement>) => {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  // const activeLinkCallback = ({ isActive }: NavLinkRenderProps) => {
  //   return isActive ? "text-red-400" : "";
  // };

  const mobileMenuIconPath: string = toggleMobileMenu
    ? "M18 6 6 18 M6 6 18 18"
    : "M4 6h16M4 12h16M4 18h16";

  return (
    <>
      {/* Header hack - set max-width first then mx-auto, set height using padding */}
      <header
        ref={parentAnimate}
        className="mx-auto w-full max-w-7xl border-b border-gray-600 px-4 py-6 font-mono"
      >
        {/* Desktop navbar */}
        <div className="flex items-center justify-between font-medium">
          <nav className="transition-all hover:text-red-400">
            <NavLink to="/">{"dev > pawel"}</NavLink>
          </nav>
          <nav className="hidden lg:flex [&>a:not(:first-child)]:ml-4 [&>a]:cursor-pointer">
            <a
              onClick={() => {
                handleScrollIntoView(navRefs.about);
                handleSetIsActive("about");
              }}
              className={`${isActive === "about" ? "text-red-400" : ""} transition-colors hover:text-red-400`}
            >
              About
            </a>
            <a
              onClick={() => {
                handleScrollIntoView(navRefs.projects);
                handleSetIsActive("projects");
              }}
              className={`${isActive === "projects" ? "text-red-400" : ""} transition-colors hover:text-red-400`}
            >
              Projects
            </a>
            <a
              onClick={() => {
                handleScrollIntoView(navRefs.contact);
                handleSetIsActive("contact");
              }}
              className={`${isActive === "contact" ? "text-red-400" : ""} transition-colors hover:text-red-400`}
            >
              Contact
            </a>
          </nav>
          <nav className="hidden items-center lg:flex [&>span:not(:first-child)]:ml-4">
            <span>
              <a
                href="https://www.linkedin.com/in/pawel-kowalinski/"
                className="transition-colors hover:text-red-400"
              >
                <Icon type="linkedIn" />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/mrlzzz/"
                className="transition-colors hover:text-red-400"
              >
                <Icon type="github" />
              </a>
            </span>
          </nav>
          {/* Mobile navbar menu button */}
          <div className="lg:hidden">
            <button onClick={handleMobileMenuClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={mobileMenuIconPath} />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile navbar */}
        {toggleMobileMenu ? (
          <div className="flex flex-col p-1 text-right lg:hidden [&>*]:py-1">
            <a
              /* 
                These onClicks are `async`, so the `scrollIntoView`
                can calculate position only after mobile navbar toggles off,
                otherwise calculated position is off.
              */
              onClick={async () => {
                await handleMobileMenuClick();
                handleScrollIntoView(navRefs.about);
                handleSetIsActive("about");
              }}
              className={`${isActive === "about" ? "text-red-400" : ""} transition-colors hover:text-red-400`}
            >
              About
            </a>
            <a
              onClick={async () => {
                await handleMobileMenuClick();
                handleScrollIntoView(navRefs.projects);
                handleSetIsActive("projects");
              }}
              className={`${isActive === "projects" ? "text-red-400" : ""} transition-colors hover:text-red-400`}
            >
              Projects
            </a>
            <a
              onClick={async () => {
                await handleMobileMenuClick();
                handleScrollIntoView(navRefs.contact);
                handleSetIsActive("contact");
              }}
              className={`${isActive === "contact" ? "text-red-400" : ""} transition-colors hover:text-red-400`}
            >
              Contact
            </a>
            {/*Mobile navbar line divider */}
            <hr className="mb-4 ml-auto mt-5 h-px w-16 border-0 bg-gray-600 !p-0" />
            <nav className="flex justify-end gap-2">
              <span>
                <a
                  href="https://www.linkedin.com/in/pawel-kowalinski/"
                  className="transition-colors hover:text-red-400"
                >
                  <Icon type="linkedIn" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/mrlzzz/"
                  className="transition-colors hover:text-red-400"
                >
                  <Icon type="github" />
                </a>
              </span>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default Header;
