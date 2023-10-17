import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { LinuxLogo } from "./Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <LinuxLogo className="w-8 h-8" />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="#">
            NextAuth
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher suppressWord />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Entrar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Cadastrar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
