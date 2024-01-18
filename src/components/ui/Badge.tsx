type BadgeProps = {
  title: string;
};

const Badge = ({ title }: BadgeProps) => {
  return (
    <div className="my-[4px] mr-[4px] w-fit rounded-xl border border-gray-400 bg-gray-700 px-2 py-[2px] text-xs text-gray-400">
      {title}
    </div>
  );
};

export default Badge;
