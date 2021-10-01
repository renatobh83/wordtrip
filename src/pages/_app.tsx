import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Theme } from "../styles/theme";
import "swiper/css/bundle";
import "./../styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
