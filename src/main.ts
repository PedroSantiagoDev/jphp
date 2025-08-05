import { GridBackground } from './grid-background';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">

    ${GridBackground()}
    
    <div class="mx-auto text-center">
      <div class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8">
        <img
          src="public//placeholder.svg"
          alt="João Pedro"
          class="rounded-full object-cover border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl w-full h-full"
        />
      </div>
      
      <h1
        class="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-3 sm:mb-4"
      >
        Hi, I'm Pedro <span class="inline-block">👋</span>
      </h1>

      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 leading-tight">
        software developer
      </h2>

      <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-1">
        who loves building things
      </p>

      <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
        for the web
      </p>

      <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 text-base sm:text-lg">
        <p class="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 sm:px-0 block">
          More about me</span>
        </p>
        <p class="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 sm:px-0 block">
          Get in touch
        </p>
        <p class="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-4 sm:px-0 block">
          Get in touch
        </p>
      </div>
    </div>

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
      About me<span className="text-blue-500">.</span>
    </h1>

  </div>
`
