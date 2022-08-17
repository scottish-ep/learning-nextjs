import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

interface IFormInputs {
  firstName: string;
  lastName: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    setValue,
    watch,
    getValues,
    setFocus,
    getFieldState,
    setError,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "5454",
      lastName: "",
    },
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  const handleReset = () => {
    reset({
      firstName: "Reset",
    });
  };

  const handleResetField = () => {
    resetField("firstName", { defaultValue: "reset fields" });
  };

  const handleGetValues = () => {
    const values = getValues();
    console.log("values", values);
  };

  const handleGetFieldState = () => {
    const values = getFieldState("firstName");
    console.log("values", values);
  };

  const stylesPage: any = {
    backgroundColor: "#0f111b",
    height: "100vh",
    color: "white",
  };

  // useEffect(() => {
  //   if (!watch("firstName")) {
  //     setError(
  //       "firstName",
  //       { type: "message", message: "Please enter firstName" },
  //       { shouldFocus: true }
  //     );
  //   }
  // }, [watch("firstName")]);

  return (
    <div style={stylesPage}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register field for input  */}
        <Input
          width={300}
          defaultValue=""
          required
          placeholder="Type your name"
          register={register("firstName")}
        />
        {/* <p>{errors?.firstName}</p> */}
        <Input
          width={300}
          defaultValue=""
          placeholder="Type your name"
          register={register("lastName")}
          className="mt-[15px]"
        />
        {/* watch is used to catch changes value of input  */}
        <div className="flex items-center">
          <Button
            type="submit"
            disabled={!watch("firstName")}
            className="mt-[15px] mr-[5px]"
            width={150}
            text="Submit"
          />
          <Button
            className="mt-[15px] mr-[5px]"
            width={150}
            text="Clear"
            onClick={handleReset}
          />
          <Button
            className="mt-[15px] mr-[5px]"
            width={250}
            text="Clear firstName"
            onClick={handleResetField}
          />
          <Button
            className="mt-[15px] mr-[5px]"
            width={250}
            text="Set value lastName"
            onClick={() => setValue("lastName", "set lastName")}
          />
        </div>
        <div className="flex items-center mt-[20px]">
          <Button
            className="mt-[15px] mr-[5px]"
            width={250}
            text="getValues"
            onClick={handleGetValues}
          />
          {/* <Button
            className="mt-[15px] mr-[5px]"
            width={250}
            text="get value field firstName"
            onClick={handleGetFieldState}
          /> */}
          <Button
            className="mt-[15px] mr-[5px]"
            width={250}
            text="set focus to firstName"
            onClick={() => setFocus("firstName")}
          />
        </div>
      </form>
    </div>
  );
}
