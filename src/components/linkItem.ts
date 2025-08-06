
interface LinkItemProps {
  href: string;
  text: string;
}

export function LinkItem({ href, text }: LinkItemProps): string {
  return `
    <a href="${href}" class="link-item relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 sm:px-0 block font-cursive">
      <span>${text}</span>
      <span class="link-underline absolute -bottom-1 left-4 sm:left-0 right-4 sm:right-0 h-0.5 bg-blue-600 dark:bg-blue-500 rounded-full" style="transform: scaleX(0);"></span>
    </a>
  `;
}
