import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2Kosina = ({ title, data }: { title: string; data: string[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 border-b-2 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
            {data.slice(0, 3).map((item, i) => {
              return (
                <MotionComponent1 key={i}>
                  <OneCard item={item} />
                </MotionComponent1>
              );
            })}
          </div>
          <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
            <div></div>{" "}
            {data.slice(3).map((item, i) => {
              return (
                <MotionComponent1 key={i}>
                  <OneCard item={item} />
                </MotionComponent1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2Kosina;

const OneCard = ({ item }: { item: string }) => {
  // const IconComponent = item.icon;

  return (
    <Card className="h-full relative overflow-hidden  bg-transparent border-primary shadow-primary shadow-lg hover:shadow-xl">
      <svg
        className="absolute inset-0 w-full h-full text-card"
        viewBox="0 0 256 160"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 256,0 192,160 0,160" fill="currentColor" />
      </svg>

      <CardHeader className="relative z-10"></CardHeader>
      <CardContent
        className="relative flex gap-5 items-center justify-start
      "
      >
        <div className="text-3xl md:text-4xl text-primary">
          {/* <IconComponent className="" /> */}
        </div>
        <p className=" text-left w-2/3 py-3">{item}</p>
      </CardContent>
    </Card>
  );
};
