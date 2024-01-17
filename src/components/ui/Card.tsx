// import { useEffect, useState } from "react";

import Icon from "../../utils/Icon";

type CardProps = {
  data: {
    title: string;
    techStack: string[];
    description: string;
    img: string[];
    link: string;
    github: string;
    backend?: string;
  };
};

const Card = ({ data }: CardProps) => {
  //   const [imageIndex, setImageIndex] = useState(0);

  //   useEffect(() => {
  //     if (data.img.length > 1) {
  //       setInterval(() => {
  //         setImageIndex(1);
  //         console.log(data.img.length);
  //       }, 5000);
  //     }
  //   }, [data.img.length]);

  const { title, techStack, description, img, link, github } = data;
  const techStackList = techStack.map((e) => {
    return <li>{e}</li>;
  });

  return (
    <a className="hover:brightness-110" href={link}>
      <div className="m-4 flex gap-4 border border-gray-600 bg-gray-800 p-4">
        <div>
          <h1>{title}</h1>
          <ul>
            Tech stack:
            {techStackList}
          </ul>
          <p>{description}</p>
          <a href={github}>
            <Icon type="github" />
          </a>
        </div>
        <div className="flex h-[250px] w-[400px] items-center">
          <img
            width="max-h-full max-w-full"
            src={img[0]}
            alt={`Screenshot of the ${title} project`}
          />
        </div>
      </div>
    </a>
  );
};

export default Card;
