export function GridBackground(): string {
  return `
    <div
      class="fixed inset-0 -z-[1] pointer-events-none"
      style="opacity: 1; will-change: auto"
    >
      <svg
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 dark:[mask-image:linear-gradient(to_bottom_right,#ffffff80,transparent,#ffffff30)] [mask-image:linear-gradient(to_bottom_right,#fff,transparent,#fff)]"
      >
        <defs>
          <pattern
            id="«rp»"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 30V.5H30" fill="none" stroke-dasharray="0"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#«rp»)"
        ></rect>
      </svg>
    </div>
  `;
}
