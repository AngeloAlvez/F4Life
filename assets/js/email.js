
import { useState } from "react";

export default function App() {
  const [formOutput, setFormOutput] = useState("");
  const [display, setDisplay] = useState("none");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789.";

  const handleFormSubmission = (ev) => {
    ev.preventDefault();

    setDisplay("block");

    setMessage("");

    if (!email.includes("@"))
      return setFormOutput("Erro no envio: Endereço de mail inválido");

    const [user, domain] = email.split("@");

    if (user.length > 32)
      return setFormOutput("Erro no envio: Endereço de mail inválido");

    if (!domain.includes(".com"))
      return setFormOutput("Erro no envio: Endereço de mail inválido");

    const [firstPart, secondPart] = domain.split(".com");

    if (secondPart)
      return setFormOutput("Erro no envio: Endereço de mail inválido");

    if (firstPart.length > 16)
      return setFormOutput("Erro no envio: Endereço de mail inválido");

    for (let char of user) {
      if (!validCharacters.includes(char.toLowerCase()))
        return setFormOutput("Erro no envio: Endereço de mail inválido");
    }

    if (firstPart.includes("."))
      return setFormOutput("Erro no envio: Endereço de mail inválido");

    for (let char of firstPart) {
      if (!validCharacters.includes(char))
        return setFormOutput("Erro no envio: Endereço de mail inválido");
    }

    if (!message) return setFormOutput("Erro no envio: Insira uma mensagem");

    setFormOutput(`Obrigado pelo contato, ${user}!`);
  };
