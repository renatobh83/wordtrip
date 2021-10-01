import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { SwiperData } from "../../components/Swiper/SwiperData";
import { DataForContinent } from "../../components/Continent/dataForContinent";
import { TextBanner } from "../Swiper/TextBanner";

interface ContinentProps {
  continent?: {
    id: string;
    name: string;
    imgUrl: string;
    desc: string;
    numPaises: number;
    langs: number;
    bannerImg: string;
    city: {
      city: string;
      avatar: string;
      country: string;
      img: string;
    }[];
  };
}

export function ContinentIndex({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Header isAcitve />
      <Banner image={continent.bannerImg} height="300">
        <TextBanner title={continent.name} />
      </Banner>
      <VStack
        width={["sm", "lg", "4xl"]}
        mx="auto"
        mt="10"
        mb="8"
        spacing="8"
        px="4"
      >
        <HStack
          width="100%"
          flexDirection={isWideVersion ? "row" : "column"}
          spacing={isWideVersion ? "8" : "0"}
        >
          <Box>
            <Text>{continent.desc}</Text>
          </Box>
          <Flex>
            <DataForContinent infoContinent={continent} />
          </Flex>
        </HStack>
        <Box width="100%">
          <Text fontWeight="700" fontSize="lg" mb="2">
            Cidades + 100
          </Text>

          <Grid
            templateColumns={isWideVersion ? "repeat(4,200px)" : "1fr"}
            gap="6"
          >
            <SwiperData property={continent.city} />
          </Grid>
        </Box>
      </VStack>
    </>
  );
}
