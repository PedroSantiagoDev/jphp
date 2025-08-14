import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface CarouselComponentProps {
  href: string;
  title: string;
  description: string;
  img: string;
  tags: string[];
}

export function CarouselComponent({
  href,
  title,
  description,
  img,
  tags,
}: CarouselComponentProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      tabIndex={0}
    >
      <div className="border text-card-foreground shadow overflow-hidden border-zinc-200 rounded-md bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30">
        <div>
          <div className="relative aspect-[16/9] rounded-t-md overflow-hidden">
            <img
              className="object-cover relative transition-transform duration-300 group-hover:scale-105"
              src={img}
            />
          </div>
          <div className="p-2 flex items-start relative">
            <div>
              <h3 className="text-md from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text">
                {title}
              </h3>
              <p className="text-xs text-zinc-400">{description}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {tags.map((tag) => (
                  <Badge variant="secondary" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="absolute top-2 right-2">
              <ArrowUpRight className="size-3 from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
