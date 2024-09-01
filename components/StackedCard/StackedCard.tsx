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

  const bgGradient =
    variant === "one"
      ? "bg-stackedOne"
      : variant === "two"
      ? "bg-stackedTwo"
      : variant === "three"
      ? "bg-stackedThree"
      : "bg-stackedFour";
  return (
    <article className="relative w-full h-[200px] lg:h-[280px]">
      <div
        className={`absolute inset-0 transform -rotate-12 ${bgGradient} rounded-2xl w-full h-full shadow-stackedCard`}
      ></div>
      <div
        className={`relative backdrop-blur-[20px] ${bgColor} bg-opacity-10 rounded-2xl shadow-custom px-8 py-10 flex flex-col items-start justify-between w-full h-full min-h-full`}
      >
        <div className="mb-4">{icon}</div>
        <p className="text-xl lg:text-2xl font-semibold text-gray-800">
          {title}
        </p>
      </div>
    </article>
  );
};

export default StackedCard;
