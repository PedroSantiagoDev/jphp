export function HeroText(): string {
  return `
    <section>
      <h1 data-animation="text-item" class="text-lg md:text-2xl sm:text-3xl font-medium text-center">
        Olá, eu sou o Pedro <span id="wave" class="inline-block">👋</span>
      </h1>

      <div data-animation="text-item" class="mb-12">
        <h2
          class="text-2xl sm:text-3xl md:text-5xl 2xl:text-7xl font-bold text-center"
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
            web.
             <svg
                class="-z-20 absolute -bottom-2 2xl:-bottom-7 xl:-bottom-5 lg:-bottom-4 md:-bottom-4 sm:-bottom-2.5 end-0 sm:end-1 2xl:w-[11.5rem] md:w-[7.7rem] sm:w-[4.5rem] w-[4rem] dark:text-sky-700 text-sky-500 fill-none opacity-30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -6 200 60"
                aria-hidden="true"
                role="img"
                aria-label="Decorative Z underline"
              >
                <path
                  fill="currentColor"
                  d="M 21 11 C 83 -2 139 3 178 13 C 111 5 60 6 18 18 C 15 19 15 22 19 21 C 78 11 107 10 189 19"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="1"
                  pathLength="1"
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                  style={{ fill: 'inherit' }}
                />
              </svg>
          </span>
        </p>
      </div>
    </section>
  `;
}
