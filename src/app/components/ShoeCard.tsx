import Image from "next/image";

type Props = {
  imageURL: string;
  changeBigShoeImage: (imageURL: string) => void;
  bigShoeImage: string;
};

export const ShoeCard = (props: Props) => {
  const { imageURL, bigShoeImage, changeBigShoeImage } = props;
  const handleClick = () => {
    if (imageURL !== bigShoeImage) {
      changeBigShoeImage(imageURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${imageURL === bigShoeImage ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imageURL}
          alt="shoe-collection"
          width={127}
          height={103}
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};
