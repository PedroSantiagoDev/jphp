
export function HeroText(): string {
  return `
    <section>
      <h1 data-animation="text-item" class="text-lg md:text-2xl 2xl:text-3xl font-medium text-center mb-5" style="opacity: 0;">
        Olá, eu sou o Pedro <span id="wave" class="inline-block">👋</span>
      </h1>

      <div data-animation="text-item" class="mb-12" style="opacity: 0;">
        <h2
          class="text-2xl sm:text-3xl md:text-5xl 2xl:text-7xl font-bold text-center mb-4"
        >
          <span class="gradient-text">desenvolvedor de software</span>
        </h2>
        <p class="text-2xl sm:text-3xl md:text-5xl 2xl:text-7xl font-bold text-center">
          que ama construir coisas
        </p>
        <p class="text-2xl sm:text-3xl md:text-5xl 2xl:text-7xl font-bold text-center">
          para a
          <span
            class="relative gradient-text"
          >
            web
            <span data-animation="underline" class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style="transform: scaleX(0); transform-origin: left;"></span>
          </span>
          .
        </p>
      </div>
    </section>
  `;
}
