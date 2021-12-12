const colorPrimary = getComputedStyle(
  document.documentElement
).getPropertyValue("--clr-dark-primary");

const colorSecondary = getComputedStyle(
  document.documentElement
).getPropertyValue("--clr-dark-secondary");

const colorTretiary = getComputedStyle(
  document.documentElement
).getPropertyValue("--clr-dark-tretiary");

const colorFont = getComputedStyle(document.documentElement).getPropertyValue(
  "--clr-dark-font"
);

const bodyUrlInit = getComputedStyle(document.documentElement).getPropertyValue(
  "--body-dark-ulr"
);

const bodyUrlAfter = getComputedStyle(
  document.documentElement
).getPropertyValue("--body-light-url");

const colorHover = getComputedStyle(document.documentElement).getPropertyValue(
  "--clr-hover"
);

const colorHoverAfter = getComputedStyle(
  document.documentElement
).getPropertyValue("--clr-hover-after");

// light theme Colors

export const cssVarsAfter = [
  {
    name: "--clr-dark-primary",
    value: colorFont,
  },
  {
    name: "--clr-dark-secondary",
    value: colorTretiary,
  },
  {
    name: "--clr-dark-font",
    value: colorPrimary,
  },
  {
    name: "--body-dark-ulr",
    value: bodyUrlAfter,
  },
  {
    name: "--clr-hover",
    value: colorHoverAfter,
  },
];

// dark theme colors

export const cssVarsInit = [
  {
    name: "--clr-dark-primary",
    value: colorPrimary,
  },
  {
    name: "--clr-dark-secondary",
    value: colorSecondary,
  },
  {
    name: "--clr-dark-font",
    value: colorFont,
  },
  {
    name: "--body-dark-ulr",
    value: bodyUrlInit,
  },
  {
    name: "--clr-hover",
    value: colorHover,
  },
];
