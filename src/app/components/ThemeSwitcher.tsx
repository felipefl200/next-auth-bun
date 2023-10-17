"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Computer } from "./Icons";
import { type } from "os";

type ThemeSwitcherProps = {
  suppressWord?: Boolean;
};

export function ThemeSwitcher({ suppressWord = false }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isSelected, setIsSelected] = useState<Boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onChangeTheme = (isSelected: Boolean): void => {
    if (isSelected) {
      setTheme("dark");
      setIsSelected(true);
    } else {
      setTheme("light");
      setIsSelected(false);
    }
  };

  return (
    <Switch
      onValueChange={onChangeTheme}
      size="lg"
      color="warning"
      startContent={<Sun />}
      endContent={theme === "system" ? <Computer /> : <Moon />}
    >
      {!suppressWord && (
        <>
          {theme === "light" ? "Claro" : null}
          {theme === "dark" ? "Escuro" : null}
          {theme === "system" ? "Sistema" : null}
        </>
      )}
    </Switch>
  );
}
