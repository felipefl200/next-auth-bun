import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem 
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { NewAccountButton } from "./NewAccountButton";
import { LogInButton } from "./LogInButton";
import { Icons } from "./Icons";

export function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Icons.linuxLogo className="w-8 h-8" />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <p className="text-blue-500">NextAuth</p>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher suppressWord />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <LogInButton />
        </NavbarItem>
        <NavbarItem>
          <NewAccountButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
