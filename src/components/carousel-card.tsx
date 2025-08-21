import { CarouselComponent } from "@/components/carousel-component";
import AutoPlay from "embla-carousel-autoplay";
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
    tags: string[];
  }[];
}

export function CarouselCard({ projects }: CarouselCardProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        // loop: true,
      }}
      plugins={[AutoPlay({ delay: 3000 })]}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <CarouselComponent {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
