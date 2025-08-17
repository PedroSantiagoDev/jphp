import { Background } from "./background";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <Background />
      <div className="m-auto max-w-5xl">{children}</div>
    </div>
  );
}
