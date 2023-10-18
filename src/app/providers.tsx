"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" enableSystem>
          {children}
          <ToastContainer />
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
