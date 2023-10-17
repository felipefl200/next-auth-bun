import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem 
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SignInButton } from "./SignInButton";
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
          <SignInButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
