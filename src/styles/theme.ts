import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#707d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "##F5F8FA",
      "50": "#72728e",
    },
  },
  fonts: {
    headings: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.50",
      },
    },
  },
});
