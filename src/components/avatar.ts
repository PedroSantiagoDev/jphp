export function Avatar(): string {
  return `
    <figure data-animation="avatar" class="relative animate-fade-in">
      <div class="relative flex shrink-0 overflow-hidden rounded-full size-24 sm:size-36 md:size-40 2xl:size-48">
        <img
          src="/placeholder.svg"
          alt="João Pedro"
          width="192"
          height="192"
          class="aspect-square size-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-blue-400 rounded-full blur-2xl sm:blur-3xl opacity-30 scale-120"></div>
    </figure>
  `;
}
