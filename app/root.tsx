import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/main.css?url";
import MainNavigation from "./routes/components/MainNavigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  );
}

export default function App() {
  return <>
    <header>
      <MainNavigation />
    </header>
    <Outlet />
  </>;
}

interface LinkType {
  rel: string;
  href: string;
}

export function links(): LinkType[] {
  return [{ rel: "stylesheet", href: styles }];
}