/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

type Props = {
  profile: string;
  about: string;
  philosophy: string;
  social: {
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };
};

const AboutInstructor = (data: Props) => {
  return (
    <div className="flex justify-between gap-4">
      <img
        src={data.profile}
        alt={data.profile}
        className="h-40 w-40 rounded-full"
      />
      <div className="space-y-6">
        <div className="flex">
          <p className="w-1/2">{data.about}</p>
          <p className="w-1/2">{data.philosophy}</p>
        </div>
        <div className="flex justify-between">
          <a className="flex gap-1 items-center" href={data.social.facebook}>
            <FaFacebook /> Facebook
          </a>
          <a className="flex gap-1 items-center" href={data.social.twitter}>
            <FaTwitter />
            Twitter
          </a>
          <a className="flex gap-1 items-center" href={data.social.youtube}>
            <FaYoutube /> Youtube
          </a>
          <a className="flex gap-1 items-center" href={data.social.instagram}>
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutInstructor;
