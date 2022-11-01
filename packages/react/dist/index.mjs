// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
var {
  createTheme,
  css,
  globalCss,
  getCssText,
  theme,
  styled,
  keyframes
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/box/index.ts
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/text/index.ts
var Text = styled("p", {
  color: "$gray100",
  lineHeight: "$base",
  margin: 0,
  fontWeight: "$regular",
  fontFamily: "$default",
  variants: {
    fontSize: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    fontSize: "md"
  }
});
Text.displayName = "Text";

// src/components/heading/index.ts
var Heading = styled("h2", {
  color: "$gray100",
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  display: "inline-block",
  borderRadius: "$full",
  width: "$12",
  height: "$12",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/avatar/index.tsx
import { User } from "phosphor-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2({ ...props }) {
  return /* @__PURE__ */ jsxs(AvatarContainer, {
    children: [
      /* @__PURE__ */ jsx(AvatarImage, {
        ...props
      }),
      /* @__PURE__ */ jsx(AvatarFallback, {
        delayMs: 600,
        children: /* @__PURE__ */ jsx(User, {})
      })
    ]
  });
}
Avatar2.displayName = "Avatar";

// src/components/button/index.tsx
var Button = styled("button", {
  all: "unset",
  fontFamily: "$default",
  fontWeight: "$medium",
  fontSize: "$md",
  padding: "0 $4",
  minWidth: 120,
  boxSizing: "border-box",
  borderRadius: "$md",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    height: "$4",
    width: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",
        "&:hover:not(:disabled)": {
          backgroundColor: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "1px solid $ignite500",
        "&:hover:not(:disabled)": {
          backgroundColor: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:hover:not(:disabled)": {
          color: "$gray200"
        },
        "&:disabled": {
          color: "$gray200"
        }
      }
    },
    size: {
      sm: {
        height: 36
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/input/styles.ts
var InputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "baseline",
  borderRadius: "$sm",
  border: "2px solid transparent",
  "&:has(input:focus:not(:disabled))": {
    borderColor: "$ignite500"
  }
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray100",
  background: "transparent",
  border: 0,
  fontWeight: "$medium",
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400"
});

// src/components/input/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput({ prefix, ...props }) {
  return /* @__PURE__ */ jsxs2(InputContainer, {
    children: [
      !!prefix && /* @__PURE__ */ jsx2(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ jsx2(Input, {
        ...props
      })
    ]
  });
}
Input.displayName = "Input";

// src/components/textArea/index.ts
var TextArea = styled("textarea", {
  background: "$gray900",
  borderRadius: "$md",
  border: "2px solid transparent",
  color: "$gray100",
  fontWeight: "$regular",
  fontFamily: "$default",
  fontSize: "$sm",
  minHeight: 80,
  padding: "$3 $4",
  resize: "vertical",
  "&:focus": {
    outline: 0,
    borderColor: "$ignite500"
  },
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/checkBox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckBoxContainer = styled(Checkbox.Root, {
  height: "$6",
  width: "$6",
  borderRadius: "$xs",
  lineHeight: 0,
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid transparent",
  backgroundColor: "$gray900",
  padding: 0,
  "&:focus": {
    borderColor: "$ignite500"
  },
  "&[data-state='checked']": {
    backgroundColor: "$ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckBoxIndicator = styled(Checkbox.CheckboxIndicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  "&[data-state=checked]": {
    animation: `${slideIn} 200ms ease-out`
  },
  "&[data-state=unchecked]": {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/checkBox/index.tsx
import { Check } from "phosphor-react";
import { jsx as jsx3 } from "react/jsx-runtime";
function CheckBox(props) {
  return /* @__PURE__ */ jsx3(CheckBoxContainer, {
    ...props,
    children: /* @__PURE__ */ jsx3(CheckBoxIndicator, {
      asChild: true,
      children: /* @__PURE__ */ jsx3(Check, {
        weight: "bold"
      })
    })
  });
}
CheckBox.displayName = "CheckBox";

// src/components/multiSteps/styles.ts
var MultiStepsContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$2"
});
var Label = styled(Text, {
  color: "$gray100",
  fontWeight: "bold",
  defaultVariants: {
    fontSize: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gap: "$2",
  height: "$1",
  width: "100%",
  gridTemplateColumns: "repeat(var(--size-steps), 1fr)"
});
var Step = styled("div", {
  height: "$1",
  width: "100%",
  backgroundColor: "$gray600",
  borderRadius: "$full",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/multiSteps/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiSteps({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepsContainer, {
    children: [
      /* @__PURE__ */ jsxs3(Label, {
        children: [
          "Passo ",
          currentStep,
          " de ",
          size
        ]
      }),
      /* @__PURE__ */ jsx4(Steps, {
        css: { "--size-steps": size },
        children: Array(size).fill(0).map((_, i) => /* @__PURE__ */ jsx4(Step, {
          active: i + 1 <= currentStep
        }, i))
      })
    ]
  });
}
MultiSteps.displayName = "MultiSteps";
export {
  Avatar2 as Avatar,
  Box,
  Button,
  CheckBox,
  Heading,
  MultiSteps,
  Text,
  TextArea,
  TextInput
};
