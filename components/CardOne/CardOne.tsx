import { ICardOneProps } from "./CardOne.types";

const CardOne: React.FC<ICardOneProps> = ({
  title,
  description,
  imageContent,
  extraContent,
  variant = "one",
}) => {
  const variantBg =
    variant === "one"
      ? "bg-lightPink"
      : variant === "two"
      ? "bg-lightBlue"
      : "bg-lightIndigo";
  return (
    <div className={`card-one ${variantBg}`}>
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
        <p className="text-grey text-base font-medium max-w-[400px]">
          {description}
        </p>
      </div>
      <div>{extraContent}</div>
      {imageContent}
    </div>
  );
};

export default CardOne;
