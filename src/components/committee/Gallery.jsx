import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Gallery = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto space-y-8 px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
              Gallery
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Gallery
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at our gallery to see the vibrant events and
              activities organized by the IIITV Technical Committee.
            </p>
          </div>
          <Carousel className="w-full max-w-5xl">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width="1200"
                  height="675"
                  alt="Gallery Image 1"
                  className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width="1200"
                  height="675"
                  alt="Gallery Image 2"
                  className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width="1200"
                  height="675"
                  alt="Gallery Image 3"
                  className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/placeholder.svg"
                  width="1200"
                  height="675"
                  alt="Gallery Image 4"
                  className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
