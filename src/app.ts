import { Avatar } from './components/avatar';
import { HeroText } from './components/heroText';
import { LinkItem } from './components/linkItem';
import { GridBackground } from './components/grid-background';

export function App(): string {
  return `
    <main class="min-h-screen bg-background dark:text-zinc-100 text-zinc-900">
      ${GridBackground()}

      <div class="min-h-dvh flex items-center justify-center px-6 w-full">
        <section class="pt-2 lg:-mt-8">
          <header class="mx-auto w-full max-w-screen-lg">
            <div class="flex flex-col items-center justify-start space-y-4">
              ${Avatar()}
              ${HeroText()}

              <nav data-animation="text-item" class="flex gap-4 lg:gap-8 flex-wrap items-center justify-center text-2xl md:text-3xl px-4 sm:px-0">
                ${LinkItem({ href: '#about', text: 'Mais sobre mim' })}
                ${LinkItem({ href: '#projects', text: 'O que eu construí' })}
                ${LinkItem({ href: '#contact', text: 'Entre em contato' })}
              </nav>
            </div>
          </header>
        </section>
      </div>
    </main>
  `;
}
