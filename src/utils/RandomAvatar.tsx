import { useState } from "react";
import { avatarData } from "../data/avatarData";
import getRandomInteger from "./getRandomInteger";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useInterval } from "usehooks-ts";

type RandomAvatarProps = {
  className?: string;
};

const RandomAvatar = ({ className }: RandomAvatarProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    getRandomInteger(0, 5),
  );

  useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avatarData.length);
  }, 10000);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avatarData.length);
  };

  return (
    <div onClick={handleClick} className={`${className} w-fit transition-all`}>
      {avatarData[currentIndex]}
    </div>
  );
};

export default RandomAvatar;
