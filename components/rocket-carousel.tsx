import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function RocketCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  return (
    <>
      <h2 className="text-4xl font-normal tracking-tight leading-none md:text-5xl lg:text-7xl">
        Images
      </h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-3xl"
      >
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i}>
              <img
                className="h-auto min-w-full rounded-lg aspect-[3/2] object-cover"
                src={img}
                alt={name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="inline-flex justify-between w-full py-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
