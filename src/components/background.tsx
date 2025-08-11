import { useTheme } from "./theme-provider";

export function Background() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 opacity-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${
            theme === "dark" ? "white" : "black"
          } 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
