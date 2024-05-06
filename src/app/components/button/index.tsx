import Image from "next/image";
type Props = {
  label: string;
  iconUrl?: string;
  className?: string;
};

export const Button = (props: Props) => {
  const { label, iconUrl, className } = props;
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-monserrat text-lg leading-none rounded-full ${className ? className : "bg-coral-red rounded-full text-white border-coral-red"}`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
          width={20}
          height={10}
        ></Image>
      )}
    </button>
  );
};
