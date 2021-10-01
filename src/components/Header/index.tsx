import {
  Box,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  Link as ChackraLink,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

interface HeaderProps {
  isAcitve?: boolean;
}
export function Header({ isAcitve = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h={[50, 90]}
      mx="auto"
      px="6"
      align="center"
      justify="center "
      position="relative"
    >
      {isAcitve ? (
        <ChackraLink>
          <Link href="/" passHref>
            <Icon
              as={FaAngleLeft}
              fontSize="lg"
              fontWeight="normal"
              position="absolute"
              left="6"
            />
          </Link>
        </ChackraLink>
      ) : (
        <Box></Box>
      )}
      <Box>
        <Image src="/logo.svg" alt="log" h={["20px", "50px"]} />
      </Box>
    </Flex>
  );
}
