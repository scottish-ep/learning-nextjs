import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Home: NextPage = () => {
  const onSubmit = () => {
    console.log("submit");
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Input
        placeholder="opacity"
        label="Email"
        size="large"
        title="dwaawd"
        variant="filled"
        error="error"
        success="success"
        width={200}
        onSubmit={onSubmit}
      />
      <br />
      <br />
      <Button
        isLoading={isLoading}
        size="medium"
        width={200}
        text="Save"
        onClick={() => {
          setIsLoading(!isLoading);
          setOpen(true);
        }}
      />
      <Button
        size="medium"
        width={200}
        text="Open"
        onClick={() => {
          setIsLoading(!isLoading);
          setOpen(true);
        }}
      />
      <br />
      <br />
      <div className="flex flex-row items-center">
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Button>Save</Button>
      </div>
      <br />
      <br />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={() => setOpen(false)}
        style={{ backgroundColor: "rgba(46, 45, 61, 0.7)" }}
      >
        <h4>Testing Modal</h4>
        <div className="flex flex-row items-center">
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button>Save</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Home;
