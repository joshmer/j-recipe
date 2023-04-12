import Image from "next/image";

interface Props {
  text: string;
  weight: number;
  image: string | null;
}

const RecipeItem = ({ text, weight, image }: Props) => {
  return (
    <div className="flex w-[430px] space-x-1 p-2 items-center text-slate-600 bg-white rounded-lg hover:-translate-y-0.5 transition-all duration-150">
      {image && (
        <Image
          className="rounded-lg"
          src={image}
          width={50}
          height={50}
          alt="ing"
        />
      )}
      {!image && (
        <span className="text-lg font-bold border rounded-lg text-center p-5">
          {text.substring(0, 1)}
        </span>
      )}
      <div className="flex flex-col space-y-1">
        <h2 className="text-sm font-bold">{text}</h2>
        <p className="text-sm italic">{`${weight}g`}</p>
      </div>
    </div>
  );
};

export default RecipeItem;
