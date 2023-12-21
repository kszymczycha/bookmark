"use client";
import React, { FC, useState, useEffect } from "react";
import styles from "./Form.module.scss";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { IconErrorSvg } from "@/components/Svgs";
import { decrementCounter } from "@/utils/decrement-counter.util";

const FROM: number = 35000;
const TO: number = 0;
const TIME: number = 20000;

const useFormComponentHook = (): any => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleEmailChange = (event: any) => {
    const inputEmail = event?.target?.value || "";
    setEmail(inputEmail);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
  };

  useEffect(() => {
    decrementCounter(".counter", FROM, TO, TIME);
  }, []);

  return { email, isValid, handleSubmit, handleEmailChange };
};

const FormComponent: FC<any> = () => {
  const { email, isValid, handleSubmit, handleEmailChange } =
    useFormComponentHook();

  return (
    <div className="bg-light-blue text-white pt-8 pb-8 mt-25">
      <div className="container pl-8 pr-8 flex flex-column items-center">
        <div className={`${styles["form-wrapper"]} pb-10`}>
          <p className="p text-center pt-10">
            <span className="counter">35,000</span>+ ALREDY JOINED
          </p>
          <h3 className="h1 text-center">
            Stay up-to-date with what we're doing
          </h3>

          <form
            onSubmit={handleSubmit}
            className={`${styles.form} flex flex-column`}
          >
            <div className={`${styles["input-wrapper"]} mb-2 mt-2 flex-grow-3`}>
              <div
                className={`${
                  !isValid ? styles["input-invalid"] : ""
                } bg-white b-radius-4 relative z-index-1 flex items-center`}
              >
                <input
                  type="text"
                  className={`${styles["email-input"]} pt-3 pr-3 pb-3 pl-3 w-100`}
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                {!isValid && (
                  <span className="mr-3 flex items-center">
                    <IconErrorSvg />
                  </span>
                )}
              </div>
              {!isValid && (
                <p className={styles.alert}>Whoops, make sure it's an email</p>
              )}
            </div>
            <div className="mb-2 mt-2 flex-grow-1">
              <ButtonComponent
                submit={true}
                size={ButtonSizeEnum.LG}
                color={ButtonColorEnum.SECONDARY}
              >
                Contact Us
              </ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { FormComponent };
