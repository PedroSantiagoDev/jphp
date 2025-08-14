import { CarouselComponent } from "@/components/carousel-component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselCardProps {
  projects: {
    href: string;
    title: string;
    description: string;
    img: string;
    tags: string[];
  }[];
}

export function CarouselCard({ projects }: CarouselCardProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="-ml-1">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CarouselComponent {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
