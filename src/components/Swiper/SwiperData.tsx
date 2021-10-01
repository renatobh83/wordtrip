import { Box, Image, Avatar } from "@chakra-ui/react";

interface SwiperProps {
  city: string;
  avatar: string;
  country: string;
  img: string;
}
interface SwiperDataProps {
  property: SwiperProps[];
}

export function SwiperData({ property }: SwiperDataProps) {
  return (
    <>
      {property?.map((c) => (
        <Box maxW="lg" borderWidth="1px" overflow="hidden" key={c.city}>
          <>
            <Image src={c.img} alt="Imagem cidade" />
            <Box p="3">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {c.city}
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm" mr="auto">
                  {c.country}
                </Box>
                <Avatar name={c.city} src={c.avatar} size="sm" />
              </Box>
            </Box>
          </>
        </Box>
      ))}
    </>
  );
}
