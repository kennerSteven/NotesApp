import { useState, type ChangeEvent, type MouseEvent } from "react";
import { handleError } from "./HandleError";

interface FormData {
  name: string;
  LastName: string;
  Adress: string;
  email: string;
}

interface FormErrors {
  name: string;
  LastName: string;
  Adress: string;
  email: string;
}

export default function useHandleInputs() {
  const [form, setForm] = useState<FormData>({
    name: "",
    LastName: "",
    Adress: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    LastName: "",
    Adress: "",
    email: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMsg = handleError(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("Data", form);
    console.log("Errors", errors);
  };

  return { form, errors, handleInput, onSubmit };
}
