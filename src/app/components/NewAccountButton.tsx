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
import { Icons } from "./Icons";
import { useState } from "react";
import { useTheme } from "next-themes";
import { handlerToastify } from "../lib/handlerToastify";

// type UserData = {
//   name: string;
//   email: string;
//   password: string;
// };

export function NewAccountButton() {
  const { theme } = useTheme();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/usr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.status === 200) {
        setEmail("");
        setName("");
        setPassword("");
        onClose();
        setIsLoading(false);
        handlerToastify({
          message: "Usuário criado com sucesso 🚀",
          theme: theme === "dark" ? "dark" : "light",
          type: "success",
        });
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      handlerToastify({
        message: "Erro ao criar usuário",
        theme: theme === "dark" ? "dark" : "light",
        type: "error",
      });
    }
  };
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
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoFocus
                  endContent={
                    <Icons.user className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Seu nome"
                  placeholder="Informe seu nome"
                  variant="bordered"
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  endContent={
                    <Icons.mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Entre com o seu email"
                  variant="bordered"
                />
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  endContent={
                    <Icons.lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
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
                <Button
                  isLoading={isLoading}
                  onPress={() => onSubmit()}
                  color="primary"
                >
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
