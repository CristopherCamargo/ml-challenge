import "styled-components";

declare global {
  type Color = "primary" | "default" | "secondary" | "yellow";
  type Size = "small" | "medium" | "large";
  interface Colors {
    primary: string;
    secondary: string;
    yellow: string;
    default: string;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    input: {
      height: string;
      borderRadius: string;
      padding: string;
    };
    icon: {
      size: Record<Size, string>;
    };
    button: {
      size: Record<Size, string>;
      borderRadius: string;
    };
  }
}
