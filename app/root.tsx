import "./app.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useFetcher, useLoaderData } from "react-router";
import { useTheme } from "react-router-theme";
import { ThemeContext } from "./themeContext";
export { loader, action } from "react-router-theme";

const defaultTheme = "system";

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useLoaderData() as { theme: string };
  const fetcher = useFetcher();

  const [theme, setTheme] = useTheme(loaderData, fetcher, defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html data-theme={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default function App() {
  return <Outlet />;
}
