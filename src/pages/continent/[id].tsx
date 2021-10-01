import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { useBreakpointValue } from "@chakra-ui/react";

import { ContinentIndex } from "../../components/Continent";

import data from "../../data.json";

interface ContinentProps {
  continent: {
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

export default function Continent({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const property = {
    imageUrl: "null",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return <ContinentIndex continent={continent} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((continent) => ({
    params: { id: continent.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const continent = data.find((continent) => continent.id === id);

  if (continent) {
    return {
      props: { continent },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
