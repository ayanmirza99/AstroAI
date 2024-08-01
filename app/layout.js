import Sidebar from "./components/Sidebar";
import { GlobalContextProvider } from "./context/context";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex h-screen w-full relative overflow-x-hidden"
        suppressHydrationWarning
      >
        <GlobalContextProvider>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Sidebar />
            {children}
          </ThemeProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
