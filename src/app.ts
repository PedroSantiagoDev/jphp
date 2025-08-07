import { Avatar } from './components/avatar';
import { HeroText } from './components/heroText';
import { LinkItem } from './components/linkItem';
import { GridBackground } from './components/grid-background';

export function App(): string {
  return `
    <main class="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      ${GridBackground()}

      <div class="relative z-10 flex items-center justify-center p-4 min-h-screen">
        <header class="mx-auto text-center px-4 sm:px-6 lg:px-8">
          ${Avatar()}
          ${HeroText()}

          <nav data-animation="text-item" class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 text-2xl md:text-3xl" style="opacity: 0;">
            ${LinkItem({ href: '#about', text: 'Mais sobre mim' })}
            ${LinkItem({ href: '#projects', text: 'O que eu construí' })}
            ${LinkItem({ href: '#contact', text: 'Entre em contato' })}
          </nav>
        </header>
      </div>
    </main>
  `;
}
