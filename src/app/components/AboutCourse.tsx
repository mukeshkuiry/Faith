import React from "react";

type Props = {
  about: string;
  whatToExpect: string[];
  keyTopic: {
    title: string;
    description: string[];
  };
};

const AboutCourse = ({ about, whatToExpect, keyTopic }: Props) => {
  return (
    <div className="p-4 space-y-6 w-2/3">
      <h1 className="font-bold text-2xl">About the course</h1>
      <p>{about}</p>
      <h1 className="font-bold text-2xl">What to expect from the course</h1>
      <div className="space-y-2">
        {whatToExpect.map((item, index) => {
          return (
            <p key={index} className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              {item}
            </p>
          );
        })}
      </div>
      <h1 className="font-bold text-2xl">Key topic covered</h1>
      <p>{keyTopic.title}</p>
      <div className="space-y-2">
        {keyTopic.description.map((item, index) => {
          return (
            <p key={index} className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <span>
                <strong>{item.split(" ").slice(0, 5).join(" ")}</strong>{" "}
                {item.split(" ").slice(5).join(" ")}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCourse;
