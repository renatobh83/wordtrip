import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, EffectFade } from "swiper";
import { Image, Text, Box, Link as ChackraLink } from "@chakra-ui/react";
import dataApi from "./../../data.json";
import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
SwiperCore.use([Pagination, Navigation, EffectFade]);

interface DataProps {
  id: string;
  name: string;
  imgUrl: string;
  bannerImg: string;
  desc: string;
  info: string;
  numPaises: number;
  langs: number;
}
export function SwiperComponent() {
  const [continents, setContinents] = useState<DataProps[]>([] as DataProps[]);

  useEffect(() => {
    setContinents(dataApi);
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      effect={"fade"}
      navigation={true}
    >
      {continents?.map((d) => (
        <SwiperSlide key={d.id}>
          <Image
            src={d.bannerImg}
            my="3"
            w="1240"
            p={["0", "3"]}
            objectFit="cover"
            h={["200", "400"]}
          />
          <Box position="absolute" bottom={["40%", "50%"]}>
            <Text
              fontSize={["lg", "3xl"]}
              fontWeight="700"
              textAlign="center"
              color="white"
            >
              {d.name}
            </Text>{" "}
            <ChackraLink>
              <Link href={`/continent/${d.id}`}>
                <Text
                  color="white"
                  fontSize={["sm", "lg"]}
                  textAlign="center"
                  fontWeight="normal"
                >
                  {d.info}
                </Text>
              </Link>
            </ChackraLink>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
