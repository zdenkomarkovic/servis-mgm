import {
  CardHeader,
  CardTitle,
  CardContent,
  Card,
  CardFooter,
} from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { Cards1Data } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

const Cards1 = ({ title, data }: { title: string; data: Cards1Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 md:px-32 mx-auto py-10 md:py-20 border-t-2 space-y-6 md:space-y-8">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold mb-10 md:mb-20">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.slice(0, 3).map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <Link href={item.link}>
                  <OneCard item={item} />
                </Link>
              </MotionComponent1>
            );
          })}
        </div>
        <div className="grid md:grid-cols-6 text-center gap-6 md:gap-8 items-stretch">
          <div></div>{" "}
          {data.slice(3).map((item) => {
            return (
              <div key={item.id} className={"col-span-2 h-full"}>
                <MotionComponent1>
                  {" "}
                  <Link href={item.link}>
                    <OneCard item={item} />
                  </Link>
                </MotionComponent1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  return (
    <Card className="h-full flex flex-col justify-between  overflow-hidden relative border-primary">
      <CardHeader className="">
        <div className="w-full relative">
          <div className="absolute w-full h-full bg-black/50"></div>
          <Image
            src={item.image}
            width={500}
            height={500}
            alt="servis racunara"
            className="w-full aspect-video object-cover"
          />
        </div>

        <CardTitle className="text-2xl md:text-3xl text-primary absolute top-5 right-5 left-5">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl mt-5">
        <p>{item.text}</p>
      </CardContent>
      <CardFooter className="text-base md:text-lg ml-auto text-primary">
        Vidite vise...
      </CardFooter>
    </Card>
  );
};
