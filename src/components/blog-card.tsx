import { Badge } from "./ui/badge";
import { CalendarIcon } from "lucide-react";

interface BlogCardProps {
  tags: string[];
  title: string;
  description: string;
  date: string;
}

export function BlogCard({ tags, title, description, date }: BlogCardProps) {
  return (
    <div className="group relative w-full  overflow-hidden rounded-lg bg-card shadow-lg transition-transform duration-300 ease-in-out hover:scale-102">
      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-2xl font-bold text-card-foreground">
          {title}
        </h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <span className="text-sm text-primary">Ler mais</span>
      </div>
    </div>
  );
}
