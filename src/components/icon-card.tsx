import type { ElementType } from "react";

interface IconCardProps {
  icon: ElementType;
  title: string;
}

export function IconCard({ icon: Icon, title }: IconCardProps) {
  return (
    <li
      className="border shadow overflow-hidden rounded-md border-zinc-200 bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="group flex aspect-square select-none flex-col items-center justify-center p-2">
        <Icon className="fill-primary group-hover:-translate-y-1 size-10 transition-all duration-300 text-primary" />
        <span className="mt-3 text-sm">{title}</span>
      </div>
    </li>
  );
}