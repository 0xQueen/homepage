"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { SiNixos } from "react-icons/si";
import Link from "next/link";

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Card() {
  let [categories] = useState({
    About: [
      {
        id: 1,
        content: (
          <div className="mb-1">
            <div className="text-gray-700">
              <p className="align-middle prose prose-lg">
                i am a nice, socially deranged, funny and delusional person, who loves to
                help people mentally [i hope] and i also love to design websites.
                my hobbies are weird, and confusing such as; developing websites
                and reverse engineering [assembly woo scawwy]. as for my
                operating system i use
                <span className="inline-block px-1 align-middle">
                  <SiNixos style={{ color: "#be529c" }} />
                </span>
              </p>
            </div>
          </div>
        ),
      },
    ],
    Rules: [
      {
        id: 1,
        content: (
          <div className="mb-1">
            <p className="align-middle prose prose-lg">
              don't be toxic, don't start religion topic [i am an atheist & i
              support all religions and people], don't vent instantly, be honest
              and don't lie to me, don't have huge ego, don't be racist, don't
              be homophobic/transphobic, don't be self orianted. please strongly
              use
              <Link className="special" href="https://nohello.net/">
                {" "}
                nohello{" "}
              </Link>
              &{" "}
              <Link className="special" href="https://dontasktoask.com/">
                dontasktoask
              </Link>
              !
            </p>
          </div>
        ),
      },
    ],
    DMs: [
      {
        id: 1,
        content: (
          <div className="mb-1">
            <p className="align-middle prose prose-lg">
              my dm's are semi-open, meaning they're open, but i may not reply
              unless its important!
            </p>
          </div>
        ),
      },
    ],
  });

  return (
    <div className="max-w-4xl outline-none mx-auto px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8 custom-container">
      <Tab.Group>
        <Tab.List
          className="flex space-x-1 rounded-xl p-1"
          style={{ backgroundColor: "#2e1a27" }}
        >
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "primary-color shadow"
                    : "text-white-100 transition-all duration-300 secondary-hover hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "p-3 rounded-xl",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                idx === 0 && "border-pink-700 bg-opacity-70"
              )}
              style={{ backgroundColor: "#2e1a27", border: "none" }}
            >
              {posts.map((post) => (
                <div key={post.id}>{post.content}</div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <style jsx global>{`
        .focus-visible:focus {
          outline: none !important;
        }
        .focus-visible :focus:not(.focus-visible) {
          outline: none !important;
        }
        /* Remove focusing outline */
        :focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}
