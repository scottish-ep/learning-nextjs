import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/Input/Input";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

export default function Form() {
  const { register, handleSubmit, reset, setValue, control } =
    useForm<IFormInputs>({
      defaultValues: {
        firstName: "5454",
        lastName: "",
      },
    });
  const onSubmit = (data: IFormInputs) => console.log(data);

  const stylesPage: any = {
    backgroundColor: "#0f111b",
    height: "100vh",
    color: "white",
  };

  return (
    <div style={stylesPage}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue=""
          placeholder="Type your name"
          register={register("firstName")}
        />
      </form>
    </div>
  );
}
