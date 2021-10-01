import { Flex, Text, Box } from "@chakra-ui/react";
interface TextBannerProps {
  title: string;
}

export function TextBanner({ title }: TextBannerProps) {
  return (
    <Flex height="100%" align="flex-end" ml={20}>
      <Text p="6" fontSize="3xl" fontWeight="normal" color="#F5F8FA">
        {title}
      </Text>
    </Flex>
  );
}
