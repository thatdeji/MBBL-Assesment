import { IStackedCardProps } from "./StackedCard.types";

const StackedCard: React.FC<IStackedCardProps> = ({ icon, title, variant }) => {
  const bgColor =
    variant === "one"
      ? "bg-[#9FD4F0]"
      : variant === "two"
      ? "bg-[#7AD178]"
      : variant === "three"
      ? "bg-[#F89FBF]"
      : "bg-[#B085F8]";
  return (
    <article className="relative flex-1 min-h-[300px]">
      <div
        className={`absolute inset-0 transform -rotate-12 ${bgColor} rounded-2xl w-full min-h-full`}
      ></div>
      <div
        className={`relative backdrop-blur-[10px] ${bgColor} bg-opacity-10 rounded-2xl shadow-custom px-8 py-10 flex flex-col items-start justify-between w-full min-h-full`}
      >
        <div className="text-4xl font-semibold mb-4">{icon}</div>
        <p className="text-xl font-semibold text-gray-800">{title}</p>
      </div>
    </article>
  );
};

export default StackedCard;
