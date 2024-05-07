import Image from "next/image";

type Props = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

export const ReviewCard = (props: Props) => {
  const { imgURL, customerName, rating, feedback } = props;
  console.log(imgURL);

  const star = "/assets/icons/star.svg";
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="object-contain rounded-full"
      ></Image>
      <p className="text-center mt-6 max-w-sm info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <Image
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        ></Image>
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 text-3xl text-center font-bold font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};
