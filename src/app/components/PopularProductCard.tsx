import Image from "next/image";

type Props = {
  imgURL: string;
  price: string;
  name: string;
  rating: string;
};

export const PopularProductCard = (props: Props) => {
  const star = "/assets/icons/star.svg";
  return (
    <div className="flex flex-1 flex-col w-full">
      <Image
        src={props.imgURL}
        alt={props.name}
        width={280}
        height={280}
        className="shadow-xl rounded-3xl"
      ></Image>
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating" width={24} height={24}></Image>
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {props.rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {props.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{props.price}</p>
    </div>
  );
};
