"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { Lock, Mail } from "./Icons";

export function SignInButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="primary" variant="flat">
        Cadastrar
      </Button>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Novo usuário
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Seu nome"
                  placeholder="Informe seu nome"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Entre com o seu email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Senha"
                  placeholder="Informe sua senha"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-end">
                  <Link color="primary" href="#" size="sm">
                    Esqueceu a senha?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Cadastrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
