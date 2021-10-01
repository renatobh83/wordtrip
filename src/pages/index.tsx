import React from "react";
import {
  Divider,
  Flex,
  Image,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

import { SwiperComponent } from "../components/Swiper";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { HomeComponent } from "../components/Home";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Header />
      <Banner height={["143", "170"]} image="images/assets/background.svg">
        <HomeComponent />
      </Banner>
      <Flex justify="center" align="center" pt="8" mt="4" direction="column">
        {isWideVersion ? (
          <Image src="images/assets/Travel_types.svg" height="80px" />
        ) : (
          <Image src="images/assets/Travel_typesM.svg" height="90px" />
        )}

        <Divider w="40" my="9" />
        <Text fontSize={["md", "2xl"]}>Vamos nessa?</Text>
        <Text fontSize={["md", "2xl"]}>Então escolha seu continente</Text>
      </Flex>

      <SwiperComponent />
    </>
  );
}
