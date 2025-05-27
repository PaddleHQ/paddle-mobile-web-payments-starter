import Image from "next/image";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  active?: boolean;
};

export function Feature({ icon, title, description, image }: Props) {
  return (
    <div className="flex w-[240px] flex-col items-center gap-5 px-2 py-6">
      <div className="bg-foreground text-background w-fit rounded-lg p-4">{icon}</div>
      <div className="text-center">
        <p className="mb-2 font-bold">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="w-full rounded-lg border bg-white p-8 pb-0">
        <Image src={image} alt="App Image" width={304} height={445} />
      </div>
    </div>
  );
}
