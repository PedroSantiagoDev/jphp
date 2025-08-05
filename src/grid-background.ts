export function GridBackground(): string {
  return `
    <div
      class="absolute inset-0 opacity-20 dark:opacity-10"
      style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.2) 1px, transparent 1px);
        background-size: 32px 32px;
      "
    ></div>
  `;
}
