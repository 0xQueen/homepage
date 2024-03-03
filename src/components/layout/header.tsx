"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const outlineColor = "#7b3466";
  const bgColor = "#9a397c";

  return (
    <header className="flex justify-center items-center h-22 px-4 md:px-6 mt-5">
      <div
        className="cozy-container border-2 border-purple-500 bg-opacity-70 backdrop-blur-lg rounded-full p-1"
        style={{ borderColor: bgColor }}
      >
        <div className="flex justify-center space-x-4 md:space-x-6">
          <div
            className={`rounded-full p-1 ${
              pathname === "/" ? "primary-color bg-opacity-75" : ""
            } ${
              pathname === "/"
                ? ""
                : "primary-hover hover:text-white transition-all duration-300"
            }`}
            style={{
              border: `2px solid ${
                pathname !== "/" ? outlineColor : "transparent"
              }`,
            }}
          >
            <Link href="/" passHref>
              <span
                className="nav-item text-white font-bold text-base md:text-lg"
                style={{ padding: "6px 16px" }}
              >
                Home
              </span>
            </Link>
          </div>
          <div
            className={`rounded-full p-1 ${
              pathname === "/profile" ? "primary-color bg-opacity-75" : ""
            } ${
              pathname === "/profile"
                ? ""
                : "primary-hover hover:text-white transition-all duration-300"
            }`}
            style={{
              border: `2px solid ${
                pathname !== "/profile" ? outlineColor : "transparent"
              }`,
            }}
          >
            <Link href="profile" passHref>
              <span
                className="nav-item text-white font-bold text-base md:text-lg"
                style={{ padding: "6px 16px" }}
              >
                Profile
              </span>
            </Link>
          </div>
          <div
            className={`rounded-full p-1 ${
              pathname === "/projects" ? "primary-color bg-opacity-75" : ""
            } ${
              pathname === "/projects"
                ? ""
                : "primary-hover hover:text-white transition-all duration-300"
            }`}
            style={{
              border: `2px solid ${
                pathname !== "/projects" ? outlineColor : "transparent"
              }`,
            }}
          >
            <Link href="/projects" passHref>
              <span
                className="nav-item text-white font-bold text-base md:text-lg"
                style={{ padding: "6px 16px" }}
              >
                Projects
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
