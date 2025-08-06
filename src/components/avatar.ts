
export function Avatar(): string {
  return `
    <figure data-animation="avatar" class="relative mb-3" style="opacity: 0;">
      <div class="relative inline-block">
        <div class="absolute inset-0 bg-blue-400 rounded-full blur-2xl sm:blur-3xl opacity-30 scale-110 animate-pulse"></div>
        <div class="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto">
          <img
            src="/placeholder.svg"
            alt="João Pedro"
            width="192"
            height="192"
            class="rounded-full object-cover border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl w-full h-full"
          />
        </div>
      </div>
    </figure>
  `;
}
