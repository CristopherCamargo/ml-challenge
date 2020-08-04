import { DefaultTheme } from "styled-components";

const MLTheme: DefaultTheme = {
  colors: {
    primary: "#3483fa",
    secondary: "",
    yellow: "#ffe600",
    default: "gray",
    gray: "#eee"
  },
  input: {
    height: "32px",
    borderRadius: "5px",
    padding: "10px"
  },
  icon: {
    size: {
      small: "14px",
      medium: "40px",
      large: "60px"
    }
  },
  button: {
    size: {
      small: "22px",
      medium: "34px",
      large: "60px"
    },
    sizeMobile: {
      small: "44px",
      medium: "68px",
      large: "120px"
    },
    borderRadius: "5px"
  },
  error: {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb"
  }
};

export default MLTheme;
