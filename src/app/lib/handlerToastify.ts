import { toast } from "react-toastify";

type Props = {
  type?: "info" | "success" | "warning" | "error" | "default";
  message: string;
  theme: "light" | "dark";
};

export function handlerToastify({ type = "default", message, theme }: Props) {
  return toast(message, {
    position: "bottom-right",
    type,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme === "dark" ? "dark" : "light",
  });
}
