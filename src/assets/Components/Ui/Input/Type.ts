import type { ChangeEvent } from "react";

export interface InputType {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  label: string;
  placeholder: string;
   error:string
}
