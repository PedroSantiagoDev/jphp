interface LinkItemProps {
  href: string;
  text: string;
}

export function LinkItem({ href, text }: LinkItemProps): string {
  return `
    <a href="${href}" class="font-caveat text-2xl md:text-3xl relative group inline w-fit cursor-pointer transition-all duration-300 hover:scale-105">
      ${text}
      <span class="w-full scale-x-[30%] origin-left transition-transform duration-300 h-0.5 absolute bottom-0 start-0 group-hover:scale-x-100 bg-foreground/30" />
      <Icon class="absolute top-1/2 end-0 -translate-x-1/2 -translate-y-1/2 size-12 opacity-0 scale-50 transition-all duration-300 group-hover:scale-100 group-hover:opacity-10 group-hover:-translate-x-0 group-hover:-translate-y-3/4 group-hover:rotate-12" />
    </a>
  `;
}
