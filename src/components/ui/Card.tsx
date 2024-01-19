// import { useEffect, useState } from "react";

import { useEffect } from "react";
import Icon from "../../utils/Icon";
import Badge from "./Badge";

type CardProps = {
  data: {
    title: string;
    techStack: string[];
    description: string;
    img: {
      src: string;
      position: string;
    }[];
    link: string;
    github: string;
    backend?: string;
  };
};

const Card = ({ data }: CardProps) => {
  const { title, techStack, description, img, link, github } = data;
  const techStackList = techStack.map((e, idx) => {
    return <Badge key={idx} title={e} />;
  });

  useEffect(() => {
    console.log(img[0].position);
  }, [img]);

  return (
    <div className="relative m-6 flex h-fit flex-col justify-between gap-10 border border-gray-600 bg-gray-800 p-4 hover:brightness-105 active:shadow-none">
      <div className="absolute -right-3 -top-3 mx-1 flex gap-2 border border-gray-600 bg-gray-800 px-3 py-2">
        <a href={github}>
          <Icon type="github" />
        </a>
        <a href={link}>
          <Icon type="link" />
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="max-w-[320px] text-pretty text-gray-400">{description}</p>
        <div className="flex max-w-[300px] flex-wrap">{techStackList}</div>
      </div>
      {/* `object-fit` is fill by default */}
      <img
        className={`h-[250px] w-[350px] object-cover object-${img[0].position}  brightness-90 transition-all`}
        src={img[0].src}
        alt={`Screenshot of the ${title} project`}
      />
    </div>
  );
};

export default Card;
