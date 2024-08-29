import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

interface Event {
    name: string;
    description: string;
    image: string;
}

interface EventCarouselProps {
    events: Event[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => {
    return (
        <Carousel
            className="w-full"
            opts={{ align: "center", loop: true }}
        >
            <CarouselContent>
                {events.map((event, index) => (
                    <CarouselItem key={index}>
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                            <img
                                src={event.image}
                                alt={event.name}
                                width={1200}
                                height={675}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                                    {event.name}
                                </h2>
                                <p className="mt-2 text-lg text-white md:text-xl">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default EventCarousel;