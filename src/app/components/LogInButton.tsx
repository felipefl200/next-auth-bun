"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Icons } from "./Icons";
import { signIn } from "next-auth/react";

export function LogInButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="primary" variant="light">
        Entrar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Entrar</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <Icons.mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Entre com o email cadastrado"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <Icons.lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Senha"
                  placeholder="Informe sua senha"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Lembrar-me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Esqueceu a senha?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-content1 text-default-foreground">
                      Ou continue com
                    </span>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <Button
                    color="default"
                    variant="bordered"
                    startContent={<Icons.github className="w-6 h-6" />}
                  >
                    GitHub
                  </Button>
                  <Button
                    color="default"
                    variant="bordered"
                    startContent={<Icons.microsoft className="h-6 w-6" />}
                  >
                    Microsoft
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  onClick={() => signIn()}
                  color="primary"                  
                >
                  Entrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
