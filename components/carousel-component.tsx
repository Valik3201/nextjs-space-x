import { RocketSection } from "@/components/rocket-section";
import { StageSection } from "@/components/stage-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselComponentProps {
  data: Array<{
    title: string;
    content: any;
  }>;
}

export const CarouselComponent = ({ data }: CarouselComponentProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl"
    >
      <CarouselContent>
        {data.map(({ title, content }, index) => (
          <CarouselItem key={index}>
            <RocketSection subtitle={title}>
              <StageSection data={content} />
            </RocketSection>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="inline-flex justify-between w-full py-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};
