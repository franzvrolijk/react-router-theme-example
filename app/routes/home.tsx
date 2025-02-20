import { useContext } from "react";
import { ThemeContext } from "~/themeContext";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-background text-foreground">
      <p className="text-5xl">current theme: {theme}</p>
      <div className="m-4 flex gap-2">
        <ThemeChangeButton themeName="light" setTheme={setTheme} />
        <ThemeChangeButton themeName="dark" setTheme={setTheme} />
        <ThemeChangeButton themeName="system" setTheme={setTheme} />
      </div>
    </div>
  );
}

const ThemeChangeButton = ({ themeName, setTheme }: { themeName: string; setTheme: (theme: string) => void }) => {
  return (
    <button className="p-2 rounded bg-foreground text-background" onClick={() => setTheme(themeName)}>
      {themeName}
    </button>
  );
};
