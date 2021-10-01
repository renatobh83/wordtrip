import { Box, Image, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BannerProps extends BoxProps {
  children: ReactNode;
  image: string;
}

export function Banner({ children, image, ...rest }: BannerProps) {
  return (
    <Box {...rest} maxwidth={1440} position="relative">
      <Image
        src={image}
        alt={image}
        position="absolute"
        right="0"
        {...rest}
        top="0"
        w="100%"
        objectFit="cover"
      />
      <Box position="absolute" w="100%" color="white" {...rest}>
        {children}
      </Box>
    </Box>
  );
}
