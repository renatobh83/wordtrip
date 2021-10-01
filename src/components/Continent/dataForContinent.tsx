import { VStack, Text, Image, Box, Tooltip } from "@chakra-ui/react";
interface cityProps {
  city: string;
  avatar: string;
  country: string;
  img: string;
}
interface DataForContinentProps {
  infoContinent: {
    numPaises: number;
    langs: number;
    city: cityProps[];
  };
}
export function DataForContinent({ infoContinent }: DataForContinentProps) {
  return (
    <>
      <VStack p="4">
        <Text fontSize={["2xl", "4xl"]} color="#FFBA08" fontWeight="700">
          {infoContinent.numPaises}
        </Text>
        <Text fontSize={["sm", "lg"]} fontWeight="normal">
          Países
        </Text>
      </VStack>
      <VStack p="4">
        <Text fontSize={["2xl", "4xl"]} color="#FFBA08" fontWeight="700">
          {infoContinent.langs}
        </Text>
        <Text fontSize={["sm", "lg"]} fontWeight="normal">
          Linguas
        </Text>
      </VStack>
      <VStack p="4">
        <Text fontSize={["2xl", "4xl"]} color="#FFBA08" fontWeight="700">
          {infoContinent.city.length}
        </Text>
        <Box d="flex" align="center">
          <Text mr="10px">Cidades +100</Text>
          <Tooltip
            label="Cidades entre as 100 + visitadas"
            aria-label="A tooltip"
          >
            <Image src="/images/assets/info.svg" alt="Info" />
          </Tooltip>
        </Box>
      </VStack>
    </>
  );
}
