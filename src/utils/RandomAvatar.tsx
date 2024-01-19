import { useState } from "react";
import { avatarData } from "../data/avatarData";
import getRandomInteger from "./getRandomInteger";

type RandomAvatarProps = {
  className?: string;
};

const RandomAvatar = ({ className }: RandomAvatarProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    getRandomInteger(0, 5),
  );

  const handleClick = () => {
    setCurrentIndex(getRandomInteger(0, 4));
  };

  return (
    <div onClick={handleClick} className={`${className} w-fit`}>
      {avatarData[currentIndex]}
    </div>
  );
};

export default RandomAvatar;
