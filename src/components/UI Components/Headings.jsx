import React from "react";
import { twMerge } from "tailwind-merge";

export const Heading = ({ children, className }) => {
  return (
    <h1
      className={twMerge(`text-3xl font-semibold py-5 text-center`, className)}
    >
      {children}
    </h1>
  );
};

export const CVHeading = ({ children, className }) => {
  return (
    <h1 className={twMerge(`text-2xl uppercase -tracking-tight`, className)}>
      {children}
    </h1>
  );
};

export const CVRole = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        `text-lg font-bold uppercase -tracking-tight`,
        className
      )}
    >
      {children}
    </h1>
  );
};

export const CVLocation = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        `text-sm  italic  -tracking-tight text-primaryRed font-bold`,
        className
      )}
    >
      {children}
    </h1>
  );
};

export const CVDate = ({ children, className }) => {
  return (
    <h1 className={twMerge(`text-sm  -tracking-tight`, className)}>
      {children}
    </h1>
  );
};
