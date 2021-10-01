import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { useBreakpointValue } from "@chakra-ui/react";

import { ContinentIndex } from "../../components/Continent";

import api from "../../services/api";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return <ContinentIndex continent={continent} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("/continents");
  const paths = data.map((continent) => ({
    params: { id: continent.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  let continent = null;
  try {
    const response = await api.get(`/continents/${id}`);
    continent = response.data;
    return {
      props: { continent },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
