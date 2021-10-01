import React from "react";
import { GetServerSideProps } from "next";
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
import api from "../services/api";

export default function Home({ continents }: any) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Header />
      <Banner height={["143", "170"]} image="images/assets/background.svg">
        <HomeComponent />
      </Banner>
      <Flex justify="center" align="center" pt="8" mt="4" direction="column">
        {isWideVersion ? (
          <Image
            src="images/assets/Travel_types.svg"
            alt="Trave types"
            height="80px"
          />
        ) : (
          <Image
            src="images/assets/Travel_typesM.svg"
            alt="Trave types"
            height="90px"
          />
        )}

        <Divider w="40" my="9" />
        <Text fontSize={["md", "2xl"]}>Vamos nessa?</Text>
        <Text fontSize={["md", "2xl"]}>Então escolha seu continente</Text>
      </Flex>

      <SwiperComponent continents={continents} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("/continents/");
  console.log(data);
  return {
    props: {
      continents: data,
    },
  };
};
