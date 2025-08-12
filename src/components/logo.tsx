

interface LogoProps {
  name: string;
}

export function Logo({ name }: LogoProps) {
  const letters = name.split('');

  return (
    <a href="/" className="flex items-center gap-3 cursor-pointer">
      {/* Se você tiver uma imagem de logo, pode adicioná-la aqui */}
      {/* <img alt="JPHP logo" width="40" height="40" src="/logo.svg" /> */}
      <div className="overflow-hidden py-2 flex cursor-default">
        {letters.map((letter, index) => (
          <h1
            key={index}
            className="font-mono text-4xl font-bold cursor-pointer bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {letter}
          </h1>
        ))}
      </div>
    </a>
  );
}
