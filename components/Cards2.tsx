import { Cards2Data } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2 = ({ title, data }: { title: string; data: Cards2Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 border-b-2 space-y-6 md:space-y-8">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold mb-10 md:mb-20">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.slice(0, 3).map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />
              </MotionComponent1>
            );
          })}
        </div>
        <div className="grid md:grid-cols-6 text-center gap-6 md:gap-8 items-stretch">
          <div></div>{" "}
          {data.slice(3).map((item) => {
            return (
              <div key={item.id} className="col-span-2">
                <MotionComponent1>
                  <OneCard key={item.id} item={item} />
                </MotionComponent1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full border-primary">
      <CardHeader className=" text-primary font-bold p-2">
        <IconComponent className="text-4xl md:text-6xl mx-auto my-2" />
        {item.title}
      </CardHeader>
      <CardContent className="">{item.text}</CardContent>
    </Card>
  );
};
