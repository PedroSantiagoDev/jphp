export function GridBackground(): string {
  return `
    <div
      class="absolute inset-0"
      style="
        background-image: radial-gradient(ellipse at top, hsla(0, 0%, 100%, 0.9), transparent 50%),
          linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        background-size: 100% 100%, 32px 32px, 32px 32px;
      "
    ></div>
  `;
}
