import Image from "next/image";

type Props = {
  imgURL: string;
  label: string;
  subtext: string;
};

export const ServiceCard = (props: Props) => {
  const { imgURL, label, subtext } = props;
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
        <Image src={imgURL} alt={label} width={24} height={24}></Image>
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="font-montserrat text-lg leading-normal text-slate-gray mt-3 break-words">
        {subtext}
      </p>
    </div>
  );
};
