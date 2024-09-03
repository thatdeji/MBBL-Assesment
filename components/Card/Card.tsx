import { ICardProps } from "./Card.types";

const Card: React.FC<ICardProps> = ({
  title,
  description,
  imageContent,
  extraContent,
  variant = "one",
}) => {
  const variantBg =
    variant === "one"
      ? "bg-cardOne"
      : variant === "two"
      ? "bg-cardTwo"
      : "bg-cardThree";
  return (
    <div
      className={`rounded-[30px] shadow-sm space-y-4 p-8 min-h-[300px] flex flex-col justify-between w-full lg:p-16 lg:min-h-[400px] ${variantBg} relative overflow-hidden`}
    >
      <div>
        <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 mb-1 lg:mb-6">
          {title}
        </h3>
        <p className="text-grey text-sm lg:text-base font-medium max-w-[400px]">
          {description}
        </p>
      </div>
      <div>{extraContent}</div>
      {imageContent}
    </div>
  );
};

export default Card;
