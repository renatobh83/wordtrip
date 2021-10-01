import {
  Box,
  Grid,
  Image,
  Text,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
export function HomeComponent() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateColumns={isWideVersion ? "repeat(2,1fr)" : "repeat(1,1fr)"}
      gap="3"
      w="100%"
    >
      <Box pt="6" ml="4" px={[4, 6]}>
        <Text fontSize={["md", "2xl"]} fontWeight="500">
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text fontSize={["sm", "lg"]} mt="3">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && (
        <Flex justify="center">
          <Image
            src="/images/assets/Airplane.svg"
            objectFit="cover"
            h={["170", "200"]}
          />
        </Flex>
      )}
    </Grid>
  );
}
