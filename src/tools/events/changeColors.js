import { cssVarsAfter, cssVarsInit } from "../../constants";

export const changeColors = (initial) => {
  if (initial) {
    cssVarsInit.map(({ name, value }) => {
      console.log(value);
      return document.documentElement.style.setProperty(name, value);
    });
  } else if (!initial) {
    cssVarsAfter.map(({ name, value }) => {
      return document.documentElement.style.setProperty(name, value);
    });
  }
};
