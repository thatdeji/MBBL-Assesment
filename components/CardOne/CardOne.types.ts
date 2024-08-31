export interface ICardOneProps {
  title: string;
  description: React.ReactNode;
  imageContent: React.ReactNode;
  extraContent?: React.ReactNode;
  variant: "one" | "two" | "three";
}
