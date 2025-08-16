import { Badge } from "./ui/badge";

interface Experience {
  title: string;
  time: string;
  pathLogo: string;
  enterprise: string;
  model: string;
  description: string;
  stack: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="mb-2">
      <header className="flex justify-between items-start mb-2">
        <div className="mb-2">
          <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
            {experience.title}
          </h3>
          <p className="text-xs font-normal uppercase tracking-wider">
            {experience.time}
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2">
            <img
              className="w-5 h-5 rounded"
              alt="logo da empresa"
              src={experience.pathLogo}
            />
            <span className="text-sm font-normal text-black-400 dark:text-black-400">
              {experience.enterprise}
            </span>
          </div>
          <p className="text-sm">{experience.model}</p>
        </div>
      </header>
      <p className="text-sm mb-2 text-muted-foreground">
        {experience.description}
      </p>
      <footer className="flex flex-wrap gap-2">
        {experience.stack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </footer>
    </article>
  );
}
